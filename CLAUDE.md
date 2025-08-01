# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm start` - Launch the application in development mode with DevTools
- `npm run lint` - Run ESLint on TypeScript/TSX files

### Building & Distribution
- `npm run package` - Package the application for distribution
- `npm run make` - Create distributable packages (installers/archives)
- `npm run publish` - Publish the application

## Architecture Overview

This is an Electron application with a React frontend that serves as a simple image browser. Understanding the multi-process architecture is crucial:

### Process Architecture

**Main Process** (`src/main.ts`):
- Manages application lifecycle and window creation
- Registers custom protocol handlers for secure image loading
- Sets up IPC handlers for filesystem operations
- The custom `image-browser://` protocol is registered here for secure file access

**Preload Script** (`src/preload.ts`):
- Bridges the gap between main and renderer processes
- Exposes a secure `window.fs.getImagesInFolder()` API using contextBridge
- This is the only way the renderer can access filesystem operations

**Renderer Process** (`src/renderer.tsx` and React components):
- React application with Material-UI dark theme
- Components communicate with main process through the preload-exposed APIs
- Never directly accesses Node.js APIs for security

### IPC Communication Pattern

The IPC architecture is modular and type-safe:

1. **Channel definitions** in `src/ipc/channels.ts` - Define channel names as constants
2. **Handler implementations** in `src/ipc/fs.ts` - Implement the actual functionality
3. **Registration** in `src/ipc/index.ts` - Connect channels to handlers
4. **Type definitions** in `src/types/window.d.ts` - Ensure TypeScript knows about exposed APIs

When adding new IPC functionality:
- Add channel name to `channels.ts`
- Implement handler in appropriate file under `src/ipc/`
- Register in `src/ipc/index.ts`
- Expose through preload script if needed for renderer
- Add TypeScript definitions to `window.d.ts`

### Key Technologies

- **Electron v37.2.5** with Electron Forge toolchain
- **React v19.1.1** with TypeScript
- **Material-UI v7.2.0** for UI components
- **Vite** for fast builds and HMR
- **Custom protocol handling** for secure local file access

### Important Implementation Details

1. **Image Loading**: Uses custom `image-browser://` protocol instead of direct file:// URLs for security
2. **Supported Formats**: jpg, jpeg, png, gif, webp, svg (defined in `src/ipc/fs.ts`)
3. **Build Configuration**: Separate Vite configs for main, preload, and renderer processes
4. **Security**: Fuses enabled, context isolation active, custom protocol with CSP bypass

### Development Tips

- Always run `npm run lint` before committing to catch TypeScript and ESLint issues
- The application opens DevTools automatically in development mode
- Drag-and-drop functionality is the primary user interaction - test with various folder structures
- Custom protocol URLs are in the format: `image-browser://get-file/absolute/path/to/image.jpg`
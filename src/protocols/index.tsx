import { net, protocol } from "electron";

export const imageBrowserProtocolName = "image-browser";

export function registerPriviledgedSchemes() {
  protocol.registerSchemesAsPrivileged([{ scheme: imageBrowserProtocolName, privileges: { bypassCSP: true, secure: true, supportFetchAPI: true,standard: true } }]);
}

export function registerProtocolHandlers() {
  protocol.handle(imageBrowserProtocolName, async (request) => {
    if(process.platform === "win32") {
      return handleWindowsFileProtocol(request);
    } 
    const url = request.url.replace(`${imageBrowserProtocolName}://`, "file://");
    return net.fetch(url);
  });
}

function handleWindowsFileProtocol(request: Request) {
  const base = request.url.replace(`${imageBrowserProtocolName}://`, "");
  const [drive, ...rest] = base.split("/");
  const newBase = `${drive}:/${rest.join("/")}`;
  const url = `file://${newBase}`;
  return net.fetch(url);
}


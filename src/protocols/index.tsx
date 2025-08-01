import { net, protocol } from "electron";

export const imageBrowserProtocolName = "image-browser";

export function registerPriviledgedSchemes() {
  protocol.registerSchemesAsPrivileged([{ scheme: imageBrowserProtocolName, privileges: { bypassCSP: true } }]);
}

export function registerProtocolHandlers() {
  protocol.handle(imageBrowserProtocolName, async (request) => {
    const url = request.url.replace(`${imageBrowserProtocolName}://`, "file://");
    return net.fetch(url);
  });
}

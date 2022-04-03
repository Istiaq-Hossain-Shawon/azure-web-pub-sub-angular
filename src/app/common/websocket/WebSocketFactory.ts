import { IWebSocket } from "./IWebSocket";
import { WebPubSub } from "./WebPubSub";

export default class WebSocketFactory {
    static getSocket(socket: string): IWebSocket {
        if (socket == 'azure') {
            return new WebPubSub();
        }else {
            return new WebPubSub();
        }
    }
}
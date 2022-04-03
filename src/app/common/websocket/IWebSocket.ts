import { Observable } from "rxjs";

export interface IWebSocket {
    getStatus(): Observable<any>;
    publishStatus(information:object):any;
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import WebSocketFactory from '../common/websocket/WebSocketFactory';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  public async publishStatus(data: object) {
    WebSocketFactory.getSocket("azure").publishStatus(data);
  }
  
  public  connection() :Observable<any>{
    return WebSocketFactory.getSocket("azure").getStatus();
  }
}
import { Injectable } from "@angular/core";
import { WebPubSubServiceClient } from "@azure/web-pubsub";
import { Observable } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { WebPubSubConstants } from "src/app/common/webpubsub-constants";
import { IWebSocket } from "./IWebSocket";

@Injectable()
export class WebPubSub implements IWebSocket {
  getStatus(): Observable<any> {

    var observable = new Observable<any>((subcriber) => {
      this.GetURl().then(value => {
        var subject = webSocket(value)
        subject.subscribe(
          msg => subcriber.next(msg),
          err => console.log(err),
          () => console.log('complete')
        );
      })
    })

    return observable;


  }
  async publishStatus(information: any) {
    const serviceClient = new WebPubSubServiceClient(WebPubSubConstants.connectionStringAzureWebPubSub, WebPubSubConstants.hubAzureWebPubSub);
    await serviceClient.sendToAll(information);
  }
  private async GetURl(): Promise<string> {
    const service = new WebPubSubServiceClient(WebPubSubConstants.connectionStringAzureWebPubSub, WebPubSubConstants.hubAzureWebPubSub);
    let token = await service.getClientAccessToken();
    return token.url;
  }

}
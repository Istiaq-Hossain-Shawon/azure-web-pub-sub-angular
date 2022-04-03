import { Component } from '@angular/core';
import { WebPubSubServiceClient } from '@azure/web-pubsub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  serviceClient = new 
  WebPubSubServiceClient("Endpoint=https://webpubsubdemo.webpubsub.azure.com;AccessKey=+Xg8OsmnI8tf4iU6u5DqS8qOhdwZ5nU/bfbp4/3jIHo=;Version=1.0;", 
  "Hub");

  ngOnInit(): void {
    // this.serviceClient.sendToAll({ message: "Hello world!" });
  }
}

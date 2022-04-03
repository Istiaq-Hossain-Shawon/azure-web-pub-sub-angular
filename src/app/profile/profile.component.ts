import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebPubSubServiceClient } from '@azure/web-pubsub';
import { NotificationService } from '../services/notification-service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  endpoint = "Endpoint=https://webpubsubdemo.webpubsub.azure.com;AccessKey=+Xg8OsmnI8tf4iU6u5DqS8qOhdwZ5nU/bfbp4/3jIHo=;Version=1.0;"

  constructor(private notificationService:NotificationService,private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    var userInfo=localStorage.getItem("USER_EMAIL");
    console.log(userInfo);
    this.notificationService.publishStatus({ mail: userInfo,status:"In-Active"});
    // const serviceClient = new WebPubSubServiceClient(this.endpoint, "Hub");

    // serviceClient.sendToAll({ mail: userInfo,status:"In-Active"});
    this.router.navigate(["/login"]);

  }

}

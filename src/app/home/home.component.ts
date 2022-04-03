import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.Connection()
      .subscribe((msg) => {
        console.log(msg);
      });
  }

}

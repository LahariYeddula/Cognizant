import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

// Step 67: Component-level provider creates a unique isolated instance for this component subtree
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  template: `
    <div class="notification-box">
      <h5>Notification Center (Scoped Instance #{{ instanceId }})</h5>
      <button (click)="sendTestNotification()">Send Scoped Alert</button>
      <ul>
        <li *ngFor="let note of notifications">{{ note }}</li>
      </ul>
    </div>
  `,
  styles: [`
    .notification-box {
      border: 1px dashed #3498db;
      padding: 10px;
      margin-top: 10px;
      border-radius: 4px;
    }
  `]
})
export class NotificationComponent implements OnInit {
  instanceId: number = 0;
  notifications: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.instanceId = this.notificationService.getInstanceId();
    this.notifications = this.notificationService.getNotifications();
  }

  sendTestNotification(): void {
    this.notificationService.notify(`Alert triggered at ${new Date().toLocaleTimeString()}`);
    this.notifications = this.notificationService.getNotifications();
  }
}

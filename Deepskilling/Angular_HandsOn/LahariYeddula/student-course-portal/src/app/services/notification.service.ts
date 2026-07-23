import { Injectable } from '@angular/core';

// Step 67: Service designed for component-level providers: [NotificationService]
// This creates a dedicated instance scoped specifically to that component subtree.
@Injectable()
export class NotificationService {
  private instanceId = Math.floor(Math.random() * 10000);
  private notifications: string[] = [];

  constructor() {
    console.log(`NotificationService instance #${this.instanceId} created.`);
  }

  getInstanceId(): number {
    return this.instanceId;
  }

  notify(message: string): void {
    this.notifications.push(message);
    console.log(`[Instance #${this.instanceId}] Notification: ${message}`);
  }

  getNotifications(): string[] {
    return [...this.notifications];
  }
}

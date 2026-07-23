import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  template: `
    <div class="profile-container">
      <h2>Student Profile</h2>
      <div class="profile-card">
        <div class="avatar">LY</div>
        <div class="info">
          <h3>Lahari Yeddula</h3>
          <p><strong>Email:</strong> lahari&#64;example.com</p>
          <p><strong>Department:</strong> .NET Full Stack Engineering</p>
          <p><strong>Program:</strong> Digital Nurture 5.0</p>
        </div>
      </div>

      <!-- Step 66: Display enrolled courses using EnrollmentService -->
      <h3>Enrolled Courses</h3>
      <div *ngIf="enrolledCourses.length > 0; else noEnrolled" class="enrolled-list">
        <div *ngFor="let course of enrolledCourses" class="enrolled-item">
          <h4>{{ course.name }} ({{ course.code }})</h4>
          <p>{{ course.credits | creditLabel }} | Grade: {{ course.gradeStatus | titlecase }}</p>
        </div>
      </div>

      <ng-template #noEnrolled>
        <p class="empty-msg">You have not enrolled in any courses yet.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .profile-container { max-width: 800px; margin: 2rem auto; padding: 0 1.5rem; }
    .profile-card { display: flex; align-items: center; gap: 1.5rem; background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-bottom: 2rem; }
    .avatar { width: 64px; height: 64px; border-radius: 50%; background: #3498db; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; }
    .enrolled-item { background: #fff; padding: 1rem; border-radius: 6px; margin-bottom: 1rem; border-left: 4px solid #2ecc71; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .empty-msg { color: #888; }
  `]
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.enrolledCourses = this.enrollmentService.getEnrolledCourses();
  }
}

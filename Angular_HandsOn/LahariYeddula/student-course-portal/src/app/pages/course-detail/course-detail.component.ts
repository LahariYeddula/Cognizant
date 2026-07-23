import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditLabelPipe],
  template: `
    <div class="detail-container">
      <a routerLink="/courses" class="back-link">&larr; Back to Courses</a>
      <div *ngIf="course; else notFound" class="detail-card">
        <h2>{{ course.name }}</h2>
        <p class="code">Course Code: {{ course.code }}</p>
        <p class="credits">Credits: {{ course.credits | creditLabel }}</p>
        <p class="status">Grade Status: <span [class]="'badge-' + course.gradeStatus">{{ course.gradeStatus | titlecase }}</span></p>
        <p class="description">
          Detailed syllabus and curriculum information for {{ course.name }}. This course equips students with foundational and advanced principles.
        </p>
      </div>

      <ng-template #notFound>
        <div class="error-box">
          <h3>Course Not Found</h3>
          <p>No course found matching the requested ID.</p>
        </div>
      </ng-template>
    </div>
  `,
  styles: [`
    .detail-container { max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    .back-link { text-decoration: none; color: #3498db; font-weight: 600; display: inline-block; margin-bottom: 1rem; }
    .detail-card { background: #ffffff; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .badge-passed { color: #2ecc71; font-weight: bold; }
    .badge-failed { color: #e74c3c; font-weight: bold; }
    .badge-pending { color: #f39c12; font-weight: bold; }
  `]
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  // Step 69: Read route parameter :id using ActivatedRoute snapshot paramMap
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const courseId = Number(idParam);
      this.course = this.courseService.getCourseByIdSync(courseId);
    }
  }
}

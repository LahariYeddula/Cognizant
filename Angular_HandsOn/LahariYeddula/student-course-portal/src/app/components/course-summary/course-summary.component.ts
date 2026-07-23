import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="summary-widget">
      <h4>Course Summary Widget</h4>
      <p>Shared Service Total Courses: <strong>{{ courseCount }}</strong></p>
    </div>
  `,
  styles: [`
    .summary-widget {
      background: #eef2f7;
      padding: 1rem;
      border-radius: 6px;
      margin: 1rem 0;
      border: 1px solid #dcdfe6;
    }
  `]
})
export class CourseSummaryComponent implements OnInit {
  courseCount: number = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseCount = this.courseService.getCoursesSync().length;
  }
}

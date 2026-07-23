import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { CourseSummaryComponent } from '../../components/course-summary/course-summary.component';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseSummaryComponent, NotificationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Step 11: TypeScript property for interpolation
  portalName: string = 'Student Course Portal';

  // Step 12: Property binding for button disabled state
  isPortalActive: boolean = true;

  // Step 13: Event binding target message
  message: string = '';

  // Step 14: Two-way binding variable with ngModel
  searchTerm: string = '';

  availableCoursesCount: number = 12;
  enrolledCount: number = 3;
  gpa: number = 3.8;

  constructor(private courseService: CourseService) {}

  // Step 16: Implement ngOnInit lifecycle hook
  ngOnInit(): void {
    const liveCourses = this.courseService.getCoursesSync();
    this.availableCoursesCount = liveCourses.length;
    console.log('HomeComponent initialised — courses loaded');
  }

  // Step 17: Implement ngOnDestroy lifecycle hook
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Step 13: Event binding handler
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  /*
   * Step 15 Explanation of Data Binding Differences:
   * -------------------------------------------------------------------------------------
   * [property] binding is ONE-WAY (Component -> DOM).
   * Changes in component class update the DOM element property, but user edits in DOM
   * do NOT flow back into the component class automatically.
   *
   * [(ngModel)] binding is TWO-WAY (DOM <-> Component).
   * It combines property binding [ngModel]="prop" and event binding (ngModelChange)="prop=$event".
   * User interaction in input field immediately updates the component property, and class
   * property changes reflect in the DOM in real time.
   * -------------------------------------------------------------------------------------
   */
}

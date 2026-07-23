import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import * as CourseActions from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';
import * as EnrollmentActions from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // Step 25: Loading spinner flag
  isLoading: boolean = true;
  errorMessage: string | null = null;
  selectedCourseId: number | null = null;

  // Step 96: NgRx Store Observables
  courses$: Observable<Course[]> = of([]);
  loading$: Observable<boolean> = of(false);
  error$: Observable<string | null> = of(null);
  enrolledIds$: Observable<number[]> = of([]);

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    // Step 25: Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

    // Step 71: Read query parameters
    const searchParam = this.route.snapshot.queryParamMap.get('search');
    if (searchParam) {
      console.log('Searching courses with query param:', searchParam);
    }

    // Step 96: Dispatch NgRx action and select store slices
    this.store.dispatch(CourseActions.loadCourses());
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  // Step 26: trackBy function for performance optimization
  /*
   * trackBy allows Angular to identify which items in an *ngFor array have changed,
   * been added, or removed. Without trackBy, Angular re-creates all DOM elements on array changes.
   * With trackBy returning a unique id, Angular only updates DOM nodes for changed items.
   */
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  // Step 23 & 100: Enroll button click handler
  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
    console.log('Enrolling in course: ' + courseId);

    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
      this.store.dispatch(EnrollmentActions.unenrollFromCourse({ courseId }));
    } else {
      this.enrollmentService.enroll(courseId);
      this.store.dispatch(EnrollmentActions.enrollInCourse({ courseId }));
    }
  }

  // Step 70: Card click navigation to detail view
  navigateToDetail(courseId: number): void {
    this.router.navigate(['/courses', courseId]);
  }
}

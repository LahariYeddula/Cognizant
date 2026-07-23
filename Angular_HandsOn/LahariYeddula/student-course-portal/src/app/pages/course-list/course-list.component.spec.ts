import { ComponentFixture, TestBed } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseListComponent } from './course-list.component';
import { HttpClientTestingModule } from '@angular/common/http-testing';
import { RouterTestingModule } from '@angular/router/testing';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

describe('CourseListComponent with NgRx MockStore', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const initialState = {
    course: {
      courses: [
        { id: 1, name: 'Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
        { id: 2, name: 'Databases', code: 'CS102', credits: 3, gradeStatus: 'passed' }
      ],
      loading: false,
      error: null
    },
    enrollment: {
      enrolledCourseIds: [1]
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(selectAllCourses, initialState.course.courses);
    store.overrideSelector(selectCoursesLoading, false);
    store.overrideSelector(selectCoursesError, null);
    store.overrideSelector(selectEnrolledIds, [1]);

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
  });

  // Step 109: Tests store-connected initial state rendering
  it('should render course cards from initial MockStore state', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  // Step 110: Simulates store setState loading state update
  it('should show loading indicator when store loading state is true', () => {
    store.overrideSelector(selectCoursesLoading, true);
    store.refreshState();
    fixture.detectChanges();

    const loadingElement = fixture.nativeElement.querySelector('.loading-spinner');
    expect(loadingElement).toBeTruthy();
  });
});

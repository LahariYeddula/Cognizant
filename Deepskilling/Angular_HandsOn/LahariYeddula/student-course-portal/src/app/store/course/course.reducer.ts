import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import * as CourseActions from './course.actions';

// Step 94: CourseState interface and reducer handling actions immutably
export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Database Management Systems', code: 'CS102', credits: 3, gradeStatus: 'passed' },
    { id: 3, name: 'Web Application Development', code: 'CS103', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'Operating Systems', code: 'CS104', credits: 3, gradeStatus: 'failed' },
    { id: 5, name: 'Software Engineering Principles', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ],
  loading: false,
  error: null
};

export const courseReducer = createReducer(
  initialCourseState,
  on(CourseActions.loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null
  })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(CourseActions.addCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course]
  }))
);

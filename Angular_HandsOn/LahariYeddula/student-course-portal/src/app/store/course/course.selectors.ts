import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

// Step 95: Memoised selectors for Course feature state
export const selectCourseState = createFeatureSelector<CourseState>('course');

export const selectAllCourses = createSelector(
  selectCourseState,
  (state: CourseState) => state?.courses || []
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  (state: CourseState) => state?.loading || false
);

export const selectCoursesError = createSelector(
  selectCourseState,
  (state: CourseState) => state?.error || null
);

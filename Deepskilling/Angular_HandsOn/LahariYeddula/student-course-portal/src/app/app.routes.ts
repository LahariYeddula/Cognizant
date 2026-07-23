import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment/reactive-enrollment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

// Step 68, 72, 73, 76, 77: Route hierarchy with lazy loading, guards & wildcard route
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'enroll', component: EnrollmentFormComponent },
  {
    path: 'enroll-reactive',
    component: ReactiveEnrollmentFormComponent,
    canDeactivate: [unsavedChangesGuard]
  },
  {
    path: 'profile',
    component: StudentProfileComponent,
    canActivate: [authGuard]
  },
  // Step 68: Wildcard 404 route must be placed LAST
  { path: '**', component: NotFoundComponent }
];

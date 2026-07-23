import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  private initialCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Database Management Systems', code: 'CS102', credits: 3, gradeStatus: 'passed' },
    { id: 3, name: 'Web Application Development', code: 'CS103', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'Operating Systems', code: 'CS104', credits: 3, gradeStatus: 'failed' },
    { id: 5, name: 'Software Engineering Principles', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ];

  constructor(private http: HttpClient) {}

  // Step 58 & 79: Synchronous/Mock fallback and HTTP GET with RxJS operators (map, tap, catchError, retry)
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Step 86: Retry failed requests up to 2 times
      retry(2),
      // Step 83: Filter courses with credits > 0 using map operator
      map((courses: Course[]) => courses.filter(c => c.credits > 0)),
      // Step 85: tap for side effect logging (tap does not modify data stream)
      tap(courses => console.log('Courses loaded via CourseService:', courses.length)),
      // Step 84: Graceful error handling with catchError
      catchError(err => {
        console.error('CourseService HTTP Error:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  // Synchronous getter fallback for Hands-On 6 components
  getCoursesSync(): Course[] {
    return this.initialCourses;
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => throwError(() => new Error(`Course with ID ${id} not found.`)))
    );
  }

  getCourseByIdSync(id: number): Course | undefined {
    return this.initialCourses.find(c => c.id === id);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      tap(newCourse => {
        this.initialCourses.push(newCourse as Course);
      }),
      catchError(err => throwError(() => new Error('Failed to add course.')))
    );
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

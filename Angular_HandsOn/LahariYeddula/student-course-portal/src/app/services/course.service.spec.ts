import { TestBed } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http-testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService with HttpClientTestingModule', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Databases', code: 'CS102', credits: 3, gradeStatus: 'passed' }
  ];

  // Step 106: Configure TestBed with HttpClientTestingModule
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Step 107: Assert no unexpected outstanding HTTP requests were made
    httpMock.verify();
  });

  // Step 107: Tests getCourses() GET request and payload matching
  it('should fetch all courses via HTTP GET', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Step 108: Tests HTTP 500 error handling
  it('should propagate error message when HTTP GET fails with 500 status', () => {
    service.getCourses().subscribe({
      next: () => fail('Expected request to fail with error'),
      error: err => {
        expect(err.message).toContain('Failed to load courses');
      }
    });

    // Flushes error across retry attempts (2 retries + 1 initial = 3 calls)
    const reqs = httpMock.match('http://localhost:3000/courses');
    reqs.forEach(req => req.flush('Internal Server Error', { status: 500, statusText: 'Server Error' }));
  });
});

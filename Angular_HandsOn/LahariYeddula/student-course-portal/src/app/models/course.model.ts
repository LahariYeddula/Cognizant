export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}

export interface EnrollmentRequest {
  id?: number;
  studentName: string;
  studentEmail: string;
  courseId: number;
  preferredSemester: 'Odd' | 'Even';
  agreeToTerms: boolean;
  additionalCourses?: string[];
}

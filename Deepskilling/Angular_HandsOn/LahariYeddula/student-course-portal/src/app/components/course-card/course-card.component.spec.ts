import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Step 102: Verifies component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: Verifies @Input rendering
  it('should render course name in h3 tag when @Input course is set', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const h3Element = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3Element.textContent).toContain('Data Structures');
  });

  // Step 104: Verifies @Output event emission
  it('should emit enrollRequested event with course id when Enroll button is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    spyOn(component.enrollRequested, 'emit');

    const enrollBtn = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    enrollBtn.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Step 105: Verifies ngOnChanges behavior
  it('should log changes when ngOnChanges is invoked', () => {
    spyOn(console, 'log');

    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });

    expect(console.log).toHaveBeenCalled();
  });
});

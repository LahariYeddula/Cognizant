import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  // Step 20: @Input() course property
  @Input() course: Course = {
    id: 0,
    name: 'Sample Course',
    code: 'CS000',
    credits: 3,
    gradeStatus: 'pending'
  };

  @Input() isEnrolled: boolean = false;

  // Step 21: @Output() enrollRequested event emitter
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;

  // Step 18: Implement ngOnChanges to log previous and current values
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const prev = changes['course'].previousValue;
      const curr = changes['course'].currentValue;
      console.log('CourseCardComponent ngOnChanges:', { previous: prev, current: curr });
    }
  }

  // Step 32: Getter for cardClasses object binding (keeps template clean)
  get cardClasses(): { [key: string]: boolean } {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  // Step 30: Dynamic border color via ngStyle helper
  get borderLeftColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed': return '#2ecc71'; // green
      case 'failed': return '#e74c3c'; // red
      case 'pending': return '#95a5a6'; // grey
      default: return '#cccccc';
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}

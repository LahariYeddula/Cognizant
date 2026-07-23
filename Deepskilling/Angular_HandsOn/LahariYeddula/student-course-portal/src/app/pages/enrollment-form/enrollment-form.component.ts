import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  // Step 39: Form data model
  formData = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  // Step 46: Submitted state flag
  isSubmitted: boolean = false;

  // Step 40: Submit handler receiving NgForm instance
  onSubmit(form: NgForm): void {
    console.log('Template-Driven Form Value:', form.value);
    console.log('Template-Driven Form Valid:', form.valid);

    if (form.valid) {
      this.isSubmitted = true;
    }
  }

  // Step 47: Reset handler calling form.resetForm()
  onReset(form: NgForm): void {
    form.resetForm({
      preferredSemester: 'Odd',
      agreeToTerms: false
    });
    this.isSubmitted = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment.component.html',
  styleUrls: ['./reactive-enrollment.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Step 49: Form definition using FormBuilder
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      // Step 55: Async validator simulateEmailCheck as 3rd argument
      studentEmail: ['', [Validators.required, Validators.email], [this.simulateEmailCheck]],
      // Step 53: Custom sync validator noCourseCode
      courseId: ['', [Validators.required, this.noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      // Step 49 Hint: Validators.requiredTrue specifically for checkbox
      agreeToTerms: [false, Validators.requiredTrue],
      // Step 56: FormArray for dynamic repeating controls
      additionalCourses: this.fb.array([])
    });
  }

  // Step 57: Typed getter for FormArray (better readability than casting inside template)
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Step 53: Custom synchronous validator
  noCourseCode(control: AbstractControl): ValidationErrors | null {
    const val = String(control.value || '').trim();
    if (val.toUpperCase().startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }

  // Step 55: Custom asynchronous validator returning a Promise
  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }

  addCourseControl(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourseControl(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Step 51 & 52: Form submission handling and raw vs form value comparison
  onSubmit(): void {
    console.log('Reactive Form Value:', this.enrollForm.value);
    console.log('Reactive Form Raw Value (includes disabled controls):', this.enrollForm.getRawValue());
    alert('Reactive Form Submitted Successfully!');
  }

  /*
   * Step 77 & CanComponentDeactivate implementation:
   * Prompts confirmation dialog if user attempts navigation away from a dirty form.
   */
  canDeactivate(): boolean {
    if (this.enrollForm && this.enrollForm.dirty && !this.enrollForm.valid) {
      return window.confirm('You have unsaved changes in the enrollment form. Leave page?');
    }
    return true;
  }

  /*
   * Step 52 Explanation:
   * -------------------------------------------------------------------------------------
   * enrollForm.value: Returns an object containing values of enabled form controls only.
   * Controls marked with disable() are omitted from this object.
   *
   * enrollForm.getRawValue(): Returns an object containing values of ALL form controls
   * regardless of whether they are enabled or disabled.
   * -------------------------------------------------------------------------------------
   */
}

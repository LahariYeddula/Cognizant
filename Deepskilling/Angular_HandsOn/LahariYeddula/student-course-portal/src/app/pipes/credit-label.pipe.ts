import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditLabel',
  standalone: true
})
export class CreditLabelPipe implements PipeTransform {
  // Step 35: Transform credit count to human-readable string and handle edge cases (null, 0)
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || value === 0) {
      return 'No Credits';
    }
    if (value === 1) {
      return '1 Credit';
    }
    return `${value} Credits`;
  }
}

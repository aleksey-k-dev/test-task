import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(seconds: any): string | null {
    if (typeof seconds !== 'number') {
      return null;
    }

    let result = '';

    const hours = Math.floor(seconds / 3600);
    if (hours > 0) {
      result += `${result ? ' ' : ''}${hours}h`;
      seconds %= 3600;
    }

    const minutes = Math.floor(seconds / 60);
    if (minutes > 0) {
      result += `${result ? ' ' : ''}${minutes}m`;
      seconds %= 60;
    }

    if (seconds > 0) {
      result += `${result ? ' ' : ''}${seconds}s`;
    }

    return result;
  }
}

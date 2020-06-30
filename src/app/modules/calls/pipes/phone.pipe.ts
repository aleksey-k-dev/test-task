import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phone: any): string | null {
    if (typeof phone === 'number') {
      phone = phone.toString();
    }

    if (typeof phone !== 'string') {
      return null;
    }

    return `+${phone[0]} (${phone.substring(1, 4)}) ${phone.substring(4, 7)}-${phone.substring(7, 9)}-${phone.substring(9)}`;
  }
}

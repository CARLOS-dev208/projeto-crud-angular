import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celular',
})
export class CelularPipe implements PipeTransform {
  // 61 99431-5211
  transform(value: string): unknown {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
}

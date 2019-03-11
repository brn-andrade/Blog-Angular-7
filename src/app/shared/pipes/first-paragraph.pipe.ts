import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstParagraph'
})
export class FirstParagraphPipe implements PipeTransform {

  transform(value: string): string {
    return value.match(/<p>([^\<]*?)<\/p>/g)[0];
  }
}

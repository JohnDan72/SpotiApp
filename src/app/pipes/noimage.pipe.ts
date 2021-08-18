import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imgs: any[]): string {
    if(!imgs)
      return 'assets/img/no-photo2.png'
    if(imgs.length > 0)
      return imgs[0].url
    else 
      return 'assets/img/no-photo2.png'
  }

}

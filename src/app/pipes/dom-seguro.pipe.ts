import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {
  constructor(private _domseg: DomSanitizer){}

  transform(value: string, url: string): any {
    return this._domseg.bypassSecurityTrustResourceUrl(url + value);
  }

}

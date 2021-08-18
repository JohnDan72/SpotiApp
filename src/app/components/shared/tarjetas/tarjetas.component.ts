import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  
  @Input() tarjeta: any = {}
  @Input() isArtist: boolean

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  verArtista(item: any){
    let artista_id

    if(item.type === 'artist'){
      artista_id = item.id
    }
    else{
      artista_id = item.artists[0].id
    }
    
    this._router.navigate(['/artista',artista_id])
        
  }
}

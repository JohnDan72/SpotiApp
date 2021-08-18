import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  loading: boolean
  artista: any = {}
  topTracks: any[] = []
  constructor(private _activeRouter: ActivatedRoute,
              private _spotyService: SpotifyService) {
    this.loading = true
    this._activeRouter.params.subscribe( params => {
      this.getArtista(params['id_artist'])
      this.getTopTracksArtista(params['id_artist'])
      
      
    })

  }

  getArtista(id: string){
    this._spotyService.getArtistaInfo(id)
                        .subscribe( (data:any) => {
                          this.artista = data
                           console.log(data);
                          this.loading = false 
                        })
  }

  getTopTracksArtista(id: string){
    this._spotyService.getTopTracksArtist(id)
                        .subscribe( (data:any) => {
                          this.topTracks = data
                          console.log(data);
                        })
  }


}

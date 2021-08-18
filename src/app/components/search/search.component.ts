import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  
  artistSearched: any[] = []
  loading: boolean = false

  constructor(private _spotiService: SpotifyService) { }

  buscarArtista(termino: string){
    if(termino){
      this.loading = true
      this._spotiService.searchArtistas(termino)
          .subscribe((data: any) => {
            this.artistSearched = data
             console.log(data);
             this.loading = false
            //  console.log(data.artists.items);
          })
    }
    else{
      this.artistSearched = []
    }
    
  }

}

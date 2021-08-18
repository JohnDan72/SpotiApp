import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root' //este decorador importa el servicio automáticamente cuando lo compila con ES6
})
export class SpotifyService {

  // token: string = 'BQCCJYvQwKJE7WJMB4IU5DO3gMYlG67k3jSpdERYz--3vf0HJztCtYvGF9FTsX2UCamFLDH7VpRcl48Z3AM'

  constructor(private _http: HttpClient) { 
    console.log(`Spotify service ready to be used`);
  }
  
  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQARtsQeRP6suxApUcJAptiGOg2o8VcXHXrK97cA6XVWYWRd3rkaqi77CR0GAeBvi4X3YtVG8uVuPwil0mY'
    })

    return this._http.get(url, {headers}) //regresa el observable
  }
  getNewRealeses(){
    return  this.getQuery(`browse/new-releases`)
                .pipe( map ( data => data['albums'].items))
                      
  }

  searchArtistas(termino: string){
    return  this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map ( data => data['artists'].items))
    
    // ANTERIOR CÓDIGO
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer ' + this.token
    // })
    // return this._http
    //            .get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
    //            .pipe( map ( data =>  data['artists'].items))


  }

  getArtistaInfo(id: string){
    return this.getQuery(`artists/${id}`)
               .pipe( map (data => data))
  }

  getTopTracksArtist(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
               .pipe( map ( data => data['tracks']))
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = []
  loading: boolean
  error: boolean
  error_message: string

  constructor(private _spotiService: SpotifyService) {   
    this.error = false
    this.loading = true  
    this._spotiService.getNewRealeses()
                      .subscribe( (data: any) =>{                 
                        this.newReleases = data
                        this.loading = false
                      }, (errorServicio) => {
                          console.log(errorServicio);
                          this.loading = false
                          this.error = true
                          this.error_message = errorServicio.error.error.message
                      })
    // this._http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (data: any) => {
    //     this.paises = data  
    // })

  }

  ngOnInit(): void {
  }


}

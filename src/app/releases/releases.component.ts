import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {
  newReleases: any[] = [];
  isLoading: boolean;

  public token = {
    accessToken: '',
    typeToken: ''
  };

  constructor(private spotifyService: SpotifyService) {
    this.isLoading = true;

    this.spotifyService.getToken()
    .subscribe(
      (data: any) =>  {
        // console.log(data);
        this.token.accessToken = data.access_token;
        this.token.typeToken = data.token_type;
      }
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.spotifyService.getNewReleases(this.token.typeToken, this.token.accessToken)
      .subscribe((data: any) => {
        // console.log(data);
        this.newReleases = data;
        this.isLoading = false;
      });
    }, 1000);
  }
}

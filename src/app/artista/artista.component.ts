import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  // styleUrls: ['./artista.component.css']
})

export class ArtistaComponent implements OnInit {
  artist: any;
  isLoading: boolean;
  topTracks: any[] = [];

  public token = {
    accessToken: '',
    typeToken: ''
  };

  constructor(private actRouter: ActivatedRoute, private spotify: SpotifyService) {
    this.isLoading = true;

    this.spotify.getToken()
    .subscribe(
      (data: any) =>  {
        // console.log(data);
        this.token.accessToken = data.access_token;
        this.token.typeToken = data.token_type;
      }
    );

    setTimeout(() => {
      this.actRouter.params.subscribe(params => {
        this.getArtist(params.id);
        this.getTopTracks(params.id);
      });
    }, 1500);
  }

  private getArtist(id: string) {
    this.spotify.getArtist(id, this.token.typeToken, this.token.accessToken).subscribe(artist => {
      this.artist = artist;
      this.isLoading = false;
    });
  }

  private getTopTracks(idArtist: string) {
    this.spotify.getTopTracks(idArtist, this.token.typeToken, this.token.accessToken)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}

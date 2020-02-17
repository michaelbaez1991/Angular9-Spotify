import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular9-Spotify';
  newReleases: any[] = [];
  isLoading: boolean;

  constructor() { }
}

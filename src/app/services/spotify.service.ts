import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  public credentials = {
    clientId: 'f031f6937e914cba9c34c22c90f7bafa',
    clientSecret: 'ce2d20ed3a3048e58c3359442742d704',
    accessToken: '',
    typeToken: ''
  };

  public Base64credentials = {
    segurity: btoa(this.credentials.clientId + ':' + this.credentials.clientSecret)
  };

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + this.Base64credentials.segurity,
    })
  };

  constructor(private http: HttpClient) {  }

  getToken() {
    const urlToken = 'https://accounts.spotify.com/api/token';
    const bodyToken = new HttpParams().set('grant_type', 'client_credentials');

    return this.http.post(urlToken, bodyToken, this.httpOptions);
  }

  getQuery(query: string, typeToken: string, accessToken: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
      typeToken + ' ' + accessToken
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(typeToken: string, accessToken: string) {
    return this.getQuery('browse/new-releases?country=co&limit=20', typeToken, accessToken).pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtists(term: string, typeToken: string, accessToken: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`, typeToken, accessToken).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtist(id: string, typeToken: string, accessToken: string) {
    return this.getQuery(`artists/${id}`, typeToken, accessToken);
  }

  getTopTracks(idArtist: string, typeToken: string, accessToken: string) {
    return this.getQuery(`artists/${idArtist}/top-tracks?country=us`, typeToken, accessToken)
      .pipe(map((data: any) => data.tracks));
  }
}

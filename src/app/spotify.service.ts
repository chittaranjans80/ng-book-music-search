import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable} from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class SpotifyService {
  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor(private http: Http) { }

  query(URL: string, params?: string[]): Observable<any[]> {
    let queryUrl: string = `${SpotifyService.BASE_URL}${URL}`
    //console.log("queryUrl is "+ queryUrl);
    if(params) {
      queryUrl = `${queryUrl}?${params.join('&')}`
    }
    return this.http.request(queryUrl).map((res: Response) => res.json());

  }

  search(query: string, type: string): Observable<any[]> {
    return this.query('/search', [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchByTrack(query: string): Observable<any> {
     return this.search(query, 'track');
  }

  searchByAlbum(query: string): Observable<any> {
    return this.search(query, 'album')
  }
  getTrack(trackId: string) : Observable<any[]> {
    return this.query(`/tracks/${trackId}`);
  }

  getAlbumTracks(albumId: string): Observable<any[]> {
    let queryUrl = `/albums/${albumId}/tracks`;
    console.log("queryUrl for fetching tracks   "+ queryUrl);
    return this.query(queryUrl);
  }

  getAlbum(albumId: string): Observable<any> {
    let queryUrl = `/artists/${albumId}/albums`;
    console.log("queryUrl before call   "+ queryUrl);
    return this.query(queryUrl);
  }

}

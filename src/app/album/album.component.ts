import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  albumTracks: any;

  constructor(private spotifyService: SpotifyService, 
          private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:any) => this.id = params['id']);
    this.spotifyService.getAlbumTracks(this.id).subscribe((res: any) => this.renderAlbumTracks(res));
  }

  renderAlbumTracks(res: any) {
    console.log("res value is  "+ JSON.stringify(res));
    this.albumTracks = res.items;
  }

}

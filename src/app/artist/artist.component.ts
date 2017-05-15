import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  albums: any;

  constructor(private spotifyService: SpotifyService, 
          private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:any) => this.id = params['id']);
    this.spotifyService.getAlbum(this.id).subscribe((res: any) => this.renderAlbum(res));
  }

  renderAlbum(res: any) {
    console.log("res value is  "+ JSON.stringify(res));
    this.albums = res.items;
  }
}

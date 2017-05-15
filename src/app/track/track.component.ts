import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object
  constructor(private spotifyService: SpotifyService, 
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe((params:any) => this.id = params['id']);
  	this.spotifyService.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
  }

  renderTrack(res: any) {
  	this.track = res;
  }

}

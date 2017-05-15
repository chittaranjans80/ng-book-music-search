import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
  			  private spotifyService: SpotifyService ) { 
  	this.activatedRoute.queryParams.subscribe(params => {
  		this.query = params['query'] || '' ; 
  	})}

  search(): void {
  	console.log("this.query == "+ this.query);
  	if(!this.query) {
  		return
  	}

  	this.spotifyService.searchByTrack(this.query).subscribe((result: any) => {
      //console.log("result found " + JSON.stringify(result));
  		this.renderResult(result);
  	});
  }

  renderResult (res: any) : void {
  	this.results = null;
  	if(res && res.tracks && res.tracks.items) {
  		this.results = res.tracks.items;
          console.log("this.results == "+ JSON.stringify(this.results));
  	}

  }

  ngOnInit() {
  	this.search();
  }

  submit(query: string): void {
	this.router.navigate(['search'], {queryParams: {
		query: query} }).then( _ => {
			this.search();
		});
  }



}

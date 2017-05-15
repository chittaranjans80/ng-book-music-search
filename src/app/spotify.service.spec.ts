/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, 
		 BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  	beforeEach(() => {
		TestBed.configureTestingModule({
		providers: [
		  SpotifyService,
		  BaseRequestOptions,
		  MockBackend,
		  {
		  	provide: Http, 
		    useFactory:(backend: ConnectionBackend,
		  			  defaultOptions: BaseRequestOptions) => {
		  		return new Http(backend, defaultOptions);
		  	}, deps: [MockBackend, BaseRequestOptions]
		  }
		]
		});
	});

	it('should ...', inject([SpotifyService], (service: SpotifyService) => {
		expect(service).toBeTruthy();
	}));

	it('retrives using track Id', inject([SpotifyService, MockBackend], 
							   fakeAsync((spotifyService, mockBackend) => {
		var res;
		//expectURL(mockBackend, '')
		mockBackend.connections.subscribe ( c => {
		expect(c.request.url).toBe('https://api.spotify.com/v1/tracks/TRACK_ID');
		let response = new ResponseOptions({body: '{"name": "chitta"}'});
		c.mockRespond(new Response(response));
		});

		spotifyService.getTrack('TRACK_ID').subscribe(result => {
		res = result;
		});
		tick();
		expect(res.name).toBe('chitta');
	}))
	);

	// it('retrives using the artist ID', inject([SpotifyService, MockBackend],
	// 								   fakeAsync((spotService, backend) => {
	//    	var res;
	//    	expectURL(backend, 'https://apo.spotify.com/v1/artists/ARTIST_ID');
	//    	spotService.getArtist('ARTIST_ID').subscribe((result) => {
	//    		res = result;
	//    	});
	//    	tick();
	//    	expect(res.name).toBe('Chitta');
	//    }))
	// );

});

function expectURL(backend: MockBackend, url: string) {
	backend.connections.subscribe(connectionRes => {
		expect(connectionRes.reuest.url).toBe(url);
		let response = new ResponseOptions({body: '{"name": "Chitta"}'})
		connectionRes.mockRespond(new Response(response));
});
}

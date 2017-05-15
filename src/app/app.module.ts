import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, 
         APP_BASE_HREF } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { SpotifyService } from './spotify.service';

const routes: Routes = [
   { path: '', redirectTo: 'search', pathMatch: 'full' },
   { path: 'search', component: SearchComponent },
   { path: 'artists/:id', component: ArtistComponent },
   { path: 'tracks/:id', component: TrackComponent },
   { path: 'albums/:id', component: AlbumComponent },
 ];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})

export class AppModule { }


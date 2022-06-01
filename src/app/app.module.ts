import { GoogleAuthModule } from 'dist/google-auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleAuthModule.forRoot({ clientId: '144921009401-jedu8jm2hspm9nqa7gts9k5l43jomfc4.apps.googleusercontent.com' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

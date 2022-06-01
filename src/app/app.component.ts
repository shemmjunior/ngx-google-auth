import { Component } from '@angular/core';
import { GoogleAuthService } from 'google-auth'; //

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private googleAuth: GoogleAuthService) {}

  load(): void {
    this.googleAuth
      .init({
        context: 'signin',
        callback: (response: any) => {
          console.log(response);
          /** Continue with your logic */
        }
      });
  }
}

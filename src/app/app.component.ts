import { Component } from '@angular/core';
import { GoogleAuthService } from '../../projects/google-auth/src/lib/google-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngx-google-auth';

  constructor(private gs: GoogleAuthService) {}

  load(): void {
    this.gs
      .init({
        context: 'signin',
        callback: (response: any) => {
          console.log(response);
        }
      });
  }
}

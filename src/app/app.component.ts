import { Component } from '@angular/core';
import { GoogleAuthService } from '../../projects/google-auth/src/lib/google-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-google-auth';

  constructor(private gs: GoogleAuthService) {}

  load() {
   this.gs.init({ 
     context: 'sigin',
    //  callback: (res) => {
    //    console.log(res)
    //  }
    
    }).then((res) => {
      console.log(res)
    })
  }
}

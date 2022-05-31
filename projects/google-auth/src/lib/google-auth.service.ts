import { Inject, Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Context, GoogleAuthConfig } from './interfaces';
import { GlobalConfiguration, GLOBAL_CONFIGURATION_SERVICE } from './global.config';

declare let google: any;



@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  private loaded: Promise<void>;

  constructor(
    @Inject(GLOBAL_CONFIGURATION_SERVICE)
    private globalConfig: GlobalConfiguration
  ) { }

  public init(config: GoogleAuthConfig): Promise<void> {
    return this.load().then(() => {
    google.accounts.id.initialize({
        client_id: this.globalConfig.clientId,
        context: config.context,
        callback: (res) => {
          console.log(this.getDecodedAccessToken(res.credential))
          return this.getDecodedAccessToken(res.credential)
        }
      })
      google.accounts.id.prompt();
    })
  }
  



  private load(): Promise<void> {
    if (!this.loaded) {
      this.loaded = new Promise<void>((resolve, reject) => {
        const script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://accounts.google.com/gsi/client';
        script.onerror = (e: any) => reject(e);
        if (script.readyState) {
          script.onreadystatechange = () => {
            if (
              script.readyState === 'loaded' ||
              script.readyState === 'complete'
            ) {
              script.onreadystatechange = null;
              resolve();
            }
          };
        } else {
          script.onload = () => {
            resolve();
          };
        }
        document.getElementsByTagName('body')[0].appendChild(script);
      });
    }

    return this.loaded;
  }
  

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}

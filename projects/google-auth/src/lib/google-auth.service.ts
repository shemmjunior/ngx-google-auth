import { Inject, Injectable } from '@angular/core';
import { GoogleAuthConfig } from './interfaces';
import { GlobalConfiguration, GLOBAL_CONFIGURATION_SERVICE } from './global.config';

declare let google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  /** Script loaded status */
  private loaded: Promise<void>;

  /**
   * Constructor with injected services
   * @param globalConfig Global configuration
   */
  constructor(@Inject(GLOBAL_CONFIGURATION_SERVICE) private globalConfig: GlobalConfiguration) { }

  /**
   * Initializes the Google API
   * @param config Google auth configuration
   * @returns Promise<void>
   */
  public init(config: GoogleAuthConfig): Promise<void> {
    return this.load().then(() => {
      google.accounts.id.initialize({
          client_id: this.globalConfig.clientId,
          context: config.context,
          callback: config.callback
        });
      google.accounts.id.prompt();
    });
  }

  /**
   * Loads the Google API script
   * @returns Promise<void>
   */
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

}

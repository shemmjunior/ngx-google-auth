import { ModuleWithProviders, NgModule } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';
import { GLOBAL_CONFIGURATION_SERVICE, GlobalConfiguration } from './global.config';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [GoogleAuthService]
})
export class GoogleAuthModule {
  static forRoot(config: GlobalConfiguration): ModuleWithProviders<GoogleAuthModule> {
    return {
      ngModule: GoogleAuthModule,
      providers: [
        { provide: GLOBAL_CONFIGURATION_SERVICE, useValue: config }
      ]
    };
  }
 }

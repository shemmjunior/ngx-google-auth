
import { InjectionToken } from '@angular/core';
export interface GlobalConfiguration {
  clientId: string;
}
export const GLOBAL_CONFIGURATION_SERVICE = new InjectionToken<GlobalConfiguration>('GlobalConfiguration');

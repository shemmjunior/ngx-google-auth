/**
 * Google auth configuration interface
 * TODO: Add more properties from https://developers.google.com/identity/gsi/web/reference/js-reference
 */
export interface GoogleAuthConfig {
    context?: 'signin' | 'signup';
    callback?: Function;
}

<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Project logo"></a>
</p>

<h3 align="center">ngx-google-auth</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/shemmjunior/ngx-google-auth/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/shemmjunior/ngx-google-auth/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A new Google Identity Services library for angular
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [References](#references)

## 🧐 About <a name = "about"></a>

 As google are discontinuing the Google Sign-In JavaScript Platform Library for web. The library will be unavailable for download after the March 31, 2023 deprecation date this library. According to Google, the new GIS SDK uses pop-up dialogues in the browser, which helps reduce user friction, streamlines authentication and authorization flows, and increases user engagement.

 This library was generated using angular v11.2.14, other versions are untested.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them.

- [NodeJs](https://nodejs.org/en/) - Base Environment
- [Angular](https://angular.io/) - Angular Environment

### Installing

```
npm install ngx-google-auth
```

## 🔧 Running the tests <a name = "tests"></a>

A step by step series of guides how to install the library for local dev. From here I assume you have already installed nodejs to your local machine, Next is:

1. Install Angular v11.2.14 using `npm i @angular/cli@11.2.14`
2. On the root directory of this project run `npm install` to install all projects dependencies

```
Add more tests steps here.
```

## 🎈 Usage <a name="usage"></a>

1. Install the package from npm with
```
npm i ngx-google-auth
```

2. Import the module to GoogleAuthModule
```typescript
import { GoogleAuthModule } from 'ngx-google-auth';
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
    GoogleAuthModule.forRoot({ clientId: 'provide_your_client_id' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
3. Import the service anywhere on your component
```typescript
import { Component } from '@angular/core';
import { GoogleAuthService } from 'dist/google-auth'; // After running ng build google-auth

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private googleAuthService: GoogleAuthService) {}

  load(): void {
    this.googleAuthService
      .init({
        context: 'signin',
        callback: (response: any) => {
          console.log(response);
          /** Continue with your logic */
        }
      });
  }
}

```

3. For better security please verify the token on your server side
[Verifying Token on the server side](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Base Environment
- [Angular](https://angular.io/) - Angular Environment

## ✍️ Authors <a name = "authors"></a>

- [@shemmjunior](https://github.com/shemmjunior) - Initial work

## 🎉 References <a name = "references"></a>

- [Google Identity Services](https://developers.google.com/identity) - Introduction
- [Google Identity Services Guides](https://developers.google.com/identity/gsi/web/guides/overview) - Guides

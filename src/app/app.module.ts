import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import service ListProductsService and add it in provider
import  { ListProductsService } from './services/list-products.service';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { HttpClientModule }    from '@angular/common/http';


const appRoutes: Routes = [
 { path: 'home', component: HomePageComponent },
 { path: 'list-products', component: ListProductsComponent },
 { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ListProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Architecture:
// https://medium.com/@cyrilletuzi/architecture-in-angular-projects-242606567e40

// Docs:
// https://angular.io/guide/quickstart
// https://github.com/angular/angular-cli

// Install:
// https://www.npmjs.com/package/@angular/cli

// scaffolding:
// Component 	ng g component my-new-component
// Directive 	ng g directive my-new-directive
// Pipe 	ng g pipe my-new-pipe
// Service 	ng g service my-new-service
// Class 	ng g class my-new-class
// Guard 	ng g guard my-new-guard
// Interface 	ng g interface my-new-interface
// Enum 	ng g enum my-new-enum
// Module 	ng g module my-module

// add bs4
// http://www.talkingdotnet.com/add-bootstrap-4-to-angular-6-application/

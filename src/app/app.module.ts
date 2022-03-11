import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } 
from './home/home.component';

import { ArticlesMenuComponent } 
from './articles-menu/articles-menu.component';
import { ArticlesListComponent } 
from './articles-list/articles-list.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { CKEditorModule } from 'ng2-ckeditor';//'@ckeditor/ckeditor5-angular';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import ckeditor from "ckeditor";


@NgModule({
  declarations: [AppComponent,ArticlesMenuComponent,
    HomeComponent,
    ArticlesListComponent],
  entryComponents: [],
  imports: [CKEditorModule,
    MatSliderModule,BrowserModule, CommonModule,
    IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA ]
})
export class AppModule {}

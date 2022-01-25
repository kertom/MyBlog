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
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [AppComponent,ArticlesMenuComponent,
    HomeComponent,
    ArticlesListComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule,
    IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

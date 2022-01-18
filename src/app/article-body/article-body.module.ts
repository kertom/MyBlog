import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleBodyPageRoutingModule } from './article-body-routing.module';

import { ArticleBodyPage } from './article-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleBodyPageRoutingModule
  ],
  declarations: [ArticleBodyPage]
})
export class ArticleBodyPageModule {}

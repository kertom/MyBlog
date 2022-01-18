import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleBodyPage } from './article-body.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleBodyPageRoutingModule {}

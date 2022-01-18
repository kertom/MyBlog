import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { ArticleDetailsPage } from '../article-details/article-details.page';
import { ArticleBodyPage } from '../article-body/article-body.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'article-details',
        component:ArticleDetailsPage
      
      },
      {
        path: 'article-body',
        component:ArticleBodyPage
      
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

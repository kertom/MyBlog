import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticleDetailsPage } from './article-details/article-details.page';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { HomeComponent } from './home/home.component';
import { ArticleBodyPage } from './article-body/article-body.page';
import { AboutPage } from './about/about.page';

const routes: Routes = [
  {
    path: 'articles',
    component:ArticlesListComponent
  },
  {
    path: 'article-body',
    component:ArticleBodyPage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

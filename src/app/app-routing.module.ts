import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticleDetailsPage } from './article-details/article-details.page';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { HomeComponent } from './home/home.component';
import { ArticleBodyPage } from './article-body/article-body.page';
import { AboutPage } from './about/about.page';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'articles',
    component:ArticlesListComponent
  },
  {
    path: 'articles/:title',
    component:ArticleBodyPage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

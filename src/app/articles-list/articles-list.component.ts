import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {

  articles=[{
    title: 'Article 1',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article 2',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article 3',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article 4',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article 5',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   }];

  constructor() {

  }

  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    console.log('go on!');
    //this.router.navigateByUrl(`/tabs/tab2/2`);
  }

  goToPlanets() {
    //this.navController.navigateRoot(`/tabs/tab1`)
  }

  ngOnInit() {}

}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
  constructor(private navController: NavController, 
    private router: Router) {

  }

  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    console.log('go on!');
    this.router.navigateByUrl(`/tabs/tab2/2`);
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/tab1`)
  }


}

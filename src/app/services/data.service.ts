import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public articles=[{
    title: 'Article1',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article2',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article3',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article4',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   },
   {
    title: 'Article5',
    intro: 'We discover how...',
    articleBody: '<p>This is my article...</p>',
    imageUrl: 'assets/homePicture.jpg',
   }];

  constructor() { 

  }



}

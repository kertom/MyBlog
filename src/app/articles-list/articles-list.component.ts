import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser'
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {

  constructor(public dataService:DataService) {

  }

  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    
    console.log('go on! this.articles= ',this.dataService.articles);

    //this.router.navigateByUrl(`/tabs/tab2/2`);
  }

  goToPlanets() {
    //this.navController.navigateRoot(`/tabs/tab1`)
  }

  ngOnInit() {}

}

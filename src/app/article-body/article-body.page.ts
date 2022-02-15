import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.page.html',
  styleUrls: ['./article-body.page.scss'],
})
export class ArticleBodyPage implements OnInit {
  title='';
  currentArticle=null;
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
      console.log('title param= ', this.title);
      //this.currentArticle=
      
      if(this.title){
        console.log('title param2= ', this.title);
        this.dataService.getArticleByTitle(this.title).subscribe(res => {
          //if(res.length > 0){
            //this.dataService.article = res[0];
          //}to do else {
            console.warn('No article found!');
            this.router.navigate(['/404']);
          //}
        });
      }
    });
  }

}

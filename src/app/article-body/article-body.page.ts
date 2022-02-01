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

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
      console.log(this.title);
  
      /*if(this.title){
        this.dataService.getArticleByTitle(this.title).subscribe(res => {
          if(res.length > 0){
            this.dataService.article = res[0];
          } else {
            console.warn('No article found!');
            this.router.navigate(['/404']);
          }
        });
      }*/
    });
  }

}

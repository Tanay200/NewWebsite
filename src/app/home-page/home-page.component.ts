import { Component, OnInit } from '@angular/core';
import { HeadlinesService } from '../service/headlines.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  headlines : any = [];
  pageSize = 8; // Number of items per page
  currentPage = 1; // Current page number
  totalItems: number = 48; // Total number of items
  targetArray:any = [];
  darkMode: boolean = false;


  constructor(private headlinesService : HeadlinesService) { }

  ngOnInit(): void {
    this.headlinesService.getHeadlines().subscribe((response)=>{
      this.headlines = response.News;
      this.headlines = this.headlines.filter((obj: { image: string,description:string }) => obj.image !== '' && obj.description!='');
      this.targetArray = this.headlines.slice(3, 51);
    })
  }

  pageChanged(event: any): void {
    this.currentPage = event;
  }
  enableDarkMode(){
    this.darkMode = !this.darkMode;
  }

}

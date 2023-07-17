import { Component, OnInit } from '@angular/core';
import { HeadlinesService } from '../service/headlines.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  constructor(public headlinesService : HeadlinesService) { }

  headlines: any = [];
  pageSize = 8; // Number of items per page
  currentPageIndex = 1; // Current page number
  totalItems: number = 49; // Total number of items
  darkMode: boolean = false;
  pagedHeadlines: any[] = [];
  pageSizeOptions: number[] = [8, 10, 25, 50]; // Available page sizes

  ngOnInit(): void {

    this.headlinesService.loader = true;
    this.headlinesService.getPoliticalNews().subscribe((response) => {
      if(response!=null){
        this.headlinesService.loader = false;
        this.headlines = response.News;
        this.headlines = this.headlines.filter((obj: { image: string, description: string }) => obj.image !== '' && obj.description != '');
        this.updatePagedHeadlines(); // Update the pagedHeadlines array
      }
    });
  }

  pageChanged(event: any): void {
    this.currentPageIndex = event.pageIndex+1;
    this.pageSize = event.pageSize;
    this.updatePagedHeadlines(); // Update the pagedHeadlines array
  }

  enableDarkMode() {
    this.darkMode = !this.darkMode;
  }

  updatePagedHeadlines(): void {
    const startIndex = (this.currentPageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedHeadlines = this.headlines.slice(startIndex, endIndex);
  }

  gotoPage(url:any){
    window.open(url, '_blank');
  }


}

import { Component, OnInit } from '@angular/core';
import { HeadlinesService } from '../service/headlines.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  headlines: any = [];
  pageSize = 8; // Number of items per page
  currentPageIndex = 1; // Current page number
  totalItems: number = 49; // Total number of items
  darkMode: boolean = false;
  pagedHeadlines: any[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 50]; // Available page sizes

  constructor(private headlinesService: HeadlinesService) { }

  ngOnInit(): void {
    this.headlinesService.getHeadlines().subscribe((response) => {
      this.headlines = response.News;
      this.headlines = this.headlines.filter((obj: { image: string, description: string }) => obj.image !== '' && obj.description != '');
      this.updatePagedHeadlines(); // Update the pagedHeadlines array
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
}

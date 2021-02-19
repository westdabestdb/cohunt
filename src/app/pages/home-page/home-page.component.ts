import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  sortOptions = [
    {
      title: 'Popular',
      slug: 'popular',
    },
    {
      title: 'New',
      slug: 'new',
    },
    {
      title: 'Top',
      slug: 'top',
    },
  ]

  activeSort = this.sortOptions[0];

  constructor() { }

  ngOnInit(): void {
  }

  upadateSort(sort) {
    this.activeSort = sort;
  }

}

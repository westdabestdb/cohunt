import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      title: 'All',
      slug: 'all',
    },
    {
      title: 'Arts',
      slug: 'arts',
    },
    {
      title: 'Business',
      slug: 'business',
    },
    {
      title: 'Marketing',
      slug: 'marketing',
    },
    {
      title: 'Communication',
      slug: 'communication',
    },
    {
      title: 'Healthcare',
      slug: 'healthcare',
    },
    {
      title: 'Law & Policy',
      slug: 'law-policy',
    },
    {
      title: 'Natural Sciences',
      slug: 'naturalsci',
    },
    {
      title: 'Computer Science & IT',
      slug: 'comp-it',
    },
    {
      title: 'Engineering',
      slug: 'engineering',
    },
    {
      title: 'Education',
      slug: 'education',
    }
  ]

  activeCategory = this.categories[0];

  constructor(private router: Router, private route : ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      console.log(params)
         
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap)
    });
  }

  ngOnInit(): void {
   
    
    // this.route.params.subscribe((params) => console.log(params))
}

}

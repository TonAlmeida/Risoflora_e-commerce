import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  description = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search(){
    if(this.description) {
      this.router.navigate(['products'], {queryParams: {description: this.description}});
      return;
    }

    this.router.navigate(["products"])
  }

}

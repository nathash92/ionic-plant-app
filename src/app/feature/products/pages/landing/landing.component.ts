import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  filters = ['Recommended', 'Top', 'Indoor', 'Outdoor'];
  selectedFilter = this.filters[0];

  constructor() { }

  ngOnInit(): void {
  }

  onFilterClick(data: string) {
    this.selectedFilter = data;
  }

}

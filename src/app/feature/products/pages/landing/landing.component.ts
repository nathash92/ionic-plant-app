import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/providers/nav.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  filters = ['Recommended', 'Top', 'Indoor', 'Outdoor'];
  selectedFilter = this.filters[0];

  constructor(
    private navService: NavService
  ) { }

  ngOnInit(): void {
  }

  onFilterClick(data: string) {
    this.selectedFilter = data;
  }

  onItemClick() {
    this.navService.nav('products/detail');
  }

  viewCart() {
    this.navService.nav('products/cart');
  }

}

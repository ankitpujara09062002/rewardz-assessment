import { Component, OnInit } from '@angular/core';
import { Reward } from '../../models/reward.model';
import { REWARDS } from '../../data/rewards.data';

@Component({
  selector: 'app-listing-page',
  standalone: false,
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.scss',
})
export class ListingPage implements OnInit {
  allRewards: Reward[] = REWARDS;
  filteredRewards: Reward[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' | null = null;
  isSortOpen: boolean = false;

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let result = this.allRewards.filter(r =>
      r.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    if (this.sortOrder === 'asc') {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOrder === 'desc') {
      result = result.sort((a, b) => b.name.localeCompare(a.name));
    }
    this.filteredRewards = result;
  }

  onSearch(): void {
    this.applyFilters();
  }

  onSortApplied(order: 'asc' | 'desc' | null): void {
    this.sortOrder = order;
    this.applyFilters();
  }
}

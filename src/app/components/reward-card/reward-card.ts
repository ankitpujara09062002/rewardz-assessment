import { Component, Input } from '@angular/core';
import { Reward } from '../../models/reward.model';

@Component({
  selector: 'app-reward-card',
  standalone: false,
  templateUrl: './reward-card.html',
  styleUrl: './reward-card.scss',
})
export class RewardCard {
  @Input() reward!: Reward;

  get isOutOfStock(): boolean {
    return this.reward.quantity === 0;
  }

  get isHighDemand(): boolean {
    return (
      this.reward.quantity !== null &&
      this.reward.quantity > 0 &&
      this.reward.quantity <= this.reward.low_quantity
    );
  }

  get imageUrl(): string {
    return this.reward.display_img_url || 'https://via.placeholder.com/200x150?text=No+Image';
  }

  get formattedDate(): string {
    if (!this.reward.valid_until) return '';
    const d = new Date(this.reward.valid_until);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }
}

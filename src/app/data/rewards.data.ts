import { Reward } from '../models/reward.model';

export const REWARDS: Reward[] = [
  {
    pk: 1,
    name: 'Café Coffee Day',
    points: 500,
    display_img_url: 'https://via.placeholder.com/200x150?text=Cafe+Coffee+Day',
    quantity: 0,
    valid_until: '2025-12-31',
    low_quantity: 10
  },
  {
    pk: 2,
    name: 'Allen Solly',
    points: 1200,
    display_img_url: 'https://via.placeholder.com/200x150?text=Allen+Solly',
    quantity: 5,
    valid_until: '2025-11-30',
    low_quantity: 10
  },
  {
    pk: 3,
    name: 'Amazon Gift Card',
    points: 800,
    display_img_url: 'https://via.placeholder.com/200x150?text=Amazon',
    quantity: 50,
    valid_until: '2025-10-15',
    low_quantity: 10
  },
  {
    pk: 4,
    name: 'Grab $10',
    points: 300,
    display_img_url: 'https://via.placeholder.com/200x150?text=Grab',
    quantity: 3,
    valid_until: '2025-09-30',
    low_quantity: 10
  },
  {
    pk: 5,
    name: 'Swiggy',
    points: 400,
    display_img_url: '',
    quantity: 0,
    valid_until: '2025-08-20',
    low_quantity: 10
  },
  {
    pk: 6,
    name: 'Peter England',
    points: 1500,
    display_img_url: 'https://via.placeholder.com/200x150?text=Peter+England',
    quantity: 25,
    valid_until: '2026-01-31',
    low_quantity: 10
  },
  {
    pk: 7,
    name: 'Decathlon',
    points: 2000,
    display_img_url: 'https://via.placeholder.com/200x150?text=Decathlon',
    quantity: null,
    valid_until: null,
    low_quantity: 10
  },
  {
    pk: 8,
    name: 'Demo Reward for Purchase Price',
    points: 100,
    display_img_url: '',
    quantity: 7,
    valid_until: '2025-12-01',
    low_quantity: 10
  },
  {
    pk: 9,
    name: 'Dairy Farm $20',
    points: 600,
    display_img_url: 'https://via.placeholder.com/200x150?text=Dairy+Farm',
    quantity: 100,
    valid_until: '2026-03-31',
    low_quantity: 10
  },
  {
    pk: 10,
    name: 'FairPrice $20',
    points: 650,
    display_img_url: 'https://via.placeholder.com/200x150?text=FairPrice',
    quantity: 0,
    valid_until: '2025-07-15',
    low_quantity: 10
  },
  {
    pk: 11,
    name: 'Spar Hypermarket',
    points: 700,
    display_img_url: 'https://via.placeholder.com/200x150?text=Spar',
    quantity: 8,
    valid_until: '2025-11-01',
    low_quantity: 10
  },
  {
    pk: 12,
    name: 'Zomato',
    points: 350,
    display_img_url: 'https://via.placeholder.com/200x150?text=Zomato',
    quantity: 40,
    valid_until: '2025-10-31',
    low_quantity: 10
  },
  {
    pk: 13,
    name: 'Qoo10',
    points: 900,
    display_img_url: 'https://via.placeholder.com/200x150?text=Qoo10',
    quantity: null,
    valid_until: '2026-06-30',
    low_quantity: 10
  },
  {
    pk: 14,
    name: 'Test UG',
    points: 50,
    display_img_url: '',
    quantity: 2,
    valid_until: null,
    low_quantity: 10
  },
  {
    pk: 15,
    name: 'ygag demo barcode',
    points: 200,
    display_img_url: 'https://via.placeholder.com/200x150?text=ygag+demo',
    quantity: 60,
    valid_until: '2025-12-15',
    low_quantity: 10
  }
];

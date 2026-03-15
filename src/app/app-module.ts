import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RewardCard } from './components/reward-card/reward-card';
import { SortPanel } from './components/sort-panel/sort-panel';
import { ListingPage } from './components/listing-page/listing-page';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    RewardCard,
    SortPanel,
    ListingPage
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

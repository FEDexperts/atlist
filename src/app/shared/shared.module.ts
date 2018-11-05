import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFoodComponent } from './components/search-food/search-food.component';
import { ListComponent } from './components/list/list.component';
import { IonicModule } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

import * as fromSearchFood from './components/search-food/store'
import { EffectsModule } from '@ngrx/effects';
import { QuantityComponent } from './components/list/quantity/quantity.component';

const SHARED_COMPONENTS = [
  SearchFoodComponent,
  ListComponent
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    StoreModule.forFeature('search', fromSearchFood.reducer),
    EffectsModule.forFeature([fromSearchFood.SearchEffects]),
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    QuantityComponent,
  ],
  exports: [
    ...SHARED_COMPONENTS,
  ]
})
export class SharedModule { }

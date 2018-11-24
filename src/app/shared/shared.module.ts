import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFoodComponent } from './components/search-food/search-food.component';
import { ListComponent } from './components/list/list.component';
import { IonicModule } from '@ionic/angular';

import { InputNumberComponent } from './components/Input-number/Input-number.component';

const SHARED_COMPONENTS = [
  SearchFoodComponent,
  ListComponent
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    InputNumberComponent,
  ],
  exports: [
    ...SHARED_COMPONENTS,
  ]
})
export class SharedModule { }

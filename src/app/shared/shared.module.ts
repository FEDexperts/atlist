import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ListComponent } from './components/list/list.component';
import { IonicModule } from '@ionic/angular';

const SHARED_COMPONENTS = [
  SearchFieldComponent,
  ListComponent
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  exports: [
    ...SHARED_COMPONENTS,
  ]
})
export class SharedModule { }

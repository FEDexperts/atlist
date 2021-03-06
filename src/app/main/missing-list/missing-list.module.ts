import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissingListPage } from './missing-list.page';
import { LayoutComponent } from '../layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { MissingListEffects } from './store/missing-list.effects';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MissingListPage,
      }
    ]
  }
];

@NgModule({
  declarations: [MissingListPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('missing-list', reducer),
    EffectsModule.forFeature([MissingListEffects]),
    LayoutModule,
    SharedModule,
  ],
  providers: [
    {
      provide: 'PAGE_TITLE',
      useValue: 'רשימת חוסרים'
    },
  ]
})
export class MissingListPageModule { }

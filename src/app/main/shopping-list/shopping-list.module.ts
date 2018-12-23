import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPage } from './shopping-list.page';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutModule } from '../layout/layout.module';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/shopping-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingListEffects } from './store/shopping-list.effects';
import { GeneralService } from '../../shared/services/general.service';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ShoppingListPage,
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('shopping-list', reducer),
        EffectsModule.forFeature([ShoppingListEffects]),
        LayoutModule,
        SharedModule,
    ],
    declarations: [ShoppingListPage],
    providers: [
        GeneralService,
        {
            provide: 'PAGE_TITLE',
            useValue: 'רשימת קניות'
        }
    ]
})
export class ShoppingListPageModule {
}

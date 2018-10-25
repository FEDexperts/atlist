import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ShoppingListPage} from './shopping-list.page';
import {LayoutComponent} from '../layout/layout.component';
import {LayoutModule} from '../layout/layout.module';

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
        LayoutModule
    ],
    declarations: [ShoppingListPage]
})
export class ShoppingListPageModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPage } from './shopping-list.page';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutModule } from '../layout/layout.module';
import { SearchFieldComponent } from '../components/search-field/search-field.component';
import { ListComponent } from '../components/list/list.component';

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
        LayoutModule,
    ],
    declarations: [ShoppingListPage, SearchFieldComponent, ListComponent],
    providers: [
        {
            provide: 'PAGE_TITLE',
            useValue: 'רשימת קניות'
        }
    ]
})
export class ShoppingListPageModule {
}

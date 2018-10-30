import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'missing-list', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'shoppingList', loadChildren: './shopping-list/shopping-list.module#ShoppingListPageModule' },
    { path: 'missing-list', loadChildren: './missing-list/missing-list.module#MissingListPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

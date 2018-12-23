import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppGuard} from './app.guard';

const routes: Routes = [
    {path: '', redirectTo: 'shopping-list', pathMatch: 'full'},
    {path: 'login', loadChildren: './main/login/login.module#LoginPageModule'},
    {path: 'shopping-list', canActivate: [AppGuard], loadChildren: './main/shopping-list/shopping-list.module#ShoppingListPageModule'},
    {path: 'missing-list', canActivate: [AppGuard], loadChildren: './main/missing-list/missing-list.module#MissingListPageModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

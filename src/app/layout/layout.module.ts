import {NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [LayoutComponent, MenuComponent],
    exports: [LayoutComponent]
})
export class LayoutModule {
}

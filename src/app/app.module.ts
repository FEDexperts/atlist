import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {AppInterceptor} from './app.interceptor';
import {ListEffects} from './core/list/list.effects';
import {reducers} from './app.types';
import {AppEffects} from './store/app.effects';
import {AppGuard} from './app.guard';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AppEffects, ListEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            // logOnly: environment.production, // Restrict extension to log-only mode
        }),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        HttpClient,
        {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
        AppGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

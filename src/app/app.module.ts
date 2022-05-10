import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appEffects, appReducer } from './store/appState';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ViewsModule,
    //NGRX
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument(), //serve para ativar o redux no navegador

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

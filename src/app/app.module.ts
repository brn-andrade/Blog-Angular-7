import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

registerLocaleData(localePt);


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
   ],
   providers: [
      { provide: LOCALE_ID, useValue: 'pt' }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

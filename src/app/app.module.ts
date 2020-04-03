import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatorService } from './calculator/calculator/calculator.service';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}

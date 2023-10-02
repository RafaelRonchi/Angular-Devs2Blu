import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdocaoComponent } from './components/adocao/adocao.component';
import {HttpClientModule} from '@angular/common/http'
import { AnimalComponent } from './components/animal/animal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdocaoComponent,
    AnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

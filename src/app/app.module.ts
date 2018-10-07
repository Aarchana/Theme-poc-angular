import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopNavModule } from './top-nav/top-nav.module';
import { AppRoutes } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TopNavModule, AppRoutes, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { UsersComponent } from './users/users.component';
import { AcquaintanceComponent } from './acquaintance/acquaintance.component';
import { IntroComponent } from './intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    AcquaintanceComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

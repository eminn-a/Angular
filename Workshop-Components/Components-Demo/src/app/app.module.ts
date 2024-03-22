import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { ThemeModule } from './theme/theme.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, HomeComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    ThemeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

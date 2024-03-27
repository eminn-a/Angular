import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { ThemeRoutingModule } from '../theme/theme-routing.module';
import { EmailDirective } from './validators/email.directive';

@NgModule({
  declarations: [LoaderComponent, WelcomeMsgComponent, EmailDirective],
  imports: [CommonModule, ThemeRoutingModule],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent,
    ThemeRoutingModule,
    EmailDirective,
  ],
})
export class SharedModule {}

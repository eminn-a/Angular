import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { ThemeRoutingModule } from '../theme/theme-routing.module';

@NgModule({
  declarations: [LoaderComponent, WelcomeMsgComponent],
  imports: [CommonModule, ThemeRoutingModule],
  exports: [LoaderComponent, WelcomeMsgComponent, ThemeRoutingModule],
})
export class SharedModule {}

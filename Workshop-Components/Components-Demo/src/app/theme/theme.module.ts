import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { SharedModule } from '../shared/shared.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MainComponent } from './main/main.component';
import { PostsItemComponent } from './posts-list/posts-item/posts-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CurrentThemeComponent,
    AddThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent,
    PostsItemComponent,
  ],
  imports: [CommonModule, ThemeRoutingModule, SharedModule, FormsModule],
})
export class ThemeModule {}

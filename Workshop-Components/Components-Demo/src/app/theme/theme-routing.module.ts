import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { HomeComponent } from '../home/home.component';
import { AuthActivate } from '../guards/auth.activate';

const routes: Routes = [
  { path: 'themes', component: MainComponent },
  {
    path: 'add-theme',
    component: AddThemeComponent,
    canActivate: [AuthActivate],
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}

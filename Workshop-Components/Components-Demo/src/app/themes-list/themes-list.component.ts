import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] | null = null;
  isLoading: boolean = true;

  constructor(private api: ApiService, private userService: UserService) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userId(): string {
    return this.userService.user?.id || '';
  }

  ngOnInit(): void {
    this.api.getThemes().subscribe((theme) => {
      this.themes = theme;
      console.log(theme);
      this.isLoading = false;
    });
  }
  isSubscribed(theme: Theme) {
    const isSubscribedUser = theme.subscribers.find((s) => s === this.userId);
    console.log(!!isSubscribedUser);
    return !!isSubscribedUser;
  }
}

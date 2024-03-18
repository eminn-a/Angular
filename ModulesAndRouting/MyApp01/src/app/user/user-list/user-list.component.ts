import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  isLoading: boolean = false;
  users: User[] = [];

  constructor(
    private userService: UserService,
    private globalLoaderServide: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    //before fetch
    this.isLoading = true;
    this.globalLoaderServide.showLoader();
    //start fetching
    this.userService.getUsers().subscribe((x) => {
      this.users = x;
      //after fetched
      this.isLoading = false;
      this.globalLoaderServide.hideLoader();
    });
  }
}

import { Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My First Angular App';
  users: User[] = [
    { name: 'Emin', age: 30 },
    { name: 'Pesho', age: 12 },
    { name: 'Gosho', age: 31 },
  ];

  constructor() {
    setTimeout(() => {
      this.title = 'My title changed from Angular!';
    }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    console.log(inputName.value, inputAge.value);
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users = [...this.users, user];
    inputName.value = '';
    inputAge.value = '';
  }
}

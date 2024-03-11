import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalLoaderService {
  isHidden: boolean = false;
  showLoader() {
    this.isHidden = true;
  }
  hideLoader() {
    this.isHidden = false;
  }
}

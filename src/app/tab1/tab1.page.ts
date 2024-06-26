import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showLoader = false;

  constructor(private router: Router) {
    this.redireccionar()
  }
  redireccionar() {
    setTimeout(() => {
      this.showLoader = false;
      this.router.navigateByUrl("tabs/tab2");
    }, 10000)
  }
}

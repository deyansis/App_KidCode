import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}

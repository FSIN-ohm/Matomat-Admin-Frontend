import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin-Frontend';
  showFiller = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
  }
}

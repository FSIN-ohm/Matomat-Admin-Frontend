import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Admin-Frontend';
  showFiller = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  }
}

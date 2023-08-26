import { Component } from '@angular/core';
import { SidenavComponent } from './core/components/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

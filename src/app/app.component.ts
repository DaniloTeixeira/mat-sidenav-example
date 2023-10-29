import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './core/components/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SidenavComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {}

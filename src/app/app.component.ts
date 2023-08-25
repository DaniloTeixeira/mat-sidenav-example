import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected opened = false;
  protected currentYear = new Date().getFullYear();
  protected username = 'Danilo Rodrigues Teixeira';

  setSidenavStatus(isSidenavOpen: boolean): void {
    this.opened = isSidenavOpen;
  }

  onToggleMenuClick(): void {
    this.opened = !this.opened;
  }
}

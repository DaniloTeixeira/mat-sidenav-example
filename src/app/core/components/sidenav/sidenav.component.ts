import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ScreenService } from '../../services/screen';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  protected isSmallScreen$ = inject(ScreenService).isSmallScreen$;
  protected opened = false;
  protected currentYear = new Date().getFullYear();
  protected username = 'Danilo';

  ngOnInit(): void {
    this.setOpenedSidenav();
  }

  setSidenavStatus(isSidenavOpen: boolean): void {
    this.opened = isSidenavOpen;
  }

  onToggleMenuClick(): void {
    this.opened = !this.opened;
  }

  private setOpenedSidenav(): void {
    this.isSmallScreen$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((isSmallScreen) => {
        if (isSmallScreen) {
          this.opened = false;
          return;
        }

        this.opened = true;
      });
  }
}

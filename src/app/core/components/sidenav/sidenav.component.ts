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

  protected opened = false;
  protected username = 'Danilo';
  protected currentYear = new Date().getFullYear();
  protected screenWidth$ = inject(ScreenService).screenWidth$;
  protected isSmallScreen$ = inject(ScreenService).isSmallScreen$;

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
    this.screenWidth$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((width) => {
        if (width <= 1000) {
          this.opened = false;
          return;
        }

        this.opened = true;
      });
  }
}

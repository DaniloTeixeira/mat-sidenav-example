import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ScreenService } from '../../services/screen';
import { TableFormComponent } from '../table-form';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,

    TableFormComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ],
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

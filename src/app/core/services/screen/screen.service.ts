import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  auditTime,
  distinctUntilChanged,
  fromEvent,
  map,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  screenWidth$ = new BehaviorSubject(window.innerWidth);

  isSmallScreen$ = this.screenWidth$.pipe(
    map((width) => width <= 1300),
    distinctUntilChanged()
  );

  constructor() {
    this.setScreenWidthChanges();
  }

  private setScreenWidthChanges(): void {
    fromEvent(window, 'resize')
      .pipe(
        map(({ target }) => (target as Window).innerWidth),
        distinctUntilChanged(),
        auditTime(500)
      )
      .subscribe((width) => {
        this.screenWidth$.next(width);
      });
  }
}

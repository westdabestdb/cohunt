import { Component, ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .pipe(map((result: BreakpointState) => result.matches));

    public isHandsetRight$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Medium, Breakpoints.Small, Breakpoints.XSmall])
    .pipe(map((result: BreakpointState) => result.matches));

  title = 'jobhntr';
  @ViewChild('drawer') drawer: any;
  @ViewChild('drawer2') drawer2: any;

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  closeSideNav() {
    if (this.drawer._mode=='over') {
      this.drawer.close();
    }

    if (this.drawer2._mode=='over') {
      this.drawer2.close();
    }
  }
}

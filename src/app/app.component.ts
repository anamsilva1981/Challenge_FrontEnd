import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-header />
      <div class="container-body mt-8 mb-8">
        <router-outlet />
        <div class="container-footer">
          <app-footer />
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
})
export class AppComponent implements OnInit {
  private primengConfig = inject(PrimeNGConfig);
  private config = inject(PrimeNGConfig);

  public ngOnInit(): void {
    this.ripple();
    this.zIndex();
    this.filterMatchModeOptions();
  }

  public ripple(): void {
    this.primengConfig.ripple = true;
  }

  public zIndex(): void {
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };
  }

  public filterMatchModeOptions(): void {
    this.primengConfig.filterMatchModeOptions = {
      text: [
        FilterMatchMode.STARTS_WITH,
        FilterMatchMode.CONTAINS,
        FilterMatchMode.NOT_CONTAINS,
        FilterMatchMode.ENDS_WITH,
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
      ],
      numeric: [
        FilterMatchMode.EQUALS,
        FilterMatchMode.NOT_EQUALS,
        FilterMatchMode.LESS_THAN,
        FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
        FilterMatchMode.GREATER_THAN,
        FilterMatchMode.GREATER_THAN_OR_EQUAL_TO,
      ],
      date: [
        FilterMatchMode.DATE_IS,
        FilterMatchMode.DATE_IS_NOT,
        FilterMatchMode.DATE_BEFORE,
        FilterMatchMode.DATE_AFTER,
      ],
    };
  }
}

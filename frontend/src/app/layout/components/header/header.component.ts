import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { take } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        ToolbarModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        ReactiveFormsModule,
        RouterLink,
    ],
})
export class HeaderComponent {
  private productService = inject(ProductsService);

  public form = new FormGroup({
    searchText: new FormControl(''),
  });

  public onSubmit(): void {
    let filterValue = this.form.controls['searchText'].value;
    this.productService.getProductByFilter(filterValue!);
  }
}

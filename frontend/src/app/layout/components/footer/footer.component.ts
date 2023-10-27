import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: true,
    imports: [ToolbarModule],
})
export class FooterComponent {}

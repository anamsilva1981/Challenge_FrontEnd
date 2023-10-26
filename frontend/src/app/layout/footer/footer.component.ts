import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [ToolbarModule],
})
export class FooterComponent {}

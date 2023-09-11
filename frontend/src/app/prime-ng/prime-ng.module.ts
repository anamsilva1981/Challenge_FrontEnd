import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TreeModule } from 'primeng/tree';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
// import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';

@NgModule({
  exports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TreeModule,
    SidebarModule,
    PanelMenuModule,
    DataViewModule,
    TagModule,
    RatingModule,
    InputSwitchModule,
    InputTextareaModule
    // DataViewLayoutOptions,
  ],
})
export class PrimeNGModule {}

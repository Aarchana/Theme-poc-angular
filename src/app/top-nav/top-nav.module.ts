import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top.nav.component';
import { GridComponent } from '../grid/grid.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
  CommonModule, FormsModule
  ],
  declarations: [TopNavComponent, GridComponent],
  exports: [TopNavComponent, GridComponent]
})
export class TopNavModule { }

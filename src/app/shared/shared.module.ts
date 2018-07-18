import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {SpinnerComponent} from './components/spinner.component';
import {LayoutComponent} from './components/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    ContainerComponent,
    SpinnerComponent,
    LayoutComponent
  ],
  exports: [
    ContainerComponent,
    SpinnerComponent,
    LayoutComponent
  ]
})
export class SharedModule { }


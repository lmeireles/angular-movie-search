import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {
  MatButtonModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {SpinnerComponent} from './components/spinner.component';
import {LayoutComponent} from './components/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
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

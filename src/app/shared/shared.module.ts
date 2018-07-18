import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {SpinnerComponent} from './components/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ContainerComponent,
    SpinnerComponent
  ],
  exports: [
    ContainerComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }


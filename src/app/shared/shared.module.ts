import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './components/container.component';
import {Headline1Component} from './components/headline-1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContainerComponent,
    Headline1Component
  ],
  exports: [
    ContainerComponent,
    Headline1Component
  ]
})
export class SharedModule { }


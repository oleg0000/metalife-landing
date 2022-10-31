import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { LandingRoutingModule } from './landing-routing.module';



@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }

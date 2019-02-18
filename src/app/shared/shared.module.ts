import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './controls/input/input.component';
import { LabelComponent } from './controls/label/label.component';



@NgModule({
  declarations: [
    InputComponent,
    LabelComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputComponent,
    LabelComponent
  ]
})
export class SharedModule { }

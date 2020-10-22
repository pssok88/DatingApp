import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(), //forRoot() means that module needs to be initialized with root
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ], 
  exports: [
    BsDropdownModule,
    ToastrModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component'; // Adjust path as necessary

@NgModule({
  imports: [
    CommonModule,
    UserFormComponent // Import the standalone component
  ],
  exports: [
    UserFormComponent // Export the standalone component
  ]
})
export class UserFormModule { }

// workout-chart.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutChartComponent } from './workout-chart.component'; // Import your component

@NgModule({
  declarations: [
    WorkoutChartComponent, // Declare your component here
  ],
  imports: [
    CommonModule,
    // Other modules as needed
  ],
  exports: [
    WorkoutChartComponent // Optionally export if needed in other modules
  ]
})
export class WorkoutChartModule { }

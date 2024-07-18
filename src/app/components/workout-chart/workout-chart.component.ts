// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { UserDataService } from '../../user-data.service';
// import { User } from '../../user-data';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// // import Chart from 'chart.js/auto';
// import{Chart, registerables} from 'chart.js'
// Chart.register(...registerables);

// @Component({
//   selector: 'app-workout-chart',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './workout-chart.component.html',
//   styleUrls: ['./workout-chart.component.css']
// })
// export class WorkoutChartComponent implements OnInit {
//   @ViewChild('barCanvas') private barCanvas!: ElementRef;
//   barChart: any;

//   users: User[] = [];
//   uniqueWorkoutTypes = new Set<string>();

//   constructor(private userDataService: UserDataService) {
  
//   }


//   ngOnInit(): void {

//     this.users = this.userDataService.getUsers();
//     this.users.forEach(user => {
//       user.workouts.forEach(workout => {
//         this.uniqueWorkoutTypes.add(workout.type);  
//       });
//     });
//     const workoutMinutes = this.users.flatMap(user => 
//       user.workouts.map(workout => workout.minutes)
//     );
    
    
//     const uniqueWorkout = Array.from(this.uniqueWorkoutTypes);

//     const config = {
//       type: 'bar',
//       data: {
//         labels: uniqueWorkout.map(a=>a),
//         datasets: [
//           {
//             label: 'Workout Count',
//             backgroundColor: '#3e95cd',
//             data: workoutMinutes.map(a=>a)
//       }
//     ]
//   }
//     };
//   }
// }
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserDataService } from '../../user-data.service';
import { User } from '../../user-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-workout-chart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  barChart: any;

  users: User[] = [];
  uniqueWorkoutTypes = new Set<string>();

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.users = this.userDataService.getUsers();
    this.users.forEach(user => {
      user.workouts.forEach(workout => {
        this.uniqueWorkoutTypes.add(workout.type);
      });
    });
  }

  ngAfterViewInit(): void {
    this.createBarChart();
  }

  createBarChart(): void {
    const ctx = this.barCanvas.nativeElement.getContext('2d');
    const uniqueWorkout = Array.from(this.uniqueWorkoutTypes);

    const workoutMinutes = uniqueWorkout.map(type => {
      return this.users.reduce((total, user) => {
        return total + user.workouts
          .filter(workout => workout.type === type)
          .reduce((sum, workout) => sum + workout.minutes, 0);
      }, 0);
    });

    const config: ChartConfiguration = {
      type: 'bar' as ChartType,
      data: {
        labels: uniqueWorkout,
        datasets: [
          {
            label: 'Workout Minutes',
            backgroundColor: 'black',
            data: workoutMinutes
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    this.barChart = new Chart(ctx, config);
  }
}

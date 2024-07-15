// import { Component } from '@angular/core';
// import { UserData } from '../../user-data';
// import { LocalStorageItem } from '../../localStorage';
import { CommonModule } from '@angular/common';
//  import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);
//  @Component({
//   selector: 'app-workout-chart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './workout-chart.component.html',
//   styleUrl: './workout-chart.component.css'
// })
// export class WorkoutChartComponent {
//   localStorageItem: LocalStorageItem[] = [];
//    chart: any;

//   constructor() {
//     this.localStorageItem = UserData.map(item => new LocalStorageItem(item.id, item.name, item.workouts));
//   }

// public config: any = {
//   type: 'bar',
//   data: {
//     labels: ['JAN', 'FEB', 'MAR', 'APRIL'], // Example labels
//     datasets: [
//       {
//         label: 'Minutes',
//         data:[
//         0,10,20,30,40,50,60,70,80,90,100
//         ],
//         backgroundColor: 'rgba(0, 123, 255, 0.5)',
//         borderColor: 'rgba(0, 123, 255, 1)',
//         borderWidth: 1
//       }
//     ]
//   },
//   options: {
//   //   scales: {
//   //   //   y: {
//   //   //     beginAtZero: true
//   //   //   }
//   //   // }
//   // }
//   aspectRatio:1,
//   },
// };


//   ngOnInit(): void {
//     this.chart = new Chart('MyChart',this.config)
//   }

//   // getTotalMinutes(workouts: { type: string; minutes: number }[]): number {
//   //   return workouts.reduce((total, workout) => total + workout.minutes, 0);
//   // // }

// }
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart } from 'chart.js';
import { UserData, User, Workout } from '../../user-data';
import { LocalStorageItem } from '../../localStorage';

@Component({
  selector: 'app-workout-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-chart.component.html',
  styleUrl: './workout-chart.component.css'
})
export class WorkoutChartComponent implements AfterViewInit {
  localStorageItem: LocalStorageItem[] = [];
  chart: any;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.localStorageItem = UserData.map(item => new LocalStorageItem(item.id, item.name, item.workouts));
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // Transform the data to get total minutes per workout type for each user
  transformData() {
    const labels: string[] = [];
    const data: number[] = [];
    const backgroundColors: string[] = [];

    // this.localStorageItem.forEach(user => {
    //   user.workouts.forEach((workout: { type: any; minutes: any; }) => {
    //     const label = `${user.name} - ${workout.type}`;
    //     labels.push(label);
    //     data.push(workout.minutes);

    //   });
    // });

    // return { labels, data, backgroundColors };
  // }

  // Function to generate random color for each bar

  const config: any = {
    type: 'bar',
    data: {
      labels: [], // Placeholder for dynamic labels
      datasets: [
        {
          label: 'Minutes',
          data: [0,10,20,30,40,50,60],
          backgroundColor:'rgba(0, 123, 255, 1)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      aspectRatio: 1,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  // ngAfterViewInit(): void {
  //   if (this.isBrowser) {
  //     const transformedData = this.transformData();
  //     this.config.data.labels = transformedData.labels;
  //     this.config.data.datasets[0].data = transformedData.data;
  //     this.config.data.datasets[0].backgroundColor = transformedData.backgroundColors;

  //     const canvas = document.getElementById('MyChart') as HTMLCanvasElement;
  //     if (canvas && canvas.getContext) {
  //       this.chart = new Chart(canvas.getContext('2d')!, this.config);
  //     } else {
  //       console.error('Failed to create chart: canvas element or context not found');
  //     }
  //   }
  // }
}
}

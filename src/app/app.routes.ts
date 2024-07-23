import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';

export const routes: Routes = [
    {
        path:'home',component:UserFormComponent
    },
    {
        path:'list',component:WorkoutListComponent
    },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path:'chart',component:WorkoutChartComponent
    }

];

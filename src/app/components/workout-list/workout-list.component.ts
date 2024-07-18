// workout-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, Workout } from '../../user-data';
import { UserDataService } from '../../user-data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];
  errorMessage: string = '';
  workoutTypes: any;
  currentPage: number = 1;
  itemsPerPage: number = 5; // Default items per page
  totalPages: number = 0;
  constructor(private userDataService: UserDataService) {
    const dropdown = this.userDataService.getUsers().flatMap((a) => a.workouts);
    const dropdownfinal = Array.from(new Set(dropdown.map((b) => b.type)));
    this.workoutTypes = dropdownfinal;
  }

  ngOnInit(): void {
    this.users = this.userDataService.getUsers();
  }

  getTotalMinutes(userId: number): number {
    var user = this.users.find((u) => u.id === userId);
    if (!user) {
      return 0; // Handle case where user is not found
    }

    return user.workouts.reduce((total, workout) => total + workout.minutes, 0);
  }
  getworkoutcoma(userid: number): string {
    var user = this.users.find((u) => u.id === userid);

    let totalwokout = '';
    if (user) {
      // Calculate total minutes of workouts
      for (let i = 0; i < user.workouts.length; i++) {
        totalwokout += user.workouts[i].type;
        if (i < user.workouts.length - 1) {
          totalwokout += ','; // Add comma for all elements except the last one
        }
      }
      return totalwokout; // Return the accumulated workouts
    } else {
      return ''; // Return an empty string or handle the case where user is not found
    }
  }
  onChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    // alert(inputValue)
    //var user = this.users.find(u => u.workouts.types === inputValue);

    this.users = this.userDataService
      .getUsers()
      .filter((user) =>
        user.workouts.some((workout) => workout.type === inputValue)
      );
  }
  oninput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    // alert(inputValue)
    if (inputValue !== '') {
      // Filter users based on partial match of name
      this.users = this.userDataService
        .getUsers()
        .filter((user) =>
          user.name.toLowerCase().includes(inputValue.toLowerCase())
        );
    } else {
      this.users = this.userDataService.getUsers();
    }
  }
  fetchUsers(): void {
    this.userDataService
      .getPage(this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (users) => {
          this.users = users;
          this.totalPages = Math.ceil(
            this.userDataService.getTotalUsersCount() / this.itemsPerPage
          );
        },
        error: (err) => {
          this.errorMessage = err; // Handle error if needed
        },
      });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchUsers();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchUsers();
    }
  }

  onChangeItemsPerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1; // Reset to first page when changing items per page
    this.fetchUsers();
  }
}

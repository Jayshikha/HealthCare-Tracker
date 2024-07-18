import { Component, OnInit } from '@angular/core';
import { LocalStorageItem } from '../../localStorage';
import { User, UserData } from '../../user-data';
import { UserDataService } from '../../user-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  users: User[] = UserData;
  workoutTypes: any;
  constructor(private userDataService: UserDataService) {
    const dropdown = this.userDataService.getUsers().flatMap((a) => a.workouts);
    const dropdownfinal = Array.from(new Set(dropdown.map((b) => b.type)));
    this.workoutTypes = dropdownfinal;
    
  }

  adduser(event: any): void {
    event.preventDefault();

    const index = UserData.length;
    const userid = UserData[index - 1].id + 1;
    const username = (document.getElementById('userName') as HTMLInputElement)
      .value;
    const workoutType = (document.getElementById('choices') as HTMLInputElement)
      .value;
    // const workoutTime = (document.getElementById("workoutTime") as HTMLInputElement).value;
    const workoutTime = parseInt(
      (document.getElementById('workoutTime') as HTMLInputElement).value,
      10
    );

    const workouts = [{ type: workoutType, minutes: workoutTime }];
    const newuser: User = { id: userid, name: username, workouts: workouts };
    const existingUser = UserData.find((user) => user.name === username);

    if (!existingUser) {
      // User does not exist, add the new user
      const userid =
        UserData.length > 0 ? UserData[UserData.length - 1].id + 1 : 1;
      const newuser: User = { id: userid, name: username, workouts: workouts };
      this.userDataService.addUser(newuser);
      console.log('New user added:', newuser);
    } else {
      const newWorkout = { type: workoutType, minutes: workoutTime };

      // Add new workout to existing user's workouts array
      existingUser.workouts.push(newWorkout);

      // Log updated UserData
      console.log('Updated UserData:', UserData);
    }
    console.log(newuser);
  }
  ngOnInit(): void {}
}

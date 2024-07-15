import { Injectable } from '@angular/core';
import { User ,UserData} from './user-data';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private users: User[] =UserData;

  getUsers(): User[] {
    console.log('Fetching users:', this.users); 
    return this.users;
  }
 addUser(user: User): void {
    this.users.push(user);
    console.log('User added:', user);
  }
 getPage(currentPage: number, itemsPerPage: number): Observable<User[]> {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return of(this.users.slice(startIndex, endIndex));
}
getTotalUsersCount(): number {
  return this.users.length;
}

}
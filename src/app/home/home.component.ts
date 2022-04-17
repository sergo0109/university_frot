import { Component } from '@angular/core';
import {UserService} from "../_services/user.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  students: any = [];
  constructor(private userService: UserService,
              private router: Router,
              private tokenStorageService: TokenStorageService) {
    const isLoggedIn = !!this.tokenStorageService.getToken();


    if(isLoggedIn) {
      if(this.tokenStorageService.isAdmin()) {
        this.userService.getUsers().subscribe((students) => this.students = students );
      } else {
        this.router.navigate(['/profile', this.tokenStorageService.getUser().id])
      }
    }
  }

  deleteStudent(id:string) {
    this.userService.deleteStudent(id).subscribe((students) => {
        this.students = this.students.filter((student: any) => student.id !== id);
    } );
  }
}

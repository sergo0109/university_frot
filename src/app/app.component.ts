import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn ) {
       this.router.navigateByUrl('/home')
    }
  }

  logOut(){
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}

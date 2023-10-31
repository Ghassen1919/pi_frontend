import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_services/user-auth.service';
import { UserService } from 'src/app/_services/user.service';
import { ClaimService } from 'src/app/claim.service';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {
  currentUser: any;
  greeting: string = '';
  constructor(private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService,private http: HttpClient,private claimservice: ClaimService) { }

  ngOnInit(): void { this.claimservice.reloadOnce();
    this.userService.getCurrentUser().subscribe(
    (user) => {
      this.currentUser = user;
    },
    (error) => {
      // Handle errors, e.g., user not authenticated or other issues
      console.error('Error:', error);
    }
  );
    const now = new Date();
    const currentHour = now.getHours();

    // Set the greeting based on the time
    if (currentHour >= 5 && currentHour < 12) {
      this.greeting = 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Good Night';
    }
  }
  
  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['']);
  }
}

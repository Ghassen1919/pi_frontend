import { Component, OnInit } from '@angular/core';
import { PortefeuilleService } from 'src/app/portefeuille.service';
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css'],
})
export class PortefeuilleComponent implements OnInit {
  portefeuille: any;
  currentUser: any;

  constructor(private portefeuilleService: PortefeuilleService, private userService: UserService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user;

        if (this.currentUser && this.currentUser.portefeuille) {
          const userId = this.currentUser.portefeuille.idPortefeuille;

          this.portefeuilleService.getPortefeuille(userId).subscribe(
            (data) => {
              this.portefeuille = data;
            },
            (error) => {
              // Handle errors related to fetching the portefeuille data
              console.error('Error fetching portefeuille data:', error);
            }
          );
        } else {
          console.error('User or portefeuille data not available.');
        }
      },
      (error) => {
        // Handle errors, e.g., user not authenticated or other issues
        console.error('Error fetching user data:', error);
      }
    );
  }
}

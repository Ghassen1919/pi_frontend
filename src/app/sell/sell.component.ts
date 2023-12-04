import { Component, OnInit } from '@angular/core';
import { PortefeuilleService } from 'src/app/portefeuille.service';
import { UserService } from "../_services/user.service";
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  private currentUser: any;
  private portefeuille: any;
  instruments: any[] = [];
  showSellForm: { [key: string]: boolean } = {};
  sellQuantity: { [key: string]: number } = {};
  constructor(private portefeuilleService: PortefeuilleService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(
    (user) => {
      this.currentUser = user;

      if (this.currentUser && this.currentUser.portefeuille) {
        const userId = this.currentUser.portefeuille.idPortefeuille;

        this.portefeuilleService.getPortefeuille(userId).subscribe(
          (data) => {
            this.portefeuille = data;
            this.instruments
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
  openSellForm(symbol: string, quantity: number): void {
    // Set the symbol and reset the quantity when opening the sell form
    this.sellQuantity[symbol] = 0;
    this.showSellForm[symbol] = true;
  }

  sellInstrument(symbol: string): void {
    // Implement logic to initiate selling for the specific instrument
    // Use this.sellQuantity[symbol] to get the quantity
    // Example: this.instrumentService.sellInstrument(symbol, this.sellQuantity[symbol]);

    // After selling, close the sell form
    this.showSellForm[symbol] = false;
  }
}

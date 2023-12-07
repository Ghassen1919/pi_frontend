import { Component, OnInit } from '@angular/core';
import { PortefeuilleService } from 'src/app/portefeuille.service';
import { UserService } from "../_services/user.service";
import {Router} from "@angular/router";

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

  constructor(private portefeuilleService: PortefeuilleService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(
      (user) => {
        this.currentUser = user;

        if (this.currentUser && this.currentUser.portefeuille) {
          const userId = this.currentUser.portefeuille.idPortefeuille;

          this.portefeuilleService.getPortefeuille(userId).subscribe(
            (data) => {
              this.portefeuille = data;
              this.instruments = this.portefeuille.instrument;

              this.instruments.forEach(instrument => {
                this.sellQuantity[instrument.symbole] = 0; // Corrected reference to symbol
              });
            },
            (error) => {
              console.error('Error fetching portefeuille data:', error);
            }
          );
        } else {
          console.error('User or portefeuille data not available.');
        }
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }



  sellInstrument(symbol: string): void {
    const quantityToSell = this.sellQuantity[symbol];

    // Create the Ordre object with necessary properties
    const ordre = {
      quantite: quantityToSell,
      prixLimite:200,
      instrument: { symbole: symbol }, // Update with the correct structure
      typeOrdre: 'VENTE',
    };
    console.log(ordre);

    // Call the sellInstrument method from the service
    this.portefeuilleService.sellInstrument(ordre).subscribe(
      () => {
        // Success handling, if needed
        console.log('Instrument sold successfully');
        window.location.reload();
      },
      (error) => {
        // Error handling
        console.error('Error selling instrument:', error);
      }
    );

    // After selling, reset the sell quantity to 0
    this.sellQuantity[symbol] = 0;
  }
  navigateToSellLater(symbole: string) {
    this.router.navigate(['/sell-later', symbole]);
  }
}


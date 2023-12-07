import { Component, OnInit } from '@angular/core';
import {PortefeuilleService} from "../../portefeuille.service";

@Component({
  selector: 'app-orderbuy',
  templateUrl: './orderbuy.component.html',
  styleUrls: ['./orderbuy.component.css']
})
export class OrderbuyComponent implements OnInit {
  ordres!: any[];

  constructor(private portefeuilleService:PortefeuilleService) { }

  ngOnInit(): void {
    this.portefeuilleService.getAllOrdresvente().subscribe((data) => {
      this.ordres = data;
      console.log(data);
    });
  }
 buyOrder(order: any) {
    // Create an instance of Ordre with the required data


    // Call the service method to buy instrument
    this.portefeuilleService.buyInstrument(order).subscribe(
      (response) => {
        // Handle success response
        console.log('Buy instrument success:', response);
      },
      (error) => {
        // Handle error
        console.error('Buy instrument error:', error);
      }
    );
  }
}

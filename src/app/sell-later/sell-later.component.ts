import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sell-later',
  templateUrl: './sell-later.component.html',
  styleUrls: ['./sell-later.component.css']
})
export class SellLaterComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const symbole = String(routeParams.get('symbole'));
  }

}

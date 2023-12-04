import { ComponentFixture, TestBed } from '@angular/core/testing';

import {PortefeuilleComponent} from './Portefeuille.component';

describe('PortefeuilleComponent', () => {
  let component: PortefeuilleComponent;
  let fixture: ComponentFixture<PortefeuilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortefeuilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
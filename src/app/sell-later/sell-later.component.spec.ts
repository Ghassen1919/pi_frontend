import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellLaterComponent } from './sell-later.component';

describe('SellLaterComponent', () => {
  let component: SellLaterComponent;
  let fixture: ComponentFixture<SellLaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellLaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellLaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

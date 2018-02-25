import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesParkingComponent } from './vehicles-parking.component';

describe('VehiclesParkingComponent', () => {
  let component: VehiclesParkingComponent;
  let fixture: ComponentFixture<VehiclesParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

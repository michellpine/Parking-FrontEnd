import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterVehicleComponent } from './enter-vehicle.component';

describe('EnterVehicleComponent', () => {
  let component: EnterVehicleComponent;
  let fixture: ComponentFixture<EnterVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

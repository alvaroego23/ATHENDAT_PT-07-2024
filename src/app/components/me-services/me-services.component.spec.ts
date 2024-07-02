import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeServicesComponent } from './me-services.component';

describe('MeServicesComponent', () => {
  let component: MeServicesComponent;
  let fixture: ComponentFixture<MeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilebarProfileStartComponent } from './silebar-profile-start.component';

describe('SilebarProfileStartComponent', () => {
  let component: SilebarProfileStartComponent;
  let fixture: ComponentFixture<SilebarProfileStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilebarProfileStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilebarProfileStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

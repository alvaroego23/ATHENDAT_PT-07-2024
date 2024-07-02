import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarStartMovileComponent } from './bar-start-movile.component';

describe('BarStartMovileComponent', () => {
  let component: BarStartMovileComponent;
  let fixture: ComponentFixture<BarStartMovileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarStartMovileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarStartMovileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

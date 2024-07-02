import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIntroductionComponent } from './hero-introduction.component';

describe('HeroIntroductionComponent', () => {
  let component: HeroIntroductionComponent;
  let fixture: ComponentFixture<HeroIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

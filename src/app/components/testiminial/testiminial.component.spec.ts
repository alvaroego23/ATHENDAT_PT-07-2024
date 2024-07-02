import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestiminialComponent } from './testiminial.component';

describe('TestiminialComponent', () => {
  let component: TestiminialComponent;
  let fixture: ComponentFixture<TestiminialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestiminialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestiminialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

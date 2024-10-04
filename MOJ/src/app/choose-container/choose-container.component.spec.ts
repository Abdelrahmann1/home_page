import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseContainerComponent } from './choose-container.component';

describe('ChooseContainerComponent', () => {
  let component: ChooseContainerComponent;
  let fixture: ComponentFixture<ChooseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

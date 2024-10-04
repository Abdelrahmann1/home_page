import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementTableComponent } from './implement-table.component';

describe('ImplementTableComponent', () => {
  let component: ImplementTableComponent;
  let fixture: ComponentFixture<ImplementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImplementTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

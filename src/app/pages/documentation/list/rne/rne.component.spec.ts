import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RneComponent } from './rne.component';

describe('RneComponent', () => {
  let component: RneComponent;
  let fixture: ComponentFixture<RneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

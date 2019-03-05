import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PogPopupComponent } from './pog-popup.component';

describe('PogPopupComponent', () => {
  let component: PogPopupComponent;
  let fixture: ComponentFixture<PogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

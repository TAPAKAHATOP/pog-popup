import { TestBed } from '@angular/core/testing';

import { PogPopupService } from './pog-popup.service';

describe('PogPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PogPopupService = TestBed.get(PogPopupService);
    expect(service).toBeTruthy();
  });
});

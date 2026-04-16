import { TestBed } from '@angular/core/testing';

import { AvatarServiceTs } from './avatar.service.ts';

describe('AvatarServiceTs', () => {
  let service: AvatarServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

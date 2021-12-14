import { TestBed } from '@angular/core/testing';

import { LoginFormGuard } from './login-form.guard';

describe('LoginFormGuard', () => {
  let guard: LoginFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

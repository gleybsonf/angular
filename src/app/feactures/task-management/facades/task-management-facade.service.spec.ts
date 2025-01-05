import { TestBed } from '@angular/core/testing';

import { TaskManagementFacadeService } from './task-management-facade.service';

describe('TaskManagementFacadeService', () => {
  let service: TaskManagementFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskManagementFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataServiceService;

  let user=[{
    pageNumber:1
  }];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    
    service = TestBed.inject(DataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieve all the data', () => {
    service.getFriends({user}).subscribe((data)=>{
      expect(data.length).toBeGreaterThan(0); 
    });
  });
});

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsComponentComponent } from './friends-component.component';

describe('FriendsComponentComponent', () => {
  let component: FriendsComponentComponent;
  let fixture: ComponentFixture<FriendsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsComponentComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});

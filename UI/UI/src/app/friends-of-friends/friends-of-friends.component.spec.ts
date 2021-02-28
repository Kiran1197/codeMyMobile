import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsOfFriendsComponent } from './friends-of-friends.component';

describe('FriendsOfFriendsComponent', () => {
  let component: FriendsOfFriendsComponent;
  let fixture: ComponentFixture<FriendsOfFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsOfFriendsComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsOfFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});

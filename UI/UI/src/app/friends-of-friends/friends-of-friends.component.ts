import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../Shared/services/data-service.service';

@Component({
  selector: 'app-friends-of-friends',
  templateUrl: './friends-of-friends.component.html',
  styleUrls: ['./friends-of-friends.component.css']
})
export class FriendsOfFriendsComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }
  @Input() friendUsername: String;
  friendsOfFriendsData;
  ngOnInit(): void {
  
  }
  ngOnChanges()
  {
      let obj={
              "id":this.friendUsername["id"]
            }
          this.dataService.getFriends(obj).subscribe((friendsOfFriendsData)=>{
            if(friendsOfFriendsData)
            {
              this.friendsOfFriendsData=friendsOfFriendsData;
            } 
        });
  }  
    

}

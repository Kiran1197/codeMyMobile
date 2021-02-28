import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataServiceService } from "../Shared/services/data-service.service";
@Component({
  selector: 'app-friends-component',
  templateUrl: './friends-component.component.html',
  styleUrls: ['./friends-component.component.css']
})
export class FriendsComponentComponent implements OnInit,OnChanges {
  

  constructor(private dataService:DataServiceService,
    private cdc:ChangeDetectorRef) { }
  @Input() userName: String;
  @Output() friendDetails:any=new EventEmitter();
  friendsData;
  friendsOfFriendsData;
  ngOnInit(): void {
  }
  ngOnChanges()
  {
    
    let obj={
      "id":this.userName["id"]
    }
    console.log("reached",obj);
    this.dataService.getFriends(obj).subscribe((data)=>{
      this.friendsData=data;
      console.log("friendsData",this.friendsData)
      this.cdc.detectChanges();
    });
    
  }

  friendsDetails(data)
  {
      let obj={
        "name":data.FirstName+" "+data.LastName,
        "id":data.UserId
      }
      this.friendDetails.emit(obj);
    
  }

}

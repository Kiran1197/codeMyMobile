import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataServiceService } from './Shared/services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  userData;
  userName:any;
  friendsUsername:any;
  friendsOfFriends;
  pages=[1,2,3,4,5];
  selectedValue=this.pages[0];
  @ViewChild('friendsOfFriendsField', {static: true}) friendsOfFriendsFieldEl:ElementRef;
  @ViewChild('friends', {static: true}) el:ElementRef;
  constructor(private dataService:DataServiceService) { }
  ngOnInit(): void {
    let obj={
      "pageNumber":this.selectedValue
    };
    this.dataService.getUsersData(obj).subscribe((udata)=>{
        this.userData=udata;
    });
  }
  userDetails(data)
  {
    let obj={
      "name":data.FirstName+" "+data.LastName,
      "id":data.UserId
    }
    this.friendsOfFriends='';
    this.userName=obj
    setTimeout(()=>{
      this.el.nativeElement.scrollIntoView({behavior: 'smooth'}); 
    },2000)
  }
  friendData(data)
  {
    console.log("Fdata",data)
    this.friendsOfFriends=data;
    setTimeout(()=>{
      this.friendsOfFriendsFieldEl.nativeElement.scrollIntoView({behavior: 'smooth'}); 
    },2000)
  }
  selected(){
    let obj={
      "pageNumber":this.selectedValue
    };
    this.dataService.getUsersData(obj).subscribe((udata)=>{
        this.userData=udata;
    });
  }
}


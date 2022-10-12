import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {

  constructor(private myapi:ApiService) {
  this.fetchData()
}
fetchData=()=>{
 this.myapi.viewadddata().subscribe(
   (data)=>{
     this.all=data
   }
 )
}
  all:any={}

  ngOnInit(): void {
  }

}

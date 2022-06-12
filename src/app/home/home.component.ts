import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string ='Dat';
  public age: number = 22;
  public family = ['Thanh','Hoa','Tuan','Dat'];
  public family2 = [
    {name:'Thanh',age:60,sex:true},
    {name:'Hoa',age:50,sex:false},
    {name:'Tuan',age:40,sex:true},
    {name:'Dat',age:30,sex:true}];

 
  constructor() { }

  ngOnInit(): void {

  }

  public resetName(){
    this.name = '';
  }

}

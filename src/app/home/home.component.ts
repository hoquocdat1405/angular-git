import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name: string ='Dat';
  public age: number = 22;
  public familyName = ['THanh','Hoa','Tuan','Dat'];
  constructor() { }

  ngOnInit(): void {

  }

  public resetName(){
    this.name = '';
  }

}

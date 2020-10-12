import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() menuItem = new EventEmitter<String>()
  constructor() { }

  ngOnInit(): void {
  }


  getMenuItem(menuItem:string){
    console.log(menuItem);

    this.menuItem.emit(menuItem)
    
  }

}

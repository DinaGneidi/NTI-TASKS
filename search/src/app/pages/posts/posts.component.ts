import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  status:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(){
    this.status=!this.status
  }

}

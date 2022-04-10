import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;


  constructor(
    public userService: UsersService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data
      console.log(data);
    });
  }

}

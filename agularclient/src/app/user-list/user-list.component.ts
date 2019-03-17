import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[];
  constructor(private usersService: UserServiceService) {

  }

  ngOnInit() {
    this.usersService.findAll().subscribe( data => {
      this.users = data;
    })
  }

}

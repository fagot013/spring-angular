import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User;
  constructor(private userService: UserServiceService, private router: Router) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.saveUser(this.user).subscribe( data => {
        this.goToUsersList();
      }
    )
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  filterDateFrom: Date;

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  newUser(): void{
    this.submitted=false;
    this.user= new User();
  }

  save(){
    this.userService.createUser(this.user).subscribe(data => {
      this.user = new User();
      this.list();
    },
     error => console.log(error)
    );
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

  list(){
    this.router.navigate(['/users']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User = new User();
  submitted = false;

  FilterDateFrom: Date;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    /*
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id).subscribe(data =>{this.user = data;}, error => console.log(error));
    */
  
  }

  updateUser(){
   
    this.user.id
    console.log('params id '+ this.route.snapshot.params['id'])
    console.log('id '+this.user.id)
    this.userService.updateUser(this.user).subscribe(data => {
      this.user = new User();
      this.list();
    },
     error => console.log(error)
    );
  }


  onSubmitUpdate(){
    this.submitted=true;
    this.user.id = this.route.snapshot.params['id']; 
    this.updateUser();
  }

  list(){
    this.router.navigate(['/users']);
  }
}

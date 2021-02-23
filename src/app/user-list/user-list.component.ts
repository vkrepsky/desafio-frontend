import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from "../user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
   users: Observable<User[]>;
   user: User

  constructor(private userService: UserService, private router: Router) { }

  
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.users = this.userService.getUserList();
  }

  getByDocumento(id: number){
    console.log('foi');
    this.users = this.userService.getUser(id);
  }

  getByName(nome: string){
    this.users = this.userService.getUserByName(nome);
  }

  getByTelefone(telefone: string){
    
    this.users = this.userService.getUserByTelefone(telefone);
  }

  getHospedados(){
    this.users = this.userService.getUsersHospedados();
  }

  getNaoHospedados(){
    this.users = this.userService.getUsersNaoHospedados();
  }

  updateUser(id: number){
    this.router.navigate(['update',id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          this.loadData();
        },
        error => console.log(error));
  }
}


import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from "./create-user/create-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes =[
    {path: '', redirectTo: 'user', pathMatch: 'full'},
    {path: 'users', component: UserListComponent},
    {path: 'add', component: CreateUserComponent},
    {path: 'update/:id', component: UpdateUserComponent},
];

 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
 })

 export class AppRoutingModule{}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUrl = 'http://localhost:8080/get';
  private setUrl ='http://localhost:8080/set'

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any>{
    return this.http.get(this.getUrl+'/documento?id='+id);
  }

  getUserByName(nome: string): Observable<any> {
    return this.http.get(this.getUrl+'/nome?nome='+nome);
  }

  getUserByTelefone(telefone: string): Observable<any> {
    return this.http.get(this.getUrl+'/telefone?telefone='+telefone);
  }

  createUser(user: Object): Observable<Object> { 
    return this.http.post(this.setUrl, user);
  }

  updateUser(user: User): Observable<Object> {
    return this.http.put(this.setUrl+'?id='+user.id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.setUrl+'?id='+id);
  }
 

  getUsersHospedados(): Observable<any> {
    return this.http.get(this.getUrl+'/hospedados');
  }

  getUsersNaoHospedados(): Observable<any> {
    return this.http.get(this.getUrl+'/naoHospedados');
  }

  getUserList(): Observable<any> {
    return this.http.get(this.getUrl+'/all');
  }

 
}

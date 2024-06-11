import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url:'http://localhost:8888/serverPHP' | any; 
  data:any;
  constructor(private http:HttpClient) {}


  setCategories(categories:any){
    localStorage.setItem('categories', JSON.stringify(categories));
    // this.router.navigate(['/']);
  }
  getCategoriesFromLocalStorage() {
    this.data = localStorage.getItem('categories') ;
    return JSON.parse(this.data) ;
  }
  removeCategories(){
    localStorage.removeItem("categories");
  }

  getCategories(token: any):Observable<Object>{
    return this.http.post(`${this.url}/getCategories.php`, token);
  }
  insertCategory(data: any):Observable<Object>{
    return this.http.post(`${this.url}/insertCategory.php`, data);
  }
  getCategory(id:any){
    return this.http.post(`${this.url}/getCategory.php`, id);
  }
  uptadeCategory(data: any){
    return this.http.post(`${this.url}/updateCategory.php`, data);
  }
  deleteCategory(data: any){
    return this.http.post(`${this.url}/deleteCategory.php`, data);
    
  }
}
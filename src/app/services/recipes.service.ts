import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  url:'http://localhost:8888/serverPHP' | any; 
  constructor(private http:HttpClient) {}

  getRecipes(token: any):Observable<Object>{
    return this.http.post(`${this.url}/getRecipes.php`,token);
  }

  getRecipe(id:any){
    return this.http.post(`${this.url}/getRecipe.php`, id);
  }
  insertRecipe(recipe:any):Observable<Object>{
    return this.http.post(`${this.url}/insertRecipe.php`, recipe);
  }

  getRecipesFromCategory(data:any):Observable<Object>{
    return this.http.post(`${this.url}/getRecipesFromCategory.php`,data);
  }
  uptadeRecipe(data: any){
    return this.http.post(`${this.url}/updateRecipe.php`, data);
  }
  deleteRecipe(data: any){
    return this.http.post(`${this.url}/deleteRecipe.php`, data);

  }
}

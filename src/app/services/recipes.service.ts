import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http:HttpClient) {}

  getRecipes(token: any):Observable<Object>{
    return this.http.post(`${environment.url}/getRecipes.php`,token);
  }

  getRecipe(id:any){
    return this.http.post(`${environment.url}/getRecipe.php`, id);
  }
  insertRecipe(recipe:any):Observable<Object>{
    return this.http.post(`${environment.url}/insertRecipe.php`, recipe);
  }

  getRecipesFromCategory(data:any):Observable<Object>{
    return this.http.post(`${environment.url}/getRecipesFromCategory.php`,data);
  }
  uptadeRecipe(data: any){
    return this.http.post(`${environment.url}/updateRecipe.php`, data);
  }
  deleteRecipe(data: any){
    return this.http.post(`${environment.url}/deleteRecipe.php`, data);

  }
}

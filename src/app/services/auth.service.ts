import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router:Router,
    private http:HttpClient) { }

 canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (localStorage.getItem('token')) {
			return true;
		} 
    else {
			this.router.navigate(['/sign-in']);
			return false;
		}
	}

   logIn(data:any) {
     localStorage.setItem('token', JSON.stringify(data));
     this.router.navigate(['/']);
  }

  getLogin() {
    return localStorage.getItem('token') ;
  }

  logOut() {
    localStorage.removeItem("token");
    this.router.navigate(['/sign-in']);
  }
  deleteToken(token:any){
    return this.http.post(`${environment.url}/deleteToken.php`, token);
  }
  insertUser(user: object) {
    return this.http.post(`${environment.url}/insertUser.php`, user);

  }
  getUser(user: object) {
    return this.http.post(`${environment.url}/getUser.php`, user);
  }

  changePassword(user: object) {
    return this.http.post(`${environment.url}/changePassword.php`, user);
  }
}

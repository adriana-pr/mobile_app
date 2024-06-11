import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,
    private authUser: AuthService
    ) {}

  ngOnInit() {
    // if(this.authUser.getLogin() != null)
    // this.router.navigate(['/home']);
  }
}

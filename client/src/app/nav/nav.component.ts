import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../_models/Login';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
  
export class NavComponent implements OnInit {
  model: any = {};
  //currentUser$: Observable<User>;

  constructor(public accountService: AccountService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigate(['/members']);
    }, error => {
        console.log(error);
        this.toastr.error(error.error);
    });
  }
  
  logout() {
    this.model = {
      username: '',
      password: ''
    }
    this.accountService.logout();
    this.router.navigate(['/']);
  }

  //will use async pipe to replace this
  // getFCurrentUser() {
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //       console.log(error);
  //   })
  // }

}

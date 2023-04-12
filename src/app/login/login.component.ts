import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public formLog!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ){
    this.formLog = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.login(this.formLog.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

}

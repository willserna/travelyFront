import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formReg!: FormGroup;

  constructor (
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.formReg = this.formBuilder.group({
      email: "",
      password: ""
    })

  }

  get controlsForm (): any{
    return this.formReg.controls;
  }

  onSubmit() {
    var credentials = {
      email: this.formReg.value.email,
      password: this.formReg.value.password
    }

    this.userService.register(credentials)
     .then(response => {
       console.log(response);
       this.router.navigate(['/login'])
    })
     .catch(error => console.log(error));


  }



}

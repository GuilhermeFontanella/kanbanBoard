import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: [],
      senha: []
    })
  }



  login(): void {
    this.authService.login(this.form.value).subscribe((response: any) => {
      if (response) {
        this.router.navigate(['/'])
      } else {
        return;
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actions, ofActionDispatched, ofActionErrored, ofActionSuccessful, Store } from '@ngxs/store';
import { MessageService } from 'primeng/api';
import { pipe, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AUTH } from 'src/app/shared/interface/auth';
import { LOGIN } from 'src/app/store/auth/auth.action';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  unsubsribe$ = new Subject();

  constructor(
    private router: Router,
    private store: Store,
    private fb: FormBuilder,
    private messageService: MessageService,
    private action: Actions) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  onLogin() {
    const payload: AUTH.LOGIN_PAYLOAD = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    }
    this.store.dispatch(new LOGIN(payload)).subscribe(state => {
      console.log('state; ', state);

      if (state.AuthState.isLoggedIn) {
      this.router.navigate(['/'])

      } else {
        this.messageService.add({ key: 'bc', severity: 'error', summary: 'Login failed', detail: 'Incorrect username or password' });
      }
    })
  }

  showBottomCenter() {
    this.messageService.add({ key: 'bc', severity: 'error', summary: 'Info', detail: 'Message Content' });
  }
  ngOnDestroy(): void {

    this.unsubsribe$.next();
    this.unsubsribe$.complete();
  }
}

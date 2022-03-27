import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastService } from 'src/app/providers/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private toastService: ToastService
  ) {
    this.formGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const v = this.validateForm();
    if (v.status == false) {
      this.toastService.show(v.msg, 'error');
      return;
    }
  }

  validateForm() {
    const fg = this.formGroup.value;
    let msg = '';
    if (!fg.username.trim()) {
      msg = 'Please provide Username';
    } else if (!fg.password) {
      msg = 'Please provide password';
    } else {
      msg = '';
    }
    return {
      msg: msg,
      status: msg ? false : true
    };
  }

}

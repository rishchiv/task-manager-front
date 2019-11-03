import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public loading: boolean = false;
  public signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public signin() {
    console.log('work');
  }

  private createForm() {
    this.signinForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  hasError(field: string, errorName: string) {
    return this.signinForm.get(field).errors[errorName];
  }

  invalid(field: string) {
    return this.signinForm.get(field).touched && this.signinForm.get(field).invalid;
  }
}

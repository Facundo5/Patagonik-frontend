import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-accountrecovery',
  templateUrl: './accountrecovery.component.html',
  styleUrls: ['./accountrecovery.component.css']
})
export class AccountrecoveryComponent implements OnInit {

  public formRecoveryAccount!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRecoveryAccount = this.formBuilder.group({
      email: ['',[Validators.required]]
    })
  }
  public recoveryaccount(){
    console.log("debo crearte aun reference: API - RECOVERY ACCOUNT")
  }
}

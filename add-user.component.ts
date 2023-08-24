import { Component, OnInit } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Output() userAdded = new EventEmitter<any>();
  modal:any[]=[];
  userForm :FormGroup

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('',[Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {

    if (this.userForm = true) {
      const newUser = {
      };
      this.userAdded.emit(newUser);
      this.modal.close();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
users:any[]=[];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openAddUserModal() {
    const modalRef = this.modalService.open(AddUserComponent);
    modalRef.componentInstance.userAdded.subscribe((newUser: any) => {
      if (newUser) {
        this.users.push(newUser);
      }
    });
  }
  onUserAdded(newUser: any) {
    this.users.push(newUser);
  }

  deleteSelectedUsers() {
    this.users = this.users.filter(user => !user.selected);
  }
}





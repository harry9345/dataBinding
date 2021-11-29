import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { user } from "../app-interface";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
})
export class AddUserComponent implements OnInit {
  users: user[] = [
    {
      mail: "a@a.com",
      passwod: "dsf",
      address: "sdafsdf",
    },
    {
      mail: "b@b.com",
      passwod: "dfghywtsf",
      address: "sdafs3245345df",
    },
    {
      mail: "b@u.com",
      passwod: "d547sf",
      address: "sdaf123434sdf",
    },
    {
      mail: "98@789.com",
      passwod: "ds789786",
      address: "sdafsdf78967896798879",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  @Output() onAddClick = new EventEmitter<user[]>();

  public saveTo(mail: string, password: string, address: string, e: Event) {
    e.preventDefault();
    let u: user = {
      mail: mail,
      passwod: password,
      address: address,
    };
    this.users.push(u);
    this.onAddClick.emit(this.users);
  }
}

import { Component } from "@angular/core";

import { user } from "./app-interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name: string = "hassan";
  users: user[] = [];
  constructor() {}

  public ngOnInIt() {}

  public userAdded(users: user[]) {
    this.users = users;
  }

  public onClick(val: HTMLInputElement) {
    console.log(val);
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { user } from "../app-interface";

@Component({
  selector: "app-user-table",
  templateUrl: "./user-table.component.html",
})
export class UserTableComponent implements OnInit {
  @Input() users: user[] = [];
  constructor() {}

  ngOnInit(): void {}
}

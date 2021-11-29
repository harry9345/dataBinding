import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserTableComponent } from "./user-table/user-table.component";

@NgModule({
  declarations: [AppComponent, AddUserComponent, UserTableComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

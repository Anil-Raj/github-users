import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  userList$: Observable<any>;

  constructor(private userService: UserService, public router: Router) {}

  ngOnInit() {
    this.userList$ = this.userService.fetchUsers();
  }
  onSelect(user) {
    this.router.navigate(["user", user.login]);
  }
}

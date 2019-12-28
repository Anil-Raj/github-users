import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  user: Object;
  repos$: any;
  constructor(private userService: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.userService
      .fetchUser(this.route.snapshot.paramMap.get("id"))
      .subscribe(user => {
        console.log(user);
        return (this.user = user);
      });
    this.repos$ = this.userService.fetchRepos(
      this.route.snapshot.paramMap.get("id")
    );
  }
}

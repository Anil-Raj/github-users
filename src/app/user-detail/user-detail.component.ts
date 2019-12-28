import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  user$: Observable<any>;
  repos$: Observable<any>;
  constructor(private userService: UserService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.user$ = this.userService.fetchUser(
      this.route.snapshot.paramMap.get("id")
    );
    this.repos$ = this.userService.fetchRepos(
      this.route.snapshot.paramMap.get("id")
    );
  }
}

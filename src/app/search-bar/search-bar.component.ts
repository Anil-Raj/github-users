import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  searchUser: any;

  constructor(public router: Router) {}

  ngOnInit() {}
  onSearch() {
    this.router.navigate(["user", this.searchUser]);
  }
}

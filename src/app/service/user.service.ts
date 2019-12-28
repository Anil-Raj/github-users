import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  base_url = environment.base_url;
  constructor(private http: HttpClient) {}
  fetchUsers() {
    return this.http.get(this.base_url + "users");
  }
  fetchUser(userName) {
    return this.http.get(this.base_url + "users/" + userName);
  }
  fetchRepos(userName) {
    return this.http.get(this.base_url + "users/" + userName + "/repos");
  }
}

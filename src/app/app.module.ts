import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserService } from "./service/user.service";
import {
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    UserListComponent,
    UserDetailComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ItemService } from "./item.service";
import { ItemComponent } from "./item.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ItemComponent],
  bootstrap: [AppComponent],
  providers: [ItemService]
})
export class AppModule {
  constructor() {}
}

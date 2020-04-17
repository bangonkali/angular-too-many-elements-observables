import { Component, Input } from "@angular/core";
import { IItem } from "./IItem";

@Component({
  selector: "data-item",
  templateUrl: "./item.component.html",
})
export class ItemComponent {
  @Input('data') data: IItem;
  changingValue : string = "";

  constructor() {

  }

  async init() {
    
  }
}

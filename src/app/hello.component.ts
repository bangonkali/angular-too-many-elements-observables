import {
  Component,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit
} from "@angular/core";
import { IItem } from "./IItem";
import { ItemService } from "./item.service";
import Promise from "bluebird";
import { Subscription, Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnDestroy, OnInit {
  items: IItem[] = Array<IItem>();
  shouldRefresh = false;

  trackByFunction(index, item) {
    return this.items[index];
  }

  constructor(
    private itemService: ItemService,
    private ref: ChangeDetectorRef
  ) {
    this.ref.detach(); // initial detach so that renderer will not watch this
    this.init(); // this is an async call to initialize
  }

  ngOnDestroy() {
    this.shouldRefresh = false;
  }

  ngOnInit() {

  }

  createItemClasses() {}

  createIItemInterface() {}

  async init() {
    // Start getting data from api.
    await this.refresh();

    // Manually set interval for getting data.
    while (this.shouldRefresh) {
      await Promise.delay(5000);
      this.refresh();
    }
  }

  async delayedRefresh() {
    await Promise.delay(5000);
    this.refresh();
  }

  refresh() {
    const itemsObservable = this.itemService.getItems();
    itemsObservable.subscribe((items: Array<IItem>) => {
      this.items = items;
      this.ref.detectChanges(); // detect often
      this.ref.detach(); // detach after initial render.
    });
  }
}

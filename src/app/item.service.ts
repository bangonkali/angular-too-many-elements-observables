import { Injectable } from "@angular/core";
import { IItem } from "./IItem";
import { Subscription, Observable, from } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ItemService {
  total = 1000;
  refreshCounter = 0;

  getItems(items: number = 1000): Observable<Array<IItem>> {
    // https://rxjs-dev.firebaseapp.com/api/index/function/from
    return from(new Promise<Array<IItem>>((resolve, reject) => {
      const _items = [];
      for (let i = 0; i < this.total; i++) {
        if (i % 2 == 0) {
          _items.push({
            id: i,
            message: `message ${i.toString()}`,
            date: new Date()
          });
        } else {
          _items.push({
            id: i,
            message: `message ${i.toString()} + ${this.refreshCounter}`,
            date: new Date()
          });
        }
      }
      resolve(_items);
    }));
  }
}

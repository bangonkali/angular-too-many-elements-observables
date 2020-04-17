import { IItem } from "./IItem";

class Item implements IItem {
  constructor(
    public id: number,
    public message: string,
    public timestamp: Date
  ) {}
}

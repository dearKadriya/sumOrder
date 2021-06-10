import Buyable from "./Buyable";
import Movie from "./Movie";

export default class Cart {
    private items: Buyable[] = [];

    add(item: Buyable): void {
        this.items.push(item);
    }
    getAll(): Buyable[] {
        return [...this.items];
    }
}


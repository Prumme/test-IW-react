import EmailSenderService from "../EmailSenderService/EmailSenderService";
import { User } from "../User/User";

export interface Item {
  name: string;
  content: string;
  creationDate: Date;
}

export class TodoList extends Array<Item> {
  private user: User;

  constructor(user: User) {
    super();
    if (user instanceof User && !user?.isValid())
      throw new TodoListUserNotValidException("User is not valid");
    this.user = user;
  }

  get canInsert() {
    const lastItem = this[this.length - 1];
    const targetDate30minBefore: Date = new Date();
    targetDate30minBefore.setMinutes(targetDate30minBefore.getMinutes() - 30);

    return (
      lastItem === undefined || lastItem.creationDate < targetDate30minBefore
    );
  }

  get full() {
    return this.length >= 10;
  }

  get LimitApproaching() {
    return this.length === 8;
  }

  add(item: Item) {
    if (!this.canInsert)
      throw new TodoListCannotInsertException("Cannot insert item");
    if (this.full)
      throw new TodoListIsFullException("Cannot insert item, list is full");
    this.push(item);
    if (this.LimitApproaching) {
      EmailSenderService.send(
        "You are approaching the limit of 10 items in your list"
      );
    }
  }

  remove(item: Item) {
    this.splice(this.indexOf(item), 1);
  }

  save() {
    throw new Error("Not implemented");
  }
}

export class TodoListCannotInsertException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TodoListCannotInsertException";
  }
}

export class TodoListIsFullException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TodoListIsFullException";
  }
}

export class TodoListUserNotValidException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TodoListUserNotValidException";
  }
}

import {
  TodoList,
  Item,
  TodoListCannotInsertException,
  TodoListIsFullException,
  TodoListUserNotValidException,
} from "./TodoList";
import { User } from "../User/User";
import EmailSenderService from "../EmailSenderService/EmailSenderService";

const fullItems: Item[] = [];

jest.mock("../EmailSenderService/EmailSenderService", () => {
  return {
    send: jest.fn(),
  };
});

for (let i = 0; i < 10; i++) {
  let date = new Date();
  date.setMinutes(new Date().getMinutes() - (10 - i) * 35);
  fullItems.push({
    name: `Item${i}`,
    content: `Content${i}`,
    creationDate: date,
  });
}

const user: User = new User(
  "Doe",
  "John",
  "johndoe@maill.fr",
  new Date(),
  "Password123"
);

const dateOfBirth = new Date();
dateOfBirth.setFullYear(dateOfBirth.getFullYear() - 18);
user.setDateOfBirth(dateOfBirth);

const todoList: TodoList = new TodoList(user);

const itemTest: Item = {
  name: "Item1",
  content: "Content1",
  creationDate: new Date(),
};

describe("Class TodoList", () => {
  beforeAll(() => {
    jest.spyOn(todoList, "save").mockImplementation(() => {
      return "Saved";
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    todoList.splice(0, todoList.length);
  });

  test("Add item", () => {
    todoList.add(itemTest);

    expect(todoList.length).toBe(1);
  });

  test("Can insert two items in less than 30 minutes", () => {
    todoList.add(itemTest);

    const itemTest2: Item = {
      name: "Item2",
      content: "Content2",
      creationDate: new Date(),
    };

    expect(() => todoList.add(itemTest2)).toThrow(
      TodoListCannotInsertException
    );
    expect(todoList.length).toBe(1);
  });

  test("Can insert two items in more than 30 minutes", () => {
    const inOneHour = new Date();
    inOneHour.setHours(inOneHour.getHours() - 1);

    const itemTest1: Item = {
      name: "Item1",
      content: "Content1",
      creationDate: inOneHour,
    };
    todoList.add(itemTest1);

    const itemTest2: Item = {
      name: "Item2",
      content: "Content2",
      creationDate: new Date(),
    };
    todoList.add(itemTest2);

    expect(todoList.length).toBe(2);
  });

  test("Cannot insert more than 10 items", () => {
    for (let item of fullItems) todoList.add(item);
    expect(todoList.length).toBe(10);
    expect(todoList.full).toBe(true);
    expect(() => todoList.add(itemTest)).toThrow(TodoListIsFullException);
  });

  test("invalid user for list", () => {
    let userNotValid = new User("Doe", "John", "", new Date(), "Password123");
    expect(() => new TodoList(userNotValid)).toThrow(
      TodoListUserNotValidException
    );
  });

  test("Send email when approaching limit", () => {
    for (let i = 0; i < 7; i++) {
      let date = new Date();
      date.setMinutes(new Date().getMinutes() - (7 - i) * 35);
      todoList.add({
        name: `Item${i}`,
        content: `Content${i}`,
        creationDate: date,
      });
    }

    todoList.add(itemTest);
    expect(todoList.length).toBe(8);
    expect(EmailSenderService.send).toHaveBeenCalledWith(
      "You are approaching the limit of 10 items in your list"
    );
  });

  test("Save list", () => {
    let spy = jest.spyOn(todoList, "save").mockImplementation(() => "Saved");
    todoList.save();
    expect(spy).toHaveBeenCalled();
  });
});

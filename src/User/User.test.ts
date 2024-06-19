import { User } from "./User";


const user: User = new User(
  "Doe",
  "John",
  "johndoe@email.fr",
  new Date("1990-01-01"),
  "Password123"
);

describe("Class User", () => {
  beforeEach(() => {
    user.setFirstname("John");
    user.setLastname("Doe");
    user.setEmail("johndoe@mail.fr");

    const dateOfBirth = new Date();
    dateOfBirth.setFullYear(dateOfBirth.getFullYear() - 18);
    user.setDateOfBirth(dateOfBirth);
  });

  test("User with all fields valid", () => {
    expect(user.isValid()).toBe(true);
  });

  test("User without Firtname", () => {
    user.setFirstname("");

    expect(user.isValid()).toBe(false);
  });

  test("User without Lastname", () => {
    user.setLastname("");

    expect(user.isValid()).toBe(false);
  });

  test("User without Email", () => {
    user.setEmail("");

    expect(user.isValid()).toBe(false);
  });

  test("User too young", () => {
    //User Born 10 years ago
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    user.setDateOfBirth(tenYearsAgo);

    expect(user.isValid()).toBe(false);
  });

  test("User with invalid email", () => {
    user.setEmail("johndoemail.fr");

    expect(user.isValid()).toBe(false);
  });
});

describe("Class Verification User", () => {
  beforeEach(() => {
    user.setFirstname("John");
    user.setLastname("Doe");
    user.setEmail("johndoe@mail.fr");

    const dateOfBirth = new Date();
    dateOfBirth.setFullYear(dateOfBirth.getFullYear() - 18);
    user.setDateOfBirth(dateOfBirth);
  });

  test("Email validation", () => {
    expect(user.isEmailValid()).toBe(true);
  });

  test("Email validation without @", () => {
    user.setEmail("johndoeemail.fr");

    expect(user.isEmailValid()).toBe(false);
  });

  test("Email validation without .", () => {
    user.setEmail("johndoe@mailfr");

    expect(user.isEmailValid()).toBe(false);
  });

  test("Email validation without @ and .", () => {
    user.setEmail("johndoemailfr");

    expect(user.isEmailValid()).toBe(false);
  });

  test("Email validation with multiple @", () => {
    user.setEmail("johndoe@mail@fr");

    expect(user.isEmailValid()).toBe(false);
  });

  test("Password validation less than 8 char", () => {
    user.setPassword("Pass12");

    expect(user.isPasswordValid()).toBe(false);
  });

  test("Password validation without uppercase", () => {
    user.setPassword("password123");

    expect(user.isPasswordValid()).toBe(false);
  });

  test("Password validation without lowercase", () => {
    user.setPassword("PASSWORD123");

    expect(user.isPasswordValid()).toBe(false);
  });

  test("Password validation without number", () => {
    user.setPassword("Password");

    expect(user.isPasswordValid()).toBe(false);
  });
});

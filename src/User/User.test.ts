import { User } from "./User";

const validWitness = new User();
validWitness.setFirstname("John");
validWitness.setLastname("Doe");
validWitness.setEmail("witness@mail.fr");
validWitness.setDateOfBirth(new Date("1990-01-01"));

describe("Class User", () => {
  test("User with all fields valid", () => {
    const user = new User();
    user.setFirstname("John");
    user.setLastname("Doe");
    user.setEmail("johndoe@mail.fr");
    user.setDateOfBirth(new Date("1990-01-01"));

    expect(user.isValid()).toBe(true);
  });

  test("User with only Firtname and lastname", () => {
    const user = new User();
    user.setFirstname("John");
    user.setLastname("Doe");

    expect(user.isValid()).toBe(false);
  });

  test("User with only Email", () => {
    const user = new User();
    user.setEmail("test@mail.fr");

    expect(user.isValid()).toBe(false);
  });

  test("User with only Date of birth", () => {
    const user = new User();
    user.setDateOfBirth(new Date("1990-01-01"));

    expect(user.isValid()).toBe(false);
  });

  test("User too young", () => {
    const user = new User();
    user.setFirstname("John");
    user.setLastname("Doe");
    user.setEmail("johndoe@mail.fr");
    //User Born 10 years ago
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

    user.setDateOfBirth(tenYearsAgo);

    expect(user.isValid()).toBe(false);
  });

  test("User with invalid email", () => {
    const user = new User();
    user.setFirstname("John");
    user.setLastname("Doe");
    user.setEmail("johndoemail.fr");
    user.setDateOfBirth(new Date("1990-01-01"));

    expect(user.isValid()).toBe(false);
  });
});

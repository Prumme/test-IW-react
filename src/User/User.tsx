export class User {
  private lastname: string | null;
  private firstname: string | null;
  private email: string | null;
  private dateOfBirth: Date | null;
  private password: string | null;

  constructor(
    lastname: string,
    firstname: string,
    email: string,
    dateOfBirth: Date,
    password: string
  ) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
  }

  setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  getLastname(): string | null {
    return this.lastname;
  }

  setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  getFirstname(): string | null {
    return this.firstname;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getEmail(): string | null {
    return this.email;
  }

  isEmailValid(): boolean {
    if (this.email === null) {
      return false;
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  setDateOfBirth(dateOfBirth: Date): void {
    this.dateOfBirth = dateOfBirth;
  }

  getDateOfBirth(): Date | null {
    return this.dateOfBirth;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getPassword(): string | null {
    return this.password;
  }

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getAge(): number {
    if (this.dateOfBirth === null) {
      return 0;
    }

    const diff = Date.now() - this.dateOfBirth.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  isPasswordValid(): boolean {
    if (this.password === null) {
      return false;
    }
    if (/^[A-Za-z0-9_]{0,255}$/g.test(this.password) === false) {
      return false;
    }
    return this.password.length >= 8 && this.password.length <= 40;
  }

  isValid(): boolean {
    if (
      this.lastname === null ||
      this.lastname.length === 0 ||
      this.firstname === null ||
      this.firstname.length === 0 ||
      this.email === null ||
      this.email.length === 0 ||
      this.isEmailValid() === false ||
      this.dateOfBirth === null ||
      this.getAge() <= 13 ||
      this.isPasswordValid() === false
    ) {
      return false;
    }
    return true;
  }
}

function UserrR() {
  return <div>Userr</div>;
}

export default UserrR;

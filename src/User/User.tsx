export class User {
  private lastname: string | null;
  private firstname: string | null;
  private email: string | null;
  private dateOfBirth: Date | null;

  constructor() {
    this.lastname = null;
    this.firstname = null;
    this.email = null;
    this.dateOfBirth = null;
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

  isValid(): boolean {
    if (
      this.lastname === null ||
      this.firstname === null ||
      this.email === null ||
      this.isEmailValid() === false ||
      this.dateOfBirth === null ||
      this.getAge() <= 13
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

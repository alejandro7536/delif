export class User {

  constructor(
    public email: string,
    public password: string,
    public name?: string,
    public surname?: string,
    public uid?: string

  ) { }
}

export interface UserInterface {

  email?: string;
  password?: string;
  name?: string;
  surname?: string;
  uid?: string;

}

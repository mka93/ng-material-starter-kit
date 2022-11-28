export interface UserModel {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string,
    readonly name: {
    firstname: string;
    lastname: string;
  };
  readonly address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: number;
      long: number;
    }
  },
  phone: number;
}

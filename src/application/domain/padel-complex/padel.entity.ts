export interface PadelComplex {
  id: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
}

export class PadelComplexEntity {
  private _id: string;
  private _name: string;
  private _address: string;
  private _city: string;
  private _zipCode: string;

  constructor(props: PadelComplex) {
    this._id = props.id;
    this._name = props.name;
    this._address = props.address;
    this._city = props.city;
    this._zipCode = props.zipCode;
  }

  public get completeAddress() {
    return `${this._address}, ${this._zipCode} ${this._city}`;
  }
}

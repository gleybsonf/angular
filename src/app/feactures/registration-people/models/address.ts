export class Address {
  public postalCode: string;
  public country: string;
  public complement?: string;
  public district?: string;
  public street: string;
  public number: string;
  public city: string
  public state: string;


  constructor(
      street: string,
      number: string,
      city: string,
      state: string,
      postalCode: string,
      country: string,
      complement?: string,
      district?: string,
      isValid: boolean = true,
    ) {
    this.city = city;  
      this.state = state;
      this.street = street;
      this.number = number;
      this.postalCode = postalCode;
      this.country = country;
      this.complement = complement;
      this.district = district;
      

    }

  get fullAddress(): string {
    const base = `${this.street}, ${this.number} - ${this.city}/${this.state}`;
    return this.complement ? `${base} (${this.complement})` : base;
  }

  private isValid(): boolean {
    return !!(this.street && this.number && this.city && this.state && this.postalCode);
  }
}
export class Address {
  constructor(
    public street: string,
    public number: string,
    public city: string,
    public state: string,
    public postalCode: string,
    public country: string,
    public complement?: string,
    public district?: string,
  ) {}

  get fullAddress(): string {
    const base = `${this.street}, ${this.number} - ${this.city}/${this.state}`;
    return this.complement ? `${base} (${this.complement})` : base;
  }

  isValid(): boolean {
    return !!(this.street && this.number && this.city && this.state && this.postalCode);
  }
}
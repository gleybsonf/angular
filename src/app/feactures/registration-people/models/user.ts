import { IAddress } from "../interfaces/address";
import { UserRole } from "../user-enum";

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public role: UserRole,
    public isActive: boolean,
    public createdAt: string,
    public updatedAt: string,
    public address?: IAddress
  ) {}

  // Exemplo de método de domínio
  get isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }

  get fullAddress(): string {
    if (!this.address) return '';
    const { street, number, city, state } = this.address;
    return `${street}, ${number} - ${city}/${state}`;
  }

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }
}
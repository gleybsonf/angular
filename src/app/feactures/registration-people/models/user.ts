import { UserRole } from "../user-enum";
import { Address } from "./address";

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public role: UserRole,
    public isActive: boolean,
    public createdAt: string,
    public updatedAt: string,
    public address?: Address
  ) {}

  // Exemplo de método de domínio
  get isAdmin(): boolean {
    return this.role === UserRole.ADMIN;
  }

  get fullAddress(): string {
    if (!this.address) return "";
    const { street, number, city, state } = this.address;
    return `${street}, ${number} - ${city}/${state}`;
  }

  public activate(): void {
    this.isActive = true;
  }

  public deactivate(): void {
    this.isActive = false;
  }
}

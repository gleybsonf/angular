import { IUserResponse } from "../interfaces/user-response";
import { UserRole } from "../user-enum";
import { User } from "./user";

export class UserAdapter {
  static fromApi(response: IUserResponse): User {
    return new User(
      response.id,
      response.name,
      response.email,
      this.toUserRole(response.role),
      response.isActive,
      response.createdAt,
      response.updatedAt,
      response.address
        ? {
            street: response.address.street,
            number: response.address.number,
            complement: response.address.complement,
            district: response.address.district,
            city: response.address.city,
            state: response.address.state,
            postalCode: response.address.postalCode,
            country: response.address.country,
          }
        : undefined
    );
  }

  static fromApiList(responses: IUserResponse[]): User[] {
    return responses.map((response) => this.fromApi(response));
  }

  private static toUserRole(role: string): UserRole {
    if (Object.values(UserRole).includes(role as UserRole)) {
      return role as UserRole;
    }
    return UserRole.USER; // fallback
  }
}

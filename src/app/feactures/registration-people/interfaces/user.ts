import { UserRole } from "../user-enum";
import { IAddress } from "./address";

export interface IUser {
    id: string;
    name: string;
    lastName: string;
    password?: string;
    age: number;
    email: string;
    role: UserRole;
    isActive: boolean;   
    phone?: string;          // Telefone
    avatarUrl?: string;      // URL da foto de perfil
    createdAt: Date;         // Data de criação
    updatedAt: Date;         // Última atualização
    address: IAddress;
}
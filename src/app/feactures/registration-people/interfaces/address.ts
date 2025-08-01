export interface IAddress {
  street: string;       // Logradouro
  number: string;       // Número
  complement?: string;  // Complemento (opcional)
  district: string;     // Bairro
  city: string;         // Cidade
  state: string;        // Estado (UF)
  postalCode: string;   // CEP
  country: string;      // País
}
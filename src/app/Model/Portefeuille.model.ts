export interface Portefeuille {
  idPortefeuille: number;
  solde: number;
  user: User; // Assuming you have a User model

  transaction: Transaction[];
  instrument: Instrument[];
}

export interface Transaction {
  idTransaction: number;
  dateTransaction: Date;
  montant: number;
  RefTransaction: string;
  buyer: string;
  seller: string;
}

export interface Instrument {
  id: number;
  name: string;
  symbole: string;
  quantite: number;
}
export interface User {
  userId: number;
  userName: string;
  email: string;
  userPhoto: string;
  userFirstName: string;
  userLastName: string;
  userPassword: string;
  userActive: boolean;
  count: number;
  portefeuille: Portefeuille; // Assuming you have a Portefeuille model
  role: Role[]; // Assuming you have a Role model
}
export interface Role {
  roleName: string;
  roleDescription: string;
}

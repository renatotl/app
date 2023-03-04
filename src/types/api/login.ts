import { User } from "./user";// trazendo user pra ca
  
export interface Login {
  nickname: string;
  password: string;
}


// a resposta da api na tentativa de login
export interface LoginResponse {
  token: string;
  user: User;
}
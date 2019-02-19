/*data-model for authentication user response*/
export interface User {
  firstname: string;
  lastname: string;
}

export interface Authorization {
  token: string;
  user: User;
}

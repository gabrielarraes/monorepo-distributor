export interface SignInResponse {
  user: SignedUser
  accessToken: string;
}

export interface SignedUser {
  id: string,
  name: string,
  email: string,
}

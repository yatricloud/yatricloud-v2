export interface AuthResponse {
  user: any | null;
  error: Error | null;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any | null;
  error: string | null;
}
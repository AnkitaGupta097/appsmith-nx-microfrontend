export interface Credentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  error?: string;
}

export async function login(credentials: Credentials): Promise<LoginResponse> {
  const { username, password } = credentials;
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  const url = new URL('http://localhost:8080/api/v1/login');
  const searchparams = new URLSearchParams();
  searchparams.append('redirectUrl', '/');
  url.search = searchparams.toString();
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });
  if (response.redirected) {
    if (response.url.includes('error')) {
      throw new Error('Invalid Credentials');
    }
    return {
      success: true,
    };
  }

  throw new Error('An error occurred');
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const ACCESS_TOKEN_KEY = 'moonfleurs_admin_access_token';
const REFRESH_TOKEN_KEY = 'moonfleurs_admin_refresh_token';

function assertSupabaseConfig() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error('Konfigurasi Supabase belum diatur. Tambahkan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di .env.');
  }
}

type SignInResponse = {
  access_token: string;
  refresh_token: string;
};

export async function signInAdminWithPassword(email: string, password: string) {
  assertSupabaseConfig();

  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Email atau password tidak valid.');
  }

  const data = (await response.json()) as SignInResponse;
  localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token);
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export async function getAuthenticatedUser() {
  assertSupabaseConfig();
  const accessToken = getAccessToken();

  if (!accessToken) {
    return null;
  }

  const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    clearAdminSession();
    return null;
  }

  return response.json();
}

export function clearAdminSession() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

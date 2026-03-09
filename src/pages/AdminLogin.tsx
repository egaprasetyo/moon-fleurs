import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInAdminWithPassword } from '../lib/supabaseAuth';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await signInAdminWithPassword(email, password);
      navigate('/admin');
    } catch (signInError) {
      const message = signInError instanceof Error ? signInError.message : 'Gagal login admin.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f2eb] flex items-center justify-center p-6">
      <section className="w-full max-w-md bg-white rounded-3xl shadow-sm p-8 border border-[#f2e4d6]">
        <h1 className="text-3xl font-semibold text-[#6b4f3b] mb-2">Admin Login</h1>
        <p className="text-[#8b6f58] mb-6">Masuk dengan akun Supabase untuk mengakses halaman admin Moon Fleurs.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#6b4f3b] mb-1">
              Email Admin
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-[#e3d2c3] px-4 py-3 outline-none focus:ring-2 focus:ring-[#d8b08c]"
              placeholder="admin@moonfleurs.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#6b4f3b] mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-xl border border-[#e3d2c3] px-4 py-3 outline-none focus:ring-2 focus:ring-[#d8b08c]"
              placeholder="********"
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#6b4f3b] text-white py-3 rounded-xl font-medium hover:bg-[#5c4331] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Memproses...' : 'Masuk sebagai Admin'}
          </button>
        </form>
      </section>
    </main>
  );
}

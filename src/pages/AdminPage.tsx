import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearAdminSession, getAuthenticatedUser } from '../lib/supabaseAuth';

type AdminUser = {
  email?: string;
};

export default function AdminPage() {
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    const validateSession = async () => {
      const user = await getAuthenticatedUser();

      if (!user) {
        navigate('/admin/login');
        return;
      }

      setAdminUser(user as AdminUser);
      setIsCheckingAuth(false);
    };

    validateSession();
  }, [navigate]);

  const handleLogout = () => {
    clearAdminSession();
    navigate('/admin/login');
  };

  if (isCheckingAuth) {
    return (
      <main className="min-h-screen bg-[#f8f2eb] p-6 md:p-10 flex items-center justify-center text-[#6b4f3b]">
        Memeriksa sesi admin...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f2eb] p-6 md:p-10">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#f2e4d6] shadow-sm p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-[#6b4f3b]">Admin Dashboard</h1>
            <p className="text-[#8b6f58] mt-2">Selamat datang di halaman admin Moon Fleurs.</p>
            {adminUser?.email ? <p className="text-sm text-[#8b6f58] mt-1">Login sebagai: {adminUser.email}</p> : null}
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl border border-[#d7c0ad] text-[#6b4f3b] hover:bg-[#f8f2eb] transition-colors"
          >
            Logout
          </button>
        </div>
      </section>
    </main>
  );
}

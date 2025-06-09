import dynamic from 'next/dynamic';
import Image from 'next/image';
import profilePic from '../public/profile.png';
import Link from 'next/link';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #dbeafe 0%, #fdf6e3 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'system-ui, sans-serif',
        padding: '40px 0',
      }}
    >
      {/* Profil Card */}
      <section
        style={{
          background: 'white',
          borderRadius: 20,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          padding: 32,
          marginBottom: 28,
          width: 'clamp(320px, 80vw, 420px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Image
          src={profilePic}
          alt="Profil"
          width={120}
          height={120}
          priority
          style={{
            borderRadius: '50%',
            border: '4px solid #f1f5f9',
            marginBottom: 16,
          }}
        />
        <h1 style={{ margin: 0, fontSize: 30, fontWeight: 700, color: '#0c2441', textAlign: 'center' }}>
          Azhar Danica B.Z
          <p>2203040063</p>
        </h1>
        <p style={{ color: '#64748b', fontSize: 16, margin: '10px 0 0 0', textAlign: 'center' }}>
          Selamat datang di Jejak of Azhar.
        </p>

        {/* PWA Banner */}
        <div
          style={{
            marginTop: 22,
            background: 'linear-gradient(90deg, #bbf7d0, #facc15)',
            borderRadius: 10,
            padding: '8px 16px',
            fontWeight: 600,
            fontSize: 14,
            color: '#075e29',
            boxShadow: '0 2px 10px #0001',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span role="img" aria-label="pwa" style={{ fontSize: 18 }}>
          </span>
          Dah Responsif!
        </div>
        <HeavyComponent />
      </section>

      {/* Section Home & Link */}
      <section
        style={{
          background: 'white',
          borderRadius: 16,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          padding: 24,
          width: 'clamp(280px, 70vw, 380px)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 20, margin: 0 }}>Home</h2>
        <Link
          href="/posts"
          style={{
            display: 'inline-block',
            marginTop: 16,
            background: '#2563eb',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 600,
            letterSpacing: 0.4,
            boxShadow: '0 2px 8px #2563eb22',
            transition: 'background 0.2s',
          }}
        >
          Lihat Post
        </Link>
      </section>
    </main>
  );
}

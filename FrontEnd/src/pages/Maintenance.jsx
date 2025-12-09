import React from 'react';

const Maintenance = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '2rem',
      background: '#0f172a',
      color: '#e2e8f0'
    }}>
      <h1 style={{ fontSize: '2.25rem', lineHeight: 1.1, marginBottom: '1rem' }}>
        We’ll be back soon
      </h1>
      <p style={{ maxWidth: 720, marginBottom: '1.5rem' }}>
        Our site is temporarily unavailable while we address a recent safety notice. We’re working to resolve this as quickly as possible. Thank you for your patience and understanding.
      </p>
      <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>
        If you need immediate assistance, please try again later.
      </p>
    </div>
  );
};

export default Maintenance;

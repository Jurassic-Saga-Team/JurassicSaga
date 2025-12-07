// components/DinoShowcase.jsx
import React from 'react';
import Asset from '@theme/Asset'; // or whatever import path your wiki uses

export default function DinoShowcase({ name, location }) {
  return (
    <details>
      <summary style={{ display: 'inline-block', cursor: 'zoom-in', listStyle: 'none' }}>
        <div style={{
          width: '256px',
          height: '256px',
          border: '2px solid #bbb',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Asset
            width={256}
            location={location}
            title={name}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        </div>
      </summary>

      <div style={{
        marginTop: '12px',
        padding: '12px',
        background: '#111',
        borderRadius: '8px',
        display: 'grid',
        placeItems: 'center'
      }}>
        <Asset
          width={1024}
          location={location}
          title={`${name} (Large)`}
          style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }}
        />
      </div>
    </details>
  );
}

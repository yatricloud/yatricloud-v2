import React, { useEffect, useState } from 'react';

const CONSENT_KEY = 'user_consent_google';

const defaultConsent = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
};

const grantedConsent = {
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  analytics_storage: 'granted',
};

export const ConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner if no consent stored
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  // Helper to call gtag consent update
  const updateConsent = (consentObj: typeof defaultConsent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', consentObj);
    }
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'granted');
    updateConsent(grantedConsent);
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    updateConsent(defaultConsent);
    setVisible(false);
  };

  // On mount, if user has already made a choice, update consent accordingly
  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'granted') {
      updateConsent(grantedConsent);
    } else if (consent === 'denied') {
      updateConsent(defaultConsent);
    }
  }, []);

  if (!visible) return null;

  return (
    <div style={{position:'fixed',bottom:0,left:0,right:0,background:'#181f2a',padding:'1em',zIndex:1000,boxShadow:'0 -2px 8px rgba(0,0,0,0.3)',display:'flex',justifyContent:'center',alignItems:'center',gap:'1em',color:'#f3f4f6'}}>
      <span style={{color:'#f3f4f6'}}>We use cookies for analytics and ads. Do you consent?</span>
      <button onClick={handleAccept} style={{background:'#2563eb',color:'#fff',border:'none',padding:'0.5em 1.2em',borderRadius:'4px',cursor:'pointer'}}>Accept</button>
      <button onClick={handleReject} style={{background:'#374151',color:'#f3f4f6',border:'none',padding:'0.5em 1.2em',borderRadius:'4px',cursor:'pointer'}}>Reject</button>
    </div>
  );
}; 
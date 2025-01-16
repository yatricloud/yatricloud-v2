import React, { useState } from 'react';
import { Send, AlertCircle, CheckCircle } from 'lucide-react';
import { checkEmailSubscription, subscribeEmail } from '../../services/newsletter';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Check if already subscribed
      const isSubscribed = await checkEmailSubscription(email);
      
      if (isSubscribed) {
        setStatus('error');
        setMessage('This email is already subscribed. Please try a different email.');
        return;
      }

      // Proceed with subscription
      await subscribeEmail(email);
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
      <p className="text-gray-400 mb-6">
        Subscribe to our newsletter for the latest updates, tutorials, and cloud insights.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
              text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
              focus:ring-sky-500 transition-all"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
              rounded-md bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {status !== 'idle' && (
          <div className={`flex items-center text-sm ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <AlertCircle className="w-4 h-4 mr-2" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
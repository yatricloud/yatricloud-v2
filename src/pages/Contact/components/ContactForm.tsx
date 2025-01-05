import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { sendContactMessage } from '../../../lib/contact';
import { ConfirmationModal } from '../../../components/common/ConfirmationModal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendContactMessage(formData);
      setShowConfirmation(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Error sending message:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
        
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                  placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                  placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              placeholder="How can we help?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              required
              rows={6}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              placeholder="Your message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
              text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
              hover:scale-[1.02] flex items-center justify-center
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="w-5 h-5 mr-2" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Message Sent!"
        message="Thank you for contacting us. We'll get back to you as soon as possible."
      />
    </>
  );
}
import React, { useState } from 'react';
import { Send, Sparkles, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { ConfirmationModal } from '../common/ConfirmationModal';

interface FormData {
  fullName: string;
  email: string;
  state: string;
  companyName: string;
}

export function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    state: '',
    companyName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('consultation_requests')
        .insert([{
          name: formData.fullName,
          email: formData.email,
          state: formData.state,
          company_name: formData.companyName
        }]);

      if (supabaseError) throw supabaseError;

      setShowConfirmation(true);
      setFormData({
        fullName: '',
        email: '',
        state: '',
        companyName: ''
      });
    } catch (err) {
      setError('Failed to submit request. Please try again later.');
      console.error('Error submitting consultation request:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="relative bg-[rgba(22,27,34,0.8)] backdrop-blur-md p-8 rounded-lg border border-[#30363d] hover:border-sky-500/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-sky-400/5 rounded-lg" />
        
        <form onSubmit={handleSubmit} className="relative space-y-4">
          <h3 className="text-2xl font-bold text-white mb-6 text-glow">Get Your FREE Consultation Today!</h3>
          
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              <AlertCircle className="w-5 h-5 mr-2 inline-block" />
              {error}
            </div>
          )}

          {[
            { label: 'Full Name', key: 'fullName', placeholder: 'John Doe' },
            { label: 'Email', key: 'email', type: 'email', placeholder: 'john@example.com' },
            { label: 'State', key: 'state', placeholder: 'Enter your state' },
            { label: 'Company Name', key: 'companyName', placeholder: 'Your company name' }
          ].map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                {field.label}
              </label>
              <input
                type={field.type || 'text'}
                required
                className="w-full px-4 py-2 bg-[#0d1117] border border-[#30363d] rounded-md text-white 
                  placeholder-gray-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                placeholder={field.placeholder}
                value={formData[field.key as keyof FormData]}
                onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
              text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
              hover:scale-[1.02] flex items-center justify-center space-x-2
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>{isSubmitting ? 'Submitting...' : 'Talk to an Advisor Now'}</span>
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Consultation Request Received!"
        message="Thank you for your interest! One of our advisors will contact you shortly to schedule your free consultation."
      />
    </>
  );
}
import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { submitEnrollmentForm } from '../../lib/forms';
import { FormSuccess } from '../common/FormSuccess';

interface EnrollmentFormProps {
  certificationCode: string;
  certificationName: string;
  onClose: () => void;
}

export function EnrollmentForm({ certificationCode, certificationName, onClose }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitEnrollmentForm({
        ...formData,
        courseName: `${certificationName} (${certificationCode})`
      });

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to submit request. Please try again later.');
      console.error('Error submitting enrollment request:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <FormSuccess
        message="Thank you for your enrollment request! Our team will contact you shortly with more information."
        onClose={() => {
          setShowSuccess(false);
          onClose();
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg 
          bg-[#161b22] border border-[#30363d] shadow-xl transition-all animate-modal-enter">
          
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Enroll in Course</h2>
            
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
                <AlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form fields remain the same */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                    placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                    placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white 
                    placeholder-gray-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
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
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Enrollment Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
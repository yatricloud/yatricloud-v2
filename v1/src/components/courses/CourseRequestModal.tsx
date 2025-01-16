import React, { useState } from 'react';
import { X, Send, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface CourseRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

export function CourseRequestModal({ isOpen, onClose, courseName }: CourseRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('course_requests')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          course_name: courseName
        }]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to submit request. Please try again later.');
      console.error('Error submitting course request:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg 
          bg-[#161b22] border border-[#30363d] shadow-xl transition-all animate-modal-enter">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Request Course Information</h2>
            <p className="text-gray-400 mb-6">Fill out the form below to learn more about {courseName}</p>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
                <AlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}

            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Request Submitted!</h3>
                <p className="text-gray-400 mb-6">We'll get back to you soon with more information.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                      text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                      focus:ring-sky-500 transition-all"
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
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                      text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                      focus:ring-sky-500 transition-all"
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
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                      text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                      focus:ring-sky-500 transition-all"
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
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg 
                      text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                      focus:ring-sky-500 transition-all"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 
                    hover:to-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all 
                    duration-200 hover:scale-[1.02] flex items-center justify-center
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
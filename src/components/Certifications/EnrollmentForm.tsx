import React, { useState } from 'react';
import { Mail, User, Phone, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { ConfirmationModal } from '../common/ConfirmationModal';

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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
          course_name: `${certificationName} (${certificationCode})`
        }]);

      if (supabaseError) throw supabaseError;

      setShowConfirmation(true);
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

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="relative w-full max-w-lg transform overflow-hidden rounded-xl 
            bg-[#161b22]/90 backdrop-blur-xl shadow-2xl transition-all animate-modal-enter">
            
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-purple-500/20 
              to-pink-500/20 opacity-30 animate-gradient-xy" />
            
            {/* Content */}
            <div className="relative p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Enroll in Training</h2>
                <p className="text-gray-400">
                  {certificationName} ({certificationCode})
                </p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg 
                        text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                        focus:ring-sky-500 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg 
                        text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                        focus:ring-sky-500 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      required
                      className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg 
                        text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                        focus:ring-sky-500 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      rows={3}
                      className="w-full pl-10 pr-3 py-2 bg-white/5 border border-white/10 rounded-lg 
                        text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                        focus:ring-sky-500 transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-3 rounded-lg border border-white/10 text-white 
                      hover:bg-white/5 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 
                      hover:to-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-all 
                      duration-200 hover:scale-[1.02] flex items-center justify-center 
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          onClose();
        }}
        title="Request Submitted Successfully!"
        message="Thank you for your interest! Our team will contact you shortly to discuss the training details."
      />
    </>
  );
}
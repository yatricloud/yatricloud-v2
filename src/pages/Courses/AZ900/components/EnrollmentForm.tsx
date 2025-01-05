import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { supabase } from '../../../../lib/supabase';
import { ConfirmationModal } from '../../../../components/common/ConfirmationModal';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseCode: string;
  courseName: string;
}

export function EnrollmentForm({ isOpen, onClose, courseCode, courseName }: EnrollmentFormProps) {
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
          course_name: `${courseName} (${courseCode})`
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
      <div className="sticky top-24">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-6">Enroll in Course</h2>
          
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

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          onClose();
        }}
        title="Enrollment Request Submitted!"
        message="Thank you for your interest! Our team will contact you shortly with enrollment details."
      />
    </>
  );
}
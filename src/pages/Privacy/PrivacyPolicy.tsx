import React from 'react';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
              <Shield className="w-4 h-4 mr-2" />
              <span>Privacy Policy</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 text-glow">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: May 21, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-400">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Course enrollment information</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-400">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you important information</li>
                  <li>Improve our services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
                <p className="text-gray-400">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                  <li>Service providers</li>
                  <li>Legal authorities when required</li>
                  <li>Business partners with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Your Rights</h2>
                <p className="text-gray-400">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Us</h2>
                <p className="text-gray-400">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: privacy@yatricloud.com
                  <br />
                  Address: E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka India
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security</h2>
                <p className="text-gray-400">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-400">
                  We use cookies and similar tracking technologies to improve your experience on our site. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                <p className="text-gray-400">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
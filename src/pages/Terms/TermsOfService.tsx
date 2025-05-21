import React from 'react';
import { FileText } from 'lucide-react';

export function TermsOfService() {
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
              <FileText className="w-4 h-4 mr-2" />
              <span>Terms of Service</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 text-glow">Terms of Service</h1>
            <p className="text-gray-400">Last updated: May 21, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-400">
                  By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Services</h2>
                <p className="text-gray-400">Our services are subject to the following terms:</p>
                <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You are responsible for maintaining the security of your account</li>
                  <li>You must not misuse or attempt to disrupt our services</li>
                  <li>You agree to use the services only for lawful purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property</h2>
                <p className="text-gray-400">
                  All content, features, and functionality are owned by Yatri Cloud and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
                <ul className="list-disc pl-6 text-gray-400 space-y-2">
                  <li>All fees are exclusive of taxes</li>
                  <li>Payments are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to modify our pricing</li>
                  <li>You agree to provide current and accurate payment information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-400">
                  We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
                <p className="text-gray-400">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
                <p className="text-gray-400">
                  Questions about the Terms of Service should be sent to us at:
                  <br />
                  Email: legal@yatricloud.com
                  <br />
                  Address: E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka India
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. User Conduct</h2>
                <p className="text-gray-400">
                  Users must not engage in any activity that disrupts or interferes with the services, including unauthorized access, data mining, or any form of automated data collection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
                <p className="text-gray-400">
                  We reserve the right to terminate or suspend your access to our services at any time, without notice, for any reason, including violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Dispute Resolution</h2>
                <p className="text-gray-400">
                  Any disputes arising from these terms shall be resolved through arbitration in accordance with the laws of India.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
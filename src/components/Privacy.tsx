import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Bar: Back Link and Theme Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12 sm:mb-16 flex items-center justify-between"
        >
          <Link 
            to="/legal"
            className="inline-flex items-center gap-2 opacity-40 hover:opacity-100 transition-all duration-300 text-xs sm:text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Legal
          </Link>
          <ThemeToggle />
        </motion.div>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Page Title */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-xs sm:text-sm uppercase tracking-widest opacity-40 mb-4">
              Document 01
            </div>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-[-0.04em] font-black uppercase">
              PRIVACY POLICY
            </h1>
            <div className="w-12 sm:w-16 lg:w-20 h-[2px] bg-foreground mt-4 sm:mt-6 mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-60 max-w-xl">
              This privacy policy applies to all products developed by BonsaiTSL.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 sm:space-y-16">
            {/* Introduction */}
            <div>
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                INTRODUCTION
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  At Bonsai, we believe technology should disappear. That philosophy extends to how we handle your data—with minimal collection, maximum transparency, and absolute respect for your privacy.
                </p>
                <p>
                  This Privacy Policy explains what information we collect, how we use it, and your rights regarding your personal data. By using our products, you agree to the practices described in this policy.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                DATA COLLECTION
              </h2>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Information You Provide</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We collect information you directly provide when using our services, including account details, contact information, and any content you create or upload. We only request the minimum information necessary to deliver our services effectively.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Automatically Collected Information</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We automatically collect certain technical information when you use our products, including device type, browser information, IP address, and usage patterns. This data helps us maintain service quality and identify technical issues.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Analytics & Cookies</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We use essential cookies to maintain your session and preferences. Optional analytics cookies help us understand how our products are used, but you can disable these at any time through your browser settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Usage */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                HOW WE USE YOUR DATA
              </h2>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Service Delivery</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We use your information to provide, maintain, and improve our products. This includes processing your requests, personalizing your experience, and communicating with you about our services.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Product Improvement</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Aggregated, anonymized usage data helps us understand how people interact with our products and identify opportunities for improvement. We never sell your personal data to third parties.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Security & Compliance</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We process certain data to detect fraud, maintain security, and comply with legal obligations. This includes monitoring for suspicious activity and responding to legal requests when required.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                DATA SHARING
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-base sm:text-lg leading-relaxed opacity-60">
                  We do not sell your personal information. We may share your data only in the following circumstances:
                </p>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Service Providers</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We work with trusted third-party service providers who help us deliver our services (such as hosting, analytics, and customer support). These providers are bound by strict confidentiality agreements and can only use your data as instructed.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Legal Requirements</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We may disclose information when required by law, to enforce our terms, protect our rights, or ensure the safety of our users and the public.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Business Transfers</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    If Bonsai is involved in a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. We will notify you of any such change in ownership or control.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                DATA PROTECTION
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure protocols, access controls, and regular security audits.
                </p>
                <p>
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                DATA RETENTION
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you close your account, we delete or anonymize your data within 90 days, except where we're legally required to retain certain information.
                </p>
                <p>
                  Aggregated, anonymized data that cannot identify you may be retained indefinitely for analytical purposes.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                YOUR RIGHTS
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-base sm:text-lg leading-relaxed opacity-60">
                  You have the following rights regarding your personal data:
                </p>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Access & Portability</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You can request a copy of your personal data at any time. We'll provide this in a portable, machine-readable format within 30 days.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Correction & Update</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You can update or correct your information directly through your account settings, or contact us for assistance.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Deletion</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You can request deletion of your personal data at any time. We'll process this request within 30 days, subject to legal retention requirements.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Opt-Out</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You can opt out of marketing communications, analytics tracking, and other optional data collection at any time through your account settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                CHILDREN'S PRIVACY
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it.
                </p>
              </div>
            </div>

            {/* International Data Transfers */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                INTERNATIONAL TRANSFERS
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. When we transfer data internationally, we ensure appropriate safeguards are in place to protect your information.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                POLICY UPDATES
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We'll notify you of significant changes by email or through a prominent notice in our products. Continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                CONTACT US
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                </p>
                <p className="opacity-80">
                  <a href="mailto:hello@bonsaitsl.com" className="hover:opacity-100 transition-opacity">
                    hello@bonsaitsl.com
                  </a>
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-12 sm:pt-16 border-t border-foreground/20 mt-8">
              <p className="text-xs sm:text-sm uppercase tracking-widest opacity-40">
                Last updated: October 23, 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Terms() {
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
              Document 02
            </div>
            <h1 className="text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] tracking-[-0.04em] font-black uppercase">
              TERMS OF SERVICE
            </h1>
            <div className="w-12 sm:w-16 lg:w-20 h-[2px] bg-foreground mt-4 sm:mt-6 mb-6 sm:mb-8"></div>
            
            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-60 max-w-xl">
              These terms of service apply to all products developed by BonsaiTSL.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 sm:space-y-16">
            {/* Introduction */}
            <div>
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                AGREEMENT
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and BonsaiTSL ("Bonsai," "we," "us," or "our") governing your access to and use of our products and services.
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our services.
                </p>
              </div>
            </div>

            {/* Service Description */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                OUR SERVICES
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  Bonsai develops technology products and services designed to disappear into the background while solving real problems. Our services may include software applications, web platforms, APIs, and related tools.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We are not liable for any modification, suspension, or discontinuation of our services.
                </p>
              </div>
            </div>

            {/* Account & Registration */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                ACCOUNTS
              </h2>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Registration</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Some services may require you to create an account. You must provide accurate, current, and complete information during registration and keep your account information updated.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Account Security</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized access or security breach.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Account Termination</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We may suspend or terminate your account if you violate these Terms or engage in fraudulent, abusive, or illegal activity. You may close your account at any time through your account settings.
                  </p>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                YOUR RESPONSIBILITIES
              </h2>
              <div className="space-y-6 max-w-3xl">
                <p className="text-base sm:text-lg leading-relaxed opacity-60">
                  When using our services, you agree to:
                </p>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Acceptable Use</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Use our services only for lawful purposes and in accordance with these Terms. You may not use our services to transmit harmful code, engage in unauthorized access, harass others, or violate any applicable laws or regulations.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Content Responsibility</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You retain ownership of any content you create or upload. However, you are solely responsible for your content and the consequences of sharing it. You represent that you have all necessary rights to the content you provide.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Prohibited Activities</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You may not reverse engineer, decompile, or attempt to extract source code from our services. You may not use automated systems to access our services in ways that send more requests than a human could reasonably produce.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                INTELLECTUAL PROPERTY
              </h2>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Our Rights</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    All rights, title, and interest in our services, including all intellectual property rights, remain with Bonsai. These Terms do not grant you any ownership rights to our services.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Your License</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your personal or internal business purposes, subject to these Terms.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Feedback</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    If you provide feedback, suggestions, or ideas about our services, we may use them without any obligation to you. You grant us a worldwide, perpetual, irrevocable license to use any feedback you provide.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                PAYMENT & BILLING
              </h2>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Fees</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Some services may require payment of fees. All fees are exclusive of applicable taxes unless otherwise stated. You are responsible for paying all applicable taxes.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Subscriptions</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Subscription fees are billed in advance on a recurring basis. Subscriptions automatically renew unless you cancel before the renewal date. Cancellation takes effect at the end of the current billing period.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Refunds</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Fees are generally non-refundable except where required by law or as otherwise specified in your service agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                PRIVACY
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you also agree to our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                DISCLAIMERS
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that our services will be uninterrupted, error-free, secure, or free of viruses or other harmful components. Your use of our services is at your sole risk.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, BONSAI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p>
                  IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID TO BONSAI IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                INDEMNIFICATION
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  You agree to indemnify, defend, and hold harmless Bonsai, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or related to your use of our services, your violation of these Terms, or your violation of any rights of another party.
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                DISPUTE RESOLUTION
              </h2>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Informal Resolution</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Before filing a claim, you agree to contact us at hello@bonsaitsl.com to attempt to resolve the dispute informally. We'll work in good faith to resolve any disputes.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Governing Law</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Bonsai is headquartered, without regard to conflict of law principles.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Arbitration</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Any disputes that cannot be resolved informally shall be resolved through binding arbitration in accordance with the rules of a recognized arbitration association. You waive your right to participate in class action lawsuits.
                  </p>
                </div>
              </div>
            </div>

            {/* Modifications */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                CHANGES TO TERMS
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  We may modify these Terms at any time. We will provide notice of material changes by email or through our services. Your continued use of our services after such notice constitutes acceptance of the modified Terms.
                </p>
                <p>
                  If you do not agree to the modified Terms, you must stop using our services and may close your account.
                </p>
              </div>
            </div>

            {/* General Provisions */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                GENERAL
              </h2>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Entire Agreement</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    These Terms, together with our Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Bonsai regarding our services.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Severability</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Assignment</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase tracking-widest opacity-80 mb-3">Waiver</h3>
                  <p className="text-base sm:text-lg leading-relaxed opacity-60">
                    Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-8 sm:pt-12 border-t border-foreground/10">
              <h2 className="text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-[3vw] leading-[0.95] tracking-[-0.03em] font-black uppercase mb-4 sm:mb-6">
                CONTACT
              </h2>
              <div className="space-y-4 text-base sm:text-lg leading-relaxed opacity-60 max-w-3xl">
                <p>
                  If you have questions about these Terms of Service, please contact us at:
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

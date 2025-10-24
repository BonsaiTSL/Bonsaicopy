import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Brandmark from "./Brandmark";
import BonsaiLogo from "../imports/BonsaiLogo1";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <main className="relative bg-background overflow-hidden">
      {/* Hero Section - Mobile First */}
      <section className="relative min-h-screen flex flex-col px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="max-w-6xl mx-auto w-full flex flex-col min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-[calc(100vh-8rem)]">
          {/* Top Bar: Brandmark and Theme Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16 flex items-center justify-between"
          >
            <Brandmark className="h-8 sm:h-10 w-8 sm:w-10" />
            <ThemeToggle />
          </motion.div>

          {/* Main Headline - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center mb-12 sm:mb-16"
          >
            <h1 className="text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] xl:text-[7vw] leading-[0.9] tracking-[-0.04em] font-black uppercase mb-8 sm:mb-12">
              Technology,
              <br />
              when done
              <br />
              right,
              <br />
              disappears.
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-60 max-w-md">
              We make complexity simple. For our clients and for
              the world. Through products and services.
            </p>
          </motion.div>

          {/* Feature Links - Part of the Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-px bg-foreground/10"
          >
            <Link
              to="/contact"
              className="group bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 p-6 sm:p-8 flex items-center justify-between"
            >
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest opacity-60 mb-2">
                  Get in touch
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
                  Contact
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>

            <Link
              to="/legal"
              className="group bg-background hover:bg-foreground/5 border border-foreground/10 transition-all duration-300 p-6 sm:p-8 flex items-center justify-between"
            >
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest opacity-40 mb-2">
                  Documentation
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
                  Legal
                </div>
              </div>
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Question Section */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw] leading-[1.1] tracking-[-0.03em] font-black uppercase mb-8 sm:mb-12">
              What happens when technology finally gets out of
              the way?
            </h2>

            <div className="flex items-center gap-3 text-xs sm:text-sm uppercase tracking-widest opacity-40">
              <div className="w-8 sm:w-12 h-[1px] bg-background"></div>
              <span>Our Guiding Question</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Statement - Mobile First Grid */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1 }}
            className="space-y-8 sm:space-y-10 lg:space-y-12"
          >
            {/* Logo */}
            <BonsaiLogo className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px] opacity-90" />

            {/* Two-column layout for heading and text */}
            <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <h3 className="text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[4.5vw] xl:text-[3.5vw] leading-[0.95] tracking-[-0.03em] font-black uppercase">
                SIMPLE.
                <br />
                PRECISE.
                <br />
                INVISIBLE.
              </h3>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed opacity-70 lg:flex lg:flex-col lg:justify-between">
                <p>
                  Technology should serve without announcing
                  itself. It should solve problems so elegantly
                  that users forget it exists.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <div className="h-16 sm:h-24"></div>
    </main>
  );
}

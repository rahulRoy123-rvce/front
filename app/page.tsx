"use client";

import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import { PinContainer } from "./components/ui/3d-pin";
import { DotBackground } from "./components/ui/dot-background";
import { FloatingDock } from "./components/ui/floating-dock";
import { IconHome, IconInfoCircle, IconRocket, IconMessage } from "@tabler/icons-react";

export default function Home() {
  const navigationItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "#",
    },
    {
      title: "How It Works",
      icon: <IconInfoCircle className="h-full w-full" />,
      href: "#how-it-works",
    },
    {
      title: "Features",
      icon: <IconRocket className="h-full w-full" />,
      href: "#features",
    },
    {
      title: "Contact",
      icon: <IconMessage className="h-full w-full" />,
      href: "#contact",
    },
  ];

  return (
    <DotBackground>
      <main className="relative text-white">
        {/* Hero Section */}
        <div className="relative">
          <BackgroundBeamsWithCollision>
            <section className="min-h-screen flex flex-col items-center justify-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-yellow-200 to-red-400">
                  AI-Powered Root Cause Analysis
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-8">
                  Transform your business KPIs with intelligent root cause analysis
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold"
                >
                  Try Ell3 Now
                </motion.button>
              </motion.div>
            </section>
          </BackgroundBeamsWithCollision>
        </div>

        {/* Target Audience Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <h2 className="text-4xl font-bold mb-16 text-center">Who Is It For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
            <PinContainer title="Data Analysts">
              <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem]">
                <h3 className="text-xl font-bold text-slate-100 mb-4">Data Analysts</h3>
                <p className="text-sm">Streamline your root cause analysis process with AI-driven insights</p>
              </div>
            </PinContainer>

            <PinContainer title="BI Professionals">
              <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem]">
                <h3 className="text-xl font-bold text-slate-100 mb-4">BI Professionals</h3>
                <p className="text-sm">Get deeper insights into your business metrics and KPIs</p>
              </div>
            </PinContainer>

            <PinContainer title="Decision Makers">
              <div className="flex flex-col tracking-tight text-slate-100/50 w-[20rem]">
                <h3 className="text-xl font-bold text-slate-100 mb-4">Decision Makers</h3>
                <p className="text-sm">Make data-driven decisions with comprehensive root cause analysis</p>
              </div>
            </PinContainer>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <h2 className="text-4xl font-bold mb-16 text-center">How It Works</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">1. Upload Your Data</h3>
              <p className="text-gray-400">Customers can easily upload files for RCA request through our website</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">2. AI Analysis</h3>
              <p className="text-gray-400">BICO RCA Engine processes your request and performs deep analysis</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">3. Get Results</h3>
              <p className="text-gray-400">Receive comprehensive reports directly in your email</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-4">4. Personal Follow-up</h3>
              <p className="text-gray-400">Get personalized consultation to establish relationship and maximize value</p>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose BICO?</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 rounded-lg p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-400">Our advanced AI engine performs comprehensive root cause analysis on your business KPIs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 rounded-lg p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4">Premium Insights</h3>
              <p className="text-gray-400">Get detailed, actionable insights that help you make better business decisions</p>
            </motion.div>
          </div>
        </section>

        {/* Floating Dock Navigation */}
        <FloatingDock items={navigationItems} />

        {/* Scroll Indicator */}
        <motion.div
          className="fixed bottom-28 left-1/2 transform -translate-x-1/2 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-0.5 h-16 bg-gradient-to-b from-white/20 to-transparent" />
            <span className="text-sm text-gray-400 mt-2">Scroll Down</span>
          </div>
        </motion.div>
      </main>
    </DotBackground>
  );
} 
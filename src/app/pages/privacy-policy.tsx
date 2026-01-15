import React from "react";
import { motion as Motion } from "motion/react";
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertCircle, CheckCircle2, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function PrivacyPolicy() {
  const { t, isRTL } = useLanguage();

  const sections = [
    {
      icon: FileText,
      title: "Introduction",
      titleBn: "ভূমিকা",
      content: "Paperware is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, or engage with our B2B paper packaging manufacturing platform.",
      contentBn: "পেপারওয়্যার আপনার গোপনীয়তা রক্ষা এবং আপনার ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আপনি যখন আমাদের সেবা, ওয়েবসাইট ব্যবহার করেন বা আমাদের B2B পেপার প্যাকেজিং ম্যানুফ্যাকচারিং প্ল্যাটফর্মের সাথে যুক্ত হন তখন আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, প্রকাশ এবং সুরক্ষিত করি।"
    },
    {
      icon: Database,
      title: "Information We Collect",
      titleBn: "আমরা যে তথ্য সংগ্রহ করি",
      content: "We collect information that you provide directly to us, including: Business contact details (name, email, phone, company name), order and transaction information, payment and billing details, communication preferences, and technical data about how you interact with our platform. For B2B clients, we may also collect business registration documents and tax information.",
      contentBn: "আমরা সেই তথ্য সংগ্রহ করি যা আপনি সরাসরি আমাদের প্রদান করেন, যার মধ্যে রয়েছে: ব্যবসায়িক যোগাযোগের বিবরণ (নাম, ইমেইল, ফোন, কোম্পানির নাম), অর্ডার এবং লেনদেনের তথ্য, পেমেন্ট এবং বিলিং বিবরণ, যোগাযোগের পছন্দ, এবং আমাদের প্ল্যাটফর্মের সাথে আপনার ইন্টারঅ্যাকশন সম্পর্কে প্রযুক্তিগত তথ্য। B2B ক্লায়েন্টদের জন্য, আমরা ব্যবসায় নিবন্ধন নথি এবং ট্যাক্স তথ্যও সংগ্রহ করতে পারি।"
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      titleBn: "আমরা কীভাবে আপনার তথ্য ব্যবহার করি",
      content: "Your information is used to process orders, provide customer support, improve our products and services, send important updates and marketing communications (with your consent), maintain security and prevent fraud, comply with legal obligations, and facilitate B2B partnerships and transactions. We never sell your personal information to third parties.",
      contentBn: "আপনার তথ্য অর্ডার প্রসেস করতে, কাস্টমার সাপোর্ট প্রদান করতে, আমাদের পণ্য এবং সেবা উন্নত করতে, গুরুত্বপূর্ণ আপডেট এবং মার্কেটিং যোগাযোগ পাঠাতে (আপনার সম্মতি সহ), নিরাপত্তা বজায় রাখতে এবং জালিয়াতি প্রতিরোধ করতে, আইনি বাধ্যবাধকতা মেনে চলতে, এবং B2B পার্টনারশিপ এবং লেনদেন সহজ করতে ব্যবহৃত হয়। আমরা কখনই আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রি করি না।"
    },
    {
      icon: Lock,
      title: "Data Security",
      titleBn: "ডেটা নিরাপত্তা",
      content: "We implement industry-standard security measures to protect your information, including encryption, secure servers, access controls, regular security audits, and employee training. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security. We continuously update our security practices to address emerging threats.",
      contentBn: "আমরা আপনার তথ্য সুরক্ষিত রাখতে শিল্প-মানের নিরাপত্তা ব্যবস্থা প্রয়োগ করি, যার মধ্যে এনক্রিপশন, সুরক্ষিত সার্ভার, অ্যাক্সেস নিয়ন্ত্রণ, নিয়মিত নিরাপত্তা অডিট এবং কর্মচারী প্রশিক্ষণ রয়েছে। তবে, ইন্টারনেটের মাধ্যমে ট্রান্সমিশনের কোনো পদ্ধতি ১০০% নিরাপদ নয়, এবং আমরা সম্পূর্ণ নিরাপত্তার গ্যারান্টি দিতে পারি না। উদীয়মান হুমকি মোকাবেলায় আমরা ক্রমাগত আমাদের নিরাপত্তা অনুশীলন আপডেট করি।"
    },
    {
      icon: Eye,
      title: "Your Privacy Rights",
      titleBn: "আপনার গোপনীয়তার অধিকার",
      content: "You have the right to access, correct, or delete your personal information. You can opt-out of marketing communications at any time. You may request a copy of the data we hold about you. For B2B clients, you can update your business information through your account dashboard. To exercise these rights, please contact our privacy team.",
      contentBn: "আপনার ব্যক্তিগত তথ্য অ্যাক্সেস, সংশোধন বা মুছে ফেলার অধিকার আপনার রয়েছে। আপনি যেকোনো সময় মার্কেটিং যোগাযোগ থেকে অপ্ট-আউট করতে পারেন। আমরা আপনার সম্পর্কে যে ডেটা রাখি তার একটি কপি আপনি অনুরোধ করতে পারেন। B2B ক্লায়েন্টদের জন্য, আপনি আপনার অ্যাকাউন্ট ড্যাশবোর্ডের মাধ্যমে আপনার ব্যবসায়িক তথ্য আপডেট করতে পারেন। এই অধিকারগুলি প্রয়োগ করতে, অনুগ্রহ করে আমাদের গোপনীয়তা টিমের সাথে যোগাযোগ করুন।"
    },
    {
      icon: AlertCircle,
      title: "Cookies & Tracking",
      titleBn: "কুকিজ এবং ট্র্যাকিং",
      content: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings. Essential cookies are necessary for the website to function properly, while analytics and marketing cookies help us improve our services.",
      contentBn: "আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে, সাইট ট্রাফিক বিশ্লেষণ করতে এবং কন্টেন্ট ব্যক্তিগতকরণ করতে আমরা কুকিজ এবং অনুরূপ ট্র্যাকিং প্রযুক্তি ব্যবহার করি। আপনি আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকি পছন্দ নিয়ন্ত্রণ করতে পারেন। ওয়েবসাইট সঠিকভাবে কাজ করার জন্য প্রয়োজনীয় কুকিজ অপরিহার্য, যখন বিশ্লেষণ এবং মার্কেটিং কুকিজ আমাদের সেবা উন্নত করতে সাহায্য করে।"
    },
    {
      icon: CheckCircle2,
      title: "Data Retention",
      titleBn: "ডেটা ধারণ",
      content: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Business transaction records are kept for the period required by applicable tax and commercial laws.",
      contentBn: "এই গোপনীয়তা নীতিতে উল্লিখিত উদ্দেশ্যগুলি পূরণ করতে, আইনি বাধ্যবাধকতা মেনে চলতে, বিরোধ নিষ্পত্তি করতে এবং আমাদের চুক্তি প্রয়োগ করার জন্য যতটুকু সময় প্রয়োজন ততটুকু সময়ের জন্য আমরা আপনার ব্যক্তিগত তথ্য ধরে রাখি। প্রযোজ্য ট্যাক্স এবং বাণিজ্যিক আইন দ্বারা প্রয়োজনীয় সময়ের জন্য ব্যবসায়িক লেনদেনের রেকর্ড রাখা হয়।"
    },
    {
      icon: Shield,
      title: "Third-Party Services",
      titleBn: "তৃতীয় পক্ষের সেবা",
      content: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you (e.g., payment processors, shipping companies, cloud hosting). These parties are contractually obligated to keep your information secure and confidential and may only use it for the specific purposes we authorize.",
      contentBn: "আমরা বিশ্বস্ত তৃতীয় পক্ষের সেবা প্রদানকারীদের সাথে আপনার তথ্য শেয়ার করতে পারি যারা আমাদের ওয়েবসাইট পরিচালনা, ব্যবসা পরিচালনা বা আপনার সেবা প্রদানে সহায়তা করে (যেমন, পেমেন্ট প্রসেসর, শিপিং কোম্পানি, ক্লাউড হোস্টিং)। এই পক্ষগুলি চুক্তিগতভাবে আপনার তথ্য নিরাপদ এবং গোপনীয় রাখতে বাধ্য এবং শুধুমাত্র আমরা যে নির্দিষ্ট উদ্দেশ্যগুলি অনুমোদন করি তার জন্য এটি ব্যবহার করতে পারে।"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      labelBn: "ইমেইল",
      value: "privacy@paperware.com",
      href: "mailto:privacy@paperware.com"
    },
    {
      icon: Phone,
      label: "Phone",
      labelBn: "ফোন",
      value: "+880 1234-567890",
      href: "tel:+8801234567890"
    },
    {
      icon: MapPin,
      label: "Address",
      labelBn: "ঠিকানা",
      value: "7813 Trimohoni Nandipara Main Road, Dhaka",
      href: "https://www.google.com/maps/search/?api=1&query=7813+Trimohoni+Nandipara+Main+Road,+Dhaka"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50">
      {/* Hero Section */}
      <Motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-br from-black via-zinc-900 to-black text-white py-24 overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fabf37]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fabf37]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
          <Motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-[#fabf37]/10 border border-[#fabf37]/30 rounded-full px-6 py-3 mb-8">
              <Shield className="size-5 text-[#fabf37]" />
              <span className="text-sm font-bold tracking-wider uppercase text-[#fabf37]">
                {t("language") === "BN" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              {t("language") === "BN" ? (
                <>
                  আপনার <span className="text-[#fabf37]">গোপনীয়তা</span>
                  <br />আমাদের অগ্রাধিকার
                </>
              ) : (
                <>
                  Your <span className="text-[#fabf37]">Privacy</span>
                  <br />Our Priority
                </>
              )}
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              {t("language") === "BN" 
                ? "পেপারওয়্যার-এ আমরা আপনার ডেটা সুরক্ষিত রাখতে এবং সম্পূর্ণ স্বচ্ছতার সাথে কাজ করতে প্রতিশ্রুতিবদ্ধ।"
                : "At Paperware, we are committed to protecting your data and operating with complete transparency."
              }
            </p>

            <div className="mt-8 text-sm text-zinc-500">
              {t("language") === "BN" 
                ? "সর্বশেষ আপডেট: ১৫ জানুয়ারি, ২০২৬"
                : "Last Updated: January 15, 2026"
              }
            </div>
          </Motion.div>
        </div>
      </Motion.section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-zinc-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#fabf37] to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="size-8 text-black" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 text-black">
                      {t("language") === "BN" ? section.titleBn : section.title}
                    </h2>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      {t("language") === "BN" ? section.contentBn : section.content}
                    </p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Contact Privacy Team Section */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-br from-black via-zinc-900 to-black text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:30px_30px]" />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  {t("language") === "BN" 
                    ? "গোপনীয়তা সংক্রান্ত প্রশ্ন?"
                    : "Privacy Questions?"
                  }
                </h2>
                <p className="text-xl text-zinc-400">
                  {t("language") === "BN" 
                    ? "আমাদের ডেডিকেটেড প্রাইভেসি টিম এখানে সাহায্য করতে প্রস্তুত"
                    : "Our dedicated privacy team is here to help"
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {contactInfo.map((item, index) => (
                  <Motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 bg-[#fabf37] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <item.icon className="size-6 text-black" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1">
                          {t("language") === "BN" ? item.labelBn : item.label}
                        </p>
                        <p className="text-white font-semibold break-all">
                          {item.value}
                        </p>
                      </div>
                      <ArrowRight className="size-4 text-[#fabf37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Motion.a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Policy Updates Notice */}
          <Motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-amber-50 border-l-4 border-[#fabf37] rounded-2xl p-8"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="size-6 text-[#fabf37] shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-black text-black mb-2">
                  {t("language") === "BN" 
                    ? "নীতি আপডেট সম্পর্কে নোট"
                    : "Note About Policy Updates"
                  }
                </h3>
                <p className="text-zinc-700 leading-relaxed">
                  {t("language") === "BN" 
                    ? "আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। কোনো পরিবর্তন করা হলে আমরা এই পৃষ্ঠায় নতুন তারিখ সহ সংশোধিত নীতি পোস্ট করব। আমরা আপনাকে পর্যায়ক্রমে এই গোপনীয়তা নীতি পর্যালোচনা করতে উৎসাহিত করি যাতে আপনি আপডেট থাকতে পারেন।"
                    : "We may update this Privacy Policy from time to time. If we make changes, we will post the revised policy on this page with a new date. We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information."
                  }
                </p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
}

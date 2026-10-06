"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contactForm;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: f.servicesList[0],
    city: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: f.servicesList[0],
      city: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-xs border border-gray-100 shadow-md text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-[#FC6D15]/10 text-[#FC6D15] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            {formData.name ? `${formData.name}, ` : ""}
            {f.successTitle}
          </h3>
          <p className="text-gray-600 text-base max-w-md mx-auto leading-relaxed">
            {f.successDesc}
          </p>
        </div>
        <div className="p-4 bg-orange-50/60 border border-orange-100 rounded text-xs sm:text-sm text-gray-700 max-w-md mx-auto flex items-center gap-2 justify-center">
          <Sparkles className="w-4 h-4 text-[#FC6D15] flex-shrink-0" />
          <span>
            {t.contactPage.directCall.tagline}{" "}
            <a href="tel:4693581011" className="font-bold text-[#FC6D15] underline">
              (469) 358-1011
            </a>
          </span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-300 text-gray-700 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xs hover:border-[#FC6D15] hover:text-[#FC6D15] transition-colors cursor-pointer"
        >
          {f.resetBtn}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-10 lg:p-12 border border-gray-100 shadow-sm rounded-xs space-y-6"
    >
      <div className="border-b border-gray-100 pb-5">
        <span className="text-[#FC6D15] font-bold text-xs sm:text-sm tracking-wider uppercase mb-1 block">
          {f.title}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          {f.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {f.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
            {f.nameLabel} <span className="text-[#FC6D15]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={f.namePlaceholder}
            className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-xs text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FC6D15] focus:ring-1 focus:ring-[#FC6D15] transition-all"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
            {f.phoneLabel} <span className="text-[#FC6D15]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder={f.phonePlaceholder}
            className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-xs text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FC6D15] focus:ring-1 focus:ring-[#FC6D15] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Email Address */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
            {f.emailLabel} <span className="text-[#FC6D15]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={f.emailPlaceholder}
            className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-xs text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FC6D15] focus:ring-1 focus:ring-[#FC6D15] transition-all"
          />
        </div>

        {/* Project Location (City in DFW) */}
        <div className="space-y-1.5">
          <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
            {f.cityLabel}
          </label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder={f.cityPlaceholder}
            className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-xs text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FC6D15] focus:ring-1 focus:ring-[#FC6D15] transition-all"
          />
        </div>
      </div>

      {/* Service Needed */}
      <div className="space-y-1.5">
        <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
          {f.serviceLabel}
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-xs text-sm text-gray-900 focus:outline-none focus:border-[#FC6D15] focus:ring-1 focus:ring-[#FC6D15] transition-all"
        >
          {f.servicesList.map((svc) => (
            <option key={svc} value={svc}>
              {svc}
            </option>
          ))}
        </select>
      </div>

      {/* Project Details Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
          {f.messageLabel} <span className="text-[#FC6D15]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={f.messagePlaceholder}
          className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-xs text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FC6D15] focus:ring-1 focus:ring-[#FC6D15] transition-all resize-y"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#FC6D15] text-white font-bold text-sm tracking-wider uppercase rounded-xs hover:bg-[#e55e0c] transition-all duration-200 shadow-lg shadow-[#FC6D15]/25 cursor-pointer disabled:opacity-70 active:scale-98"
      >
        <Send className="w-4 h-4 mr-2" />
        <span>{isSubmitting ? f.submittingBtn : f.submitBtn}</span>
      </button>
    </form>
  );
}

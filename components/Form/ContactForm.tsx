/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useActionState } from "react";
import { sendEmail } from "@/app/actions/sendEmails";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState
  // @ts-ignore
  (sendEmail, null);

  return (
    <form action={formAction} className="space-y-4">
      {/* SPAM DEFENSE: Honeypot field - Invisible to humans */}
      <input 
        type="text" 
        name="confirm_email" 
        className="hidden" 
        tabIndex={-1} 
        autoComplete="off" 
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="firstName"
          type="text"
          required
          placeholder="First Name"
          className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow disabled:opacity-50 text-slate-700"
        />
        <input
          name="lastName"
          type="text"
          required
          placeholder="Last Name"
          className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow disabled:opacity-50 text-slate-700"
        />
      </div>

      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow disabled:opacity-50 text-slate-700"
      />

      <textarea
        name="message"
        required
        rows={4}
        placeholder="How can we help?"
        className="w-full bg-slate-50 border border-slate-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-slate-400 transition-shadow resize-y min-h-[96px] disabled:opacity-50 text-slate-700"
      ></textarea>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-amber-600 text-white font-bold uppercase tracking-widest text-sm py-3 hover:bg-amber-700 transition-colors mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Submit Request"}
      </button>

      {/* Status Messages */}
      {state?.error && (
        <p className="text-red-500 text-sm font-medium mt-2">{state.error}</p>
      )}
      {state?.success && (
        <p className="text-emerald-600 text-sm font-medium mt-2 p-3 bg-emerald-50 rounded-md border border-emerald-100">
          {state.success}
        </p>
      )}
    </form>
  );
}
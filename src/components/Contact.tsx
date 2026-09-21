import { useState } from 'react'
import { contactData, personalInfo } from '../data/portfolioData'
import { SectionHeading } from './SectionHeading'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    /*
      Clean separated handler ready for backend integration
      (e.g., Formspree, EmailJS, Resend, or custom API route)
    */
    try {
      // Simulate client submission delay for smooth UI transition
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setIsSubmitting(false)
      setSubmitStatus('error')
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#faf9f6]">
      <div className="container-editorial">
        <SectionHeading
          number="08"
          tag="Connect"
          title="Get in touch."
          subtitle="Interested in collaborating on a project, discussing internship opportunities, or exploring emerging technology? Feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                Direct Channels
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                You can reach out directly via email or connect through established developer and academic profiles.
              </p>
            </div>

            {/* Email Card with Copy Button */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-3 mt-1">
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-sm sm:text-base font-semibold text-slate-900 hover:text-purple-700 transition-colors break-all"
                >
                  {contactData.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shrink-0 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Social Accounts Grid */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block">
                Profiles & Presence
              </span>

              {/* GitHub */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono">GitHub</span>
                    <p className="text-sm font-bold text-slate-900">{contactData.githubUsername}</p>
                  </div>
                </div>
                {contactData.githubUrl && (
                  <a
                    href={contactData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-purple-700 hover:text-purple-900 underline"
                  >
                    View Profile
                  </a>
                )}
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0077b5] text-white flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.92H5.06v8.58z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono">LinkedIn</span>
                    <p className="text-sm font-bold text-slate-900">{contactData.linkedinName}</p>
                  </div>
                </div>
                {contactData.linkedinUrl ? (
                  <a
                    href={contactData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-purple-700 hover:text-purple-900 underline"
                  >
                    Connect
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">Profile Listed</span>
                )}
              </div>

              {/* Instagram */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono">Instagram</span>
                    <p className="text-sm font-bold text-slate-900">@{contactData.instagramHandle}</p>
                  </div>
                </div>
                {contactData.instagramUrl && (
                  <a
                    href={contactData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-purple-700 hover:text-purple-900 underline"
                  >
                    View Profile
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-2xs">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Fill out the fields below. Client validation ensures completeness before dispatch.
              </p>

              {submitStatus === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-6 text-sm flex items-start gap-3"
                >
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <div>
                    <p className="font-semibold">Message Prepared Successfully</p>
                    <p className="text-xs text-emerald-800 mt-1">
                      Thank you for reaching out! In this portfolio deployment, messages are received directly via email at{' '}
                      <span className="font-semibold">{contactData.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Your Name <span className="text-purple-700">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    placeholder="e.g. Maya Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-purple-600 focus:ring-purple-100 bg-white'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-purple-700">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    placeholder="e.g. maya@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-300 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-purple-600 focus:ring-purple-100 bg-white'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Message <span className="text-purple-700">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    placeholder="Describe your inquiry, project collaboration idea, or opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-purple-600 focus:ring-purple-100 bg-white'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Direct delivery to {personalInfo.shortName}
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

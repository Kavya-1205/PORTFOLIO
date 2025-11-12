import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xrbrbggo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        setIsSending(false);
        if (response.ok) {
          setIsSubmitted(true);
          form.reset();
          setTimeout(() => setIsSubmitted(false), 4000);
        } else {
          alert("❌ Oops! Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        setIsSending(false);
        alert("⚠️ Network error. Please check your connection and try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto mb-8" />
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-rose-200">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-rose-100 rounded-lg border-2 border-rose-200">
                      <Mail size={24} className="text-rose-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:kavyasaravanan1255@gmail.com"
                        className="text-neutral-600 hover:text-rose-500 transition-colors"
                      >
                        kavyasaravanan1255@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-lg border-2 border-purple-200">
                      <Phone size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+919629612052"
                        className="text-neutral-600 hover:text-rose-500 transition-colors"
                      >
                        +91 96296 12052
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg border-2 border-blue-200">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        Location
                      </h4>
                      <p className="text-neutral-600">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl p-8 border-2 border-rose-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Let's Connect!
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Whether you have a project in mind, need help with AI/ML
                  development, or just want to chat about technology, I'd love
                  to hear from you. Feel free to reach out through any of the
                  channels above or use the contact form.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 relative">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-neutral-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-50 border-2 border-neutral-200 rounded-lg focus:outline-none focus:border-rose-400 transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full px-8 py-4 font-semibold rounded-lg text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 ${
                    isSending
                      ? "bg-rose-300 cursor-not-allowed"
                      : "bg-rose-400 hover:bg-rose-500 hover:shadow-xl"
                  }`}
                >
                  {isSending ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {/* Success Popup */}
              {isSubmitted && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-green-300 shadow-lg transition-all duration-300">
                  <CheckCircle size={48} className="text-green-500 mb-3" />
                  <p className="text-lg font-semibold text-green-600">
                    Message Sent Successfully!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


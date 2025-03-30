import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface ContactSectionProps {
  isNight?: boolean;
}

export default function ContactSection({ isNight = false }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="py-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-12">Get in Touch</h2>
        <div className="relative -mt-10">
          {/* Moved opaque background inside the Card */}
          <Card className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
            isNight 
              ? 'bg-[#345766]/5 backdrop-blur-sm border-2 border-white hover:border-[#2e586b]'
              : 'bg-white/15 backdrop-blur-sm border-2 border-gray-200'
          }`}>
            {/* Updated background with subtle gradient */}
            {isNight && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#345766]/10 to-[#345766]/5" />
            )}
            <motion.div
              whileHover={{ scale: 1 }}  // This prevents double scaling
              className="relative"
            >
              <CardContent className="p-8 relative">
                <form className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block mb-2 font-medium ${
                        isNight 
                          ? 'text-[#345766]'
                          : 'text-black'
                      }`}
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className={`w-full transition-all duration-200 ${
                        isNight 
                          ? 'border-[#345766]/40 focus:border-[#345766] focus:ring-[#345766] bg-white/80 backdrop-blur-sm text-[#345766]'
                          : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400 bg-white/90 text-black'
                      }`}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 font-medium ${
                        isNight 
                          ? 'text-[#345766]'
                          : 'text-black'
                      }`}
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className={`w-full transition-all duration-200 ${
                        isNight 
                          ? 'border-[#345766]/40 focus:border-[#345766] focus:ring-[#345766] bg-white/80 backdrop-blur-sm text-[#345766]'
                          : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400 bg-white/90 text-black'
                      }`}
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="message" 
                      className={`block mb-2 font-medium ${
                        isNight 
                          ? 'text-[#345766]'
                          : 'text-black'
                      }`}
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className={`w-full min-h-[150px] transition-all duration-200 ${
                        isNight 
                          ? 'border-[#345766]/40 focus:border-[#345766] focus:ring-[#345766] bg-white/80 backdrop-blur-sm text-[#345766]'
                          : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400 bg-white/90 text-black'
                      }`}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className={`w-full transition-all duration-200 ${
                      isNight 
                        ? 'bg-[#345766] hover:bg-[#345766]/90 text-white shadow-lg hover:shadow-xl hover:shadow-[#345766]/20'
                        : 'bg-black hover:bg-black/90 text-white shadow-lg hover:shadow-xl hover:shadow-black/20'
                    }`}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </motion.div>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

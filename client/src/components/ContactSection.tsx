import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-2xl"
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="relative">
          {/* Moved opaque background inside the Card */}
          <Card className="relative rounded-lg overflow-hidden bg-primary/5 dark:bg-white">
            {/* Opaque layer only in light mode */}
            <div className="absolute inset-0 bg-background dark:hidden" />
            <CardContent className="p-6 relative dark:text-black">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 dark:text-black">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full border-gray-400 dark:bg-white dark:text-black dark:border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 dark:text-black">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border-gray-400 dark:bg-white dark:text-black dark:border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 dark:text-black">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full min-h-[150px] border-gray-400 dark:bg-white dark:text-black dark:border-gray-300"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}

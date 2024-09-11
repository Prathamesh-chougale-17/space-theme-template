"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SpaceStationScene from "./HeaderAnimation";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
  const [formState, setFormState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isLaunching, setIsLaunching] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async () => {
    setIsLaunching(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Randomly succeed or fail for demonstration purposes
    const success = Math.random() > 0.5;
    setFormState(success ? "success" : "error");

    // Reset launching state after animation completes
    // setTimeout(() => setIsLaunching(false), 3000);
    setIsLaunching(false);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Space Station Scene */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <SpaceStationScene state={formState} isLaunching={isLaunching} />
      </div>

      {/* Contact Form */}
      <div className="w-1/2 h-full flex items-center justify-center p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md z-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Send a Cosmic Message
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                {...register("name")}
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white border-purple-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message?.toString()}
                </p>
              )}
            </div>
            <div>
              <Input
                {...register("email")}
                placeholder="Your Email"
                type="email"
                className="w-full bg-gray-800 text-white border-purple-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
            <div>
              <Textarea
                {...register("message")}
                placeholder="Your Message"
                className="w-full bg-gray-800 text-white border-purple-500"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLaunching}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              {isLaunching
                ? "Launching..."
                : formState === "success"
                ? "Message Sent!"
                : formState === "error"
                ? "Sending Failed"
                : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;

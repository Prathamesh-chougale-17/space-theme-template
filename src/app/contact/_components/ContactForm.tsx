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
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [formState, setFormState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isLaunching, setIsLaunching] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // setIsLaunching(true);

    // Simulate form submission
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    // Randomly succeed or fail for demonstration purposes
    // const success = Math.random() > 0.5;
    // setFormState(success ? "success" : "error");
    // if (success === true) reset();

    // Reset launching state after animation completes
    // setTimeout(() => setIsLaunching(false), 3000);
    try {
      setIsLaunching(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setFormState("success");
        reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.error(error);
      setFormState("error");
    } finally {
      setIsLaunching(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-screen">
      {/* Space Station Scene */}
      <div className="w-full mt-20 lg:w-1/2 h-[300px] lg:h-auto flex justify-center items-center">
        <SpaceStationScene state={formState} isLaunching={isLaunching} />
      </div>

      {/* Contact Form */}
      <div className="w-full lg:w-1/2 flex items-center z-20 justify-center p-4 lg:p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center text-white">
            Send a Cosmic Message
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 lg:space-y-6"
          >
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
                {...register("subject")}
                placeholder="Your Subject"
                type="subject"
                className="w-full bg-gray-800 text-white border-purple-500"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message?.toString()}
                </p>
              )}
            </div>
            <div>
              <Textarea
                {...register("message")}
                placeholder="Your Message"
                className="w-full bg-gray-800 text-white border-purple-500"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message?.toString()}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLaunching || formState === "success"}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300"
            >
              {isLaunching
                ? "Launching..."
                : formState === "success"
                ? "Message Sent!"
                : formState === "error"
                ? "Try Again"
                : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;

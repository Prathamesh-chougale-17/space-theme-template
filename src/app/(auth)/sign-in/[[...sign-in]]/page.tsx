import React from "react";
import { SignIn } from "@clerk/nextjs";
import { Card } from "@/components/ui/card";

const SignInPage = () => {
  return (
    <div className="h-[48rem] flex items-center justify-center">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl z-10 p-8 rounded-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Join Our Community
        </h1>
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "w-full shadow-none bg-transparent",
              header: "hidden",
              formButtonPrimary:
                "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md px-4 py-2 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-all duration-200",
              formFieldInput:
                "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200",
              formFieldLabel: "text-sm font-medium text-gray-700",
              identityPreviewText: "text-sm text-gray-600",
              identityPreviewEditButton:
                "text-purple-600 hover:text-purple-700",
              formResendCodeLink: "text-purple-600 hover:text-purple-700",
            },
          }}
        />
      </Card>
    </div>
  );
};

export default SignInPage;

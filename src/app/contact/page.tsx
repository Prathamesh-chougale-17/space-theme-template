// app/contact/page.tsx
"use client";
// import SpaceContactAnimation from "./_components/HeaderAnimation";
import ContactForm from "./_components/ContactForm";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <ContactForm />
        {/* <OurTeam /> */}
      </div>
    </main>
  );
};

export default ContactPage;

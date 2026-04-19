"use client";

import ContactForm from "./Landing/Contact";
import Footer from "./Common/Footer";
import Header from "./Common/Header";

function Layout({ children }) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
      <div className="">
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

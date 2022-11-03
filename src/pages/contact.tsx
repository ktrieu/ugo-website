import React from "react";
import { FaTwitter, FaEnvelope, FaYoutube } from "react-icons/fa";
import Layout from "../components/Layout";

const ContactPage: React.FC = () => {
  return (
    <Layout title="Contact Us" path="/contact">
      <h1 className="text-primary text-6xl">Contact Us</h1>
      <div className="grid grid-cols-2 gap-4 divide-x-2">
        <div className="prose max-w-none mt-3">
          <p>
            Since UGO Neuroscience's subliminal mind control research remains
            unfinished, our customers may occasionally visit other websites.
          </p>
          <p>
            Luckily, UGO II maintains a presence on several other major websites
            as well.
          </p>
        </div>
        <div className="pl-10 mt-3">
          <ul className="prose">
            <li>
              <FaEnvelope className="inline mr-3 text-primary" size={30} />{" "}
              <a href="mailto:contact@ugo-ii.com">contact@ugo-ii.com</a>
            </li>
            <li>
              <FaTwitter className="inline mr-3 text-primary" size={30} />{" "}
              <a href="https://twitter.com/ourproductis">
                twitter.com/ourproductis
              </a>
            </li>
            <li>
              {/* For some reason, this icon is aligned weird and needs another tick of margin. */}
              <FaYoutube className="inline mr-4 text-primary" size={30} />
              <a href="https://www.youtube.com/@watchugo">
                youtube.com/@watchugo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;

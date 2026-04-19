"use client";

import { Layout } from "../../Components";
import {
  MailIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import _img_Call from "../../Assests/callg.jpeg";
const Call = _img_Call && typeof _img_Call === 'object' && 'src' in _img_Call ? _img_Call.src : _img_Call;
function Contact() {
  return (
    <Layout>
      <div className="flex max-w-[90%] flex-wrap my-[5rem] lg:max-w-[85%] mx-auto ">
        <div className=" md:w-[50%] mb-[2rem]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Contact Us.
          </h2>
          <p className="md:w-[80%]">
            {" "}
            For enquiries, sponsorship, feedback, kindly reach out to our team.
            A team member will respond swiftly to analyze your request and come
            up with a suitable response.
          </p>
        </div>
        <div className=" md:w-[45%]">
          <img src={Call} alt="contact" className="w-full" />
        </div>
      </div>

      <div className="flex mb-[2rem] max-w-[90%] items-center pt-[rem] flex-wrap  lg:max-w-[85%] mx-auto ">
        <div className="w-full md:w-[48%] md:p-[2rem]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3964.1064089420606!2d3.37049811015414!3d6.508212993456912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1698445302375!5m2!1sen!2sng"
            width={"100%"}
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            title="map"
            referrerpolicy="no-referrer-when-downgrade"
            // eslint-disable-next-line
          ></iframe>
        </div>

        <div className="mt-[3rem]  md:mt-[rem] w-full md:w-[50%] md:pl-[4rem]">
          <h2 className="font-extrabold text-green text-[1.2rem] md:text-[2rem]">
            Get in touch with us
          </h2>
          <p>Fill the form below or visit us at our contact address</p>
          <div className="flex mb-3 mt-3">
            <LocationMarkerIcon className="w-5 mr-3 " />
            <p>CYON Secetariat, 19 Maye Street, Yaba, Lagos</p>
          </div>
          <div className="flex mb-3">
            <PhoneIcon className="w-4 mr-3" />
            <p>+234********</p>
          </div>
          <div className="flex mb-3">
            <MailIcon className="w-4 mr-3" />
            <a
              href="mailto:cyonadclagos@gmail.com"
              className="text-[#356ee9df]"
            >
              Send mail
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;

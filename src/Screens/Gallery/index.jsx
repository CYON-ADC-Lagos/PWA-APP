"use client";

import _img_Event from "../../Assests/event.png";
import _img_Event1 from "../../Assests/event1.png";
import _img_Event2 from "../../Assests/event2.png";
import { Layout } from "../../Components";
import _img_Event11 from "../../Assests/Adc.jpeg";
import _img_Event12 from "../../Assests/Adc11.jpeg";
import _img_Event13 from "../../Assests/adc23.jpeg";
import _img_Event14 from "../../Assests/Ad.jpeg";
import _img_Event15 from "../../Assests/Adc2.jpeg";
import _img_Event16 from "../../Assests/visit.jpeg";
const Event = _img_Event && typeof _img_Event === 'object' && 'src' in _img_Event ? _img_Event.src : _img_Event;
const Event1 = _img_Event1 && typeof _img_Event1 === 'object' && 'src' in _img_Event1 ? _img_Event1.src : _img_Event1;
const Event2 = _img_Event2 && typeof _img_Event2 === 'object' && 'src' in _img_Event2 ? _img_Event2.src : _img_Event2;
const Event11 = _img_Event11 && typeof _img_Event11 === 'object' && 'src' in _img_Event11 ? _img_Event11.src : _img_Event11;
const Event12 = _img_Event12 && typeof _img_Event12 === 'object' && 'src' in _img_Event12 ? _img_Event12.src : _img_Event12;
const Event13 = _img_Event13 && typeof _img_Event13 === 'object' && 'src' in _img_Event13 ? _img_Event13.src : _img_Event13;
const Event14 = _img_Event14 && typeof _img_Event14 === 'object' && 'src' in _img_Event14 ? _img_Event14.src : _img_Event14;
const Event15 = _img_Event15 && typeof _img_Event15 === 'object' && 'src' in _img_Event15 ? _img_Event15.src : _img_Event15;
const Event16 = _img_Event16 && typeof _img_Event16 === 'object' && 'src' in _img_Event16 ? _img_Event16.src : _img_Event16;

function Gallery() {
  return (
    <Layout>
      <div className="w-full  ">
        <h2 className="text-center mt-[3rem]  text-primary-shade font-extrabold text-[1.7rem]">
          PHOTO GALLERY
        </h2>
        <hr className="w-[90px] mx-auto border-b mt-3 border-green border-4 bg-primary"></hr>
        <div className=" flex flex-wrap  justify-between max-w-[90%] lg:max-w-[85%] py-[2rem] md:py-[6rem] mx-auto">
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event16}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[.5rem]">
              CYON Archdiocese of Lagos Executives on a warm visit to the
              Emeritus Archbishop of Lagos.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event15}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[1rem]">
              2023 Archdiocesan Youth Day (AYD).
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event14}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              2023 Archdiocesan Youth Day (AYD).
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[.5rem]">
              Accreditation of members at ADC CYON General Meeting at St.
              Stephen’s, Iponri.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event1}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade  mt-[1rem]">
              Accreditation of members at ADC CYON General Meeting at St.
              Stephen’s, Iponri.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event2}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              Accreditation of members at ADC CYON General Meeting at St.
              Stephen’s, Iponri.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event11}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              Lagos Archdiocesan Laity Council 25th Annual General Meeting (AGM)
              hosted by Ikorodu Deanery.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event12}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              CYON LEP Leadership Seminar/Retreat 2023.
            </h4>
          </div>
          <div className="w-full md:w-[30%] mb-[5rem] md:h-[350px]">
            <img
              src={Event13}
              alt="Hero view"
              className="w-full h-full object-cover"
            />
            <h4 className="text-center font-light text-primary-shade mt-[1rem]">
              2023 Archdiocesan Youth Day (AYD).
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;

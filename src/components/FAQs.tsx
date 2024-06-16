import React from "react";
import Accordion from "./Accordion";

const FAQs = () => {
  return (
    <div className="  ">
      <Accordion
        title="What services does your company provide for healthcare facilities?"
        answer="We specialize in hospital interior design, installation, and maintenance of gas pipeline systems, and supply of high-quality hospital equipment including beds, chairs, and lights. We also offer modular operation theater equipment and comprehensive service solutions tailored to meet the specific needs of healthcare environments."
      />
      <Accordion
        title="How does your company ensure the safety and reliability of gas pipeline systems in hospitals?"
        answer="We adhere strictly to industry standards and regulations in designing and installing gas pipeline systems. Our team of experts conducts thorough inspections, regular maintenance, and performance tests to ensure optimal functionality and safety at all times."
      />
      <Accordion
        title="What sets your hospital interior design services apart from others?"
        answer="Our hospital interior design services are characterized by a blend of functionality and aesthetics. We prioritize patient comfort and operational efficiency, integrating modern design principles with durable, high-quality materials to create environments that promote healing and well-being."
      />
      <Accordion
        title="How does your company support hospitals in maintaining their equipment and facilities?"
        answer="We offer comprehensive maintenance and support services to ensure the longevity and reliability of hospital equipment and facilities. Our proactive maintenance programs and responsive support team help hospitals minimize downtime, enhance operational efficiency, and maintain the highest standards of patient care."
      />
    </div>
  );
};

export default FAQs;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Contact from '../../Components/Product/Product';
import Slider from '../../Components/Slider/Slider';
import Header from '../../Components/Header/Header';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="font-inter text-[#e6eef8] bg-gradient-to-b from-[#c8b6ff] to-[#f8edeb] min-h-screen">
      {/* Header */}
      <Header></Header>

      {/* Slider Section */}
      <Slider></Slider>
      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto mt-6 md:mt-10 pb-10">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;

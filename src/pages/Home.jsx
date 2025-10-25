import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";
import catDogImg from "../assets/adorable.jpg"
import blackCat from "../assets/catus.png"
import dogCat from "../assets/dog.png"
import d1 from "../assets/d2.png"
import d2 from "../assets/d1.png"
import d3 from "../assets/d4.png"
import d4 from "../assets/d3.png"

// import { Link } from "react-router-dom";

const Home = () => {
  const [services, setServices] = useState([]);

 
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {/* ✅ Hero Slider */}
      <section className="mb-12 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <img
              src={catDogImg}
              alt="Pet in Winter Coat"
              className="w-full object-cover h-[700px]"
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={blackCat}
              alt="Warm Cat Blanket"
              className="w-full h-[700px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={dogCat}
              alt="Dog Winter Care"
              className="w-full h-[700px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ✅ Popular Winter Care Services Section */}
      <section className="my-10 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Popular Winter Care Services
        </h2>

        {/* 🔹 Grid Layout */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {services.map((service) => (
            <div
              key={service.serviceId}
              className="card bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            >
              <figure>
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="h-56 w-full object-cover"
                />
              </figure>
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold mb-1">
                  {service.serviceName}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  By {service.providerName}
                </p>
                <p className="font-semibold text-blue-400 mb-1">
                  ${service.price}
                </p>
                <p className="text-yellow-500 mb-2">⭐ {service.rating}</p>
                 <Link
                  to={`/service/${service.serviceId}`}
                  className="btn btn-sm bg-blue-400 text-white border-none hover:bg-blue-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

         {/* <div className="mt-8">
          <Link
            to="/services"
            className="text-blue-500 font-semibold hover:underline"
          >
            See All Services →
          </Link>
        </div> */}
      </section>

      

      {/* ✅ Winter Care Tips */}
<section className="my-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">
    Winter Care Tips for Pets
  </h2>
  
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
   
    <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold mb-2">Keep Them Warm</h3>
      <p>Dress your pets in cozy sweaters or coats when going outside in cold weather.</p>
    </div>

    
    <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold mb-2">Protect Their Paws</h3>
      <p>Use paw balm or boots to prevent frostbite or irritation from snow and ice.</p>
    </div>

    
    <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold mb-2">Proper Nutrition</h3>
      <p>Provide high-quality food and extra hydration to help your pets maintain energy in cold weather.</p>
    </div>
  </div>
</section>



<section className="my-16 px-4">
  <h2 className="text-3xl font-bold text-center mb-8">
    Meet Our Expert Vets
  </h2>

  <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
    {/* Vet 1 */}
    <div className="text-center p-4 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
      <img
        src={d1}
        alt="Dr. Sarah"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">Dr. Sarah</h3>
      <p className="text-gray-500 text-sm">Pet Nutrition Specialist</p>
    </div>

    {/* Vet 2 */}
    <div className="text-center p-4 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
      <img
        src={d2}
        alt="Dr. John"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">Dr. John</h3>
      <p className="text-gray-500 text-sm">Grooming Expert</p>
    </div>

    {/* Vet 3 */}
    <div className="text-center p-4 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
      <img
        src={d3}
        alt="Dr. Emma"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">Dr. Emma</h3>
      <p className="text-gray-500 text-sm">Winter Care Specialist</p>
    </div>

    {/* Vet 4 */}
    <div className="text-center p-4 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
      <img
        src={d4}
        alt="Dr. Liam"
        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">Dr. Liam</h3>
      <p className="text-gray-500 text-sm">Behavioral Specialist</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;

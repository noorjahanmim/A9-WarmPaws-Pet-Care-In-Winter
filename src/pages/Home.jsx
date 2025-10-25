import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";
import catDogImg from "../assets/adorable.jpg";
import blackCat from "../assets/catus.png";
import dogCat from "../assets/dog.png";
import d1 from "../assets/d2.png";
import d2 from "../assets/d1.png";
import d3 from "../assets/d4.png";
import d4 from "../assets/d3.png";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <section className="mb-12 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg w-full"
        >
          {[catDogImg, blackCat, dogCat].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[600px] lg:h-[700px]">
                <img
                  src={img}
                  alt="Slide Image"
                  className="w-full h-full object-cover sm:object-contain md:object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 text-white text-center px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
                    {i === 0
                      ? "Keep Your Pets Cozy"
                      : i === 1
                      ? "Winter Warmth for Cats"
                      : "Care for Your Dogs"}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-4">
                    {i === 0
                      ? "Explore our winter pet care services"
                      : i === 1
                      ? "Cozy outfits and grooming tips for your feline friends"
                      : "Keep your dogs warm, safe, and healthy this winter"}
                  </p>
                  <Link
                    to="/services"
                    className="px-6 py-2 bg-blue-400 rounded-lg hover:bg-blue-500"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Popular Winter Care Services */}
      <section className="my-10 text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Popular Winter Care Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.serviceId}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={service.image}
                alt={service.serviceName}
                className="h-56 sm:h-64 md:h-56 w-full object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold mb-1">
                  {service.serviceName}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  By {service.providerName}
                </p>
                <p className="font-semibold text-blue-400 mb-1">${service.price}</p>
                <p className="text-yellow-500 mb-2">⭐ {service.rating}</p>
                <Link
                  to={`/service/${service.serviceId}`}
                  className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Winter Care Tips */}
      <section className="my-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Winter Care Tips for Pets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Keep Them Warm",
              desc: "Dress your pets in cozy sweaters or coats when going outside in cold weather.",
            },
            {
              title: "Protect Their Paws",
              desc: "Use paw balm or boots to prevent frostbite or irritation from snow and ice.",
            },
            {
              title: "Proper Nutrition",
              desc: "Provide high-quality food and extra hydration to help your pets maintain energy in cold weather.",
            },
          ].map((tip, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p>{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Expert Vets */}
      <section className="my-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Meet Our Expert Vets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: d1, name: "Dr. Sarah", desc: "Pet Nutrition Specialist" },
            { img: d2, name: "Dr. John", desc: "Grooming Expert" },
            { img: d3, name: "Dr. Emma", desc: "Winter Care Specialist" },
            { img: d4, name: "Dr. Liam", desc: "Behavioral Specialist" },
          ].map((vet, i) => (
            <div
              key={i}
              className="text-center p-4 sm:p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform"
            >
              <img
                src={vet.img}
                alt={vet.name}
                className="w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg sm:text-lg md:text-lg font-semibold">{vet.name}</h3>
              <p className="text-gray-500 text-sm sm:text-sm md:text-base">{vet.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

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
      {/* ✅ Hero Slider */}
      <section className="mb-12 w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw]">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-[700px]">
              <img
                src={catDogImg}
                alt="Pet in Winter Coat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 text-white text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  Keep Your Pets Cozy
                </h2>
                <p className="text-lg md:text-xl mb-4">
                  Explore our winter pet care services
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

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-[700px]">
              <img
                src={blackCat}
                alt="Warm Cat Blanket"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 text-white text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  Winter Warmth for Cats
                </h2>
                <p className="text-lg md:text-xl mb-4">
                  Cozy outfits and grooming tips for your feline friends
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

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-[700px]">
              <img
                src={dogCat}
                alt="Dog Winter Care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 text-white text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">
                  Care for Your Dogs
                </h2>
                <p className="text-lg md:text-xl mb-4">
                  Keep your dogs warm, safe, and healthy this winter
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
        </Swiper>
      </section>

      {/* ✅ Popular Winter Care Services Section */}
      <section className="my-10 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">
          Popular Winter Care Services
        </h2>

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
      </section>

      {/* ✅ Winter Care Tips */}
      <section className="my-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Winter Care Tips for Pets
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Keep Them Warm</h3>
            <p>
              Dress your pets in cozy sweaters or coats when going outside in
              cold weather.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Protect Their Paws</h3>
            <p>
              Use paw balm or boots to prevent frostbite or irritation from snow
              and ice.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Proper Nutrition</h3>
            <p>
              Provide high-quality food and extra hydration to help your pets
              maintain energy in cold weather.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Meet Our Expert Vets */}
      <section className="my-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meet Our Expert Vets
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {[{ img: d1, name: "Dr. Sarah", desc: "Pet Nutrition Specialist" },
            { img: d2, name: "Dr. John", desc: "Grooming Expert" },
            { img: d3, name: "Dr. Emma", desc: "Winter Care Specialist" },
            { img: d4, name: "Dr. Liam", desc: "Behavioral Specialist" }].map((vet, i) => (
            <div
              key={i}
              className="text-center p-4 bg-white shadow-lg rounded-xl hover:scale-105 transition-transform"
            >
              <img
                src={vet.img}
                alt={vet.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{vet.name}</h3>
              <p className="text-gray-500 text-sm">{vet.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

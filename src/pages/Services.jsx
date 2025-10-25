import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        🐶 Our Winter Care Services
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 ">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="hover:scale-105 transition ease-in-out">
              <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
            <div className="p-4 flex flex-col justify-between h-56">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {service.serviceName}
                </h3>
                <p className="text-gray-600 mb-2">{service.providerName}</p>
                <p className="font-bold text-gray-800 mb-4">
                  💲{service.price} | ⭐ {service.rating}
                </p>
              </div>
              <Link
                to={`/service/${service.serviceId}`}
                className="block bg-blue-400 text-white text-center py-2 rounded-lg hover:bg-blue-500"
              >
                View Details
              </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

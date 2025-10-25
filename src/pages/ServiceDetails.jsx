import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.serviceId === parseInt(serviceId));
        setService(found);
      });
  }, [serviceId]);

  if (!service)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  const handleBooking = () => {
    toast.success(`Booked: ${service.serviceName}`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Two column layout */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left side: Image */}
        <div className="md:w-1/2">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right side: Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">{service.serviceName}</h2>
            <p className="text-gray-600 mb-1">Provider: {service.providerName}</p>
            <p className="text-gray-600 mb-1">Email: {service.providerEmail}</p>
            <p className="font-semibold text-gray-800 mb-4">
              Price: ${service.price} | Rating: ⭐{service.rating}
            </p>

            <h3 className="text-xl font-semibold mb-2">Service Details:</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>

          <button
            onClick={handleBooking}
            className="mt-8 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Book Now
          </button>
        </div>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default ServiceDetails;

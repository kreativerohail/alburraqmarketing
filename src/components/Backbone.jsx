import { useState, useEffect, useRef } from "react";

// ✅ Import Logos from Assets
import newChakwal from "../assets/NCC.png";
import executiveTown from "../assets/executive town.png";
import paradiseValley from "../assets/ppv.png";
import rehmanGardens from "../assets/rg.png";
import bheraCity from "../assets/new City Bhera.png";
import baghCity from "../assets/bagh city.png";
import prismaApartments from "../assets/pr.png";
import modelResorts from "../assets/Mr.png";

export default function Backbone() {
  const [activeProject, setActiveProject] = useState(null);
  const scrollRef = useRef(null);

  const projects = [
    {
      name: "New Chakwal City",
      logo: newChakwal,
      location: "Chakwal",
      size: "1200 Kanals",
      details:
        "New Chakwal City is a premium housing project designed with modern infrastructure, smart planning, wide roads and secure gated community living.",
    },
    {
      name: "Executive Town",
      logo: executiveTown,
      location: "Chakwal",
      size: "222 Kanals",
      details:
        "Executive Town offers luxury lifestyle with high-end planning and peaceful environment.",
    },
    {
      name: "Paradise Valley",
      logo: paradiseValley,
      location: "Chakwal",
      size: "—",
      details:
        "Paradise Valley combines nature and modern living with green landscapes.",
    },
    {
      name: "Rehman Garden",
      logo: rehmanGardens,
      location: "P.D. Khan",
      size: "780 Kanals",
      details:
        "Rehman Garden offers affordability and essential amenities for comfortable living.",
    },
    {
      name: "New City Bhera",
      logo: bheraCity,
      location: "Bhera",
      size: "388 Kanals",
      details:
        "New City Bhera is an emerging real estate hub with strong investment potential.",
    },
    {
      name: "Bagh City",
      logo: baghCity,
      location: "Sargodha",
      size: "200 Kanals",
      details:
        "Bagh City promotes green living with open spaces and peaceful surroundings.",
    },
    {
      name: "Prisma Apartments",
      logo: prismaApartments,
      location: "Islamabad",
      size: "—",
      details:
        "Prisma Apartments provide elegant apartment living with modern facilities.",
    },
    {
      name: "Model Resorts",
      logo: modelResorts,
      location: "Kallar Kahar (Commercial)",
      size: "35 Kanals",
      details:
        "Model Resorts delivers a resort-style lifestyle experience with luxury comfort.",
    },
  ];

  // ✅ Infinite Auto Scroll
  useEffect(() => {
    const container = scrollRef.current;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900">
          Our Backbone
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our strength lies in the landmark projects that define our journey.
        </p>

        {/* ✅ Logo Slider */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-16 overflow-x-hidden whitespace-nowrap"
        >
          {projects.concat(projects).map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <img
                src={project.logo}
                alt={project.name}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 px-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Logo */}
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full shadow">
              <img
                src={activeProject.logo}
                alt="logo"
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Project Name */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {activeProject.name}
            </h3>

            {/* Project Info */}
            <div className="text-left text-sm text-gray-600 space-y-2">

              <p>
                <span className="font-semibold text-gray-800">
                  Location:
                </span>{" "}
                {activeProject.location}
              </p>

              {activeProject.size !== "—" && (
                <p>
                  <span className="font-semibold text-gray-800">
                    Project Size:
                  </span>{" "}
                  {activeProject.size}
                </p>
              )}

              <p className="pt-3 leading-relaxed">
                {activeProject.details}
              </p>

            </div>

            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="mt-6 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";

const OurServices = () => {
  const serviceData = [
    {
      name: "Resume Builder",
      subTitle: "Create professional resumes in minutes",
      route: "/resume-builder",
    },
    {
      name: "Job Search",
      subTitle: "Find jobs that match your skills",
      route: "/job-search",
    },
    {
      name: "Career Advice",
      subTitle: "Get tips from industry experts",
      route: "/career-advice",
    },
    {
      name: "Application Tracker",
      subTitle: "Keep track of your job applications",
      route: "/application-tracker",
    },
    {
      name: "Interview Preparation",
      subTitle: "Practice and ace your interviews",
      route: "/interview-prep",
    },
    {
      name: "Salary Insights",
      subTitle: "Know your worth with real-time data",
      route: "/salary-insights",
    },
  ];

  return (
    <div className="container mx-auto">
      <section id="services" className="py-20">
        <SectionTitle heading={"Our Services"} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-slate-900 dark:text-slate-200">
          {/* services */}
          {serviceData.map((service) => (
            <Link
              to={service.route}
              className="group flex items-center gap-2 border border-slate-500 rounded-md px-2 py-4 xl:px-4 xl:py-8
                      bg-gradient-to-r from-white via-white to-white hover:from-[#014AA9] hover:via-blue-600 hover:to-blue-800 
                      transition-all duration-500 ease-in-out dark:hover:from-slate-800 dark:hover:via-slate-700 dark:hover:to-slate-600 
                      dark:text-slate-200 hover:shadow-2xl"
            >
              <div className="text-[#014AA9] group-hover:text-white dark:group-hover:text-slate-200 transition-colors duration-500">
                <Check size={40} />
              </div>
              <div>
                <h2 className="font-semibold text-base xl:text-xl group-hover:text-white dark:group-hover:text-slate-100 transition-colors duration-500">
                  {service.name}
                </h2>
                <p className="text-sm xl:text-lg group-hover:text-white dark:group-hover:text-slate-300 transition-colors duration-500">
                  {service.subTitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;

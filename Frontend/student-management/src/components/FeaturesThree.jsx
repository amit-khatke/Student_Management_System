import React from "react";
import { BookOpen, Video, FileCheck, Users, ClipboardList, Calendar } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-10 h-10 text-green-600" />,
    title: "Smart Class",
    description:
      "Software helps schools by providing them tools to conduct online classes with increased efficiency.",
  },
  {
    icon: <Video className="w-10 h-10 text-pink-600" />,
    title: "Video Tutorials",
    description:
      "The video tutorial feature offers a complete learning management system to the students of your school.",
  },
  {
    icon: <FileCheck className="w-10 h-10 text-blue-600" />,
    title: "Online Exam",
    description:
      "Software offers a robust online examination system for your school students and teachers.",
  },
  {
    icon: <Users className="w-10 h-10 text-purple-600" />,
    title: "Attendance",
    description:
      "With the Attendance module schools and institutions can easily manage student and staff attendance.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-yellow-600" />,
    title: "Homework Management",
    description:
      "The homework management feature helps teachers assign and track homework with ease.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-red-600" />,
    title: "Timetable Management",
    description:
      "Timetable feature, schools can create and manage efficient schedules for classes.",
  },
];

const FeaturesThree = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What features do you get in the Student Management System?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesThree;

import React from "react";
import { Link, Outlet } from "react-router-dom";

export const coursesData = [
  { id: 1, title: "React Fundamentals", instructor: "Ayesha Khan", duration: "6 weeks", description: "Learn components, props, state, and hooks from the ground up." },
  { id: 2, title: "React Router Deep Dive", instructor: "Bilal Ahmed", duration: "3 weeks", description: "Dynamic routes, nested routes, and protected routes explained clearly." },
  { id: 3, title: "Styling with Tailwind CSS", instructor: "Sara Malik", duration: "4 weeks", description: "Build clean, responsive UIs fast using utility classes." },
];

function Courses() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-display text-3xl mb-8 text-ink">Courses</h1>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {coursesData.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`} className="rounded-lg border border-black/10 bg-white p-5 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-ink">{course.title}</h3>
            <p className="text-sm text-ink/50 mt-1">{course.duration}</p>
          </Link>
        ))}
      </div>
      <div className="border-t border-black/10 pt-8">
        <Outlet context={{ coursesData }} />
      </div>
    </div>
  );
}

export default Courses;
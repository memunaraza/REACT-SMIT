import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();
  const { coursesData } = useOutletContext();
  const course = coursesData.find((c) => c.id === Number(id));

  if (!course) return <p className="text-ink/60">Select a course above to see details.</p>;

  return (
    <div>
      <h2 className="font-display text-2xl text-ink">{course.title}</h2>
      <p className="text-sm text-accent mt-1">Instructor: {course.instructor}</p>
      <p className="text-sm text-ink/50">{course.duration}</p>
      <p className="mt-4 text-ink/70 max-w-xl">{course.description}</p>
    </div>
  );
}

export default CourseDetails;
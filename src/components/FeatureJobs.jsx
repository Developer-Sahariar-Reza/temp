import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeatureJobsCard from "./Card/FeatureJobsCard";

const FeatureJobs = () => {
  const jobsData = useLoaderData();

  // View More Button Functionality
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(true);
  };
  const displayJobs = showAll ? jobsData : jobsData.slice(0, 4);

  return (
    <div className="featured-jobs">
      <h1 className="featured-headline">Featured Jobs</h1>
      <p className="featured-subtitle">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="featured-jobs-container">
        {displayJobs.map((job) => (
          <FeatureJobsCard key={job.id} job={job} />
        ))}
      </div>

      {!showAll && (
        <div className="see-all-jobs-button-container">
          <button onClick={toggleShowAll} className="common-button">
            See All Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default FeatureJobs;

import React from "react";
import Hero from "./Hero";
import JobCategoryList from "./JobCategoryList";
import FeatureJobs from "./FeatureJobs";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <JobCategoryList />
      <FeatureJobs />
    </div>
  );
};

export default Home;

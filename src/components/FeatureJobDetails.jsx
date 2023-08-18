import React from "react";
import { useLoaderData } from "react-router-dom";

const FeatureJobDetails = () => {
  const jobData = useLoaderData();
  console.log(jobData);
  return <div></div>;
};

export default FeatureJobDetails;

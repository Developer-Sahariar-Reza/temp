import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const FeatureJobsCard = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    employment_type,
    location,
    salary,
  } = job;

  // View Details Button
  const navigation = useNavigate();
  const handleViewDetails = () => {
    navigation(`/job/${id}`);
  };

  return (
    <div className="feature-jobs-box">
      <img src={company_logo} alt="" />
      <div className="feature-jobs-info">
        <h3 className="f-job-title">{job_title}</h3>
        <p className="f-job-company">{company_name}</p>
        <div className="f-job-container">
          <p>{remote_or_onsite}</p>
          <p>{employment_type}</p>
        </div>
        <div className="f-job-container2">
          <p>
            <MapPinIcon className="w-6 h-6"></MapPinIcon>
            {location}
          </p>
          <p>
            <CurrencyDollarIcon className="w-6 h-6" /> {salary}
          </p>
        </div>
        <button className="common-button" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeatureJobsCard;

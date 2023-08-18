import React from "react";
import accountingImg from "../assets/images/accounting.jpg";
import engineeringImg from "../assets/images/engineering.jpg";
import creativityImg from "../assets/images/creativity.jpg";
import marketingImg from "../assets/images/marketing.jpg";

const JobCategoryList = () => {
  return (
    <div className="job-category">
      <h1 className="job-headline">Job Category List</h1>
      <p className="job-subtitle">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="job-category-container">
        <div className="job-category-box">
          <img src={accountingImg} alt="" />
          <div>
            <h3>Accounts & Finance</h3>
            <p>300 Jobs Available</p>
          </div>
        </div>
        <div className="job-category-box">
          <img src={creativityImg} alt="" />
          <div>
            <h3>Creative Design</h3>
            <p>100+ Jobs Available</p>
          </div>
        </div>
        <div className="job-category-box">
          <img src={marketingImg} alt="" />
          <div>
            <h3>Marketing & Sales</h3>
            <p>150 Jobs Available</p>
          </div>
        </div>
        <div className="job-category-box">
          <img src={engineeringImg} alt="" />
          <div>
            <h3>Engineering Jobs</h3>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryList;

import React from "react";
import { Link } from "react-router-dom";
import "./Education.css";

const Education = () => {
  return (
    <>
      
      {/* EDUCATION & SKILLS SECTION */}
      <section className="education-section">
        {/* SECTION HEADER */}
        <div className="section-header">
          <h1>Education & Skills</h1>
        </div>

        {/* CONTENT */}
        <div className="content-wrapper">

          {/* LEFT — EDUCATION */}
          <div className="education">

            <div className="edu-item">
              <span className="bullet"></span>
              <div>
                <h3>B.Tech - Information Technology (2020–2024)</h3>
                <p>
                  K. Ramakrishnan College Of Engineering <br />
                  CGPA: 8.1
                </p>
              </div>
            </div>

            <div className="edu-item">
              <span className="bullet"></span>
              <div>
                <h3>Higher Secondary Certificate (2019–2020)</h3>
                <p>
                  SRV Matriculation Higher Secondary School <br />
                  Percentage: 68%
                </p>
              </div>
            </div>

            <div className="edu-item">
              <span className="bullet"></span>
              <div>
                <h3>Secondary School Leaving Certificate (2017–2018)</h3>
                <p>
                  St. Little Flower Matriculation Higher Secondary School <br />
                  Percentage: 80%
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Education;

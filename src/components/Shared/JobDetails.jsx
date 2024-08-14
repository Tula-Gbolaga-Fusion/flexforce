import React from "react";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBriefcase,
  FaTshirt,
  FaBuilding,
} from "react-icons/fa";
import { jobsList } from "../../utils/dummyData";

const JobDetails = ({ jobId }) => {
  const jobData = jobsList?.find((data) => {
    return data?.id === +jobId;
  });

  const IconWrapper = ({ children }) => (
    <div className="bg-primary p-2 rounded-full">{children}</div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 text-black sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-primary  px-4 py-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-bold">
            {jobData?.jobTitle || "Job Title Not Available"}
          </h1>
          <p className="text-lg sm:text-xl mt-2">
            {jobData?.agencyName || "Agency Not Specified"}
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <IconWrapper>
                <FaMapMarkerAlt className="text-white" />
              </IconWrapper>
              <span className="ml-2">
                {jobData?.location || "Location Not Specified"}
              </span>
            </div>
            <div className="flex items-center">
              <IconWrapper>
                <FaMoneyBillWave className="text-white" />
              </IconWrapper>
              <span className="ml-2">£{jobData?.amount || "N/A"}/hour</span>
            </div>
            <div className="flex items-center">
              <IconWrapper>
                <FaCalendarAlt className="text-white" />
              </IconWrapper>
              <span className="ml-2">
                {jobData?.startDate || "Start Date N/A"} -{" "}
                {jobData?.endDate || "End Date N/A"}
              </span>
            </div>
            <div className="flex items-center">
              <IconWrapper>
                <FaBriefcase className="text-white" />
              </IconWrapper>
              <span className="ml-2">
                {jobData?.industry || "Industry Not Specified"}
              </span>
            </div>
            <div className="flex items-center">
              <IconWrapper>
                <FaBuilding className="text-white" />
              </IconWrapper>
              <span className="ml-2">
                {jobData?.agencyName || "Agency Not Specified"}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Job Description
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              {jobData?.jobDescription?.map((item, index) => (
                <li key={index}>{item}</li>
              )) || <li>No job description available</li>}
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Role:</p>
                <p>{jobData?.role || "Role Not Specified"}</p>
              </div>
              <div>
                <p className="font-semibold">Total Estimated Pay:</p>
                <p>£{jobData?.totalEstimatedPay || "N/A"}</p>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <p className="font-semibold flex items-center">
                  <IconWrapper>
                    <FaTshirt className="text-white" />
                  </IconWrapper>
                  <span className="ml-2">Dress Code:</span>
                </p>
                <p>{jobData?.dresscode || "Dress Code Not Specified"}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  jobData?.myAgency
                    ? "bg-green-100 text-green-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {jobData?.myAgency ? "My Agency" : "Other Agency"}
              </span>
              {jobData?.invitedMe && (
                <span className="ml-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
                  Invited
                </span>
              )}
            </div>
            <button className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-black font-bold py-2 px-4 rounded">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { JobDetails };

import React from "react";
import { singleJobSeeker } from "../../utils/dummyData";
import { PortalWrapper } from "../PortalWrapper";

const JobSeekerProfile = () => {
  const userData = singleJobSeeker[0];
  return (
    <PortalWrapper>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:w-48"
                src={userData?.profilePicture}
                alt={`${userData?.firstName} ${userData?.lastName}`}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {userData?.withAgency ? "Agency Worker" : "Independent Worker"}
              </div>
              <h2 className="mt-2 text-2xl leading-8 font-semibold text-gray-900">
                {userData?.firstName} {userData?.lastName}
              </h2>
              <p className="mt-2 text-gray-600">{userData?.email}</p>
              <p className="text-gray-600">{userData?.phoneNumber}</p>
              <p className="mt-2 text-sm text-gray-500">
                Born: {new Date(userData?.dateOfBirth).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="px-8 py-4">
            <h3 className="text-lg font-semibold text-gray-900">About Me</h3>
            <p className="mt-2 text-gray-600">{userData?.aboutMe}</p>
          </div>

          <div className="px-8 py-4 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Work Stats</h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Jobs Done
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {userData?.totalJobsDone}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Hours Worked
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {userData?.totalHoursWorked}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Last Active:{" "}
              {new Date(userData?.lastActiveDate).toLocaleDateString()}
            </p>
          </div>

          <div className="px-8 py-4">
            <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
            <ul className="mt-2 divide-y divide-gray-200">
              {userData?.documents?.map((doc, index) => (
                <li key={index} className="py-2">
                  <a
                    href={doc.url}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {doc.name}
                  </a>
                  <p className="text-sm text-gray-500">
                    Last Updated:{" "}
                    {new Date(doc.lastUpdated).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-8 py-4 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Share Code</h3>
            <p className="mt-2 text-xl font-mono">
              {userData?.shareCode?.code}
            </p>
            <p className="text-sm text-gray-500">
              Expires:{" "}
              {new Date(userData?.shareCode?.expiryDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </PortalWrapper>
  );
};

export { JobSeekerProfile };

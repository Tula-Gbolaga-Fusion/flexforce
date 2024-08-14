import React from "react";
import { singleJobSeeker } from "../../utils/dummyData";
import { PortalWrapper } from "../PortalWrapper";

const JobSeekerProfile2 = () => {
  //   const userList = generateJobSeekers();
  //   const userdata = userList[0];
  const userdata = singleJobSeeker[0];
  return (
    <PortalWrapper>
      <div className="container mx-auto p-6 text-black">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center">
            <img
              className="w-24 h-24 rounded-full mr-6"
              src={userdata?.profilePicture}
              alt={`${userdata?.firstName} ${userdata?.lastName}`}
            />
            <div>
              <h2 className="text-2xl font-semibold">{`${userdata?.firstName} ${userdata?.lastName}`}</h2>
              <p className="text-gray-600">{userdata?.email}</p>
              <p className="text-gray-600">{userdata?.phoneNumber}</p>
              <p className="text-gray-600">{userdata?.dateOfBirth}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="text-gray-800 mt-2">{userdata?.aboutMe}</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold">Total Jobs Done</h4>
              <p className="text-gray-800">{userdata?.totalJobsDone}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Total Hours Worked</h4>
              <p className="text-gray-800">{userdata?.totalHoursWorked}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">With Agency</h4>
              <p className="text-gray-800">
                {userdata?.withAgency ? "Yes" : "No"}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Last Active Date</h4>
              <p className="text-gray-800">{userdata?.lastActiveDate}</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Documents</h3>
            <ul className="mt-2 space-y-2">
              {userdata?.documents?.map((doc, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{doc.name}</span>
                  <a
                    href={doc.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Document
                  </a>
                  <span>{doc.lastUpdated}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Sharecode</h3>
            <p className="text-gray-800">
              {userdata?.shareCode.code} (Expires:{" "}
              {userdata?.shareCode?.expiryDate})
            </p>
          </div>
        </div>
      </div>
    </PortalWrapper>
  );
};

export { JobSeekerProfile2 };

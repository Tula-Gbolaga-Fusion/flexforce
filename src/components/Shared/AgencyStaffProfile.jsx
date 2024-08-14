import React from "react";
import { PortalWrapper } from "../PortalWrapper";
import { staffList } from "../../utils/dummyData";
import { Button } from "../UI";

const AgencyStaffProfile = () => {
  const profile = { ...staffList[4], agencyName: "TCS Catering" };

  return (
    <PortalWrapper>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center my-3">
          <Button title={"Edit Profile"} />
          <Button title={"Edit Password"} />
        </div>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={profile.profileImage}
                alt={`${profile.firstName} ${profile.lastName}`}
              />
            </div>
            <div className="p-8">
              <h1 className="mt-2 text-2xl leading-8 font-bold text-gray-900">
                {profile.firstName} {profile.lastName}
              </h1>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Email:</span> {profile.email}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Phone:</span>{" "}
                {profile.phoneNumber}
              </p>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Agency:</span>{" "}
                {profile.agencyName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PortalWrapper>
  );
};

export { AgencyStaffProfile };

import React, { useState } from "react";
import { PortalWrapper } from "../PortalWrapper";

const JobSeekerProfileForm2 = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    profilePicture: "",
    dateOfBirth: "",
    aboutMe: "",
    totalJobsDone: 0,
    withAgency: false,
    totalHoursWorked: 0,
    documents: [
      { documentName: "CV", lastUpdated: "", documentUrl: "" },
      {
        documentName: "International Passport",
        lastUpdated: "",
        documentUrl: "",
      },
      { documentName: "BRP", lastUpdated: "", documentUrl: "" },
      { documentName: "National Insurance", lastUpdated: "", documentUrl: "" },
    ],
    sharecode: "",
    sharecodeExpiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDocumentChange = (index, e) => {
    const updatedDocuments = formData.documents.map((doc, i) =>
      i === index ? { ...doc, [e.target.name]: e.target.value } : doc
    );
    setFormData({ ...formData, documents: updatedDocuments });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <PortalWrapper>
      <div className="container mx-auto p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Profile Picture URL</label>
            <input
              type="text"
              name="profilePicture"
              value={formData.profilePicture}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">About Me</label>
            <textarea
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg"
              rows="3"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Total Jobs Done</label>
              <input
                type="number"
                name="totalJobsDone"
                value={formData.totalJobsDone}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Total Hours Worked</label>
              <input
                type="number"
                name="totalHoursWorked"
                value={formData.totalHoursWorked}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">With Agency</label>
            <input
              type="checkbox"
              name="withAgency"
              checked={formData.withAgency}
              onChange={(e) =>
                setFormData({ ...formData, withAgency: e.target.checked })
              }
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-gray-700">Documents</label>
            {formData.documents.map((doc, index) => (
              <div key={index} className="space-y-2 mb-4">
                <div>
                  <label className="block text-gray-700">
                    {doc.documentName} URL
                  </label>
                  <input
                    type="text"
                    name="documentUrl"
                    value={doc.documentUrl}
                    onChange={(e) => handleDocumentChange(index, e)}
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Updated</label>
                  <input
                    type="date"
                    name="lastUpdated"
                    value={doc.lastUpdated}
                    onChange={(e) => handleDocumentChange(index, e)}
                    className="w-full mt-1 p-2 border rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Sharecode</label>
              <input
                type="text"
                name="sharecode"
                value={formData.sharecode}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Sharecode Expiry</label>
              <input
                type="date"
                name="sharecodeExpiry"
                value={formData.sharecodeExpiry}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </PortalWrapper>
  );
};

export { JobSeekerProfileForm2 };

import { agencies } from "../../utils/dummyData";
import { Modal } from "./Modal";
import DefaultLogo from "../../assets/defaultAgencyLogo.png";

const AgencyDetailsModal = ({ agencyId, isOpen, closeFunc }) => {
  const agency = agencies?.find((data, index) => {
    return index === +agencyId;
  });
  return (
    <Modal isOpen={isOpen} onClose={closeFunc}>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src={agency?.logo || DefaultLogo}
              alt={`${agency?.name} logo`}
              className="w-full h-auto rounded-lg object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DefaultLogo;
              }}
            />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {agency?.agencyName}
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Address:</span> {agency?.address}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Email:</span> {agency?.email}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Phone:</span>{" "}
              {agency?.phoneNumber}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Primary Industry:</span>{" "}
              {"Hospitality"}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            About the Agency
          </h3>
          <p className="text-gray-700 whitespace-pre-line">
            {agency?.agencyBrief}
          </p>
        </div>
      </div>
    </Modal>
  );
};
export { AgencyDetailsModal };

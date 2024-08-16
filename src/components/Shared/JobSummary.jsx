import { Button } from "../UI";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
const JobSummary = ({ data, onClickView }) => {
  return (
    <div className="text-black flex border-2 rounded-lg overflow-hidden shadow-md">
      <div className="w-1/3 bg-gray-100 p-4 flex flex-col justify-between">
        <div>
          <p className="text-primary font-semibold mb-2">{data?.jobTitle}</p>
          <div className="flex items-center mb-2">
            <div className="bg-primary p-1 rounded-full mr-2">
              <FaMapMarkerAlt className="text-white text-xs" />
            </div>
            <p className="text-sm">{data?.location}</p>
          </div>
          <div className="flex items-center">
            <div className="bg-primary p-1 rounded-full mr-2">
              <FaMoneyBillWave className="text-white text-xs" />
            </div>
            <p className="text-sm font-medium">{`£${data.amount}/h`}</p>
          </div>
        </div>
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <p className="text-sm line-clamp-4 mb-4">
          {data?.jobDescription?.join(", ")}
        </p>
        <Button
          title="View"
          className="self-end"
          onClick={() => {
            onClickView(data?.id);
          }}
        />
      </div>
    </div>
  );
};
export { JobSummary };

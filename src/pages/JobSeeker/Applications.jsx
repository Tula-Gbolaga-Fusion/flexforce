import { useMemo } from "react";
import { PortalWrapper, Table, Button } from "../../components";
import { jobsList } from "../../utils/dummyData";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";

const JobSeekerApplications = () => {
  const reducedJobs = jobsList.slice(8, 15);
  const columns = useMemo(
    () => [
      {
        header: "Job Title",
        accessor: "jobTitle",
        cell: (row) => (
          <div className="font-semibold text-gray-900">{row.jobTitle}</div>
        ),
      },
      {
        header: "Location",
        accessor: "location",
        cell: (row) => (
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <span>{row.location}</span>
          </div>
        ),
      },
      {
        header: "Pay Rate",
        accessor: "amount",
        cell: (row) => (
          <div className="flex items-center">
            <FaMoneyBillWave className="text-gray-400 mr-2" />
            <span>£{row.amount.toFixed(2)}/h</span>
          </div>
        ),
      },
      {
        header: "Dates",
        accessor: "startDate",
        cell: (row) => (
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <span>
              {row.startDate} - {row.endDate}
            </span>
          </div>
        ),
      },
      {
        header: "Industry",
        accessor: "industry",
        cell: (row) => (
          <div className="flex items-center">
            <FaBriefcase className="text-gray-400 mr-2" />
            <span>{row.industry}</span>
          </div>
        ),
      },
      {
        header: "Agency",
        accessor: "agencyName",
        cell: (row) => (
          <div className="text-sm text-gray-500">{row.agencyName}</div>
        ),
      },
      {
        header: "Status",
        accessor: "myAgency",
        cell: (row) => (
          <div>
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                row.myAgency
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {row.myAgency ? "Declined" : "Pending"}
            </span>
          </div>
        ),
      },
      {
        header: "Actions",
        accessor: "id",
        cell: (row) => <Button title={"View Details"} />,
      },
    ],
    []
  );
  return (
    <PortalWrapper>
      <div className="m-3">
        <h1 className="text-[20px] text-primary">Jobs you have applied to </h1>
        <Table tableData={reducedJobs} columns={columns} />
      </div>
    </PortalWrapper>
  );
};
export { JobSeekerApplications };

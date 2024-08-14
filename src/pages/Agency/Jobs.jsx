import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { jobsList } from "../../utils/dummyData";
import { Table, PortalWrapper, Button } from "../../components";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";
const AgencyJobs = () => {
  const navigate = useNavigate();
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
        header: "Actions",
        accessor: "id",
        cell: (row) => (
          <Button
            title={"View Details"}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/agency/jobs/${row.id}`);
            }}
          />
        ),
      },
    ],
    [navigate]
  );
  return (
    <PortalWrapper>
      <div className="m-3 rounded">
        <h1 className="text-primary text-[30px]"> List of Jobs</h1>
        <Table tableData={jobsList} columns={columns} />
      </div>
    </PortalWrapper>
  );
};
export { AgencyJobs };

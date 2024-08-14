import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, PortalWrapper } from "../../components";
import { jobsList, jobSeekers } from "../../utils/dummyData";
import { FaMapMarkerAlt, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";

const BookedJobs = () => {
  const bookedJobStatus = ["Pending", "In progress", "Completed"];
  const bookedJobsList = jobsList.map((job) => {
    return {
      employeeName:
        jobSeekers?.[job?.id]?.firstName +
        " " +
        jobSeekers?.[job?.id]?.lastName,
      employeeEmail: jobSeekers?.[job?.id]?.email,
      employeePhone: jobSeekers?.[job?.id]?.phoneNumber,
      jobTitle: job?.jobTitle,
      location: job?.location,
      status:
        bookedJobStatus[Math.floor(Math.random() * bookedJobStatus.length)],
      totalPay: job?.totalEstimatedPay,
      startDate: job?.startDate,
      endDate: job?.endDate,
    };
  });

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
        accessor: "",
        cell: (row) => (
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <span>{row.location}</span>
          </div>
        ),
      },
      {
        header: "Total Pay",
        accessor: "totalPay",
        cell: (row) => (
          <div className="flex items-center">
            <FaMoneyBillWave className="text-gray-400 mr-2" />
            <span>£{row.totalPay.toString()}</span>
          </div>
        ),
      },
      {
        header: "Duration",
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
        header: "Employee",
        accessor: "employeeName",
      },
      {
        header: "Employee Contact",
        accessor: "contact",
        cell: (row) => (
          <div>
            <div>{row.employeeEmail}</div>
            <div>{row.employeePhone}</div>
          </div>
        ),
      },
      {
        header: "Status",
        accessor: "status",
        cell: (row) => {
          let statusColor;
          switch (row.status) {
            case "Pending":
              statusColor = "bg-yellow-100 text-yellow-800";
              break;
            case "In progress":
              statusColor = "bg-green-100 text-green-800";
              break;
            case "Completed":
              statusColor = "bg-blue-100 text-blue-800";
              break;

            default:
              statusColor = "bg-gray-100 text-gray-800";
          }
          return (
            <span
              className={`px-3 inline-flex leading-5 font-semibold rounded-full ${statusColor}`}
            >
              {row.status}
            </span>
          );
        },
      },

      {
        header: "Actions",
        accessor: "id",
        cell: (row) => (
          <div className="flex justify-center">
            <Button
              title={"View Job Info"}
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/agency/jobs/${row.id}`);
              }}
            />
            <Button
              title={"View Employee Info"}
              onClick={(e) => {
                e.stopPropagation();
                //   navigate(`/agency/jobs/${row.id}`);
              }}
            />
            {row?.status === "In progress" && (
              <Button
                title={"Mark As Complete"}
                onClick={(e) => {
                  e.stopPropagation();
                  //   navigate(`/agency/jobs/${row.id}`);
                }}
              />
            )}
          </div>
        ),
      },
    ],
    [navigate]
  );
  return (
    <PortalWrapper>
      <div className="m-3">
        <h1>List of Booked Jobs </h1>
        <Table tableData={bookedJobsList} columns={columns} />
      </div>
    </PortalWrapper>
  );
};
export { BookedJobs };

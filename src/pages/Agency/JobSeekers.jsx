import { useMemo } from "react";
import { Button, PortalWrapper, Table } from "../../components";
import { jobSeekers } from "../../utils/dummyData";
const JobSeekersList = () => {
  const columns = useMemo(
    () => [
      //   {
      //     header: "Profile",
      //     accessor: "profilePicture",
      //     cell: (row) => (
      //       <img
      //         src={row.profilePicture}
      //         alt={`${row.firstName} ${row.lastName}`}
      //         className="w-10 h-10 rounded-full"
      //       />
      //     ),
      //   },
      {
        header: "First Name",
        accessor: "firstName",
      },
      {
        header: "Last Name",
        accessor: "lastName",
      },
      {
        header: "Contact",
        accessor: "contact",
        cell: (row) => (
          <div>
            <div>{row.email}</div>
            <div>{row.phoneNumber}</div>
          </div>
        ),
      },
      {
        header: "Total Hours Worked",
        accessor: "totalHoursWorked",
      },
      {
        header: "Last Active",
        accessor: "lastActiveDate",
        cell: (row) => new Date(row.lastActiveDate).toLocaleDateString(),
      },
      {
        header: "Status",
        accessor: "status",
        cell: (row) => {
          let statusColor;
          switch (row.agencyStatus) {
            case "Onboarded":
              statusColor = "bg-blue-100 text-blue-800";
              break;
            case "Not Onboarded":
              statusColor = "bg-gray-100 text-gray-800";
              break;
            case "Applied":
              statusColor = "bg-yellow-100 text-yellow-800";
              break;
            case "Invitation Sent":
              statusColor = "bg-green-100 text-green-800";
              break;
            default:
              statusColor = "bg-gray-100 text-gray-800";
          }
          return (
            <span
              className={`px-3 inline-flex leading-5 font-semibold rounded-full ${statusColor}`}
            >
              {row.agencyStatus}
            </span>
          );
        },
      },
      {
        header: "Actions",
        accessor: "actions",
        cell: (row) => (
          <div className="flex justify-center">
            <Button title={"View Details"} />
            {row.agencyStatus === "Not onboarded" && (
              <Button title={"Invite"} />
            )}
            {row.agencyStatus === "Applied" && (
              <Button title={"Accept/Decline"} />
            )}
          </div>
        ),
      },
    ],
    []
  );
  return (
    <PortalWrapper>
      <div className="m-4">
        <h1 className="text-[20px] text-primary">List of of Job Seekers</h1>
        <Table tableData={jobSeekers} columns={columns} />
      </div>
    </PortalWrapper>
  );
};
export { JobSeekersList };

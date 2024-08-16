import { useMemo, useState } from "react";
import {
  Button,
  PortalWrapper,
  AgencyDetailsModal,
  JobDetailsModal,
} from "../../components";
import { Table } from "../../components";
import { agencies } from "../../utils/dummyData";

const AgencyInvites = () => {
  const [openAgencyModal, setOpenAgencyModal] = useState(false);
  const [openJobDetailsModal, setOpenJobDetailsModal] = useState(false);
  const [agencyId, setAgencyId] = useState("");
  const [jobId, setJobId] = useState("");
  const agencyListColumn = useMemo(
    () => [
      {
        header: "Agency Name",
        accessor: "agencyName",
        cell: (row) => <div className="font-semibold">{row.agencyName}</div>,
      },
      {
        header: "Brief",
        accessor: "agencyBrief",
        cell: (row) => (
          <div className="max-w-xs">
            <p className="truncate" title={row.agencyBrief}>
              {row.agencyBrief}
            </p>
          </div>
        ),
      },
      {
        header: "Email",
        accessor: "email",
        cell: (row) => (
          <a
            href={`mailto:${row.email}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {row.email}
          </a>
        ),
      },
      {
        header: "Address",
        accessor: "address",
        cell: (row) => (
          <div className="max-w-xs truncate" title={row.address}>
            {row.address}
          </div>
        ),
      },
      {
        header: "Action",
        accessor: "action",
        cell: (row) => (
          <div className="flex justify-center">
            <Button
              title={"View Agency"}
              onClick={() => {
                setOpenAgencyModal(true);
                setAgencyId(
                  agencies?.findIndex((x) => {
                    return x.agencyName === row?.agencyName;
                  })
                );
              }}
            />{" "}
            {row.status === "Pending" && (
              <Button
                title={"View Job"}
                onClick={() => {
                  setJobId(13);
                  setOpenJobDetailsModal(true);
                }}
              />
            )}
          </div>
        ),
      },
    ],
    []
  );
  return (
    <PortalWrapper>
      <div className="mx-5">
        <h1 className="text-[20px] text-primary p-5">Agency Invites</h1>
        <Table tableData={agencies?.slice(12, 16)} columns={agencyListColumn} />
      </div>
      <AgencyDetailsModal
        isOpen={openAgencyModal}
        closeFunc={() => {
          setOpenAgencyModal(false);
          setAgencyId("");
        }}
        agencyId={agencyId}
      />
      <JobDetailsModal
        isOpen={openJobDetailsModal}
        closeFunc={() => {
          setOpenJobDetailsModal(false);
          setJobId("");
        }}
        jobId={jobId}
      />
    </PortalWrapper>
  );
};
export { AgencyInvites };

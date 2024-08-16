import { useMemo, useState } from "react";
import {
  Button,
  Dropdown,
  JobDetailsModal,
  JobSummary,
  PortalWrapper,
} from "../../components";
import { jobsList } from "../../utils/dummyData";

const Jobs = () => {
  const slicedJobs = useMemo(() => {
    return jobsList.slice(0, 10);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [jobId, setJobId] = useState("");
  const cities = jobsList
    .reduce((acc, curr) => {
      if (!acc.includes(curr.location)) {
        acc.push(curr.location);
      }
      return acc;
    }, [])
    ?.map((x, index) => {
      return { id: index, title: x };
    });
  const industries = jobsList
    .reduce((acc, curr) => {
      if (!acc.includes(curr.industry)) {
        acc.push(curr.industry);
      }
      return acc;
    }, [])
    ?.map((x, index) => {
      return { id: index, title: x };
    });

  const roles = jobsList
    .reduce((acc, curr) => {
      if (!acc.includes(curr.role)) {
        acc.push(curr.role);
      }
      return acc;
    }, [])
    ?.map((x, index) => {
      return { id: index, title: x };
    });

  const groups = [
    { id: 0, title: "My Agencies" },
    { id: 1, title: "Other Agencies" },
  ];

  // const industries = [] industry
  // const roles = [] role
  // const group = []

  return (
    <PortalWrapper>
      <h1 className="text-primary text-center text-[20px]">Explore Jobs</h1>
      <div className="md:px-[100px] m-1">
        <div className=" shadow shadow-primary p-2 rounded-lg  my-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Dropdown label={"Select City"} options={cities} />
            <Dropdown label={"Select Industry"} options={industries} />
            <Dropdown label={"Select Role"} options={roles} />
            <Dropdown label={"Select Group"} options={groups} />
          </div>
          <div className="flex justify-center my-2">
            {" "}
            <Button title="Apply" />
          </div>
        </div>
        <p className="text-black">Showing 1- 10 of 31</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {slicedJobs?.map((data) => {
            return (
              <JobSummary
                data={data}
                onClickView={(x) => {
                  setIsOpen(true);
                  setJobId(x);
                }}
              />
            );
          })}
        </div>

        <div className="flex justify-center my-8">
          {" "}
          <Button title="Prev" /> <Button title="Next" />{" "}
        </div>
        <JobDetailsModal
          isOpen={isOpen}
          closeFunc={() => {
            setIsOpen(false);
            setJobId("");
          }}
          jobId={jobId}
        />
      </div>
    </PortalWrapper>
  );
};
export { Jobs };

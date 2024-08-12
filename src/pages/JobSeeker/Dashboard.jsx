import { PortalWrapper, OverviewItem } from "../../components";

const JobSeekerDashboard = () => {
  return (
    <PortalWrapper>
      <div className="m-4 rounded bg-gray-100 p-3">
        <h1 className="text-black text-[20px]">Overview.</h1>
        <div>
          <OverviewItem count={1} title={"Jobs you have been invited for "} />
          <OverviewItem count={8} title={"Applications you sent"} />
          <OverviewItem count={5} title={"Shifts scheduled for this week"} />
          <OverviewItem count={1} title={"Shifts in progress"} />
          <OverviewItem count={5} title={"Agency Invitations"} />
        </div>
      </div>
    </PortalWrapper>
  );
};
export { JobSeekerDashboard };

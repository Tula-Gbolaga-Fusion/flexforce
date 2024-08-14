import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AgencyInvites,
  AgencyOverview,
  JobSeekerApplications,
  JobSeekerDashboard,
  Register as JobSeekerRegistration,
  JobSeekerShifts,
  // Profile as JobSeekerProfile,
  Jobs,
  JobseekerComingSoon,
} from "./pages/JobSeeker";
import { Login } from "./pages";
import {
  JobSeekerProfile,
  JobSeekerProfile2,
  JobSeekerProfileForm,
  JobSeekerProfileForm2,
} from "./components";
import {
  AgencyComingSoon,
  AgencyDashboard,
  AgencyJobs,
  AgencyRegistration,
  BookedJobs,
  JobAndApplicants,
  JobSeekersList,
  StaffList,
} from "./pages/Agency";
import { AgencyList } from "./pages/Admin";

function App() {
  return (
    <Routes>
      {/* Navigate to Job seeker dashboard route when it loads the default route */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login pages */}
      {/* default login route assigned to Job seeker login */}
      <Route path="/Login" element={<Login />}>
        <Route path="Agency" element={<Login />} />
        <Route path="Admin" element={<Login />} />
      </Route>

      {/* Job seeker pages */}
      <Route path="/Jobseeker">
        <Route index element={<JobSeekerDashboard />} />
        <Route path="Registration" element={<JobSeekerRegistration />} />
        {/* <Route path="Profile" element={<JobSeekerProfile />} /> */}
        <Route path="Jobs" element={<Jobs />} />
        <Route path="comingsoon" element={<JobseekerComingSoon />} />
        <Route path="profile/claudeai" element={<JobSeekerProfile />} />
        <Route path="profile/chatgpt" element={<JobSeekerProfile2 />} />
        <Route path="profileform/claudeai" element={<JobSeekerProfileForm />} />
        <Route path="profileform/chatgpt" element={<JobSeekerProfileForm2 />} />
        <Route path="Applications" element={<JobSeekerApplications />} />
        <Route path="Shifts" element={<JobSeekerShifts />} />
        <Route path="Agencies" element={<AgencyOverview />} />
        <Route path="Invites" element={<AgencyInvites />} />
      </Route>

      {/* Agency pages */}
      <Route path="/Agency">
        <Route index element={<AgencyDashboard />} />
        <Route path="registration" element={<AgencyRegistration />} />
        <Route path="comingsoon" element={<AgencyComingSoon />} />
        <Route path="jobs" element={<AgencyJobs />} />
        <Route path="Jobs/:jobId" element={<JobAndApplicants />} />
        <Route path="staff" element={<StaffList />} />
        <Route path="contractors" element={<JobSeekersList />} />
        <Route path="bookedjobs" element={<BookedJobs />} />
      </Route>

      {/* admin pages */}
      <Route path="/Admin">
        <Route index element={<AgencyList />} />
      </Route>
    </Routes>
  );
}

export default App;

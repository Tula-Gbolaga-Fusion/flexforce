import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  JobSeekerDashboard,
  Register as JobSeekerRegistration,
  Profile as JobSeekerProfile,
  Jobs,
  JobseekerComingSoon,
} from "./pages/JobSeeker";
import { Login } from "./pages";
import {
  AgencyComingSoon,
  AgencyDashboard,
  AgencyRegistration,
  JobAndApplicants,
  StaffList,
} from "./pages/Agency";
import { AgencyList } from "./pages/Admin";

function App() {
  return (
    <Routes>
      {/* Navigate to Job seeker dashboard route when it loads the default route */}
      <Route path="/" element={<Navigate to="/jobseeker" />} />

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
        <Route path="Profile" element={<JobSeekerProfile />} />
        <Route path="Jobs" element={<Jobs />} />
        <Route path="comingsoon" element={<JobseekerComingSoon />} />
      </Route>

      {/* Agency pages */}
      <Route path="/Agency">
        <Route index element={<AgencyDashboard />} />
        <Route path="registration" element={<AgencyRegistration />} />
        <Route path="comingsoon" element={<AgencyComingSoon />} />
        <Route path="Jobs/:jobId" element={<JobAndApplicants />} />
        <Route path="staff" element={<StaffList />} />
      </Route>

      {/* admin pages */}
      <Route path="/Admin">
        <Route index element={<AgencyList />} />
      </Route>
    </Routes>
  );
}

export default App;

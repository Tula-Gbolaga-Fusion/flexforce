import { JobDetails } from "./JobDetails";
import { Modal } from "./Modal";

const JobDetailsModal = ({ isOpen, closeFunc, jobId }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeFunc}>
      <JobDetails jobId={jobId} />
    </Modal>
  );
};
export { JobDetailsModal };

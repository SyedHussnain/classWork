import { useParams } from "react-router-dom";
function JobDetails(props) {
  let some = useParams();
  let jobFound = props.jobs.find((item) => {
    if (some.cid === item.id) {
      return true;
    }
  });
  return (
    <>
      <h1>{jobFound.title}</h1>
      <h4>{jobFound.salary}</h4>
          <h3>{jobFound.company}</h3>
          {
              some.cid
          }
    </>
  );
}

export default JobDetails;

import { useRef } from "react";
import { v4 } from "uuid";
function PostJob(props) {
  let jobTitle = useRef();
  let jobSalary = useRef();
  let jobCompany = useRef();
  function createUser(evt) {
    evt.preventDefault();
    let newJob = {
      id: v4(),
      title: jobTitle.current.value,
      salary: jobSalary.current.value,
      company: jobCompany.current.value,
    };
    props.jobs.push(newJob);
    props.setJobs([...props.jobs]);
    evt.target.reset();
  }
  return (
    <>
      <form action="" onSubmit={createUser}>
        <input ref={jobTitle} placeholder="Job Title" type="text" />
        <input
          ref={jobSalary}
          placeholder="Job salary"
          type="text"
          name=""
          id=""
        />
        <input
          ref={jobCompany}
          placeholder="Job Company"
          type="text"
          name=""
          id=""
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default PostJob;

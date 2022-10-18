import "./index.css";
import { Link } from "react-router-dom";
function Job(props) {
  return (
    <div id="mainContainer">
      {props.jobs.map((item) => {
        return (
          <Link to={"/jobDetails/" + item.id}>
            <div id="card">
              <h3>{item.title}</h3>
              <h6>{item.salary}</h6>
              <p>{item.company}</p>
              <p>{item.id}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Job;

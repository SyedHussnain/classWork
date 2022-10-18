import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import PostJob from "./Components/PostJob";
import SignUp from "./Components/SignUp";
import Admin from "./Components/Admin";
import Job from "./Components/Job";
import JobDetails from "./Components/JobDetails";
import LogIn from "./Components/LogIn";
import { useState } from "react";

function App() {
  let [users, setUsers] = useState([]);
  let [jobs, setJobs] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Admin />}></Route>
          <Route
            path="/dashboard"
            element={<Dashboard users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/job"
            element={<Job jobs={jobs} setJobs={setJobs} />}
          ></Route>
          <Route
            path="/jobDetails/:cid"
            element={<JobDetails jobs={jobs} setJobs={setJobs} />}
          ></Route>
          <Route
            path="/login"
            element={<LogIn users={users} setUsers={setUsers} />}
          ></Route>
          <Route
            path="/postJob"
            element={<PostJob jobs={jobs} setJobs={setJobs} />}
          ></Route>
          <Route
            path="/signUp"
            element={<SignUp users={users} setUsers={setUsers} />}
          ></Route>
          {/* <Route path="" element={}></Route>
        <Route path="" element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

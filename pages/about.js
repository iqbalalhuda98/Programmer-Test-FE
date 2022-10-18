/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import { useState } from "react";

export default function About() {
  const [area, setArea] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [displayArea, setDisplayArea] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setArea(e.target.value);
  }
  console.log(area);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setDisplayArea(area);
  }
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <form>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="exampleInputEmail1"
                />
                <div id="emailHelp" className="form-text mt-0">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-5">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mt-4">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>
              <div className="d-grid gap-2 mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => onSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="container">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container my-5"
                style={{ height: "75px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            {displayArea != "" && isSubmitted && (
              <div className="alert alert-primary" role="alert">
                <strong>{displayArea}</strong>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

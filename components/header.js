/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import { useRouter } from "next/router";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [students, setStudents] = useState([]);
  const [displayNotif, setDisplayNotif] = useState(false);
  const [notifMessage, setNotifMessage] = useState("");

  const [displayNotif2, setDisplayNotif2] = useState(false);
  const [notifMessage2, setNotifMessage2] = useState("");
  const [notifMessage3, setNotifMessage3] = useState("");

  const router = useRouter();

  const getDataStudents = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/api/v1/students/email-password/`,
        { email: email, password: password }
      );
      console.log(response);
      if (response.data.length === 0) {
        setStudents(response.data);
      } else {
        setShow(true);
        setStudents(response.data);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
        setPassword(response.data[0].password);
        setBirth(response.data[0].birth);
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  const removeDataStudents = async (id) => {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/api/v1/students/${id}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  function tanggal(date) {
    let tanggal = new Date(date);
    return (
      tanggal.getFullYear() +
      "-" +
      (tanggal.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      tanggal.getDate().toString().padStart(2, "0")
    );
  }

  function handleInputChange(e, type) {
    e.preventDefault();
    if (type == "name") {
      setName(e.target.value);
    }
    if (type == "email") {
      setEmail(e.target.value);
    }
    if (type == "password") {
      setPassword(e.target.value);
    }
    if (type == "birth") {
      setBirth(tanggal(e.target.value));
    }
  }

  const updateDataStudents = async (id, name, email, password, birth) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/api/v1/students/${id}`,
        { name: name, email: email, password: password, birth: birth }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(email);
  console.log(password);
  console.log(students);

  console.log(id, name, email, password, birth);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <header className="text-white mb-3 custom-nav">
        <div className="container-fluid p-1">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link href="/">
              <a
                className="d-flex align-items-center mx-2"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <img src="/svg.svg" alt="logo" width="100" />
              </a>
            </Link>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link href="/">
                <li>
                  <a
                    className={classNames(
                      router.asPath == "/" ? "text-white" : "text-secondary",
                      "nav-link px-4"
                    )}
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link href="feature">
                <li>
                  <a
                    className={classNames(
                      router.asPath == "/feature"
                        ? "text-white"
                        : "text-secondary",
                      "nav-link px-4"
                    )}
                  >
                    Feature
                  </a>
                </li>
              </Link>
              <Link href="pricing">
                <li>
                  <a
                    className={classNames(
                      router.asPath == "/pricing"
                        ? "text-white"
                        : "text-secondary",
                      "nav-link px-4"
                    )}
                  >
                    Pricing
                  </a>
                </li>
              </Link>
              <Link href="about">
                <li>
                  <a
                    className={classNames(
                      router.asPath == "/about"
                        ? "text-white"
                        : "text-secondary",
                      "nav-link px-4"
                    )}
                  >
                    About
                  </a>
                </li>
              </Link>
            </ul>
            <div className="text-end">
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    type="button"
                    className="btn btn-outline-light me-2 btn-light btn-sm px-3 fw-bold"
                    style={{ color: "#faa030" }}
                  >
                    LOG IN{" "}
                    <image
                      className="ms-1"
                      src="/profile.svg"
                      alt="logo"
                      width="20"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="px-1">
                    <div className="mb-1">
                      <label
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        value={email}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-1">
                      <label
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-grid gap-2 mt-2">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={getDataStudents}
                      >
                        Submit
                      </button>
                    </div>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                      centered
                    >
                      <Modal.Body>
                        <div className="mb-3 row">
                          <label className="col-sm-2 col-form-label">
                            Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              Value={students[0]?.name || ""}
                              onChange={(e) => {
                                handleInputChange(e, "name");
                              }}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="col-sm-2 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              Value={students[0]?.email || ""}
                              onChange={(e) => {
                                handleInputChange(e, "email");
                              }}
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="col-sm-2 col-form-label">
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              className="form-control"
                              Value={students[0]?.password || ""}
                              onChange={(e) => {
                                handleInputChange(e, "password");
                              }}
                            />
                          </div>
                        </div>
                        <div className="mb-4 row">
                          <label className="col-sm-2 col-form-label">
                            Birth
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="date"
                              className="form-control"
                              Value={tanggal(students[0]?.birth) || ""}
                              onChange={(e) => {
                                handleInputChange(e, "birth");
                              }}
                            />
                          </div>
                        </div>
                        <Button
                          className="me-4 mt-5"
                          variant="primary"
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                        <Button
                          className="me-4 mt-5"
                          type="submit"
                          variant="danger"
                          onClick={() => {
                            removeDataStudents(students[0].id);
                            setDisplayNotif2(true);
                            setNotifMessage2("Data ID : ");
                            setNotifMessage3(" deleted !!!");
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          className="me-4 mt-5"
                          variant="outline-success"
                          onClick={() => {
                            updateDataStudents(
                              students[0].id,
                              name,
                              email,
                              password,
                              birth
                            );
                            setDisplayNotif(true);
                            setNotifMessage("Updated !!!");
                          }}
                        >
                          Update
                        </Button>
                      </Modal.Body>
                    </Modal>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row justify-content-center mt-0">
          <div className="col-lg-6 mt-0">
            {displayNotif && notifMessage != "" && (
              <div className="alert alert-primary" role="alert">
                {notifMessage}
              </div>
            )}
            {displayNotif2 && notifMessage2 != "" && (
              <div className="alert alert-danger" role="alert">
                {notifMessage2}
                {students[0]?.id || ""}
                {notifMessage3}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

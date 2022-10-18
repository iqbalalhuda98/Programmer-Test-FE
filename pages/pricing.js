/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import Header from "../components/header";
import axios from "axios";
import { Table } from "react-bootstrap";
import { SSRProvider } from "react-bootstrap";

export default function Pricing() {
  const [students, setStudents] = useState([]);

  const getDataStudents = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/api/v1/students`
      );
      setStudents(response.data);
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

  useEffect(() => {
    getDataStudents();
  }, []);

  console.log(students);
  return (
    <SSRProvider>
      <div>
        <Header />
        <main className="container">
          <div className="row">
            <div className="col-lg-6 mt-4">
              <p className="lead mb-0">
                <strong>Hoverable rows</strong>
              </p>
              <table className="table table-hover caption-top mt-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Tanggal Lahir</th>
                    <th scope="col">Password</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{tanggal(item.birth)}</td>
                      <td>{item.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <button className="btn btn-primary justify-content-end btn-sm">
              Add
            </button> */}
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <p className="lead mb-0">
              <strong>Responsive Table</strong>
            </p>
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Iqbal</td>
                  <td>Alhuda</td>
                  <td>iqbalalhuda</td>
                  <td>iqbalalhuda</td>
                  <td>iqbalalhuda</td>
                  <td>iqbalalhuda</td>
                  <td>iqbalalhuda</td>
                  <td>iqbalalhuda</td>
                  <td>iqbalalhuda</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>John</td>
                  <td>Doel</td>
                  <td>johndoel</td>
                  <td>johndoel</td>
                  <td>johndoel</td>
                  <td>johndoel</td>
                  <td>johndoel</td>
                  <td>johndoel</td>
                  <td>johndoel</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Steave</td>
                  <td>Job</td>
                  <td>steavejob</td>
                  <td>steavejob</td>
                  <td>steavejob</td>
                  <td>steavejob</td>
                  <td>steavejob</td>
                  <td>steavejob</td>
                  <td>steavejob</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </main>
      </div>
    </SSRProvider>
  );
}

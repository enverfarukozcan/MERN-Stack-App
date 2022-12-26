import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormScreen() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const notifySuccess = () => toast.success("New employee created", {
    position: 'top-center',

  });
  const notifyError = () => toast.error("Employee can not created. Check the backend!", {
    position: 'top-center',

  });

  const handleSaveButton = (data) => {
    createUser(data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
    },
    {keepErrors: false, 
    keepDirty: false});
  };

  const createUser = (data) => {
    Axios.post(`/employees/create-employee`, {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      gender: data?.gender,
    })
      .then((res) => {
        notifySuccess();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        notifyError();
      });
  };

  return (
    <div style={{ height: "100%" }}>
      <Container style={{ height: "100vh" }}>
        <Row style={{
          display: "flex",
          "justify-content": "center",
          "align-items": "center", height: "100vh"
        }}>
          <div
            style={{
              display: "flex",
              "justify-content": "space-between",
              "align-items": "center"
            }}
          >
            <div id="imgDiv" style={{ "width": "50%", "height": "100%" }}>
              <img src={require('./img.png')} alt="enverAvatar" />
            </div>
            <form style={{ width: "50%" }} onSubmit={handleSubmit(handleSaveButton)}>
              <div className="mb-3">
                <label for="email" className="form-label">
                  *Email address
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="Email Address"
                />
                {errors.email && <p style={{"color":"red"}}>Email address can not be empty</p>}
              </div>
              <div className="mb-3">
                <label for="firstName" className="form-label">
                  *First Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  {...register("firstName", { required: true })}
                  placeholder="First name"
                />
                {errors.firstName && <p style={{"color":"red"}}>First Name can not be empty</p>}

              </div>
              <div className="mb-3">
                <label for="lastName" className="form-label">
                  *Last Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  {...register("lastName", { required: true })}
                  placeholder="Last name"
                />
                {errors.lastName && <p style={{"color":"red"}}>Last Name can not be empty</p>}

              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  *Gender
                </label>
                <select
                  className="form-select"
                  aria-label="Gender"
                  {...register("gender", { required: true })}
                >
                  <option value="" selected>
                    Choose a gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="notPrefered">Do not prefer to describe</option>
                </select>
                {errors.gender && <p style={{"color":"red"}}>Gender can not be empty</p>}

              </div>
              <div className="mb-3 align-items-center d-flex justify-content-end">
                <button type="submit" className="btn btn-outline-primary">
                  Save
                </button>

              </div>
            </form>
          </div>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default FormScreen;

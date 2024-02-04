import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    emailAddress: yup.string().email().required("This field is required"),
    phoneNumber: yup.number().positive().required("This field is required"),
    contactReason: yup.string().required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const confirmSubmit = window.confirm(
      "We will be in touch with you shortly. Thank you"
    );

    if (confirmSubmit) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="contact">
        <h1>Contact Us Now</h1>

        <div className="form-div">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email Address"
              {...register("emailAddress")}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.emailAddress?.message}
            </p>

            <input
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber")}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.phoneNumber?.message}
            </p>

            <input
              type="text"
              placeholder="Reason"
              {...register("contactReason")}
            />
            <p style={{ color: "red", fontSize: "small" }}>
              {errors.contactReason?.message}
            </p>

            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

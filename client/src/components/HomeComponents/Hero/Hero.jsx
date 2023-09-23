import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { buttons } from "../../../data/data";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/images/image6.jpg";
import image2 from "../../../assets/images/hero2.png";
import image3 from "../../../assets/images/hero3.png";
import image4 from "../../../assets/images/hero4.png";
import image5 from "../../../assets/images/hero5.png";
import image6 from "../../../assets/images/hero6.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showOpacityAnimation, setShowOpacityAnimation] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    input: "",
  };
  const validationSchema = yup.object({
    input: yup.string().required("Required"),
  });
  const onSubmit = async (payload, actions) => {
    navigate(`/gigs?search=${payload.input}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

 

  return (
    <section className="w-full bg-[#1a1b1d] h-screen lg:h-[120vh] text-white  pb-36 relative">
      <div className="contain flex flex-col items-center justify-center h-full relative z-10">
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-loose">
            Find the perfect <i className="font-light">Legal</i> <br />{" "}
            services for your cases
          </h2>
          <div
            className={`flex flex-col lg:flex-row items-center w-52  lg:w-[150px] bg-black h-[50px] rounded-none focus:border focus:border-white relative mb-20 lg:mb-0`}
          >
           
            <button  
              onClick={handleSubmit}
              type="submit"
              className="bg-black h-full lg:w-[150px] outline-none absolute top-16 lg:relative lg:top-0 rounded-md lg:rounded-[0] lg:rounded-tr-md lg:rounded-br-md w-full"
            >
              Search
            </button>
          </div>
          
        </div>
      </div>
      <img
        src={image1}
        alt="slide"
        className={`transition-opacity  duration-800 hidden lg:flex absolute top-0 h-full w-full mix-blend-overlay`}
      />
      
    </section>
  );
};

export default Hero;

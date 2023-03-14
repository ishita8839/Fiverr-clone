import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import userImg from "../../../assets/images/businessImg.png";
import { businessData } from "../../../data/data";

const Business = () => {
  return (
    <section className="py-14 bg-darkblue text-white">
      <div className="contain">
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-1 flex items-start justify-start flex-col gap-5">
            <h4 className="text-3xl font-bold">
              <span>fiverr</span>
              <span className="font-normal"> business.</span>
            </h4>
            <h2 className="text-4xl font-bold">
              A business solution <br /> designed for{" "}
              <i className="font-light">teams</i>
            </h2>
            <p className="max-w-[450px] text-base font-medium">
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="w-full flex items-start justify-start flex-col gap-2">
              {businessData.map((item, i) => (
                <div
                  className="flex items-start justify-start w-full flex-col gap-5"
                  key={i}
                >
                  <div className="flex items-center justify-start gap-3">
                    <span className="text-darkColor">
                      <BsCheckCircle size={25} />
                    </span>
                    <h2 className="text-sm font-normal max-w-[500px]">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/" className="w-fit bg-primary py-2 px-5 text-base font-semibold rounded mt-8 transition-all hover:bg-primary/75">Explore Fiverr Business</Link>
          </div>
          <div className="flex-1">
            <img src={userImg} alt="business_image" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;

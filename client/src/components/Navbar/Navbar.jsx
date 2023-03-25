import React, { useState, useEffect, useRef } from "react";
import { TfiWorld } from "react-icons/tfi";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Login from "../../pages/login/Login";
import useAuthStore from "../../stores";
import Avatar from "../../assets/icons/avatar.jpg";
import { toast } from "react-toastify";
import { Axios } from "../../config";
import requests from "../../libs/request";

const Navbar = () => {
  const navigate = useNavigate();
  const { authUser, removeAuthUser } = useAuthStore();
  const [active, setActive] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const { pathname } = useLocation();
  const [loginModal, setLoginModal] = useState(false);

  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenDrop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const backgroundChange = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };
    window.addEventListener("scroll", backgroundChange);
    return () => {
      window.removeEventListener("scroll", backgroundChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await Axios.post(requests.logout);
      removeAuthUser();
      toast.success("Logout Successfully", {
        position: "bottom-right",
        toastId: 1,
        autoClose: 1000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header
      className={`flex items-center justify-center w-full flex-col text-white fixed top-0 transition-all ease-in-out z-10 ${
        active || pathname !== "/" ? "bg-white !text-darkColor" : ""
      }`}
    >
      <div className="contain">
        <div className="w-full flex items-center justify-between py-4">
          <Link
            to="/"
            className="text-4xl select-none font-black tracking-tighter"
          >
            <span>fiverr</span>
            <span className="text-primary">.</span>
          </Link>
          <nav className="flex items-center justify-end gap-7 font-medium text-base">
            <NavLink to="/" className="cursor-pointer">
              Fiverr Business
            </NavLink>
            <div className="cursor-pointer">Explore</div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span>
                <TfiWorld />
              </span>
              English
            </div>
            <span className="flex items-center gap-2 cursor-pointer">
              <span>
                <BsCurrencyDollar />
              </span>
              USD
            </span>
            {!authUser?.isSeller && (
              <NavLink to="/" className="cursor-pointer">
                Become a Seller
              </NavLink>
            )}
            {authUser ? (
              <>
                {authUser && (
                  <div
                    className="relative flex items-center gap-4 cursor-pointer"
                    onClick={() => setOpenDrop((prev) => !prev)}
                  >
                    <img
                      src={authUser.img || Avatar}
                      alt="user_image"
                      className="w-[32px] h-[32px] rounded-[50%] object-cover"
                    />
                    <span>{authUser?.username}</span>
                    <div
                      ref={modalRef}
                      className={`absolute top-12 right-0 p-3 bg-white border rounded-md text-black flex-col items-start gap-3 w-[200px] font-medium transition-transform duration-300 ${
                        openDrop ? "flex" : "hidden"
                      }`}
                    >
                      {authUser?.isSeller && (
                        <>
                          <NavLink
                            to="/myGigs"
                            className="cursor-pointer w-full text-sm text-darkColor"
                          >
                            Gigs
                          </NavLink>
                          <NavLink
                            to="/add"
                            className="cursor-pointer w-full text-sm text-darkColor"
                          >
                            Add New Gigs
                          </NavLink>
                        </>
                      )}
                      <NavLink
                        to="/orders"
                        className="cursor-pointer w-full text-sm text-darkColor"
                      >
                        Orders
                      </NavLink>
                      <NavLink
                        to="/messages"
                        className="cursor-pointer w-full text-sm text-darkColor"
                      >
                        Messages
                      </NavLink>
                      <div
                        onClick={handleLogout}
                        className="cursor-pointer w-full text-sm text-darkColor"
                      >
                        Logout
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  onClick={() => {
                    navigate("/");
                    setLoginModal(true);
                  }}
                  className="cursor-pointer"
                >
                  Sign in
                </div>
                <NavLink
                  to="/join"
                  className={`border py-2 px-5 rounded hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-sm font-semibold ${
                    active ? "text-primary border-primary" : ""
                  }`}
                >
                  Join
                </NavLink>
              </>
            )}
          </nav>
        </div>
      </div>
      <div
        className={`w-full transition-all duration-300 border-b ${
          active || pathname !== "/" ? "flex" : "hidden"
        }`}
      >
        <hr className="border-black" />
        <div className="contain">
          <div
            className={`w-full flex items-center justify-between py-3 overflow-x-auto gap-5 font-medium scrollbar-hide text-sm ${
              active || pathname !== "/" ? "!text-gray-500" : "text-gray-200"
            }`}
          >
            <span className="hover:border-b-2 cursor-pointer transition-[border] h-8 scrollbar-hide border-primary">
              Graphics & Design
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Digital Marketing
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Writing & Translation
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Video & Animation
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Music & Audio
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Programming & Tech
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Business
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              Lifestyle
            </span>
            <span className="hover:border-b-2 cursor-pointer transition-[border] duration-100 h-8 scrollbar-hide border-primary">
              AI Services
            </span>
          </div>
        </div>
      </div>
      <Login show={loginModal} setShow={setLoginModal} />
    </header>
  );
};

export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import IconInfo from "../icons/IconInfo";

const LoginForm = () => {
  const [display, setDisplay] = useState(false);
  const handleDisplayToggle = () => {
    setDisplay(!display);
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(e.target.name, e.target.value);
    console.log(formData, "form");
  };

  const handleInputBlur = (e) => {
    validateInput(e.target.name, e.target.value);
  };

  const validateInput = (name, value) => {
    const newErrors = { ...errors };

    if (name === "email") {
      if (!value) {
        newErrors.email = "هذا الحقل مطلوب";
      } else {
        newErrors.email = "";
      }
    }
    if (name === "password") {
      if (!value) {
        newErrors.password = "هذا الحقل مطلوب";
      } else {
        newErrors.password = "";
      }
    }
    setErrors(newErrors);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-full flex-1 items-center justify-center shadow-[0 0 10px 0 rgb(59 130 246 / 0.5)] font-main ">
      <form className=" flex w-full flex-col items-center rounded-[10px] bg-transparent  pe-8 ps-3 pt-8 shadow-[0_0_10px_0_rgba(8,143,196,0.25)] md:w-[500px] md:px-12 md:pt-16 ">
        <h1 className="md:text-[40px] text-[27px] text-[#088FC4] md:pb-4  font-bold ">
          {" "}
          تسجيل الدخول
        </h1>
        <div className="w-full flex flex-col gap-3 md:my-12 mt-10 mb-8">
          <div className="w-full">
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="أدخل بريدك الإلكتروني"
              type="email"
              className={
                !errors.email
                  ? " direction placeholder:text-end border-[#088FC4] px-3 rounded-[10px] outline-none md:min-h-[60px] min-h-[50px] md:text-[20px]  placeholder:font-thin placeholder:text-12  border focus:border-2 focus-within:border-[#2563eb] focus:ring-offset-2 focus:ring-offset-[#2563eb]  focus:border-[#2563eb] w-full "
                  : "direction placeholder:text-end  border-red-500 placeholder:text-red-500 px-3 rounded-[10px] outline-none md:min-h-[60px] min-h-[50px] md:text-[20px]  placeholder:font-thin placeholder:text-12  border focus:border-2 focus-within:border-[#2563eb] focus:ring-offset-2 focus:ring-offset-[#2563eb]  focus:border-[#2563eb] w-full"
              }
            />
            {errors.email && (
              <p className=" text-red-500 mt-2 ">{errors.email}</p>
            )}
          </div>
          <div className="relative w-full md:mb-[85px]  mb-9 ">
            <input
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type={display ? "text" : "password"}
              placeholder="أدخل كلمة المرور"
              className={
                !errors.password
                  ? "  border-[#088FC4] px-3 rounded-[10px] outline-none md:min-h-[60px] min-h-[50px] md:text-[20px]  placeholder:font-thin placeholder:text-12  border focus:border-2 focus-within:border-[#2563eb] focus:ring-offset-2 focus:ring-offset-[#2563eb]  focus:border-[#088FC4] w-full "
                  : " border-red-500 placeholder:text-red-500 px-3 rounded-[10px] outline-none md:min-h-[60px] min-h-[50px] md:text-[20px]  placeholder:font-thin placeholder:text-12  border focus:border-2 focus-within:border-[#2563eb] focus:ring-offset-2 focus:ring-offset-[#2563eb]  focus:border-[#2563eb] w-full"
              }
            />
            {errors.password && (
              <p className=" text-red-500 mt-2">{errors.password}</p>
            )}
            <button
              onClick={handleDisplayToggle}
              type="button"
              className=" absolute end-[17px] top-[13px] md:top-[18px] left-[15px] z-10 "
            >
              {!display ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className="md:text-[20px] text-[16px]"
                  style={
                    !errors.password
                      ? { color: "#088fc4" }
                      : { color: "#ef4d68" }
                  }
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="md:text-[20px] text-[16px]"
                  style={
                    !errors.password
                      ? { color: "#088fc4" }
                      : { color: "#ef4d68" }
                  }
                />
              )}
            </button>
            <span className=" absolute top-[13px] md:top-[18px]  md:left-[-32px] left-[-25px]   z-10">
              <IconInfo color={!errors.password ? "#088fc4" : "#ef4d68"} />
            </span>
            <p href="" className="text-[#088FC4] underline pt-3">
              هل نسيت كلمة المرور؟
            </p>
          </div>
          <div>
            <button
              onClick={handleSubmit}
              disabled={errors.email || errors.password ? true : false}
              type="submit"
              className=" min-h-[50px] md:min-h-[60px] w-full text-white text-[16px] md:text-[20px] disabled:opacity-[.5]  disabled:cursor-not-allowed rounded-[10px] bg-[#088FC4]  "
            >
              تسجيل الدخول
            </button>
            <p className="mt-3 flex items-center justify-center">
              ليس لديك حساب؟{" "}
              <a className="text-[#088FC4] underline">إنشاء حساب جديد</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

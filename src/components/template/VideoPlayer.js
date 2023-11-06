import React from "react";

import { useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
const VideoPlayer = () => {
  const [style, setStyle] = useState({ width: "200px", height: "200px" });
  const [display, setDisplay] = useState(true);
  const handlePlay = (event) => {
    setStyle({ width: "500px", height: "500px" });
  };
  const handlePause = (event) => {
    setStyle({ width: "200px", height: "200px" });
  };

  return (
    <>
      {display && (
        <div
          className={
            style.width === "200px"
              ? " w-[200px] h-[280px] rounded-lg fixed bottom-[1px] left-[1px] md:left-[30px] md:bottom-[30px] z-20 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] "
              : "block md:w-[500px] md:h-[500px] w-full h-full fixed  md:left-[30px] md:bottom-[30px] bottom-0 left-0 z-20 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
          }
        >
          <div className="w-full h-full  bg-white">
            <div className="relative px-4 pt-2">
              {style.width === "200px" ? (
                <button
                  onClick={() => setDisplay(false)}
                  className=" text-white absolute   z-[1000] start-[-15px] top-[-15px] h-[30px] w-[30px] rounded-full bg-[rgba(0,0,0,0.25)] hover:rotate-180 duration-200"
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="text-[30px]"
                  />
                </button>
              ) : null}
              <p className={`   line-clamp-2 my-2 text-[#98A2B3]`}>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق.
              </p>
            </div>
            <div
              className={
                style.width === "200px"
                  ? " w-[100%] h-[210px] "
                  : "w-[100%] md:h-[430px] h-full  "
              }
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=fkEaIIAmlDs"
                onPlay={handlePlay}
                onPause={handlePause}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;

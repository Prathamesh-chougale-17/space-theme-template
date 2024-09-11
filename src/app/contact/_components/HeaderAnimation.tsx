import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

const SpaceStationScene = ({
  state,
  isLaunching,
}: {
  state: "idle" | "success" | "error";
  isLaunching: boolean;
}) => {
  const controls = useAnimation();
  const rocketY = useMotionValue(0);
  const rocketRotation = useMotionValue(0);
  const rocketScale = useMotionValue(1);

  const rocketVariants = {
    idle: { y: 0, rotate: 0 },
    launch: {
      y: -1000,
      rotate: -45,
      transition: { duration: 2, ease: "easeInOut" },
    },
    success: {
      y: -400,
      rotate: -45,
      transition: { duration: 1, ease: "easeInOut" },
    },
    error: {
      y: -200,
      rotate: 45,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const stationVariants = {
    idle: { rotate: 0 },
    spin: {
      rotate: 360,
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    },
  };

  useEffect(() => {
    const handleLaunch = async () => {
      console.log("handleLaunch", state, isLaunching);
      if (isLaunching) {
        await controls.start("launch");
        // if (!isLaunching) await controls.start(state);
      } else {
        if (state === "success") {
          controls.start("success");
        } else if (state === "error") {
          controls.start("error");
        } else {
          controls.start("idle");
        }
      }
    };

    handleLaunch();
  }, [state, isLaunching, controls]);

  const opacityByY = useTransform(rocketY, [-1000, 0], [0, 1]);

  return (
    <div className="relative w-full h-[500px]">
      {/* Space Station */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="absolute top-20 left-1/2 transform -translate-x-1/2"
        variants={stationVariants}
        animate="spin"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="#555"
          stroke="#888"
          strokeWidth="5"
        />
        <motion.rect x="20" y="90" width="160" height="20" fill="#777" />
        <motion.circle cx="100" cy="100" r="30" fill="#999" />
        <motion.circle cx="100" cy="100" r="10" fill="#00f" />
      </motion.svg>

      {/* Rocket */}
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 381.019 381.019"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        initial="idle"
        animate={controls}
        variants={rocketVariants}
        style={{ y: rocketY, rotate: rocketRotation, scale: rocketScale }}
      >
        <g>
          <motion.polygon
            style={{ fill: "#F7CF52" }}
            points="162.25,287.362 145.55,318.202 62.11,234.762 92.95,218.062"
          />
          <motion.path
            style={{ fill: "#76CDCE" }}
            d="M250.693,172.74c-1.796,0.269-3.642,0.403-5.523,0.403c-20.987,0-38-17.013-38-38s17.013-38,38-38 c1.881,0,3.726,0.134,5.523,0.403c18.371,2.673,32.477,18.491,32.477,37.597S269.063,170.067,250.693,172.74z"
          />
          <motion.polygon
            style={{ fill: "#F7CF52" }}
            points="163.22,109.612 73.86,198.972 18.98,188.802 88.54,119.242"
          />
          <motion.polygon
            style={{ fill: "#F7CF52" }}
            points="270.71,217.092 261.07,291.772 191.51,361.342 181.34,306.452"
          />
          <motion.path
            style={{ fill: "#008DB3" }}
            d="M320.56,59.752c14.27,14.26,32.44,22.19,51.08,23.81c-9.34,30.47-26.03,58.62-49.14,81.73 l-51.79,51.8l-89.37,89.36l-19.09-19.09l-69.3-69.3l-19.09-19.09l89.36-89.36h0.01l51.79-51.8c23.12-23.12,51.27-39.81,81.74-49.14 C298.37,27.312,306.3,45.482,320.56,59.752z M272.04,162.012c14.84-14.84,14.84-38.9,0-53.74s-38.9-14.84-53.74,0 s-14.84,38.9,0,53.74C233.14,176.852,257.2,176.852,272.04,162.012z"
          />
          <motion.path
            style={{ fill: "#F7CF52" }}
            d="M378.82,1.492c3.45,27.92,0.86,55.86-7.18,82.07c-18.64-1.62-36.81-9.55-51.08-23.81 c-14.26-14.27-22.19-32.44-23.8-51.08C322.98,0.632,350.91-1.958,378.82,1.492z"
          />
          <motion.rect
            x="45.065"
            y="276.162"
            transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -143.0177 599.0829)"
            style={{ fill: "#F4581B" }}
            width="15"
            height="105.999"
          />
          <motion.rect
            x="71.285"
            y="299.035"
            transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -108.7171 642.8744)"
            style={{ fill: "#F4581B" }}
            width="15"
            height="89.837"
          />
          <motion.rect
            x="30.272"
            y="258.023"
            transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -149.7311 543.8623)"
            style={{ fill: "#F4581B" }}
            width="15"
            height="89.837"
          />
          <motion.path
            style={{ fill: "#96E0DE" }}
            d="M250.693,172.74V97.546c18.371,2.673,32.477,18.491,32.477,37.597S269.063,170.067,250.693,172.74z"
          />
        </g>
      </motion.svg>

      {/* Flame Effect */}
      <motion.div
        className="absolute -bottom-5 left-[54.4%] transform -translate-x-1/2 w-8 h-10"
        style={{
          y: rocketY,
          opacity: opacityByY,
          visibility: state === "success" ? "visible" : "hidden",
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-t from-red-500 via-orange-400 to-yellow-300"
          animate={{
            scaleY: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Launch Result Message */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: state !== "idle" ? 1 : 0,
          scale: state !== "idle" ? 1 : 0.5,
        }}
        transition={{ duration: 0.5 }}
      >
        {state === "success"
          ? "Mission Successful!"
          : state === "error"
          ? "Launch Failed!"
          : ""}
      </motion.div>
    </div>
  );
};

export default SpaceStationScene;

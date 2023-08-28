import React from "react";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { project } from "../utils/helper";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Contact from "./Contact";

export default function Projects() {
  return (
    <section className="bg-black/80   text-[white]  mx-auto " id="project">
      <div className="py-12 bg-black/40  backdrop-blur-sm text-white  ">
        <h1 className="px-10 text-[4em] py-3 max-[768px]:text-center max-[768px]:text-[3em] ">
          PORTFOLIO
        </h1>
        <ul className="flex flex-wrap items-center justify-center ">
          {project.map((item) => (
            <div className="m-6 cursor-pointer rounded-lg w-96 h-72">
              <Link to={item.link} target="_blank">
                <div>
                  <img src={item.img} alt="img" className="rounded-lg" />
                </div>
              </Link>
              {/* <div>
                <img src={item.img} alt="img" className="h-52" />
              </div> */}
              <div className="text-center py-1 ">
                <h2 className="font-bold text-xl mb-1 tracking-wider text-white">
                  {item.title}
                </h2>
                <h3 className="text-xs text-white/80 tracking-wide pb-[4px]">
                  <span className="text-orange-500 font-medium">
                    Tech-Stack:{" "}
                  </span>
                  {item.tech}
                </h3>
              </div>
              <div className="text-center py-1 ">
                <Link to={item.link} target="_blank">
                  <OpenInNewIcon
                    sx={{ fontSize: 22, color: "#fff", margin: "10px" }}
                    className="hover:text-orange-500"
                  />
                </Link>
                <Link to={item.github} target="_blank">
                  <GitHubIcon
                    sx={{ fontSize: 22, color: "#fff", margin: "10px" }}
                    className="hover:text-orange-500"
                  />
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className=" text-center bg-black/80 backdrop-blur-sm pb-12">
        <div className="p-10">
          <p className="text-xl mb-6">LET'S CONNECT HERE</p>
          <Contact />
        </div>
      </div>
    </section>
  );
}

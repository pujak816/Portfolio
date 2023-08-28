import React from "react";
import { skill } from "../utils/helper.js";

export default function Skills() {
  return (
    <section className="bg-black/95" id="skill">
      <div className=" flex flex-wrap p-28  max-[1024px]:p-2 ">
        {skill.map((item) => (
          <div className="w-20 m-4  max-[1024px]:w-6">
            <img
              src={item.link}
              alt="html_logo"
              className="max-w-[70px] max-[1024px]:max-w-[40px] "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

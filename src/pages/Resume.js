import React from "react";
import resume from "../assest/Resume-Carlos-Garnacho.pdf";
export default function Resume() {
  return (
    <div>
      <section class="resume-section" id="resume">
        <h2 class="section-title">
          <span class="bright-color-text">R</span>esume
        </h2>
        <div class="resume-section-p">
          <p>
            To download my CV please click&nbsp;
            <a href={resume} target="_blank">
              here
            </a>{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

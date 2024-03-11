import React, { Fragment } from "react";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

function SocialMedia() {
  const openLinkedinProfile = () => {
    window.open(
      "https://www.linkedin.com/in/andre-winnikes-5a511b88/",
      "_blank"
    );
  };

  const openGithubProfile = () => {
    window.open(
      "https://github.com/levywinnikes/Vacation-Plan-2024-Web-App",
      "_blank"
    );
  };

  return (
    <Fragment>
      <LinkedinOutlined
        onClick={openLinkedinProfile}
        style={{
          cursor: "pointer",
          fontSize: "48px",
          position: "fixed",
          bottom: 12,
          left: 12,
        }}
      />
      <GithubOutlined
        onClick={openGithubProfile}
        style={{
          cursor: "pointer",
          fontSize: "48px",
          position: "fixed",
          bottom: 12,
          left: 72,
        }}
      />
    </Fragment>
  );
}

export default SocialMedia;

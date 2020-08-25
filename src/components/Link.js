import React from "react";

const Link = ({ link }) => {
  return (
    <div>
      <span>{link.longUrl}</span>

      <span>{link.shortUrl}</span>
    </div>
  );
};

export default Link;

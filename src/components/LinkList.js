import React from "react";
import Link from "./Link";

const LinkList = ({ links }) => {
  return links.map((link) => <Link key={link.shortUrl} link={link} />);
};

export default LinkList;

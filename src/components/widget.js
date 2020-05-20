import React from "react"
import { Link } from "gatsby"

const Widget = ({ url, title, subtitle, link }) => {
  return <>
  {link
    ? <Link
      className="widget"
      to={link}
    >
      <span className="bold">{title}</span>
    </Link>
    : (
      <a
        className="widget"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <span className="bold">{title}</span><span>{subtitle}</span>
      </a>
    )}
  </>
}

export default Widget

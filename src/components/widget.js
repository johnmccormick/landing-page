import React from "react"
import { Link } from "gatsby"

const Widget = ({ url, title, subtitle, link }) => {
  return <>
  {link
    ? <Link
      className="widget"
      to={link}
    >
      <span class="bold">{title}</span>
    </Link>
    : (
      <a
        className="widget"
        href={url}
        target="_blank"
      >
        <span class="bold">{title}</span><span class="widget-right">{subtitle}</span>
      </a>
    )}
  </>
}

export default Widget

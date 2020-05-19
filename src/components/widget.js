import React from "react"
import { Link } from "gatsby"

const Widget = ({ url, text, style, link }) => {
  const innerStyle =
  {
    display: `block`,
    border: `2px solid #f1faee`,
    borderRadius: `5px`,
    padding: `12px`,
    textDecoration: `none`,
    color: `#f1faee`,
  };

  return <div style={{
    margin: `15px auto 30px`,
  }}>{link
    ? <Link
      style={{...style}, innerStyle}
      to={link}
    >
      {text}
    </Link>
    : (
      <a
        style={{...style}, innerStyle}
        href={url}>
        {text}
      </a>
    )}
  </div>
}

export default Widget

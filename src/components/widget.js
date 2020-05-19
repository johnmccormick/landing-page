import React from "react"
import { Link } from "gatsby"

const Widget = ({ url, text, link }) => {
  const innerStyle =
  {
    display: `block`,
    border: `2px solid #f1faee`,
    borderRadius: `5px`,
    padding: `12px`,
    textDecoration: `none`,
    color: `#f1faee`,
  };
  const flipped = 
  {
    background: `#f1faee`,
    color: `#e63946`,
  }

  return <div style={{
    margin: `30px auto 0px`,
  }}>{link
    ? <Link
      style={Object.assign({}, innerStyle, flipped)}
      to={link}
    >
      {text}
    </Link>
    : (
      <a
        style={innerStyle}
        href={url}>
        {text}
      </a>
    )}
  </div>
}

export default Widget

import React from 'react'

function ExternalLinkIcon({link, icon}) {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon
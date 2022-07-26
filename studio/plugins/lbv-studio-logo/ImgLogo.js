import React from 'react'

// While we recommend SVGs, an alternative is to use a regular image (png, jpg)
// Notice how we're "importing" the path from a local image - when building the
// studio, this image will automatically be part of the output bundle, with a
// hash that will make it easy to invalidate on changes.
import LBVLogo from './logo.png'

// const ImgLogo = () => <img width="50" height="25" src={LBVLogo} />
const ImgLogo = () => <h1 style={{ color: 'white', fontSize: 16 }}>LBV Content Studio</h1>

export default ImgLogo

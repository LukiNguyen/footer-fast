import React from 'react'
import Footer from './components/Footer'
const FooterFast = ({
  option,
  background,
  colorTitle,
  colorLabel,
  listColumn
}) => {
  return (
    <Footer
      option={option}
      background={background}
      colorTitle={colorTitle}
      colorLabel={colorLabel}
      listColumn={listColumn}
    />
  )
}
export default FooterFast

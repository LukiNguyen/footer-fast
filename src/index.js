import React from 'react'
import Footer from './components/Footer'
import styles from './styles.module.css'
import 'footer-fast/dist/index.css'
const FooterFast = ({
  option,
  background,
  colorTitle,
  colorLabel,
  listColumn
}) => {
  return (
    <Footer
      styles={styles}
      option={option}
      background={background}
      colorTitle={colorTitle}
      colorLabel={colorLabel}
      listColumn={listColumn}
    />
  )
}
export default FooterFast

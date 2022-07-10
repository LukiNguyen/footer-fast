import React from 'react'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
function Footer({ option, background, colorTitle, colorLabel, listColumn }) {
  return (
    <footer
      className={styles.footer}
      style={{ background: background || '#24262b' }}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          {listColumn.map((e, i) => {
            return (
              <div className={styles.footerCol} key={i}>
                <h4
                  className={e.title !== '' ? styles.before : styles.empty}
                  style={{ color: colorTitle || '#ffffff' }}
                >
                  {e.title}
                </h4>
                <ul>
                  {e.options.map((c, index) => {
                    return (
                      <li key={index}>
                        {c.blank ? (
                          <Link
                            to={c.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ color: colorLabel || '#bbbbbb' }}
                          >
                            {c.icon}
                            {c.label}
                          </Link>
                        ) : (
                          <Link
                            to={c.link}
                            style={{ color: colorLabel || '#bbbbbb' }}
                          >
                            {c.icon}
                            {c.label}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer

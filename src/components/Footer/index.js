import React from 'react'
function Footer({
  option,
  background,
  colorTitle,
  colorLabel,
  listColumn,
  styles
}) {
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
                          <a
                            href={c.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ color: colorLabel || '#bbbbbb' }}
                          >
                            {c.icon}
                            {c.label}
                          </a>
                        ) : (
                          <a
                            href={c.link}
                            style={{ color: colorLabel || '#bbbbbb' }}
                          >
                            {c.icon}
                            {c.label}
                          </a>
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

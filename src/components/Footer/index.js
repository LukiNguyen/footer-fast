import React from 'react'
function Footer({
  option,
  background,
  colorTitle,
  colorLabel,
  listColumn,
  styles
}) {
  const stylesInline = {
    footer: {
      backgroundColor: '#24262b',
      padding: '70px 0'
    },
    container: {
      maxWdth: '1170px',
      margin: 'auto'
    },
    row: {
      display: 'grid',
      flexWrap: 'wrap',
      gridTemplateColumns: 'auto auto auto auto',
      gap: '10px'
    },
    footerCol_ul: { listStyle: 'none', padding: '0', textAlign: 'left' },
    footerCol: { width: '100%', padding: '0 15px' },
    footerCol_h4: {
      fontSize: '18px',
      textTransform: 'capitalize',
      marginBottom: '35px',
      fontWeight: '500',
      position: 'relative',
      textAlign: 'left',
      minHeight: '20px'
    },
    footerCol_h4_before: {
      '&::before': {
        content: "''",
        position: 'absolute',
        left: '0',
        bottom: '-10px',
        backgroundColor: '#f5941a',
        height: '2px',
        boxSizing: 'border-box',
        width: '50px'
      }
    },
    footerCol_ul_li_not__last_child: {
      '&::not(:last-child)': {
        marginBottom: '10px'
      }
    },
    footerCol_ul_li_a: {
      fontSize: '16px',
      textTransform: 'capitalize',
      textDecoration: 'none',
      fontWeight: '300',
      transition: 'all 0.3s ease',
      display: 'flex',
      gap: '10px',
      '&::hover': {
        color: '#ffffff',
        paddingLeft: '8px'
      }
    },
    footerCol__socialLinks_a: {
      display: 'inline-block',
      height: '40px',
      width: '40px',
      backgroundColor: 'rgba(255,255,255,0.2)',
      margin: '0 10px 10px 0',
      textAlign: 'center',
      lineHeight: '40px',
      borderRadius: '50%',
      color: '#ffffff',
      transition: 'all 0.5s ease',
      '&::hover': {
        color: '#24262b',
        backgroundColor: '#ffffff'
      }
    },
    '@media (max-width: 767px)': {
      __expression__: '(max-width: 767px)',
      footerCol: { width: '50%', marginBottom: '30px' }
    },
    '@media (max-width: 574px)': {
      __expression__: '(max-width: 574px)',
      footerCol: { width: '100%' }
    }
  }
  return (
    <footer
      style={[stylesInline.footer, { background: background || '#24262b' }]}
    >
      <div style={stylesInline.container}>
        <div style={stylesInline.row}>
          {listColumn.map((e, i) => {
            return (
              <div style={stylesInline.footerCol} key={i}>
                <h4
                  style={[
                    stylesInline.footerCol_h4,
                    e.title !== '' && stylesInline.footerCol_h4_before,
                    { color: colorTitle || '#ffffff' }
                  ]}
                >
                  {e.title}
                </h4>
                <ul style={stylesInline.footerCol_ul}>
                  {e.options.map((c, index) => {
                    return (
                      <li
                        key={index}
                        style={
                          index !== c.option &&
                          stylesInline.footerCol_ul_li_not__last_child
                        }
                      >
                        {c.blank ? (
                          <a
                            style={[
                              stylesInline.footerCol_ul_li_a,
                              { color: colorLabel || '#bbbbbb' }
                            ]}
                            href={c.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {c.icon}
                            {c.label}
                          </a>
                        ) : (
                          <a
                            style={[
                              stylesInline.footerCol_ul_li_a,
                              { color: colorLabel || '#bbbbbb' }
                            ]}
                            href={c.link}
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

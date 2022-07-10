import React from 'react'
import FooterFast from 'footer-fast'
const App = () => {
  return (
    <FooterFast 
        option="1"
        colorTitle='#ffffff'
        colorLabel="#bbbbbb"
        listColumn ={[
          {
              title:"About Us",
              options : [
                {
                  label:"Development process",
                  link:"https://citrineacademy.com/aboutus"
                },
                {
                  label:"Social responsibility",
                  link:"https://citrineacademy.com/responsibility"
                },
                {
                  label:"Location & Branch",
                  link:"https://citrineacademy.com/location"
                },
                {
                  label:"Career opportunities",
                  link:"https://citrineacademy.com/carrer"
                },
              ]
          },
          {
            title:"Study Promotion",
            options : [
              {
                label:"Start Up",
                link:"https://citrineacademy.com/start-up"
              },
              {
                label:"Programming Library",
                link:"https://citrineacademy.com/citrine-library"
              },
              {
                label:"Source Code & Project",
                link:"https://citrineacademy.com/source-code"
              }, 
            ]
        },{
          title:"",
          options : [
            {
              label:"Partner",
              link:"https://citrineacademy.com/partner"
            },
            {
              label:"Scholarship Policy",
              link:"https://citrineacademy.com/scholarship"
            }, 
            {
              label:"Community",
              link:"https://citrineacademy.com/carrer"
            },
          ]
      },{
        title:"Help",
        options : [
          {
            label:"Contact us",
            link:"https://citrineacademy.com/contact"
          },
          {
            label:"FAQs",
            link:"https://citrineacademy.com/faqs"
          },
          {
            label:"Education program",
            link:"https://citrineacademy.com/education-program"
          }, 
        ]
       },
        ]}
       />
  )
}
export default App

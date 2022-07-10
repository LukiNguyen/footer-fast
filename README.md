# footer-fast

> Create footer quickly with many flexible options - Lukim Nguyen

[![NPM](https://img.shields.io/npm/v/footer-fast.svg)](https://www.npmjs.com/package/footer-fast) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save footer-fast
```

## Usage

```jsx
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

```
## API 
|   Property  |         Type        | Default |           Description           |   |
|:-----------:|:-------------------:|:-------:|:-------------------------------:|---|
| option      | string              | 1       | Choose Footer Layout            |   |
| className   | string              | ''      | additional class name of footer |   |
| style       | React.CSSProperties |         | style properties of footer      |   |
| listColumns | Column Array        | []      | columns data inside footer      |   |
| background  | string              | #24262b | Background for footer           |   |
| colorTitle  | string              | #fff    | Color for title column          |   |
| colorLabel  | string              | #bbbbbb | Color for label in column       |   |
| icon        | ReactNode           |         | Icon before label               |   |
## License

MIT © [LukiNguyen](https://github.com/LukiNguyen)

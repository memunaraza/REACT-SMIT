import React from 'react'

//create context
//provide dtaa
//use data
export const PostDataContext = createContext()
const ThemeContext = (props) => {
  return (
    <div>
        <PostDataContext.provider value>
             {props.children}
        </PostDataContext.provider>
     
    </div>
  )
}

export default ThemeContext

import React, { useRef, useState } from 'react'
import useOutsideClick from './useOutsideClick'

const UseOnClickOutsideTest = () => {
    const ref = useRef()
    const [showContent,setShowContent] = useState(false)
    useOutsideClick(ref,() => setShowContent(false))
  return (
    <div>
        {
            showContent? (
                <div ref={ref}>
                    <h1>This is the testing content</h1>
                    <p>If you want to close the content, Please click the outside of the container</p>
                </div>) :(<button onClick={() => setShowContent(true)}>Show Content</button>
            )
        }
    </div>
  )
}

export default UseOnClickOutsideTest
import React , {useRef , useEffect} from 'react'

function ViewHTML(props) {
    const descriptionRef = useRef(null);
    useEffect(() => {
        descriptionRef.current.innerHTML=props.data;
    },)
  return (
    <div ref={descriptionRef}></div>
  )
}

export default ViewHTML
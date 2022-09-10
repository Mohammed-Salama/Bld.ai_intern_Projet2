import React , { useRef , useEffect , useState } from 'react'
import styles from './DropDownStyles.module.css'
import '../App.css'
import { faChevronDown , faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DropDown(props) {
  const [opened , setOpened] = useState(props.first_state);
  //let opened = props.first_state;
  const contentRef = useRef(null)
  function toggleDropDown() {
    if (opened === 0) {
      setOpened(1);
      //opened = 1;
    } else {
      setOpened(0);
      //opened = 0;
    }
  }
  useEffect(() => {
    if (opened === 0) {
      contentRef.current.style.display = "none";
    } else {
      contentRef.current.style.display = "inline-block";
    }
  }, [opened])
  const content = props.data.points?.map((point , index) => {
    return (
      <div key={index}>
        <FontAwesomeIcon className={styles.play_icon} fontSize="small" icon={faPlayCircle}></FontAwesomeIcon>
        <p className={styles.point}>{point}</p>
      </div>
    )
  }
  )
  return (
    <div className={styles.drop_down}>
      <div className={styles.drop_down_header}>
        <FontAwesomeIcon onClick={toggleDropDown} className={styles.arrow_icon} fontSize="small" icon={faChevronDown}></FontAwesomeIcon>
        <h4 className={styles.title}>{props.data.title}</h4>
      </div>
      <div ref={contentRef} className={styles.drop_down_content}>

        {content}
      </div>
      
    </div>
  )
}

export default DropDown
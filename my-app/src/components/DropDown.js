import React , { useRef} from 'react'
import styles from './DropDownStyles.module.css'
import '../App.css'
import { faChevronDown , faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DropDown(props) {
  //const [opened, setOpened] = useState(0);
  let opened = 0;
  const contentRef = useRef(null)
  function toggleDropDown() {
    if (opened === 0) {
      contentRef.current.style.display = "inline-block";
      //setOpened(1);
      opened = 1;
    } else {
      contentRef.current.style.display = "none";
      //setOpened(0);
      opened = 0;
    }
  }
  const content = props.data.points.map((point , index) => {
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
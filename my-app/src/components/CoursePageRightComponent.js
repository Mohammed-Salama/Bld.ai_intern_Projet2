import React , {useEffect,useRef} from 'react'
import styles from './CoursePageRightComponentStyles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay , faDownload , faInfinity, faMobile , faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

function CoursePageRightComponent(props) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const prTextRef = useRef(null);
  
  useEffect(()=>{
    let maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight-500;
    let topMaxY = maxY-160;
    window.addEventListener('scroll',()=>{
      if(outerRef.current){
        if(window.scrollY>390 && window.scrollY<maxY){
          outerRef.current.style.position='fixed'
          outerRef.current.style.top='30px'
          outerRef.current.style.zIndex='4'
          innerRef.current.style.dispaly='none'
          innerRef.current.style.height='0px'
          prTextRef.current.style.display='none'
        }
        else if (window.scrollY>maxY){
          outerRef.current.style.position='absolute'
          outerRef.current.style.top=`${topMaxY}px`
          outerRef.current.style.zIndex='1'
          innerRef.current.style.dispaly='flex'
          innerRef.current.style.height='190px'
          prTextRef.current.style.display='block'
        }
        else{
          outerRef.current.style.position='absolute'
          outerRef.current.style.top='100px'
          outerRef.current.style.zIndex='1'
          innerRef.current.style.dispaly='flex'
          innerRef.current.style.height='190px'
          prTextRef.current.style.display='block'
        }
     }
    })
  },[])
  //
  return (
    <div ref={outerRef} className={styles.outer_container}>
        <div ref={innerRef} className={styles.top_container} style={{backgroundImage: `url(${props.data.img})`}} >
          <FontAwesomeIcon icon={faCirclePlay}  className={styles.play_icon} />
          <h4 ref={prTextRef} className={styles.preview_text}>Preview this course</h4>
        </div>
        <h2 className={styles.price}>E£{props.data.price}</h2>
        <button className={styles.add_to_cart_button}>Add to cart</button>
        <button className={styles.buy_button}>Buy now</button>
        <h4 className={styles.include_head_text}>This course includes:</h4>
        <div className={styles.included_element}>
          <FontAwesomeIcon icon={faCirclePlay}   className={styles.included_icon} />
          <p className={styles.included_inner_text}>{props.data.total_hours} hours on-demand video</p>
        </div>
        <div className={styles.included_element}>
          <FontAwesomeIcon icon={faFile}   className={styles.included_icon} />
          <p className={styles.included_inner_text}>{props.data.articles_num} articles</p>
        </div>
        <div className={styles.included_element}>
          <FontAwesomeIcon icon={faDownload}   className={styles.included_icon} />
          <p className={styles.included_inner_text}>{props.data.downloadable_resources} downloadable resources</p>
        </div>
        <div className={styles.included_element}>
          <FontAwesomeIcon icon={faInfinity}   className={styles.included_icon} />
          <p className={styles.included_inner_text}>Full lifetime access</p>
        </div>
        <div className={styles.included_element}>
          <FontAwesomeIcon icon={faMobile}   className={styles.included_icon} />
          <p className={styles.included_inner_text}>Access on mobile and TV</p>
        </div>
        <div className={styles.included_element}>
          <FontAwesomeIcon icon={faTrophy}   className={styles.included_icon} />
          <p className={styles.included_inner_text}>Certificate of completion</p>
        </div>
        <div className={styles.share_gift_and_coupon_buttons}>
          <button className={styles.under_lined_button}><u>Share</u></button>
          <button className={styles.under_lined_button}><u>Gift this course</u></button>
          <button className={styles.under_lined_button}><u>Apply Coupon</u></button>
        </div>
        <div className={styles.business_plans}>
          <h3 className={styles.business_plans_head_text}>Training 5 or more people?</h3>
          <p className={styles.business_plans_inner_text}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
          <button className={styles.try_button}>Try Udemy Business</button>
        </div>
    </div>
  )
}

export default CoursePageRightComponent
import React,{ useRef , useEffect} from 'react'
import styles from './TabsBarStyle.module.css'
function TabsBar() {
  const tabRef = useRef(null)
  useEffect(() => {
		tabRef.current.click();
	}, [])
  const ClickHandler = (e) => {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add(styles.active);
  }
  return (
    <div className={styles.tabs_bar}>
    <button ref={tabRef} className={styles.tab} onClick={ClickHandler} >Python</button>
    <button className={styles.tab} >Excel</button>
    <button className={styles.tab} >Web Development</button>
    <button className={styles.tab} >JavaScript</button>
    <button className={styles.tab} >Data Science</button>
    <button className={styles.tab}>AWS Certification</button>
    <button className={styles.tab} >Drawing</button>
</div>
  )
}

export default TabsBar
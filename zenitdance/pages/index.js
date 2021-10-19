import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  let [slideList, setSlideList] = useState([false, false, false])
  
  let [slideNum, setSlideNum] = useState(0)
  
  useEffect(() => {
      setTimeout(() => slides(), 5000)

      const slides = () => {
        let tempSlideNum = slideNum
        tempSlideNum++
        if (slideNum > 1) {tempSlideNum = 1} 
        setSlideNum(tempSlideNum)
        
        let slideListTemp = slideList
        slideListTemp = slideListTemp.map((slide) => {
          slide = false
        })
        slideListTemp[slideNum] = true
        setSlideList(slideListTemp)

        console.log(slideNum)
      }
      
  })

  return (
    <div>
      <div id="slideContainer" className={styles.slideContainer}>
        {slideList[0] ? <div className={styles.photoSlide}><Image height={1292} width={1950} src={require("../../obrazky/index/hall1.jpg")}></Image></div> : <div></div>}
        {slideList[1] ? <div className={styles.photoSlide}><Image height={1300} width={1950} src={require("../../obrazky/index/hall2.jpg")}></Image></div> : <div></div>}
        {slideList[2] ? <div className={styles.photoSlide}><Image height={1300} width={1950} src={require("../../obrazky/index/hall3.jpg")}></Image></div> : <div></div>}
      </div>
    </div>
  )
}

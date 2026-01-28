import React, { useRef } from 'react'

import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const videoRef = useRef()
  const videoTimelineRef = useRef()

  const isMobile = useMediaQuery({ maxWidth: 767 })

useGSAP(() => {
  const heroSplit = new SplitText('.title', { type: 'chars, words' })
  const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })
  heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

  gsap.from(heroSplit.chars, {
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
  })

  gsap.from(paragraphSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
    delay: 1,
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
    .to('.right-leaf', { y: 200 }, 0)
    .to('.left-leaf', { y: -200 }, 0)

  const video = videoRef.current

  // ✅ KEEP onloadedmetadata — NO addEventListener
  videoRef.current.onloadedmetadata = () => {
    video.currentTime = 0.001 // Safari fix

    const startValue = isMobile ? 'top 50%' : 'center 60%'
    const endValue = isMobile ? '120% top' : 'bottom top'

    const tl = (videoTimelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        pin: true,
        scrub: true,
      },
    }))

    tl.to(videoRef.current, {
      currentTime: videoRef.current.duration,
    })
  }
}, [])


  return (
    <div>
      <section id="hero" className="noisy">
        <h1 className="title">ROJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left leaf"
          className="left-leaf"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>True Kool Krisp</p>
              <p className="subtitle">
                Sip the quench <br />
                of summer
              </p>

              <div className="view-cocktails">
                <p className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  est lacus, sodales eget mollis sagittis, pharetra sed lorem.
                  Maecenas quis sem ligula. Donec placerat aliquet mauris et
                  congue.
                </p>
                <a>View Cocktails</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
          ref={videoRef}
        />
      </div>
    </div>
  )
}

export default Hero

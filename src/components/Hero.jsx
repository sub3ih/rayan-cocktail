import React from 'react'

import {SplitText} from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


export const Hero = () => {

    useGSAP(() =>{
        const heroSplit = new SplitText('.title', {type:'chars, words'})
        const paragraphSplit = new SplitText('.subtitle', {type:'lines'}) // classnames so far 
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06 //wave affect after another remem
        })

        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:'expo.out',
            stagger:0.06,
            delay:1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub: true,
            }

        })
            .to('.right-leaf', {y:200},0)
            .to('left-leaf',{y:-200},0)

    },[])


  return (
    <div>
<section id = "hero" className='noisy'>
    <h1 className = 'title'>ROJITO</h1>

<img 
src = '/images/hero-left-leaf.png'
alt = 'left leaf'
className='left-leaf'
/>

<img 
src = '/images/hero-right-leaf.png'
alt = 'right leaf'
className='right-leaf'
/>


<div className='body'>

<div className = "content">

<div className='space-y-5 hidden md:block'> 

<p>True Kool Krisp</p>
<p className='subtitle'>Sip the quench <br/>of summer</p>



<div className = 'view-cocktails'>
<p className = 'subtitle'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est lacus, sodales eget mollis sagittis, pharetra sed lorem. Maecenas quis sem ligula. Donec placerat aliquet mauris et congue. 
</p>
<a>View Cocktails</a>
</div>

</div>
</div>
</div>




</section>


    </div>
  )
}

export default Hero
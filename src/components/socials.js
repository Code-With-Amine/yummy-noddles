import {socilas} from '../Data/socialsImages';
import '../styles/socials.scss'
import React, { useEffect } from "react";

function AnimateSocialsOnScroll() {
  useEffect(() => {
    const imageElements = document.querySelectorAll(".socilas--image");

    const locationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${(index + 1) * 100}ms`;

          entry.target.classList.add("animate");
        }
      });
    });

    imageElements.forEach((image) => {
      locationObserver.observe(image);
    });
  }, []);
}

function Socials() {

  AnimateSocialsOnScroll()
  
  const SetAnimationClassName = () =>{
    if(animateNumber === 3){
        animateNumber = 1
      }


    return 'socilas--image socilas__animate-' + ++animateNumber
  }

  let animateNumber = 1
  
  return (
    <>
    <h1 className='socilas--title'>SOCIAL NETWORKS</h1>
        <div className='socilas'>
      {  socilas.map(({src, alt}) => 
                <img src={src} alt={alt} className={SetAnimationClassName()} />
      )
      }
    </div>
    </>
  )
}

export default Socials
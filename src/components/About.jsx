import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.8,
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotation: index % 2 === 0 ? -3 : 3,
          ease: 'back.out(1.7)',
          delay: index * 0.15
        });

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.03,
            y: -8,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="about section" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__card" ref={addToRefs}>
            <h2 className="about__title">PERSONAL PROFILE</h2>
            <p className="about__text">
              Fullstack web developer with 5+ years experience with PHP, JS, SQL, WordPress
            </p>
          </div>

          <div className="about__card" ref={addToRefs}>
            <h2 className="about__title">AREAS OF EXPERTISE</h2>
            <ul className="about__list">
              <li>Experience with CMS (Wordpress)</li>
              <li>Hands-on SQL, MongoDB experience</li>
              <li>HTML5, CSS, SASS, SCSS</li>
              <li>JS, PHP and Python experience</li>
              <li>NodeJS, React, Redux, TypeScript</li>
              <li>Web API experience</li>
            </ul>
          </div>

          <div className="about__card" ref={addToRefs}>
            <h2 className="about__title">OTHER SKILLS</h2>
            <ul className="about__list">
              <li>The ability to analyze complex technical information</li>
              <li>Detail oriented</li>
              <li>Excellent problem solver</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

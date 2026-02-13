import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          duration: 0.8,
          y: 60,
          opacity: 0,
          scale: 0.9,
          rotation: index % 2 === 0 ? -5 : 5,
          ease: 'back.out(1.7)',
          delay: index * 0.2
        });
      });

      // Background text animation
      gsap.from(backgroundRef.current, {
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: 'top 80%',
        },
        duration: 1,
        y: 40,
        opacity: 0,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="education section" id="education" ref={sectionRef}>
      <div className="container">
        <h2 className="section__title">EDUCATION</h2>
        
        <div className="education__content">
          <div className="education__card" ref={addToCardsRef}>
            <div className="education__icon">
              <FaGraduationCap />
            </div>
            <h3 className="education__degree">Bachelor's Degree</h3>
            <p className="education__field">
              Automation and Computer-Integrated Technologies
            </p>
            <p className="education__school">
              Kharkiv National Technical University<br />
              "Kharkiv Polytechnic Institute"
            </p>
          </div>

          <div className="education__card" ref={addToCardsRef}>
            <div className="education__icon">
              <FaMapMarkerAlt />
            </div>
            <h3 className="education__degree">Secondary Education</h3>
            <p className="education__school">
              Berdiansk Secondary School №11<br />
              Berdyansk, Zaporizhzhia Oblast, Ukraine
            </p>
            <p className="education__description">
              Completed 11 years of secondary education
            </p>
          </div>
        </div>

        <div className="education__background" ref={backgroundRef}>
          <p>
            I was born in Berdyansk, Zaporizhzhia Oblast, Ukraine, and attended
            Berdiansk Secondary School №11, where I completed my secondary
            education after 11 years. Following this, I pursued higher education at
            Kharkiv National Technical University "Kharkiv Polytechnic Institute,"
            specializing in automation and computer-integrated technologies, and
            graduated with a bachelor's degree.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;

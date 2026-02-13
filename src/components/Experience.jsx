import React, { useEffect, useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  const jobs = [
    {
      id: 1,
      title: 'REACT DEVELOPER',
      company: 'Hut8',
      period: '2023 – 2026',
      responsibilities: [
        'Built a React-based web application from scratch, incorporating state management using Redux and API calls with Axios.',
        'Implemented responsive design using CSS and React-Bootstrap.',
        'Utilized Git for version control and collaborated with remote team members.',
        'Continuously improved skills through online courses and participation in React development communities.'
      ]
    },
    {
      id: 2,
      title: 'WORDPRESS DEVELOPER',
      company: '88.eu',
      period: '2020 – 2023',
      responsibilities: [
        'Built and maintained multiple WordPress websites for clients, ensuring optimal performance and security.',
        'Translated client requirements into functional and visually appealing WordPress sites.',
        'Implemented custom plugins and integrations to enhance website functionality.',
        'Developed proficiency in HTML, CSS, and JavaScript to customize WordPress themes.',
        'Successfully migrated legacy WordPress websites to modern platforms.',
        'Trained and onboarded junior team members on WordPress development best practices.'
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        },
        duration: 0.8,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
      });

      // Timeline items animation
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
          duration: 0.8,
          x: index % 2 === 0 ? -80 : 80,
          opacity: 0,
          ease: 'power3.out',
          delay: index * 0.2
        });

        // List items stagger
        const listItems = item.querySelectorAll('.experience__list li');
        gsap.from(listItems, {
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
          },
          duration: 0.5,
          x: -20,
          opacity: 0,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToItemsRef = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section__title" ref={titleRef}>WORK EXPERIENCE</h2>
        
        <div className="experience__timeline">
          {jobs.map((job) => (
            <div key={job.id} className="experience__item" ref={addToItemsRef}>
              <div className="experience__header">
                <div className="experience__icon">
                  <FaBriefcase />
                </div>
                <div className="experience__info">
                  <h3 className="experience__title">{job.title}</h3>
                  <div className="experience__company">{job.company}</div>
                  <div className="experience__period">
                    <FaCalendarAlt />
                    <span>{job.period}</span>
                  </div>
                </div>
              </div>
              <ul className="experience__list">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

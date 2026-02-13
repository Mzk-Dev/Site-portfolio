import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/effect-fade";
import mainPhoto from "../images/main_photo.png";

const Hero = () => {
  const contentRef = useRef(null);
  const photoRef = useRef(null);
  const labelRef = useRef(null);
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const socialRef = useRef(null);

  const backgroundSlides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
      overlay:
        "linear-gradient(135deg, rgba(30, 41, 59, 0.88) 0%, rgba(15, 23, 42, 0.88) 100%)",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop",
      overlay:
        "linear-gradient(135deg, rgba(30, 41, 59, 0.88) 0%, rgba(15, 23, 42, 0.88) 100%)",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop",
      overlay:
        "linear-gradient(135deg, rgba(30, 41, 59, 0.88) 0%, rgba(15, 23, 42, 0.88) 100%)",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=1080&fit=crop",
      overlay:
        "linear-gradient(135deg, rgba(30, 41, 59, 0.88) 0%, rgba(15, 23, 42, 0.88) 100%)",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Photo animation
      tl.from(photoRef.current, {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        rotation: -5,
        ease: "back.out(1.7)",
      });

      // Label
      tl.from(
        labelRef.current,
        {
          duration: 0.6,
          y: -30,
          opacity: 0,
        },
        "-=0.5",
      );

      // Name
      tl.from(
        nameRef.current.children,
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          rotationX: -45,
        },
        "-=0.3",
      );

      // Contact card
      tl.from(
        contactRef.current,
        {
          duration: 0.8,
          y: 40,
          opacity: 0,
          scale: 0.95,
        },
        "-=0.4",
      );

      // Contact items
      tl.from(
        contactRef.current.querySelectorAll(".hero__contact-item"),
        {
          duration: 0.5,
          x: -20,
          opacity: 1,
          stagger: 0.1,
        },
        "-=0.5",
      );

      // Social links
      tl.from(
        socialRef.current.children,
        {
          duration: 0.5,
          x: -30,
          opacity: 0,
          stagger: 0.15,
        },
        "-=0.3",
      );

      // Floating animation
      gsap.to(photoRef.current, {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={contentRef}>
      {/* Background Swiper */}
      <div className="hero__background-swiper">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="hero__swiper"
        >
          {backgroundSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="hero__slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div
                  className="hero__slide-overlay"
                  style={{ background: slide.overlay }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hero__pattern"></div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__photo" ref={photoRef}>
            <div className="hero__photo-wrapper">
              <div className="hero__photo-ring"></div>
              <img src={mainPhoto} alt="Maksym Cherenov" />
            </div>
          </div>

          <div className="hero__info">
            <span className="hero__label" ref={labelRef}>
              FULL STACK DEVELOPER
            </span>
            <h1 className="hero__name" ref={nameRef}>
              <span>MAKSYM</span>
              <span>CHERENOV</span>
            </h1>

            <div className="hero__contact" ref={contactRef}>
              <h2 className="hero__contact-title">GET IN CONTACT</h2>

              <div className="hero__contact-grid">
                <div className="hero__contact-item">
                  <FaPhone className="hero__icon" />
                  <span>+380999674439</span>
                </div>
                <div className="hero__contact-item">
                  <FaEnvelope className="hero__icon" />
                  <span>maximkasupp@gmail.com</span>
                </div>
                <div className="hero__contact-item"> 
                  <FaMapMarkerAlt className="hero__icon" />
                  <span>Krakow, Poland</span>
                </div>
              </div>

              <div className="hero__social" ref={socialRef}>
                <a
                  href="https://github.com/Mzk-Dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  <FaGithub />
                  <span>github.com/Mzk-Dev</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/max-cherenov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                >
                  <FaLinkedin />
                  <span>linkedin.com/in/max-cherenov</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

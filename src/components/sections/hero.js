import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--orange);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--white);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    color: var(--lightest-slate);
    max-width: 600px;
  }

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 20px;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--orange);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 600px;
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  .wrapper {
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    .img {
      position: relative;
      border-radius: var(--border-radius);
      filter: none;
      mix-blend-mode: normal;
      transition: var(--transition);
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h3 className="big-heading">Jasmine Zhang.</h3>;
  const skills = [
    'Python',
    'Pytorch + Tensorflow',
    'C',
    'SQL',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML + CSS',
  ];
  const three = (
    <>
      <div className="inner">
        <StyledText>
          <p>
            I’m a software developer with a focus in ML. Currently, I’m in-between my 3rd and 4th
            year at University of Toronto, studying Engineering Science - Machine Intellignece. I am
            especially interested in all things Ethical AI related and believe all technology should
            serve society.
          </p>

          <p>Here are a few technologies I’ve worked with:</p>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

          <p>
            Outside of coding, I spend my time practicing musical theatre, muay thai, and pilates.
          </p>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={600}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </>
  );
  const four = (
    <a
      className="resume-link"
      href="https://drive.google.com/file/d/1Kb4xbJD08cBaW0W45wEoPt3hSJMKiMc3/view?usp=sharing"
      target="_blank"
      rel="noreferrer">
      Resume
    </a>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;

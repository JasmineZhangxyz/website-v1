import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
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
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
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

const About = () => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        sr.reveal(revealContainer.current, srConfig());
    }, []);

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

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="numbered-heading">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Hi! My name is Xiyue, but I also go by Jasmine. I'm a software developer with a focus in ML. 
                            Currently, I'm spending a year at IBM as a SWE co-op intern.
                        </p>

                        <p>
                            I am actively looking for new grad or early career software development opportunities.
                        </p>

                        <p>Here are a few technologies I’ve worked with:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <StaticImage
                            className="img"
                            src="../../images/me.png"
                            width={500}
                            quality={95}
                            formats={['AUTO', 'WEBP', 'AVIF']}
                            alt="Headshot"
                        />
                    </div>
                </StyledPic>
            </div>
            <StyledText>
                    <div>
                        <br></br>
                        <p>
                            I am especially interested in all things Ethical AI related and believe technology should
                            always serve society. I founded the {' '}
                            <a href="https://ethical-principles-in-ai.github.io/">Ethical Principles in AI Team</a>, an 
                            affiliated club at University of Toronto with 100+ members. As well, I launched an ethical AI 
                            hackathon - {' '}
                            <a href="https://aihacks4good.github.io/">AIHacks4Good</a> - that saw 250+ registrants in its
                            first year and sponsorships from {' '}
                            <a href="https://mlh.io/seasons/2023/events">Major League Hacking (MLH)</a>.
                        </p>

                        <p>
                            Outside of coding, I spend my time practicing singing, acting, and pilates.
                        </p>
                    </div>
                </StyledText>
        </StyledAboutSection>
    );
};

export default About;

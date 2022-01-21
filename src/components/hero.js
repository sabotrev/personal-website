import React from 'react';
import styled from 'styled-components';
import { content, socialMedia, theme } from '../../config';
import Icon from './icons';

const StyledHeroSection = styled.section`
    width: 100%;
    height: auto;
    display: grid;
    justify-items: center;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    margin: 5rem 0 auto 0;
    @media screen and (max-width: 480px) {
        margin-top: 12rem;
    }
`;

const StyleHeroContentWrapper = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem auto;
`;

const StyledTitle = styled.h1`
    font-size: 3.5rem;
    font-family: ${theme.primaryFontFamily};
    color: ${theme.textColor};
    margin: 0.25rem auto;
`;

const StyledSubtitle = styled.h2`
    font-size: 2.5rem;
    font-family: ${theme.secondaryFontFamily};
    font-style: italic;
    font-weight: 200;
    color: ${theme.tertiaryColor};
    margin: 0.25rem auto;
`;

const StyledSocialWrapper = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 3.5rem 0 0 0;
`;

const StyledLink = styled.a`
    text-decoration: none;
    margin: 0 1rem;
`;

const SocialLinks = () => (
    <div>
        {socialMedia.map((item) => (
            <StyledLink
                href={item.url}
                key={item.key}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="External Link"
            >
                <Icon
                    name={item.key}
                    color={
                        item.key === 'resume'
                            ? theme.primaryColor
                            : theme.secondaryColor
                    }
                />
            </StyledLink>
        ))}
    </div>
);

const Hero = () => {
    return (
        <StyledHeroSection>
            <StyleHeroContentWrapper>
                <StyledTitle>
                    {content.hero.greeting}{' '}
                    <span style={{ color: theme.primaryColor }}>
                        {content.hero.name}
                    </span>
                </StyledTitle>
                <StyledSubtitle>{content.hero.job}</StyledSubtitle>
                <StyledSocialWrapper>
                    <SocialLinks />
                </StyledSocialWrapper>
            </StyleHeroContentWrapper>
        </StyledHeroSection>
    );
};
export default Hero;

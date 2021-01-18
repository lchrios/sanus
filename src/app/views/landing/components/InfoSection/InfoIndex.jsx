import React from 'react'
import {Button} from '../buttonElement_sc'
import history from '../../../../../history'
import {
  InfoContainer,
  InfoWrapper, 
  InfoRow, 
  Column1, 
  Column2, 
  TextWrapper, 
  TopLine,
  Heading,
  Subtitle, 
  BtnWrapper, 
  ImgWrap, 
  Img } from './InfoElements'

export const InfoSection = ({
  lightText, 
  lightBg, 
  darkText, 
  buttonLabel, 
  description,
  buttonClick, 
  topLine,
  img,
  id, 
  imgStart,
  headline,
  alt,
  primary,
  dark, 
  dark2 }) => {
    return (
        <>
          <InfoContainer lightBg = {lightBg } id={id} >
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                          <TopLine >{topLine}</TopLine>
                          <Heading lightText = {lightText}> {headline} </Heading>
                          <Subtitle darkText = {darkText}> {description} </Subtitle>
                          <BtnWrapper>
                              <Button
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 1 : 0}
                              dark={dark ? 1 : 0 }
                              dark2={dark2 ? 1 : 0 }
                              onClick={buttonClick}
                              >
                                {buttonLabel}
                                </Button>
                          </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                          <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection;

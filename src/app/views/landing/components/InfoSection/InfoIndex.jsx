import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
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

  import terapia1 from '../../../../../../src/assets/images/blog/terapia2.jpg'

  import InterestedSectionStyle from '../../../landing/landingBlog/landingBlogStyles/lessImpBlogStyles'

  import Card from '../../../landing/landingBlog/components/card'
  import GridItem from '../../../landing/landingBlog/components/GridItem'
  import CardHeader from '../../../landing/landingBlog/components/cardHeader'
  import CardBody from '../../../landing/landingBlog/components/cardBody'

const useStyles = makeStyles(InterestedSectionStyle);

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
    const classes = useStyles();
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
                              classname="elevation-z5"
                              >
                                {buttonLabel}
                                </Button>
                          </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                    
                      <Card plain >
                        <CardHeader plain image>
                          <a href="/landingblog">
                            <img src={terapia1} alt="..." />
                          </a>
                          <div
                            className={classes.coloredShadow}
                            style={{
                              backgroundImage: "url(" + terapia1 + ")",
                              opacity: "0"
                            }}
                          />
                        </CardHeader>
                        <CardBody plain>
                        </CardBody>
                      </Card>
                    
                    </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection;

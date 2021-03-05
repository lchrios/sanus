import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
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

  import InterestedSectionStyle from '../../landingBlog/landingBlogStyles/lessImpBlogStyles'

  import Card from '../../landingBlog/components/card'
  import GridItem from '../../landingBlog/components/GridItem'
  import CardHeader from '../../landingBlog/components/cardHeader'
  import CardBody from '../../landingBlog/components/cardBody'

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
        <InfoContainer lightBg = {lightBg } id={id} >
            <Grid >
                <InfoWrapper>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
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
                                            to='/psychologists'
                                            className="elevation-z5"
                                        >
                                            {buttonLabel}
                                        </Button>
                                    </BtnWrapper>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                            
                                <Card plain >
                                <CardHeader plain image >
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
                                </Card>
                            
                            </Column2>
                        </InfoRow>
                    </Grid>
                 </InfoWrapper>
            </Grid>
        </InfoContainer>    
    )
}

export default InfoSection;

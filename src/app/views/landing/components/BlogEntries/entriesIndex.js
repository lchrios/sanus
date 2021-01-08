import React from 'react'
import {EntriesContainer, EntriesH1, EntriesWrapper, EntriesCard, EntriesIcon,
EntriesH2,EntriesP} from './entriesElements'

export const BlogEntries = ({img, blog1, blog2, blog3}) => {
    return (
        <EntriesContainer id="blog_ent">
            <EntriesH1>Blog</EntriesH1>
            <EntriesWrapper>
                <EntriesCard>
                    <EntriesIcon src={img}/>
                    <EntriesH2>hola</EntriesH2>
                    <EntriesP>este es el cuerpo</EntriesP>
                </EntriesCard>
                
                <EntriesCard>
                    <EntriesIcon src={img}/>
                    <EntriesH2>hola</EntriesH2>
                    <EntriesP>este es el cuerpo</EntriesP>
                </EntriesCard>

                
                <EntriesCard>
                    <EntriesIcon src={img}/>
                    <EntriesH2>hola</EntriesH2>
                    <EntriesP>este es el cuerpo</EntriesP>
                </EntriesCard>

            </EntriesWrapper>
        </EntriesContainer>
    )
}
export default BlogEntries;
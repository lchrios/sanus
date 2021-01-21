import React from 'react'
import {EntriesContainer, EntriesH1, EntriesWrapper, EntriesCard, EntriesIcon,
EntriesH2,EntriesP} from './entriesElements'
import {blogs} from '../InfoSection/Data';
import BlogEntriesCards from './blogEntries'
import img from '../../../../../assets/images/schedule.svg'

const BlogEntries = () => {
    return (
        <EntriesContainer id="blog_ent">
            <EntriesH1>Últimas entradas del blog</EntriesH1>
            <EntriesWrapper>
                <BlogEntriesCards />
            </EntriesWrapper> 
            
        </EntriesContainer>
    )
}
export default BlogEntries;
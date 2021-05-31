import React, { useEffect, useState } from 'react'
import {EntriesContainer, EntriesH1, EntriesWrapper} from './entriesElements'
import BlogEntriesCards from './BlogEntries'
import api from 'app/services/api'
import useAuth from 'app/hooks/useAuth'

const BlogEntries = () => {
const [blogs, setBlogs] = useState();
const [loading, setLoading] = useState(true);
const {user} = useAuth();

    useEffect(() => {
        api.get('/b/land',{
            user:user
        }).then((res) => {
            setBlogs(res.data)
            setLoading(false)
        })
    },[])
    

    return (
        <EntriesContainer className=" mt-10" id="blog_ent">
            <EntriesH1> Últimas entradas del blog </EntriesH1>
            <EntriesWrapper>
                <BlogEntriesCards loading={loading} blogs={blogs} />
            </EntriesWrapper> 
        </EntriesContainer>
    )
}
export default BlogEntries;
import React, { useState, useEffect } from 'react'

import PostPreview from '../../_templates/PostPreview'
import blogService from '../../_services/blog.services'


export default function BlogPreview(){
    
    const [posts, setPosts] = useState([]);

	useEffect(() => {
		blogService.blogposts(3)
			.then(json => setPosts(json))
	}, [])

	return(
		<div className="row-center">
			{posts?.map(post => (
				<PostPreview
					key={post.id}
					id={post.id}
					title={post.title}
					description={post.description}
					author={post.author}
					date={post.date}
					image={post.image}
				/>
			))}
		</div>
	)

}
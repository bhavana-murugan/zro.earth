'use client';

import Router from './Router';

export default function FeaturePost({ post = {
    'title': '',
    'coverImage': '',
    'gist': '',
    'slug': '',
    'list': '',
    'wc': '',
    'color': '',
}
}) {

    return (
        <Router url={post.list + "/" + post.slug} className='sub-container'>
            <h3>{post.list}</h3>
            <h1>{post.title}</h1>
            <p>{post.gist}</p>
            <br />
            <date>
                <span>{post.date}</span>
                <span>{post.wc}</span>
            </date>
        </Router>
    );
}
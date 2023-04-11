import React from 'react';
import Router from './Router';
import styles from '../styles/Lists.module.css'

export default function Lists({ list = [[{
    'title': '',
    'author': { name: "", picture: "" },
    'list': '',
    'date': '',
    'slug': '',
    'wc': '',
    'coverImage': '',
}]] }) {

    return (
        list.map((item, i) => {
            return (
                item.length > 0 &&
                <div className={styles.list} key={i}>
                    <h3 style={{ backgroundColor: item[0].color, color: '#222' }}>{item[0].list}</h3>
                    {item.map(post => {
                        return (
                            <Router url={post.list + "/" + post.slug} key={post.slug} className={styles.item}>
                                <h2>{post.title}</h2>
                                <date>
                                    <span>{post.date}</span>
                                    <span>{post.wc}</span>
                                </date>
                                <hr />
                            </Router>
                        )
                    })}
                </div>

            )
        })
    )
}
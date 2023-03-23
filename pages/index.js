import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../lib/api'
import FeaturePost from '../components/FeaturePost'
import Layout from '../components/Layout';
import styles from '../styles/Search.module.css';
import Lists from '../components/Lists';


export default function Index({
  list = [{
    'color': '',
    'title': '',
    'gist': '',
    'author': { 'name': "", 'picture': "" },
    'list': '',
    'date': '',
    'slug': '',
    'wc': '',
    'coverImage': '',
    'listColor': ''
    
  }],
  feature = {
    'color': '',
    'title': '',
    'author': { 'name': "", 'picture': "" },
    'list': '',
    'gist': '',
    'content': '',
    'date': '',
    'slug': '',
    'listColor': '',
    'wc': '',
  }
}) {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (search !== "") {
      const seachQuery = search.trim().toLowerCase();
      const res = list.flat().reduce(function (pV, cV) {
        if (cV.title.toLowerCase().includes(seachQuery) ||
          cV.content.toLowerCase().includes(seachQuery)
        ) {
          pV.push(cV);
        }
        return pV;
      }, [])
      console.log(res)
      setSearchList(res)
    }
  }, [search])

  return (
    <Layout>
      <input className={styles.search} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
      {
        (search !== "") &&

        ((searchList.length !== 0) ?
          searchList.map(x => {
            return <FeaturePost post={x} />
          })
          :

          <div style={{ width: '90%', textAlign: 'center', maxWidth: '900px', margin: '2em auto' }}>No articles found. Please rephrase your search</div>)
      }

      {
        (search === "") &&
        <>
          <FeaturePost post={feature} />
          <Lists list={list} />
        </>
      }
    </Layout >
  )
}

export const getStaticProps = async () => {

  let list = getAllPosts([
    'title',
    'list',
    'date',
    'slug',
    'content',
    'gist',
    'wc',
    'color',
    'listColor',
  ])

  return {
    props: { list: list.list, feature: list.feature }
  }
}

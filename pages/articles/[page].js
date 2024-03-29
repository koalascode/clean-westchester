import Head from 'next/head'
import styles from '/styles/ArticleTemplate.module.css'
import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import NavBar from '../../components/minimalnavlight'


export default function Article({ allprops, pageprops }) {
    console.log(typeof(allprops.properties.EditedBy.people[0]))
    const items = pageprops.results.map(x => 
        <div key={`${x?.id}`} className={styles.items}>
        {x.type === "heading_1" ? <h1 className={styles.h1}>{x.heading_1?.rich_text[0]?.plain_text}</h1> : null}
        {x.type === "heading_2" ? <h2 className={styles.h2}>{x.heading_2?.rich_text[0]?.plain_text}</h2> : null}
        {x.type === "heading_3" ? <h3 className={styles.h3}>{x.heading_3?.rich_text[0]?.plain_text}</h3> : null}
        {x.type === "paragraph" ? <div className={styles.paragraph}>{x.paragraph?.rich_text?.map(w => w.annotations.underline === true ?  w.href !== null ? w.annotations.bold === true ? w.annotations.italic === true ? <Link href={w.href} passHref><i><b className={styles.hypertextp}><u>{w.plain_text}</u></b></i></Link> : <Link href={w.href} passHref><b className={styles.hypertextp}><u>{w.plain_text}</u></b></Link> : w.annotations.italics === true ? <Link href={w.href} passHref><i className={styles.hypertextp}><u>{w.plain_text}</u></i></Link> : <Link href={w.href} passHref><u className={styles.hypertextp}>{w.plain_text}</u></Link> : w.annotations.bold === true ? <u><b>{w.plain_text}</b></u>: <u>{w.plain_text}</u> :  w.href !== null ? w.annotations.bold === true ? w.annotations.italic === true ? <Link href={w.href} passHref><i><b className={styles.hypertextp}>{w.plain_text}</b></i></Link> : <Link href={w.href} passHref><b className={styles.hypertextp}>{w.plain_text}</b></Link> : w.annotations.italics === true ? <Link href={w.href} passHref><i className={styles.hypertextp}>{w.plain_text}</i></Link> : <Link href={w.href} passHref><a className={styles.hypertextp}>{w.plain_text}</a></Link> : w.annotations.bold === true ? <b>{w.plain_text}</b> : w.plain_text)}</div> : null}
        <ul>
        {x.type === "bulleted_list_item" ? <li>{x?.bulleted_list_item?.rich_text[0]?.plain_text}</li> : null}
        </ul>
        {x.type === "to_do" ? <form><input type="checkbox"/><label>{x?.to_do?.rich_text[0].plain_text}</label></form> : null}
        {x.type === "quote" ? <p className={styles.quote}>&quot;{x?.quote?.rich_text[0]?.plain_text}&quot;</p> : null} 
        {x.type === "image" ? <div className={styles.imagediv}><img className={styles.articleimage} src={x.image?.external?.url == undefined ? x?.image?.file?.url.toString() : x?.image?.external?.url.toString()} width={600} height={400} layout='raw'/></div> : null}
        {x.type === "video" ? <iframe className={styles.articlevideo} width={560} height={315} layout='raw' src={x?.video?.external?.url.toString().replace(".be/", ".be/embed/").replace("://youtu.be/", "://www.youtube.com/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : null} 
        </div>
       
    )
    return (
        <div className={styles.container}>
            <Head>
                <title>{allprops.properties.Name.title[0].plain_text}</title>
                <link rel="icon" href="/greencwlogo.png"/>
            </Head>
            <Link href="/articles" passHref>
                <div className={styles.cwlogocontainer}>
                <img src="/cwarticlelogo.png" className={styles.cwlogo} width={160} height={100} layout='raw'/>
                </div>
            </Link>
            <div className={styles.allarticle}>
            <div className={styles.header}>
                <p className={styles.indicatorhead}><b className={styles.accenttext}>Clean Westchester</b> | Environment</p>
                <h1 className={styles.title}>{allprops.properties.Name.title[0].plain_text}</h1>
                {allprops.properties.CreatedBy.people.map(x =>
                    <div className={styles.writer} key={x.name}>
                        <img className={styles.writeravater} src={x.avatar_url} width={60} height={60}/>
                        <h3 key={x.name}>{x.name}, Clean Westchester</h3>
                    </div>)}
                <img className={styles.coverimage} src={allprops.properties.Image.url} width={800} height={600} layout='raw'/>
                <p className={styles.publisheddate}>{allprops.properties.DatePublished.date.start}</p>
                <div className={styles.headerinfo}>
                    
                    
                    
                </div>
            </div>
            
           
            <div className={styles.articlemain}>
           {items}
           {typeof(allprops.properties.EditedBy.people[0]) !== "undefined" ?   
                    <div className={styles.editorsmain}>   
                        <p className={styles.editorhead}>Edited By: </p>
                        <div className={styles.editors}>
                            {allprops.properties.EditedBy.people.map(x => <div key={x.name} className={styles.editorflex}><img className={styles.editoravatar} src={x.avatar_url} width={60} height={60}/><p className={styles.editorsname}>{x.name}, Clean Westchester</p></div>)}
                        </div>
                    </div>
            : null}  
            </div>
           
            </div>
          
            
        </div>
    )
}

export function Route() {
    const router = useRouter()
    const query = router.query
    //console.log(query)
    return {
        query
    }
}

export async function getServerSideProps({ query }) {
    const { Client } = require('@notionhq/client');

    const notion = new Client({ auth: process.env.NOTION_KEY });
    
    const pageId = query.page;
    const res = await notion.pages.retrieve({ page_id: pageId });

    const response = await notion.blocks.children.list({

        block_id: pageId,
    
        page_size: 50,
    
      });
    
    

    return {
        props: { allprops: res, pageprops: response }
    }
}

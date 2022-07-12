import React from 'react'
import ProfilePic from './../assests/profilepic.jpg'
import css from './Pages.module.css';
export default function Home() {
    return (
        <body className={css.body}>
            <section>
                <div className={css.topBox}>
                    <image className={css.imageBox}>
                        <img className={css.pic} src={ProfilePic} alt=""/>
                    </image>
                    <div className={css.headings}>
                        <h1 className={css.sentences} >Hi, I am <span className={css.name}>Samantha Knopper</span>.</h1>
                        <h2 className={css.sentences}>Full Stack Web Developer.</h2>
                    </div>
                </div>
                <p className={css.about}>Full stack web developer utilizing an education background to build a more engaging user experience on the web. Recently earned a certificate in Full Stack Web Development from the University of Western Australia, developed skills in HTML, JavaScript, CSS and responsive web design. Known as a methodical problem solver, with a passion for developing logical apps, with a focus on mobile-first design and development. With each project, my aim is to improve my designs and create more meaningful user experiences. I am excited to employ my new skills in a quality-driven team environment, focused on building better experiences on the web. </p>

            </section>

        </body>
    )

}

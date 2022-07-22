import React from 'react'
import css from './Pages.module.css';
import Enviro from './../assets/enviroLogo.png';
import Turtle from './../assets/turtlescreenshot.jpg'; 
import Blog from './../assets/techblog.jpg'
import Weather from './../assets/weatherdashboard.jpg'
import Google from './../assets/googleBooks.jpg'
export default function Projects() {
  return (
    <body className={css.body}>
    <h1 className={css.projectsTitle}>Projects</h1>
    <p className={css.projectInfo}>The following projects were created either invidually or in teams of max 4 members.</p> 
    <div className={css.topProjects}>
        <a className={css.logoBox}  href='https://enviro-hub.herokuapp.com/' target='blank'><img className={css.projectLogo} src={Enviro} alt="Enviro Hub Logo"></img></a>
        <a  className={css.logoBox} href='https://samw1s3.github.io/group_project1/' target='blank'><img className={css.projectLogo} alt="awkward turle logo" src={Turtle}></img></a>
        <a className={css.logoBox} href='https://tech-blog-samw1s3.herokuapp.com/' target='blank'><img className={css.projectLogo} src={Blog} alt="Tech Blog Logo"></img></a>
        <a className={css.logoBox}  href='https://samw1s3.github.io/weatherapp/' target='blank'><img className={css.projectLogo} src={Weather} alt="Westher Dashboard Screenshot"></img></a>
        {/* {/* <a  className={css.logoBox} href='' target='blank'><img className={css.projectLogo} src={Turtle}></img></a> */}
        <a className={css.logoBox} href='https://goog-book-search87.herokuapp.com/' target='blank'><img className={css.projectLogo} src={Google}></img></a>
    </div>
    <div>
      <h1 className={css.skillTitle}>Skills</h1>
      <ul className={css.skillsList}>
        <li className={css.skillItem}>HTML5</li>
        <li className={css.skillItem}>JavaScript</li>
        <li className={css.skillItem}>CSS</li>
        <li className={css.skillItem}>Bootstrap</li>
        <li className={css.skillItem}>AJAX</li>
        <li className={css.skillItem}>MySQL</li>
        <li className={css.skillItem}>MongoDB</li>
        <li className={css.skillItem}>Express</li>
        <li className={css.skillItem}>ReactJS</li>
        <li className={css.skillItem}>Node</li>
        <li className={css.skillItem}>Handlebars</li>
        <li className={css.skillItem}>WebPack</li>
      </ul>
    </div>
    </body>
  )
}

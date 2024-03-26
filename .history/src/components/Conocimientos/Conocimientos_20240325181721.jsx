import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import "./styles.css"
export const Conocimientos = () => {
  return (
    <section className="container-conocimientos">
      <h1 className="title-conocimientos">Conocimientos</h1>
      <span className="sub-title__conocimientos">Conocimientos</span>
      <div className="content-conocimientos">
        <article className="container-skills">
          <h2 className="title-skills">Soft Skills</h2>
          <ul>
            <li>
            <TiHtml5 />
              <p>HTML</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/css-3.webp"
                alt="CSS-3 Damian Bermudez"
              />
              <p>CSS3</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/js.png"
                alt="JavaScripts Damian Bermudez"
              />
              <p>JavaScript</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/typescript.png"
                alt="TypeScripts Damian Bermudez"
              />
              <p>TypeScript</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/react.png"
                alt="React Damian Bermudez"
              />
              <p>React js</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/nodejs.png"
                alt="Node-Js Damian Bermudez"
              />
              <p>Node js</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/database.png"
                alt="Firebase Damian Bermudez"
              />
              <p>Firebase</p>
            </li>
            <li>
            <SiMongodb />
              <p>Mongo</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/github.png"
                alt="Git-Hub Damian Bermudez"
              />
              <p>Git Hub</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/postman.png"
                alt="postman Damian Bermudez"
              />
              <p>Postman</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/vercel.png"
                alt="vercel Damian Bermudez"
              />
              <p>Vercel</p>
            </li>
            <li>
              <img
                className="img-skills"
                src="./image/heroku.png"
                alt="Heroku Damian Bermudez"
              />
              <p>Heroku</p>
            </li>
          </ul>
        </article>

        <article className="container-estudios">
          <h3 className="title-estudios">Formación</h3>
          <hr />
          <p>Carrera Web Full Stack - Plataforma online APX ( finalizado )</p>
          <hr />
          <p>Master en react Victor Robles - udemy ( Finalizado)</p>
          <hr />
          <p>Master en JavaScript de Victor Robles - udemy ( en proceso)</p>
          <hr />
          <p>
            Diseño UX: experiencia de usuario UX/UI + figma - udemy ( en proceso
            )
          </p>
          <hr />
          <p>Curso FlexBox - CSS Grid - udemy (en proceso) </p>
        </article>
      </div>
    </section>
  );
};

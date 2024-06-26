import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsTerminalFill } from "react-icons/bs";
import { SiPostman } from "react-icons/si";
import { RxVercelLogo } from "react-icons/rx";
import { GrHeroku } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import "./styles.css";
export const Conocimientos = () => {
  return (
    <section className="container-conocimientos" id="conocimientos">
      <h1 className="title-conocimientos">Conocimientos</h1>
      <span className="sub-title__conocimientos">Conocimientos</span>
      <div className="content-conocimientos">
      <h2 className="title-skills">Soft Skills</h2>
        <article className="container-skills">
         
          <ul>
            <li>
              <TiHtml5 />
              <p>HTML</p>
            </li>
            <li>
              <FaCss3Alt />
              <p>CSS3</p>
            </li>
            <li>
              <IoLogoJavascript />
              <p>JavaScript</p>
            </li>
            <li>
              <SiTypescript />
              <p>TypeScript</p>
            </li>
            <li>
              <FaReact />
              <p>React js</p>
            </li>
            <li>
              <FaNode />
              <p>Node js</p>
            </li>
            <li>
              <SiExpress />
              <p>Express</p>
            </li>

            <li>
              <IoLogoFirebase />
              <p>Firebase</p>
            </li>
            <li>
              <SiMongodb />
              <p>Mongo</p>
            </li>
            <li>
              <FaGithub />
              <p>Git Hub</p>
            </li>
            <li>
              <BsTerminalFill />
              <p>Git Bash</p>
            </li>

            <li>
              <SiPostman />
              <p>Postman</p>
            </li>
            <li>
              <RxVercelLogo />
              <p>Vercel</p>
            </li>
            <li>
              <GrHeroku />
              <p>Heroku</p>
            </li>
            <li>
              <FaFigma />
              <p>Figma</p>
            </li>
          </ul>
        </article>

        <article className="container-estudios">
          <h3 className="title-estudios">Formación</h3>
          <ul className="list-formacion">
            <li>
              <p>
                <span>👨‍💻</span>
                <strong>Carrera Web Full Stack</strong> - Plataforma online APX
                ( finalizado )
              </p>
            </li>
            <li>
              <p>
                <span>👨‍💻</span>
                <strong>Master en react Victor Robles</strong> - ( Hooks - React
                Router - Reducers - Context - MERN ) - Udemy ( Finalizado)
              </p>
            </li>
            <li>
              <p>
                <span>👨‍💻</span>
                <strong>Master en JavaScript de Victor Robles</strong>(
                TypeScript - Jquery - Angular - Apis Restful - Node js, Express,
                MongoDb ) - Udemy ( en proceso)
              </p>
            </li>
            <li>
              <p>
                <span>👨‍💻</span>
                <strong>Diseño UX</strong> - experiencia de usuario UX/UI +
                figma - Udemy ( en proceso )
              </p>
            </li>
            <li>
              <p>
                <span>👨‍💻</span>
                <strong>Master avanzado CSS3</strong> - (Flexbox - CSS Grid -
                Animaciones -Tailwind) - Udemy (en proceso){" "}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

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
          <div className="skills-3d">
          <ul>
            <li>
              <div className="skill-item">
                <TiHtml5 />
                <p>HTML</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <FaCss3Alt />
                <p>CSS3</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <IoLogoJavascript />
                <p>JavaScript</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <SiTypescript />
                <p>TypeScript</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <FaReact />
                <p>React js</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <FaNode />
                <p>Node js</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <SiExpress />
                <p>Express</p>
              </div>
            </li>

            <li>
              <div className="skill-item">
                <IoLogoFirebase />
                <p>Firebase</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <SiMongodb />
                <p>Mongo</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <FaGithub />
                <p>Git Hub</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <BsTerminalFill />
                <p>Git Bash</p>
              </div>
            </li>

            <li>
              <div className="skill-item">
                <SiPostman />
                <p>Postman</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <RxVercelLogo />
                <p>Vercel</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <GrHeroku />
                <p>Heroku</p>
              </div>
            </li>
            <li>
              <div className="skill-item">
                <FaFigma />
                <p>Figma</p>
              </div>
            </li>
          </ul>
          </div>
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

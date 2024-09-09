import styles from "../styles/home.module.css";
import projects from "../../utils/data/projects.json";

function HorizonLine() {
  return <div className={styles.project_hr} />;
}
function ProjectComponent({ index, project }) {
  const skills = project.skills;

  return (
    <div key={index} className={styles.project}>
      <p className={styles.project_name}>{project.project_name}</p>
      <p className={styles.project_description}>
        {project.project_description}
      </p>
      <p className={styles.project_duration}>{project.project_duration}</p>
      <HorizonLine />
      <div className={styles.project_skill}>
        {skills.map((skill, index) => {
          return (
            <div>
              <p key={index}>{skill}</p>
            </div>
          );
        })}
      </div>
      <p className={styles.project_composition}>
        구성 인원: {project.project_composition}
      </p>
      <div className={styles.urls}>
        <div className={styles.url}>
          <p>프로젝트 링크: </p>
          <a href={project.project_url}>{project.project_url}</a>
        </div>
        <div className={styles.url}>
          <p>GitHub 링크: </p>
          <a href={project.github_url}>{project.github_url}</a>
        </div>
      </div>
      <HorizonLine />
    </div>
  );
}

function Project() {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p>프로젝트</p>
      </div>
      <div className={styles.contents}>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return <ProjectComponent index={index} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;

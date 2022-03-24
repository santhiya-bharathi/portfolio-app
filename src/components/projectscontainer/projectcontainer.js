import React from 'react';
import { Element } from 'react-scroll';
import './projectcontainer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';


const ProjectContainer = () => {
    const project_details = [{projectname:"Blogger",
 details:"Blog application with user can like other's post and they can Create, Update and Delete their own Posts",
  frontend:"https://github.com/santhiya-bharathi/blogger-client",
   backend:"https://github.com/santhiya-bharathi/blogger-server",
   image:"https://uusaratoga.org/wp-content/uploads/2020/05/Books.jpg",
   tech:"React, node.js, mongoDB, Material UI",
    demo:"https://explore-blogger.netlify.app"},  
    {projectname:"Movies App",
 details:"Movie Application where the user can post, edit or delete movies and you can explore the movies",
  frontend:"https://github.com/santhiya-bharathi/movie-app",
   backend:"https://github.com/santhiya-bharathi/movie-node",
   image:"https://gooyaabitemplates.com/download/Movies-On-Blogger-Template.jpg",
   tech:"React, node.js, mongoDB, JavaScript, Material UI",
    demo:"https://movies-app-blog.netlify.app"}
   ]
    return(
   <Element className='projectcontainer' id='projects'>
 <div className='project-div'>
    <div className='div-flex'>
   
    {project_details.map(({projectname,details,frontend,backend,demo,image,tech,id})=>(<ProjectDetails key={id} 
    projectname={projectname}
     details={details}
      frontend={frontend}
       backend={backend}
       image={image}
       tech={tech}
        demo={demo}/>))}
     
    </div>
    </div>
   </Element>
       );
    }
    
    export default ProjectContainer;

    function ProjectDetails({projectname,details,frontend,backend,demo,tech,image}){


        return(
          
      <div className='container'>
      <h2 className='project-name'>{projectname}</h2>
      <br />
        <div className="full-det">
      
         <img className="user-pic" src={image} alt='website'/>
        
      
       <div className='details details--blur'>
           
        <p className='details-text'>{details}</p>
      
        <p className='details-text'>Technologies Used: {tech}</p>
        <div className='div-button'>
      
      <div>
        <a className='frontend-link' target="_blank" rel="noreferrer" href={frontend}>
          <div className='button-link'>
            <GitHubIcon />
           <a className='frontend-link' target="_blank" rel="noreferrer" href={frontend}>Frontend</a>
          </div>
          </a>
          </div>

          <div>
          <a className='frontend-link' target="_blank" rel="noreferrer" href={backend}>
          <div className='button-link'>
          <GitHubIcon />
          <a className='frontend-link' target="_blank" rel="noreferrer" href={backend}>Backend</a>
          </div>
          </a>
          </div>

          <div>
          <a className='frontend-link' target="_blank" rel="noreferrer" href={demo}>
          <div className='button-link'>
            <LinkIcon />
          <a className='frontend-link' target="_blank" rel="noreferrer" href={demo}>Demolink</a>
          </div>
          </a>
          </div>
          
          </div>
          
        </div>
        </div>
      </div>
         
        );
      }
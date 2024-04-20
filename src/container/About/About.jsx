import {motion} from  'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import {urlFor, client} from '../../client';
import {images} from '../../constants';


const About = () => {
    // const [abouts,  setAbouts]=useState([]);
    const abouts= [
        {title: 'React Developer', description: 'React developer designs and builds interactive user interfaces, utilizing component-based architecture and state management for efficient, scalable web apps', imgURL: images.about01},
        {title: 'Node.js Developer', description: 'Node.js developer engineers scalable, high-performance backends, leveraging JavaScript runtime to create server-side applications, APIs, and real-time systems efficiently.', imgURL: images.about04},
        {title: 'Next.js Developer', description: 'Next.js developer crafts dynamic web apps with React, leveraging server-side rendering and seamless client-side navigation for optimal user experiences.', imgURL: images.about02},
        {title: 'MySQL', description: 'MySQL developer designs and manages databases, optimizing performance and security for efficient storage and retrieval of data in web applications.', imgURL: images.mysql}
    ]

    // useEffect(()=>{
    //     const query= '*[_type == "abouts"]';

    //     client.fetch(query)
    //         .then((data)=>{
    //             setAbouts(data);
    //         })
    // },[])
  return (
    <>
        <h2 className='head-text'>
            I know that <span>Good Apps</span><br />means<span> Good Business</span>
        </h2>
        <div className='app__profiles'>
            {abouts.map((about, index)=>(
                <motion.div
                    whileInView ={{opacity:1}}
                    whileHover ={{scale:1.1}}
                    transition ={{duration: 0.5, type: 'tween'}}
                    className='app__profile-item'
                    key={about.title + index}
                >
                    <img src={about.imgURL} alt={about.title} />
                    <h2 className ='bold-text' style ={{marginTop: 20}} >{about.title}</h2>
                    <p className='p-text' style ={{marginTop: 10}} >{about.description}</p>
                </motion.div>
            ))}
        </div>
    </>
  )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg'
)
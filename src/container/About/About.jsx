import {motion} from  'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import {urlFor, client} from '../../client';
import {images} from '../../constants';


const About = () => {
    // const [abouts,  setAbouts]=useState([]);
    const abouts= [
        {title: 'React Native Developer', description: 'I am a React Native developer with a passion for building beautiful and funtional Web apps', imgURL: images.about01},
        {title: 'Frontend Developer', description: 'A Front-End Developer is someone who creates websites and web applications.', imgURL: images.about02},
        {title: 'Web Developer', description: 'Writing well designed, testable, efficient code by using best software development practices', imgURL: images.about03},
        {title: 'Backend Developer', description: 'I am a Backend developer with a passion for building beautiful and funtional Web apps', imgURL: images.about04}
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
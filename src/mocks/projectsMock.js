import ecoImg from '../assets/projectsImg/eco.png'
import ecoGif from '../assets/projectsImg/ecogif.gif'
import ozonicaImg from '../assets/projectsImg/ozonica.png'
import ozonicaGif from '../assets/projectsImg/ozonicaGif.gif'
import adnImg from '../assets/projectsImg/ADN.png'
import adnGif from '../assets/projectsImg/adnGif.gif'


const proyectsMock = [
    {
        id: crypto.randomUUID(),
        url: 'https://ecoambientaldesinfecciones.com.ar',
        img: ecoImg,
        gif: ecoGif,
        project: "Eco Ambiental"
    },
    {
        id: crypto.randomUUID(),
        url: 'https://adnwebsolutions.github.io/ozonica/#',
        img: ozonicaImg,
        gif: ozonicaGif,
        project: "Ozónica"
    },
    {
        id: crypto.randomUUID(),
        url: 'https://adnwebsolutions.github.io/ADN-Solutions/',
        img: adnImg,
        gif: adnGif,
        project: "ADN Solutions"
    }

]

export default proyectsMock;
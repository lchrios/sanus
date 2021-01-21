import imgOne from '../../../../../assets/images/illustrations/1.svg'
import imgTwo from '../../../../../assets/images/schedule.svg'
import img3 from '../../../../../assets/images/happy-face-1.png'
import img1 from '../../../../../assets/images/event-2.jpg'
import img2 from '../../../../../assets/images/bg-1.png'
import { SwapVerticalCircle } from '@material-ui/icons'
import history from '../../../../../history'

const clickObjOne = function() {
    history.push('/psychologists')
}

export const homeObjOne = {
    id:'inicio',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Psicología profesional',
    headline: 'Psicologos online, confiables y accesibles',
    description: 'Conectate de forma privada con un psicologo profesional cuando lo necesites',
    buttonLabel: 'Conoce más',
    buttonClick: clickObjOne,
    imgStart: false,
    img: imgOne,
    alt: 'healthy brain',
    dark:true,
    primary: true,
    darkText: false,
}

const clickObjTwo = function() {
    history.push('/psychologists')
}

export const homeObjTwo = {
    id:'especialistas',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Escoge con quien te sientas comodo',
    headline: 'Selecciona cualquiera de nuestros profesionales, y cambia tu vida, ahora.',
    description: 'Comienza a trabajar en tu salud mental, ahora mismo.',
    buttonLabel: 'Conócelos ahora',
    buttonClick: clickObjTwo,
    imgStart: false,
    img: imgTwo,
    alt: 'healthy brain',
    dark:true,
    primary: true,
    darkText:false,

}

const clickObjThree = function() {
    history.push('/session/signup')
}

export const homeObjThree = {
    id:'registrarse',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Todo tu crecimiento personal, en línea',
    headline: 'Conectate online, crece emocionalmente',
    description: 'Tu crecimiento personal, paz mental y emocional, cuando la estés buscando.',
    buttonLabel: 'Comienza ahora',
    buttonClick: clickObjThree,
    imgStart: false,
    img: img3,
    alt: 'healthy brain',
    dark: true,
    primary: true,
    darkText: false,

}

export const blog1 = {
    img: img1,
    title: "Vive mejor",
    body: "Trabaja en ti"
}

export const blog2 = {
    img: img2,
    title: "Aumenta tu felicidad",
    body: "Toma sesiones online periodicamente"
}

export const blog3 = {
    img: img3,
    title: "Sientete bien",
    body: "Pensar con claridad, pensar bien, para vivir bien."
}

export const blogs = [blog1, blog2, blog3]
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';  
import Image from 'react-bootstrap/Image'
import perfil from '../assets/perfil.jpeg';

const QuienSoy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className=" QuienSoy">
      <Image src={perfil} className="tamanioPerfil " data-aos="fade-right" roundedCircle />
      <h1 data-aos="fade-up">¡Hola! Me llamo Noelia</h1>
      <p data-aos="fade-up" >
        Actualmente, estoy estudiando Ingeniería en Sistemas de Información,
        cursando mis últimas materias para recibirme.
        Me encanta mantenerme al día con las últimas tecnologías y siempre estoy
        buscando aprender cosas nuevas para expandir mis conocimientos y mejorar
        mis proyectos.Tengo experiencia tanto en Frontend como en Backend.
    </p>
    </div>
  );
};

export default QuienSoy;

import { Image } from '@chakra-ui/react';
import image7 from '../../public/images/appCtismartX.png';
import capa1 from '../../public/images/capa-appcitx.png';
import capa2 from '../../public/images/capa-centroxp.png';
import image8 from '../../public/images/centroXP.png';
import image1 from '../../public/images/projects/image-project1.png';
import image2 from '../../public/images/projects/image-project2.png';
import image3 from '../../public/images/projects/image-project3.png';
import image4 from '../../public/images/projects/image-project4.png';
import image5 from '../../public/images/projects/image-project5.png';
import image6 from '../../public/images/projects/image-project6.png';

export const projects: Project[] = [
  {
    title: 'Central IT Mobile',
    route: '/CentralITMobile',
    image: <Image src={image1.src} alt="Central IT Mobile" />,
    tags: [1, 2, 5, 7]
    // content: {
    //   imageHeader: <Image src={capa1.src} alt="Central IT Mobile" />,
    //   about: <Image src={image7.src} />
    // }
  },
  {
    title: 'Centro de Experiência',
    route: '/ExperienceCenter',
    image: <Image src={image2.src} alt="Centro de Experiência" />,
    tags: [1, 2, 5, 3]
    // content: {
    //   imageHeader: <Image src={capa2.src} alt="Centro de Experiência" />,
    //   about: <Image src={image8.src} />
    // }
  },
  {
    title: 'Sistema de Ações Fiscais',
    image: <Image src={image3.src} alt="Sistema de Ações Fiscais" />,
    tags: [1, 2, 5, 4]
    // content: undefined
  },
  {
    title: 'Ouvidoria 156',
    image: <Image src={image4.src} alt="Ouvidoria 156" />,
    tags: [1, 2, 5, 4]
    // content: undefined
  },
  {
    title: 'Dashboard Controle de times',
    image: <Image src={image5.src} alt="Dashboard Controle de Equipes" />,
    tags: [1, 2, 5, 4]
    // content: undefined
  },
  {
    title: 'Dashboard CRM',
    image: <Image src={image6.src} alt="Dashboard CRM" />,
    tags: [1, 2, 5, 4]
    // content: undefined
  }
];

export const tags = [
  { id: 1, name: 'UX Design', color: '#B1A63C' },
  { id: 2, name: 'UI Design', color: '#EB8C1C' },
  { id: 3, name: 'Em Produção', color: '#059A51' },
  { id: 4, name: 'Em Construção', color: '#EF2C2D' },
  { id: 5, name: 'Interativo', color: '#297ACC' },
  { id: 6, name: 'Em Lojas', color: '#B1A63C' }
];

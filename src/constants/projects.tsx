import { Image } from '@chakra-ui/react';
import image1 from '../../public/images/projects/image-project1.png';
import image2 from '../../public/images/projects/image-project2.png';
import image3 from '../../public/images/projects/image-project3.png';
import image4 from '../../public/images/projects/image-project4.png';
import image5 from '../../public/images/projects/image-project5.png';
import image6 from '../../public/images/projects/image-project6.png';

import { projectsPtBr } from '../constants/locale/pt-br';

export const projects: Project[] = [
  {
    title: projectsPtBr.card.t1,
    route: '/CentralITMobile',
    image: <Image src={image1.src} alt={projectsPtBr.card.t1} />,
    tags: [1, 2, 5, 7]
  },
  {
    title: projectsPtBr.card.t2,
    route: '/ExperienceCenter',
    image: <Image src={image2.src} alt={projectsPtBr.card.t2} />,
    tags: [1, 2, 5, 3]
  },
  {
    title: projectsPtBr.card.t3,
    image: <Image src={image3.src} alt={projectsPtBr.card.t3} />,
    tags: [1, 2, 5, 4]
  },
  {
    title: projectsPtBr.card.t4,
    image: <Image src={image4.src} alt={projectsPtBr.card.t4} />,
    tags: [1, 2, 5, 4]
  },
  {
    title: projectsPtBr.card.t5,
    image: <Image src={image5.src} alt={projectsPtBr.card.t5} />,
    tags: [1, 2, 5, 4]
  },
  {
    title: projectsPtBr.card.t6,
    image: <Image src={image6.src} alt={projectsPtBr.card.t6} />,
    tags: [1, 2, 5, 4]
  }
];

export const tags = [
  { id: 1, name: projectsPtBr.tags.tag1, color: '#B1A63C' },
  { id: 2, name: projectsPtBr.tags.tag2, color: '#EB8C1C' },
  { id: 3, name: projectsPtBr.tags.tag3, color: '#059A51' },
  { id: 4, name: projectsPtBr.tags.tag4, color: '#EF2C2D' },
  { id: 5, name: projectsPtBr.tags.tag5, color: '#297ACC' },
  { id: 6, name: projectsPtBr.tags.tag6, color: '#B1A63C' }
];

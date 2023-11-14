import coverAppCitPtBr from '../../../public/images/centralItMobile/cover.png';
import discoverAppCitPtBr from '../../../public/images/centralItMobile/discover-and-define.png';
import wireframeAppCitPtBr from '../../../public/images/centralItMobile/wireframe.png';
import usabilityAppCitPtBr from '../../../public/images/centralItMobile/usability-testing.png';
import styleguideAppCitPtBr from '../../../public/images/centralItMobile/styleguide.png';

import coverExpCenterPtBr from '../../../public/images/experienceCenter/cover.png';
import uxAnalyticsExpCenterPtBr from '../../../public/images/experienceCenter/uxAnalytics.png';
import oldVersionExpCenterPtBr from '../../../public/images/experienceCenter/oldVersion.png';
import mediumVersionExpCenterPtBr from '../../../public/images/experienceCenter/mediumVersion.png';
import firstNewVersionExpCenterPtBr from '../../../public/images/experienceCenter/firstNewVersion.png';

export const menuPtBr = {
  b1: 'Serviços',
  b2: 'Projetos',
  b3: 'Contato'
};

export const AboutMePtBr = {
  title: 'Olá! Sou o Diogo Rother',
  subTitle: 'UX/UI & Product Designer',
  description: {
    p1: 'Especializado em Design da Experiência do Usuário. Sou uma pessoa ágil que adora encarar novos desafios.',
    p2: 'Aprendi em minha trajetória que não basta construir telas bonitas, devemos nos aprofundar em quais são os problemas dos nossos usuários e qual é a melhor forma de resolvê-los.'
  },
  actions: {
    b1: 'Baixe meu Currículo',
    b2: 'Entre em Contato'
  }
};

export const servicesPtBr = {
  title: { t1: 'Meus', t2: 'serviços', t3: 'para ajudar', t4: 'sua empresa' },
  card: {
    t1: 'UX Research',
    t2: 'UX Analytics',
    t3: 'UI Design',
    t4: 'Protótipos Interativos',
    t5: 'Testes de Usabilidade'
  }
};

export const projectsPtBr = {
  title: 'Projetos',
  card: {
    t1: 'Central IT Mobile',
    t2: 'Centro de Experiência',
    t3: 'Sistema de Ações Fiscais',
    t4: 'Ouvidoria 156',
    t5: 'Dashboard Controle de times',
    t6: 'Dashboard CRM'
  },
  tags: {
    tag1: 'UX Design',
    tag2: 'UI Design',
    tag3: 'Em Produção',
    tag4: 'Em Construção',
    tag5: 'Interativo',
    tag6: 'Em Lojas'
  }
};

export const centralItMobilePtBr = {
  title: 'Central IT Mobile',
  cover: coverAppCitPtBr,
  st1: 'O Desafio',
  t1: 'Adequar uma aplicação TI robusta de abertura e aprovações de chamados da web para mobile. IOS e Android.',
  st2: 'Meu papel',
  t2: 'Elaboração de pesquisas quantitativas, análises hotjar, blueprint de serviço, matriz CSD, matriz impacto x esforço, wireframes, golden path, design system, prototipação interativa, testes de usabilidades, priorização de sprints, condução de cerimônias SCRUM da equipe envolvida e Roadmap de melhorias contínuas.',
  st3: 'Ferramentas Utilizadas',
  t3: {
    p1: {
      name: 'Miro:',
      description: 'Utilizado como whiteboard online principal para workshops'
    },
    p2: {
      name: 'Hotjar:',
      description:
        'Utilizado para pesquisa quantitativa e analises da aplicação web'
    },
    p3: {
      name: 'Figma:',
      description:
        'Utilizado como ferramenta principal de criação e prototipação das telas'
    },
    p4: {
      name: 'Maze:',
      description:
        'Utilizado para realização dos testes de usabilidades não moderados'
    }
  },
  st4: 'Processo de Design',
  t4: 'Utilizei o design thinking em conjunto com o LeanUX',
  st5: 'Descobrir e Definir',
  t5: {
    p1: {
      name: '5W2H',
      description:
        'Como o escopo do MVP já havia sido idealizado pelos stakeholders, escolhi utilizar a metodologia do 5W2H para analisar o nível de alinhamento entre a proposta apresentada e objetivo do negócio.'
    },
    p2: {
      name: 'Matriz CSD',
      description:
        'Com a proposta alinhada com o negócio, foi a hora de entender mais sobre o produto em questão. Utilizei a técnica da Matriz de certezas, suposições e dúvidas para clarerar quais seriam as funcionalidades necessárias no MVP e qual era meu nível de conhecimento sobre elas.'
    },
    p3: {
      name: 'Lean Inception',
      description:
        'Com as informações que obetive, conduzi uma lean inception com todos os responsáveis pelo desenvolvimento do produto. Contei com suas visões de negócio e visões técnicas para confirmarmos as viabilidades de implementação. Foi incrível!'
    },
    p4: {
      name: 'Exploramos:',
      topics: {
        t1: 'Aprofundamento do objetivo',
        t2: 'Análise do protótipo inicial',
        t3: 'Pontos de melhorias',
        t4: 'Viabilidade Técnica'
      },
      discover: discoverAppCitPtBr
    },
    p5: {
      name: 'User Research & Mapeamento',
      description:
        'Para entender mais sobre como funciona a hierarquia de informações e como reproduzi-las no design, utilizei técnicas de pesquisas com usuários, onde identifiquei pontos mais comuns de dores e entendi mais sobre as funcionalidades completas de cada fluxo.'
    },
    p6: 'Mais familiarizado com o fluxo, utilizei a técnica de mapeamento operacional do sistema como auxílio visual para a equipe.'
  },
  st6: 'Desenvolver e Entregar',
  t6: {
    p1: {
      name: 'Wireframes',
      description:
        'Iniciei a solução com rabiscoframes para validação das ideias e segui para os wireframes, onde realizei testes de usabilidade não moderados através do maze.',
      wireframe: wireframeAppCitPtBr
    },
    p2: {
      name: 'Testes de Usabilidade',
      description:
        'Realizamos testes de usabilidade não moderados através da ferramenta maze com a versão de média fidelidade para entender se estávamos no caminho certo e identificar possíveis melhorias nos fluxos.'
    },
    p3: {
      name: 'Aprendizado: ',
      description:
        'Não deixar o protótipo totalmente interativo pois muitos usuários vão acabar navegando por curiosidade e isso acaba atrapalhando um pouco na hora das análises. Creio que o ideal seja focar somente nas interações do fluxo da missão.',
      usability: usabilityAppCitPtBr
    },
    p4: {
      name: 'Styleguide',
      description:
        'Idealizei o styleguide tendo como base a marca da empresa. Como o produto iria existir nas plataformas de IOS e Android foi feito um styleguide para cada, assim melhoramos a experiência individual de cada tecnologia.',
      styleguide: styleguideAppCitPtBr
    },
    p5: {
      name: 'Apresentação',
      description:
        'Foi realizado uma apresentação para os stakeholders com o protótipo interativo do produto onde discutimos ideias e foi apresentado o roadmap das próximas versões detalhadas.'
    },
    p6: {
      name: 'Handoff',
      description:
        'Com a confirmação dos stakeholders, o design foi comunicado aos desenvolvedores através do figma, onde foi iniciado a implementação dos códigos.'
    },
    p7: {
      name: 'Melhorias Contínuas',
      description:
        'Com o produto já em lojas, iniciamos as melhorias técnicas priorizadas, onde estamos atualizando a cada versão.'
    }
  },
  st7: 'Próximos Passos',
  t7: 'Para os próximos passos do produto, pretendo aplicar o método lean discovery. O objetivo é obter uma visão mais clara de como o nosso produto está sendo recebido pelos usuários e identificar possíveis pontos de melhoria no design. Com essa abordagem, espero coletar insights valiosos que nos ajudem a tomar decisões mais embasadas para o aprimoramento contínuo do produto. Estou animado com a possibilidade de contribuir para a evolução do produto e de aprender com as interações dos usuários.',
  st8: 'Aprendizados',
  t8: 'Assumi um projeto em andamento, sem ter participado do alinhamento inicial e com o MVP já definido, o que representou um grande desafio. No entanto, essa experiência me permitiu questionar as decisões tomadas e avaliar se elas realmente estavam alinhadas com os objetivos do produto e do negócio. Como resultado, consegui revisar a estratégia interna e identificar possíveis oportunidades de melhoria para projetos futuros. Esta experiência me ensinou a importância de avaliar constantemente as decisões tomadas e garantir que estejam em linha com os objetivos gerais do projeto e da empresa, além de desenvolver habilidades de adaptação e resolução de problemas em um ambiente em constante mudança. Estou ansioso para aplicar esses aprendizados em futuros projetos e contribuir ainda mais para o sucesso da empresa.'
};

export const experienceCenterPtBr = {
  title: 'Centro de Experiência',
  cover: coverExpCenterPtBr,
  st1: 'O Desafio',
  t1: 'Redesign do Centro de Experiência principal da Central IT',
  st2: 'Meu papel',
  t2: 'Elaboração de pesquisas quantitativas, análises hotjar, blueprint de serviço, matriz CSD, wireframes, golden path, prototipação interativa (para facilitar o handoff) priorização de sprints e condução de cerimônias SCRUM da equipe envolvida.',
  st3: 'Ferramentas Utilizadas',
  t3: {
    p1: {
      name: 'Miro:',
      description: 'Utilizado como whiteboard online principal para workshops'
    },
    p2: {
      name: 'Hotjar:',
      description:
        'Utilizado para pesquisa quantitativa e analises da aplicação web'
    },
    p3: {
      name: 'Figma:',
      description:
        'Utilizado como ferramenta principal de criação e prototipação das telas'
    }
  },
  st4: 'Processo de Design',
  t4: 'Utilizei o design thinking em conjunto com o LeanUX',
  st5: 'Descobrir e Definir',
  t5: {
    p1: {
      name: 'Matriz CSD',
      description:
        'Com a proposta alinhada com o negócio, foi a hora de entender mais sobre o produto em questão. Utilizei a técnica da Matriz de certezas, suposições e dúvidas para clarerar quais seriam as funcionalidades necessárias no MVP e qual era meu nível de conhecimento sobre elas.'
    },
    p2: {
      name: 'UX Analytics',
      description: {
        t1: 'Utilizei o hotjar como ferramenta principal para as análises de interação dos usuários com o ambiente. Além das funcionalidades básicas de mapa e calor e recording de interações, adicionei um survey quantitativo com o intuito de entender um pouco mais quais eram os fluxos mais utilizados pelos nossos usuários e a satisfação de uma forma geral com o produto.',
        t2: 'Até o momento contamos com as respostas de 240 usuários e esses são os insights mais interessantes:',
        topics: {
          t1: 'O campo de busca é a feature mais utilizada.',
          t2: 'Com o auxílio do mapa de calor Identifiquei que 23% dos usuários acessavam o Perfil somente para clicar no botão de voltar para o sistema anterior, minha solução foi trazer esse ícone pra fora do perfil, diminuindo a quantidade de clicks necessárias para a ação.',
          t3: '28.9% dos usuários utilizam o ambiente para encontrar o atalho para outras aplicações.',
          t4: '36.6% dos usuários utilizam o ambiente para acessar as atividades, tornando-as a funcionalidade mais importante.'
        },
        t3: 'Com essas informações consegui definir quais seriam as alterações que gerariam maior valor para os usuários e ficou mais fácil priorizá-las nas sprints.',
        uxAnalytics: uxAnalyticsExpCenterPtBr
      }
    },
    p3: {
      name: 'Lean Inception',
      description:
        'Com as informações que obetive, conduzi uma lean inception para alinhamento de todos os responsáveis pelo ambiente e contei com suas visões de negócio e visões técnicas para confirmarmos as priorizações de implementação.'
    },
    p4: {
      name: 'User Research & Mapeamento',
      description:
        'Para entender mais sobre como funciona a hierarquia de informações e como reproduzi-las no design, utilizei o próprio figma para criar um organograma visual das camadas do ambiente.'
    }
  },
  st6: 'Desenvolver e Entregar',
  t6: {
    p1: {
      name: 'Protótipo',
      description:
        'Iniciei a solução seguindo a versão original do produto, apenas com as melhorias mais impactantes visuais e de funcionalidades.',
      images: [
        { id: 1, title: 'Versão Antiga', image: oldVersionExpCenterPtBr },
        {
          id: 2,
          title: 'Wireframe média fidelidade com cores',
          image: mediumVersionExpCenterPtBr,
          description: {
            t1: 'Observação: ',
            t2: 'Embora não seja comum utilizar cores em wireframes de média fidelidade, optei por utiliza-las em minha estratégia de UI Design. Ao me organizar nos componentes e tendo a identidade da marca já estabelecida, pude aproveitar as cores para ressaltar o contraste e gerar maior valor percebido pelos usuários utilizando o efeito de destaque. Essa abordagem contribuiu significativamente para destacar a proposta de redesign em relação ao design anterior.'
          }
        },
        {
          id: 3,
          title: 'Versão 1 em produção',
          image: firstNewVersionExpCenterPtBr,
          description: {
            t1: 'Observação: ',
            t2: 'Com o wireframe em média fidelidade, foi possível identificar a necessidade de uma reestilização mais impactante com a utilização uso de ícones e indicações visuais mas ainda mantendo a estrutura do layout familiar para os usuários.'
          }
        }
      ]
    },
    p2: {
      name: 'Styleguide',
      description: 'Idealizei o styleguide tendo como base a marca da empresa.'
    },
    p3: {
      name: 'Apresentação',
      description:
        'Foi realizado uma apresentação para os stakeholders com o protótipo interativo do produto com a intenção de validar os insights e mostrar dados reais do que foi observado.'
    },
    p4: {
      name: 'Handoff',
      description:
        'Com a confirmação dos stakeholders, o design foi comunicado aos desenvolvedores através do figma, onde foi iniciado a implementação dos códigos.'
    },
    p5: {
      name: 'Melhorias Contínuas',
      description:
        'Com o produto já em produção, continuo com o apoio do hotjar para identificar as próximas melhorias.'
    }
  },
  st7: 'Próximos Passos',
  t7: {
    topics: {
      t1: 'Análises de hotjar',
      t2: 'Feedbacks dos usuários',
      t3: 'Pesquisas qualitativas',
      t4: 'Mais pesquisas quantitativas',
      t5: 'Testes de usabilidade'
    }
  },
  st8: 'Aprendizados',
  t8: {
    p1: 'Foi uma experência bem rica pois percebi que os usuários podem ter receio de grandes mudanças em uma ferramenta que estão habituados a utilizar há muito tempo.',
    p2: 'Por isso, adotei a estratégia de modernizar a estrutura atual sem grande mudanças de estrutura, trazendo mais valor em alterações de features já existentes. É um ótimo primeiro passo pra mostrar que estamos aqui para ajudar e melhor a experiência.',
    p3: 'Essa abordagem permitiu que os usuários tenham mais confiança em relação às mudanças futuras, abrindo espaço para melhorias mais impactantes.'
  }
};

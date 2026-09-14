import video1 from "../assets/videos/italot.mov";
import imagemSobre from "../assets/4koriginal3.jpeg";
import imagemSobre2 from "../assets/4koriginal2.jpg";
import imagemMundo from "../assets/aveoriginal.jpeg";
import imagemItalo from "../assets/atalho.jpeg";
import videoinicio from "../assets/videos/nessevai.mp4";
import video5seg from "../assets/videos/video5seg.mov";
import oficialgym from "../assets/videos/oficialgym.mov";
import framevideo from "../assets/videos/framevideo1.mov";
import movimento from "../assets/videos/movimentos.mov";
import itaguare from "../assets/videos/videoitaguare.mp4";
import videoia from "../assets/videos/videoia.mov";
import imoveis from "../assets/videos/imoveis.mov";
import videoclipe from "../assets/videos/videoclipe.mov";
import videoclipe2 from "../assets/videos/videoclipe2.mov";
import videoarmadilha from "../assets/videos/videoarmadilha.mp4";
import videosurfando from "../assets/videos/surfando.mov";
import surfando from "../assets/videos/surfando2.mov";
import surfando3 from "../assets/videos/surfando3.mov";
import oultimo from "../assets/videos/oultimo.mp4";
import selocovai from "../assets/videos/selocovai.mp4";
import thiagao from "../assets/videos/thiagao.mp4";

export const content = {
  global: {
    siteName: "Sa.Surf",
    contactEmail: "niicolas.sa@hotmail.com",
    socials: {
      instagram: "https://instagram.com/sa.surf",
      whatsapp: "https://wa.me/5511933363585"
    }
  },
  header: {
    logoText: "Sa.Surf",
    navLinks: [
      { label: "inicio", path: "/" },
      { label: "sobre", path: "/about" },
      { label: "Projetos", path: "/context" },
      { label: "Serviços", path: "/work" },

    ]
  },
  home: {
    // These videos will transition as the user scrolls
    scrollVideos: [
      {
        id: "scene-1",
        url: videoinicio,
        text: "SA.SURF"
      },
      {
        id: "scene-2",
        url: selocovai,
        text: " "
      },

    ],
    // Editorial images that act as navigation menus
    editorialNav: [
      {
        id: "about",
        label: "SOBRE",
        path: "/about",
        image: imagemSobre
      },
      {
        id: "context",
        label: "PROJETOS",
        path: "/context",
        image: imagemMundo
      },
      {
        id: "work",
        label: "SERVIÇOS",
        path: "/work",
        image: imagemItalo
      }
    ]
  },
  pages: {
    about: {
      title: "SA SURF",
      heroImage: imagemSobre,

      textBlocks: [
        "A Sa.Surf é especializada em captação de imagens aéreas através de drones da DJI, criando conteúdo visual para marcas, atletas, empresas e projetos.",

        "Atuamos principalmente em surf, esportes, lifestyle, clipes, imóveis, eventos, conteúdos com ia e produção de conteúdo para redes sociais.",

        "Nosso trabalho combina imagens aéreas, movimento e perspectiva para transformar momentos e experiências em conteúdos visuais marcantes, tanto dentro de um ambiente fechado ou a area externa.",

        "Utilizamos ferramentas de edição e recursos de Inteligência Artificial para aprimorar as imagens, realizar ajustes de enquadramento, tratamento visual, estabilização, cortes e transições que contribuem para um resultado mais preciso e profissional.",

        "Entre em contato conosco e peça um orçamento"
      ],

      gallery: [
        {
          image: imagemSobre2,
          caption: "Saquarema, RJ - Tenda RedBull"
        },
        {
          image: imagemSobre,
          caption: "Saquarema, RJ - Ítalo Ferreira - Surfista"
        }
      ]
    },
    context: {
      title: "PROJETOS",
      heroImage: imagemMundo,
      items: [
        {
          id: "01",
          title: "SURF",
          description:
            "Registro de um momento espontâneo durante a espera por uma onda. Um pássaro atravessa o enquadramento, criando uma composição inesperada e visualmente marcante.",
          media: framevideo,
          type: "video",
        },
        {
          id: "02",
          title: "FRAME",
          description:
            "Frame do Video em 4K.",
          media: imagemMundo,
          type: "image",
        },

        {
          id: "03",
          title: "360°",
          description:
            "Panorama aéreo 360° realizado na Praia de Maresias - SP, permitindo explorar o ambiente, clique em ver 360º e veja uma experiência imersiva da imagem.",
          media: "/panoramas/360.jpeg",
          type: "panorama",
        },

        {
          id: "04",
          title: "SURF",
          description:
            "Saquarema, RJ — Captação aérea de um atleta de surf em movimento, explorando um enquadramento dinâmico com a Igreja de Itaúna ao fundo.",
          media: video1,
          type: "video",
        },
        {
          id: "05",
          title: "FRAME",
          description:
            "Frame do Video em 4K.",
          media: imagemItalo,
          type: "image",
        },

        {
          id: "06",
          title: "360°",
          description:
            "Registro aéreo em 360° da Praia do Bonete ,IlhaBela - SP, destacando a extensão do cenário e a paisagem ao redor.",
          media: "/panoramas/mon360.jpeg",
          type: "panorama",
        },

        {
          id: "07",
          title: "CONTEÚDO VERTICAL",
          description:
            "Itaguare, São Paulo — Captação e edição de vídeo aéreo desenvolvidas para formatos verticais, ideais para Instagram Reels e TikTok. O projeto combina imagens de drone, enquadramento dinâmico e edição direcionada às redes sociais, valorizando o cenário e a experiência visual.",
          media: itaguare,
          type: "video",
        },
        {
          id: "08",
          title: "SURF COM IA",
          description:
            "Registro de um aéreo durante uma sessão de surf com edição, acompanhado em câmera lenta para destacar a precisão do movimento e a fluidez da manobra com detalhes. O vídeo foi criado e aprimorado com inteligência artificial utilizando a Higgsfield AI, você pode garantir o seu.",
          media: selocovai,
          type: "video",
        },

        {
          id: "09",
          title: "MOVIMENTOS CINEMÁTICOS",
          description:
            "Demonstração de recursos de voo automatizado do drone, incluindo órbita ao redor do objeto, ascensão vertical e acompanhamento inteligente de uma pessoa em movimento.",
          media: movimento,
          type: "video",
        },

        {
          id: "10",
          title: "IMÓVEIS",
          description:
            "Captação interna para imobiliária mostrando a integração entre os ambientes do apartamento e a vista para o mar, conduzindo o espectador do quarto à sala e, em seguida, diretamente à praia.",
          media: imoveis,
          type: "video",
        },

        {
          id: "11",
          title: "VIDEOCLIPES",
          description:
            "Para a marca @_armadilha, captação aérea e linguagem visual desenvolvida para integrar a estética e a identidade do projeto musical.",
          media: videoclipe2,
          type: "video",
        },

        {
          id: "12",
          title: "VIDEOCLIPE",
          description:
            "Produção para videoclipe.",
          media: videoclipe,
          type: "video",
        },

        {
          id: "14",
          title: "360º",
          description:
            "OficialGYM — Visão 360º do ambiente.",
          media: "/panoramas/gym360.jpeg",
          type: "panorama",
        },

        {
          id: "15",
          title: "PERSPECTIVA COM IA",
          description:
            "OficialGYM — Transição cinematográfica entre uma perspectiva global da Terra e a identidade visual da academia. O projeto explora recursos de composição, movimento e transformação para apresentar onde a academia fica localizada de forma impactante e contemporânea.",
          media: videoia,
          type: "video",
        },

        {
          id: "16",
          title: "PERSPECTIVA COM IA",
          description:
            "Produção aérea em formato timelapse, registrando a transição do dia para a noite. ",
          media: video5seg,
          type: "video",
        },

      ],
    },
    work: {
      title: "SERVIÇOS",

      subtitle: "Empresas e pessoas que trabalharam com Sa.Surf",
      heroImage: imagemItalo,

      projects: [
        {
          client: "OficialGYM - Academia",
          service: "Captação de imagens aéreas lado interno e externo",
          location: "São Bernardo do Campo, SP",
          year: "2026",
          description:
            "Produção de imagens aéreas para a divulgação da OficialGYM, explorando diferentes perspectivas e enquadramentos para valorizar o espaço e sua identidade visual. O projeto combina captação com drone, recursos de inteligência artificial e uma edição audiovisual desenvolvida para integrar ritmo, transições e trilha sonora, criando um conteúdo dinâmico e alinhado à comunicação da marca.",
          video: oficialgym,
        },

        {
          client: "VideoClipe com @_armadilha",
          service: "Produção audiovisual e captação aérea",
          location: "São Paulo, SP",
          year: "2025",
          description:
            "Trabalho desenvolvido em parceria com a empresa @_armadilha e @lucas_minaya com produção e roteiro profissional feita para um videoclipe de um artista local.",
          video: videoarmadilha,
        },

        {
          client: "Visão imersiva 360º",
          service: "Academia OficialGYM",
          location: "São Bernardo do Campo - SP",
          year: "2026",
          description:
            "Panorama aéreo 360° realizado em São Bernardo do Campo - SP, permitindo explorar o ambiente de forma imersiva. Clique em ver 360º e explore a imagem completa.",
          media: "/panoramas/gym360.jpeg",
          type: "panorama",
        },

        {
          client: "Visão imersiva 360º",
          service: "Produção audiovisual e captação aérea",
          location: "Praia de Maresias - SP",
          year: "2025",
          description:
            "Panorama aéreo 360° realizado na Praia de Maresias - SP, permitindo explorar o ambiente de forma imersiva. Clique em ver 360º e explore a imagem completa.",
          media: "/panoramas/360.jpeg",
          type: "panorama",
        },

        {
          client: "Surfista",
          service: "Produção audiovisual e captação aérea",
          location: "Praia do Bonete - Ilha Bela, SP",
          year: "2025",
          description:
            "Produção audiovisual voltada à performance de um surfista, combinando captação aérea, diferentes perspectivas e edição dinâmica.",
          video: videosurfando,
        },

        {
          client: "Surfista",
          service: "Produção audiovisual e captação aérea",
          location: "Itaúna, RJ",
          year: "2026",
          description:
            "Registro de Performance.",
          video: video1,
        },

        {
          client: "Surfista @kleber_prior",
          service: "Produção audiovisual e captação aérea",
          location: "Praia Vermelha do Norte - Ubatuba, SP",
          year: "2024",
          description:
            "Registro de performance",
          video: surfando,
        },

        {
          client: "Surfista",
          service: "Produção audiovisual e captação aérea",
          location: "Praia do tombo - Guarujá, SP",
          year: "2025",
          description:
            "Produção audiovisual voltada à performance de um surfista, combinando captação aérea, diferentes perspectivas e edição dinâmica. O projeto explora o movimento, a energia das ondas e a identidade do atleta por meio de uma linguagem visual cinematográfica.",
          video: surfando3,
        },

        {
          client: "Surfista",
          service: "Produção audiovisual e captação aérea",
          location: "São Paulo, SP",
          year: "2026",
          description:
            "Registro de um aéreo durante uma sessão de surf com edição, acompanhado em câmera lenta para destacar a precisão do movimento e a fluidez da manobra com detalhes. O vídeo foi criado e aprimorado com inteligência artificial utilizando a Higgsfield AI, você pode garantir o seu.",
          video: selocovai,
        },


        {
          client: "Imobiliária / Cliente",
          service: "Produção audiovisual e captação aérea",
          location: "Praia do Tombo - Guarujá, SP",
          year: "2026",
          description:
            "Produção audiovisual voltada à apresentação de um imóvel, combinando captação aérea e imagens internas para valorizar os ambientes, a arquitetura e a localização. O projeto utiliza diferentes perspectivas e movimentos de câmera para criar uma apresentação visual atrativa e destacar a experiência de estar no imóvel.",
          video: imoveis,
        },

        {
          client: "@thiago_torrubia",
          service: "Produção audiovisual e edição de Reels",
          location: "São Bernardo do Campo, SP",
          year: "2026",
          description:
            "Produção de Reels para divulgação da academia, com captação de movimentos aéreos com drone e edição dinâmica destacando o atleta e o ambiente.",
          video: thiagao,
        },

        {
          client: "Divulgação de Evento",
          service: "Produção audiovisual e ação de marketing",
          location: "São Paulo, SP",
          year: "2025",
          description:
            "Produção audiovisual desenvolvida para uma ação de marketing voltada à divulgação de um evento.",
          video: oultimo,
        },
      ],
    },
  },
  footer: {
    text: "© 2026 Sa.Surf. Todos os direitos reservados."
  }
};

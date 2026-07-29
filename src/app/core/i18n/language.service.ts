import { Injectable, signal } from '@angular/core';

export type LanguageCode = 'es' | 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'dani-ceballos-language';

  readonly currentLanguage = signal<LanguageCode>(
    this.getInitialLanguage()
  );

  private readonly translations: Record<
    LanguageCode,
    Record<string, string>
  > = {
    es: {
      /* ==================================================
         IDIOMAS
      ================================================== */

      'language.label': 'Seleccionar idioma',
      'language.spanish': 'Español',
      'language.english': 'Inglés',
      'language.french': 'Francés',

      /* ==================================================
         HEADER
      ================================================== */

      'header.homeLabel': 'Ir al inicio',
      'header.menuLabel': 'Abrir o cerrar menú',
      'header.navigationLabel': 'Navegación principal',

      'header.role': 'CEO · ESTRATEGIA · LIDERAZGO',
      'header.profile': 'Perfil',
      'header.trajectory': 'Trayectoria',
      'header.recognitions': 'Reconocimientos',
      'header.services': 'Servicios',
      'header.contact': 'Conversemos',
      'header.followLabel': 'Sígueme',

      /* ==================================================
         HERO
      ================================================== */

      'hero.eyebrow': 'CEO · Estrategia · Liderazgo',
      'hero.name': 'Dani',
      'hero.lastname': 'Ceballos',

      'hero.statement':
        'Liderazgo que convierte visión, estrategia y propósito en resultados sostenibles.',

      'hero.description':
        'Ejecutivo enfocado en construir organizaciones sólidas, acompañar equipos de alto desempeño y transformar decisiones estratégicas en oportunidades de crecimiento.',

      'hero.services': 'Ver servicios',
      'hero.contact': 'Hablemos',
      'hero.photo': 'Fotografía profesional',
      'hero.signatureRole': 'CEO · Estrategia · Liderazgo',
      'hero.profile': 'Perfil ejecutivo',
      'hero.trajectory': 'Conoce su trayectoria',

      /* ==================================================
   PERFIL
================================================== */

'profile.label': 'Perfil profesional',

'profile.titleLine1': 'Estrategia, liderazgo',
'profile.titleLine2': 'y visión empresarial.',

'profile.introduction1':
  'Dani Ceballos ha construido su trayectoria profesional alrededor de la dirección estratégica, el desarrollo de equipos y la toma de decisiones orientadas a resultados sostenibles.',

'profile.introduction2':
  'Su visión combina experiencia ejecutiva, liderazgo humano y una comprensión profunda de los retos que enfrentan actualmente las organizaciones.',

'profile.quote':
  'Las organizaciones avanzan cuando existe una visión clara, personas comprometidas y decisiones capaces de convertirse en acciones.',

'profile.signatureRole': 'CEO · Estrategia · Liderazgo',

'profile.pillar1Title': 'Visión estratégica',
'profile.pillar1Description':
  'Capacidad para identificar oportunidades, anticipar desafíos y convertir objetivos organizacionales en planes de acción claros y medibles.',

'profile.pillar2Title': 'Liderazgo humano',
'profile.pillar2Description':
  'Una manera de liderar basada en la confianza, la escucha y el desarrollo de equipos capaces de asumir nuevos retos.',

'profile.pillar3Title': 'Orientación a resultados',
'profile.pillar3Description':
  'Decisiones respaldadas por objetivos, seguimiento y una ejecución disciplinada que permita generar valor sostenible.',

'profile.footerLabel': 'Experiencia ejecutiva',
'profile.footerLink': 'Ver trayectoria profesional',


/* ==================================================
   TRAYECTORIA
================================================== */

'trajectory.label': 'Mi recorrido profesional',

'trajectory.titleLine1': 'Experiencia que construye',
'trajectory.titleLine2': 'visión y resultados.',

'trajectory.introduction1':
  'Una trayectoria marcada por el aprendizaje constante, la dirección de equipos y la construcción de estrategias orientadas al crecimiento organizacional.',

'trajectory.introduction2':
  'Cada etapa representa una oportunidad para comprender nuevos retos, acompañar personas y transformar objetivos en acciones concretas.',

'trajectory.summaryLabel': 'Resumen profesional',
'trajectory.summaryYears': 'Años de experiencia ejecutiva',

'trajectory.summaryDescription':
  'Experiencia en liderazgo, planeación estratégica, dirección de proyectos y desarrollo de equipos de trabajo.',

'trajectory.summaryLink': 'Conversemos',

'trajectory.currentPeriod': '2016 — Actualidad',
'trajectory.currentPosition': 'CEO',
'trajectory.currentCompany': 'La Ofrenda S.A.',
'trajectory.currentStatus': 'Actual',

'trajectory.currentDescription':
  'Liderazgo estratégico de La Ofrenda S.A., impulsando el crecimiento organizacional, la innovación, el fortalecimiento institucional y el desarrollo de equipos de alto desempeño.',

'trajectory.currentResult1':
  'Dirección y seguimiento de planes estratégicos.',

'trajectory.currentResult2':
  'Fortalecimiento de equipos y cultura organizacional.',

'trajectory.currentResult3':
  'Desarrollo de nuevas oportunidades y alianzas.',

'trajectory.currentSkill1': 'Estrategia',
'trajectory.currentSkill2': 'Liderazgo',
'trajectory.currentSkill3': 'Dirección',

'trajectory.previousPeriod1': '2021 — 2024',
'trajectory.previousPosition1': 'Dirección estratégica',
'trajectory.previousCompany1': 'Organización anterior · Colombia',

'trajectory.previousDescription1':
  'Liderazgo de proyectos y procesos de transformación orientados a mejorar la eficiencia, fortalecer el trabajo colaborativo y consolidar objetivos empresariales.',

'trajectory.previousResult1':
  'Coordinación de proyectos multidisciplinarios.',

'trajectory.previousResult2':
  'Diseño de estrategias de mejoramiento.',

'trajectory.previousResult3':
  'Acompañamiento y desarrollo de equipos.',

'trajectory.previousSkill1': 'Planeación',
'trajectory.previousSkill2': 'Gestión',
'trajectory.previousSkill3': 'Transformación',

'trajectory.previousPeriod2': '2018 — 2021',
'trajectory.previousPosition2': 'Gestión y liderazgo de proyectos',
'trajectory.previousCompany2': 'Experiencia profesional · Colombia',

'trajectory.previousDescription2':
  'Participación en procesos de gestión, coordinación y ejecución que permitieron desarrollar una visión integral del liderazgo y la operación empresarial.',

'trajectory.previousResult4':
  'Seguimiento de indicadores y objetivos.',

'trajectory.previousResult5':
  'Coordinación de actividades operativas.',

'trajectory.previousResult6':
  'Construcción de relaciones de confianza.',

'trajectory.previousSkill4': 'Ejecución',
'trajectory.previousSkill5': 'Procesos',
'trajectory.previousSkill6': 'Equipos',

'trajectory.footerLabel': 'Trayectoria profesional',
'trajectory.footerLink': 'Ver reconocimientos',

/* ==================================================
   RECONOCIMIENTOS
================================================== */

'recognitions.label': 'Reconocimientos',

'recognitions.titleLine1': 'Una trayectoria respaldada',
'recognitions.titleLine2': 'por experiencias y logros.',

'recognitions.introduction1':
  'Cada reconocimiento representa un proceso, un equipo y una experiencia que ha contribuido a consolidar una visión ejecutiva enfocada en el crecimiento y la transformación.',

'recognitions.introduction2':
  'Este espacio reunirá premios, certificaciones, participaciones destacadas y logros profesionales de Dani Ceballos.',

'recognitions.featuredType': 'Reconocimiento destacado',
'recognitions.featuredYear': '2026',

'recognitions.featuredTitle':
  'Liderazgo Estratégico',

'recognitions.featuredDescription':
  'Reconocimiento provisional destinado a destacar una contribución relevante en liderazgo, estrategia empresarial o desarrollo organizacional.',

'recognitions.featuredOrganization':
  'Organización o entidad',

'recognitions.card2Type': 'Certificación',
'recognitions.card2Title':
  'Estrategia Empresarial',

'recognitions.card2Description':
  'Formación o certificación relacionada con liderazgo, administración, innovación o toma de decisiones estratégicas.',

'recognitions.card2Organization': 'Institución',
'recognitions.card2Year': '2025',

'recognitions.card3Type': 'Participación',
'recognitions.card3Title':
  'Conferencias y Liderazgo',

'recognitions.card3Description':
  'Participación provisional en un evento, panel, foro o espacio de conversación sobre liderazgo y crecimiento empresarial.',

'recognitions.card3Organization': 'Evento empresarial',
'recognitions.card3Year': '2024',

'recognitions.card4Type': 'Distinción',
'recognitions.card4Title':
  'Equipos de Alto Desempeño',

'recognitions.card4Description':
  'Distinción provisional por el acompañamiento de equipos, cumplimiento de resultados y fortalecimiento de la cultura organizacional.',

'recognitions.card4Organization': 'Organización',
'recognitions.card4Year': '2023',

'recognitions.card5Type': 'Próximo capítulo',
'recognitions.card5Title':
  'Próximo Capitulo',

'recognitions.card5Description':
  'Nuevos reconocimientos, certificaciones y participaciones se incorporarán a medida que avance la historia profesional de Dani Ceballos.',

'recognitions.card5Organization': 'En construcción',

'recognitions.footerLabel': 'Información provisional',

'recognitions.footerDescription':
  'Los reconocimientos actuales serán reemplazados por la información, fotografías, certificados y entidades reales suministradas por el cliente.',

'recognitions.footerLink': 'Conocer servicios',

/* ==================================================
   SERVICIOS
================================================== */

'services.label': 'Servicios',

'services.titleLine1': 'Experiencia ejecutiva puesta',
'services.titleLine2': 'al servicio de nuevas ideas.',

'services.introduction1':
  'Espacios de conversación, acompañamiento y construcción estratégica para organizaciones, equipos y líderes que buscan avanzar con mayor claridad y propósito.',

'services.introduction2':
  'Cada servicio será adaptado de acuerdo con el contexto, las necesidades y los objetivos de cada organización.',

'services.card1Label': 'Conferencias',
'services.card1Title':
  'Liderazgo, estrategia y transformación',
'services.card1Description':
  'Conversaciones dirigidas a equipos, líderes y organizaciones sobre toma de decisiones, cultura, propósito y construcción de resultados sostenibles.',
'services.card1Topic1': 'Liderazgo ejecutivo',
'services.card1Topic2': 'Cultura organizacional',
'services.card1Topic3': 'Transformación empresarial',

'services.card2Label': 'Consultoría',
'services.card2Title':
  'Acompañamiento estratégico para organizaciones',
'services.card2Description':
  'Análisis y acompañamiento para ordenar prioridades, fortalecer procesos y convertir objetivos empresariales en planes de acción claros y ejecutables.',
'services.card2Topic1': 'Planeación estratégica',
'services.card2Topic2': 'Definición de prioridades',
'services.card2Topic3': 'Seguimiento de resultados',

'services.card3Label': 'Mentoría ejecutiva',
'services.card3Title':
  'Conversaciones para líderes y equipos directivos',
'services.card3Description':
  'Espacios individuales o grupales orientados a fortalecer habilidades de dirección, comunicación, criterio y toma consciente de decisiones.',
'services.card3Topic1': 'Desarrollo de liderazgo',
'services.card3Topic2': 'Toma de decisiones',
'services.card3Topic3': 'Comunicación ejecutiva',

'services.card4Label': 'Alianzas y eventos',
'services.card4Title':
  'Participación en espacios de impacto',
'services.card4Description':
  'Participación en paneles, encuentros corporativos, eventos, entrevistas y proyectos que compartan una visión responsable sobre liderazgo y transformación.',
'services.card4Topic1': 'Paneles empresariales',
'services.card4Topic2': 'Eventos institucionales',
'services.card4Topic3': 'Alianzas estratégicas',

'services.informationLink': 'Solicitar información',
'services.inviteLink': 'Invitar a Dani',

'services.calloutLabel': 'Construyamos una propuesta',
'services.calloutTitle':
  'Cada organización tiene un reto diferente.',
'services.calloutDescription':
  'Cuéntanos el propósito de tu evento, proyecto o proceso de acompañamiento para construir una propuesta alineada con tus necesidades.',
'services.calloutLink': 'Iniciar una conversación',

/* ==================================================
   CONTACTO
================================================== */

'contact.label': 'Conversemos',

'contact.titleLine1':
  'Las grandes oportunidades comienzan',

'contact.titleLine2':
  'con una conversación.',

'contact.introduction1':
  'Este espacio está abierto para invitaciones, alianzas, conferencias, entrevistas, consultorías y proyectos que compartan una visión responsable de liderazgo y transformación.',

'contact.introduction2':
  'Cuéntanos brevemente el propósito de tu propuesta para dirigirla al canal correspondiente.',

'contact.informationLabel':
  'Conversemos',

'contact.informationTitle':
  'Hablemos.',

'contact.informationDescription':
  'Si buscas liderazgo estratégico, conferencias, consultoría o una alianza institucional, estaré encantado de conocer tu iniciativa.',

'contact.emailLabel':
  'Correo electrónico',

'contact.locationLabel':
  'Ubicación',

'contact.locationValue':
  'Colombia',

'contact.availabilityLabel':
  'Disponibilidad',

'contact.availabilityValue':
  'Invitaciones · Alianzas · Medios',

'contact.connectLabel':
  'Conecta con Dani',

'contact.formLabel':
  'Envíanos tu propuesta',

'contact.formTitle':
  '¿Cómo podemos comenzar?',

'contact.formDescription':
  'Completa los siguientes datos y te contactaremos para conocer más detalles sobre tu invitación, proyecto o iniciativa.',

'contact.nameLabel':
  'Nombre completo',

'contact.namePlaceholder':
  'Escribe tu nombre',

'contact.emailFieldLabel':
  'Correo electrónico',

'contact.emailPlaceholder':
  'correo@empresa.com',

'contact.organizationLabel':
  'Empresa u organización',

'contact.organizationPlaceholder':
  'Nombre de la organización',

'contact.reasonLabel':
  'Motivo de contacto',

'contact.reasonPlaceholder':
  'Selecciona una opción',

'contact.reasonConference':
  'Conferencia o evento',

'contact.reasonConsulting':
  'Consultoría estratégica',

'contact.reasonMentoring':
  'Mentoría ejecutiva',

'contact.reasonMedia':
  'Medios o entrevista',

'contact.reasonPartnership':
  'Alianza estratégica',

'contact.reasonOther':
  'Otro',

'contact.messageLabel':
  'Cuéntanos sobre tu propuesta',

'contact.messagePlaceholder':
  'Describe brevemente el propósito, la fecha y los detalles principales.',

'contact.formNotice':
  'Al enviar este formulario confirmas que la información proporcionada es correcta.',

'contact.submit':
  'Enviar propuesta',

'contact.successLabel':
  'Mensaje registrado',

'contact.successTitle':
  'Gracias por iniciar esta conversación.',

'contact.successDescription':
  'La estructura del formulario ya funciona correctamente. Posteriormente conectaremos el envío con el canal de contacto definitivo.',

'contact.successButton':
  'Enviar otro mensaje',

/* ==================================================
   REDES SOCIALES
================================================== */

'contact.socialLabel':
  'Sígueme',

'contact.socialTitleLine1':
  'Sigamos conectados',

'contact.socialTitleLine2':
  'en otros espacios.',

'contact.socialDescription':
  'Contenido, reflexiones y conversaciones sobre liderazgo, estrategia, crecimiento empresarial y transformación organizacional.',

'contact.linkedinLabel':
  'Red profesional',

'contact.linkedinDescription':
  'Experiencia ejecutiva, liderazgo y conexiones profesionales.',

'contact.instagramLabel':
  'Marca personal',

'contact.instagramDescription':
  'Reflexiones, experiencias y momentos del recorrido profesional.',

'contact.facebookLabel':
  'Comunidad',

'contact.facebookDescription':
  'Noticias, novedades y contenidos para una comunidad más amplia.',

'contact.tiktokLabel':
  'Contenido breve',

'contact.tiktokDescription':
  'Ideas concretas sobre liderazgo y estrategia en formato corto.',

'contact.backTop':
  'Volver al inicio',

  /* ==================================================
   FOOTER
================================================== */

'footer.homeLabel':
  'Volver al inicio',

'footer.role':
  'CEO · Estrategia · Liderazgo',

'footer.description':
  'Una visión ejecutiva orientada a construir organizaciones, desarrollar equipos y transformar decisiones estratégicas en resultados sostenibles.',

'footer.navigationLabel':
  'Navegación del pie de página',

'footer.navigationTitle':
  'Navegación',

'footer.profile':
  'Perfil',

'footer.trajectory':
  'Trayectoria',

'footer.recognitions':
  'Reconocimientos',

'footer.services':
  'Servicios',

'footer.contact':
  'Conversemos',

'footer.connectTitle':
  'Conecta',

'footer.professionalContactTitle':
  'Contacto profesional',

'footer.contactTitle':
  'Construyamos una conversación con propósito.',

'footer.contactDescription':
  'Para conferencias, consultoría, mentoría ejecutiva, medios, eventos y alianzas estratégicas.',

'footer.contactButton':
  'Iniciar una conversación',

'footer.statementLine1':
  'Liderar es convertir una visión',

'footer.statementLine2':
  'en acciones que transforman.',

'footer.rights':
  'Todos los derechos reservados.',

'footer.bottomMessage':
  'Liderazgo · Estrategia · Transformación',

'footer.backTop':
  'Volver arriba',

'footer.backTopLabel':
  'Volver al inicio de la página',

    },

    

    en: {
      /* ==================================================
         LANGUAGES
      ================================================== */

      'language.label': 'Select language',
      'language.spanish': 'Español',
      'language.english': 'Inglés',
      'language.french': 'Francés',

      /* ==================================================
         HEADER
      ================================================== */

      'header.homeLabel': 'Go to home',
      'header.menuLabel': 'Open or close menu',
      'header.navigationLabel': 'Main navigation',

      'header.role': 'CEO · STRATEGY · LEADERSHIP',
      'header.profile': 'Profile',
      'header.trajectory': 'Career',
      'header.recognitions': 'Recognitions',
      'header.services': 'Services',
      'header.contact': "Let's talk",
      'header.followLabel': 'Follow me',

      /* ==================================================
         HERO
      ================================================== */

      'hero.eyebrow': 'CEO · Strategy · Leadership',
      'hero.name': 'Dani',
      'hero.lastname': 'Ceballos',

      'hero.statement':
        'Leadership that turns vision, strategy and purpose into sustainable results.',

      'hero.description':
        'An executive focused on building strong organizations, supporting high-performance teams and turning strategic decisions into growth opportunities.',

      'hero.services': 'View services',
      'hero.contact': "Let's talk",
      'hero.photo': 'Professional photograph',
      'hero.signatureRole': 'CEO · Strategy · Leadership',
      'hero.profile': 'Executive profile',
      'hero.trajectory': 'Explore his career',

      /* ==================================================
   PROFILE
================================================== */

'profile.label': 'Professional profile',

'profile.titleLine1': 'Strategy, leadership',
'profile.titleLine2': 'and business vision.',

'profile.introduction1':
  'Dani Ceballos has built his professional career around strategic management, team development and decision-making focused on sustainable results.',

'profile.introduction2':
  'His vision combines executive experience, human leadership and a deep understanding of the challenges organizations face today.',

'profile.quote':
  'Organizations move forward when there is a clear vision, committed people and decisions that can be turned into action.',

'profile.signatureRole': 'CEO · Strategy · Leadership',

'profile.pillar1Title': 'Strategic vision',
'profile.pillar1Description':
  'The ability to identify opportunities, anticipate challenges and turn organizational goals into clear and measurable action plans.',

'profile.pillar2Title': 'Human leadership',
'profile.pillar2Description':
  'A way of leading based on trust, active listening and the development of teams capable of taking on new challenges.',

'profile.pillar3Title': 'Results orientation',
'profile.pillar3Description':
  'Decisions supported by objectives, follow-up and disciplined execution designed to create sustainable value.',

'profile.footerLabel': 'Executive experience',
'profile.footerLink': 'View professional career',


/* ==================================================
   CAREER
================================================== */

'trajectory.label': 'My professional journey',

'trajectory.titleLine1': 'Experience that builds',
'trajectory.titleLine2': 'vision and results.',

'trajectory.introduction1':
  'A career shaped by continuous learning, team leadership and the development of strategies focused on organizational growth.',

'trajectory.introduction2':
  'Each stage represents an opportunity to understand new challenges, support people and turn objectives into concrete actions.',

'trajectory.summaryLabel': 'Professional overview',
'trajectory.summaryYears': 'Years of executive experience',

'trajectory.summaryDescription':
  'Experience in leadership, strategic planning, project management and team development.',

'trajectory.summaryLink': "Let's talk",

'trajectory.currentPeriod': '2016 — Present',
'trajectory.currentPosition': 'Chief Executive Officer',
'trajectory.currentCompany': 'La Ofrenda S.A.',
'trajectory.currentStatus': 'Current',

'trajectory.currentDescription':
  'Strategic leadership of La Ofrenda S.A., driving organizational growth, innovation, institutional strengthening and the development of high-performance teams.',

'trajectory.currentResult1':
  'Direction and follow-up of strategic plans.',

'trajectory.currentResult2':
  'Strengthening teams and organizational culture.',

'trajectory.currentResult3':
  'Development of new opportunities and partnerships.',

'trajectory.currentSkill1': 'Strategy',
'trajectory.currentSkill2': 'Leadership',
'trajectory.currentSkill3': 'Management',

'trajectory.previousPeriod1': '2021 — 2024',
'trajectory.previousPosition1': 'Strategic management',
'trajectory.previousCompany1': 'Previous organization · Colombia',

'trajectory.previousDescription1':
  'Leadership of projects and transformation processes aimed at improving efficiency, strengthening collaboration and consolidating business objectives.',

'trajectory.previousResult1':
  'Coordination of multidisciplinary projects.',

'trajectory.previousResult2':
  'Design of improvement strategies.',

'trajectory.previousResult3':
  'Team support and development.',

'trajectory.previousSkill1': 'Planning',
'trajectory.previousSkill2': 'Management',
'trajectory.previousSkill3': 'Transformation',

'trajectory.previousPeriod2': '2018 — 2021',
'trajectory.previousPosition2': 'Project management and leadership',
'trajectory.previousCompany2': 'Professional experience · Colombia',

'trajectory.previousDescription2':
  'Participation in management, coordination and execution processes that helped develop a comprehensive understanding of leadership and business operations.',

'trajectory.previousResult4':
  'Monitoring of indicators and objectives.',

'trajectory.previousResult5':
  'Coordination of operational activities.',

'trajectory.previousResult6':
  'Building relationships based on trust.',

'trajectory.previousSkill4': 'Execution',
'trajectory.previousSkill5': 'Processes',
'trajectory.previousSkill6': 'Teams',

'trajectory.footerLabel': 'Professional career',
'trajectory.footerLink': 'View recognitions',

/* ==================================================
   RECOGNITIONS
================================================== */

'recognitions.label': 'Recognitions',

'recognitions.titleLine1': 'A career supported',
'recognitions.titleLine2': 'by experience and achievements.',

'recognitions.introduction1':
  'Each recognition represents a process, a team and an experience that has helped consolidate an executive vision focused on growth and transformation.',

'recognitions.introduction2':
  'This space will bring together awards, certifications, featured appearances and professional achievements from Dani Ceballos.',

'recognitions.featuredType': 'Featured recognition',
'recognitions.featuredYear': '2026',

'recognitions.featuredTitle':
  'Strategic Leadership',

'recognitions.featuredDescription':
  'A provisional recognition intended to highlight a relevant contribution in leadership, business strategy or organizational development.',

'recognitions.featuredOrganization':
  'Organization or institution',

'recognitions.card2Type': 'Certification',
'recognitions.card2Title':
  'Business Strategy',

'recognitions.card2Description':
  'Training or certification related to leadership, management, innovation or strategic decision-making.',

'recognitions.card2Organization': 'Institution',
'recognitions.card2Year': '2025',

'recognitions.card3Type': 'Participation',
'recognitions.card3Title':
  'Keynotes and Leadership',

'recognitions.card3Description':
  'Provisional participation in an event, panel, forum or conversation focused on leadership and business growth.',

'recognitions.card3Organization': 'Business event',
'recognitions.card3Year': '2024',

'recognitions.card4Type': 'Distinction',
'recognitions.card4Title':
  'High-Performance Teams',

'recognitions.card4Description':
  'A provisional distinction for supporting teams, achieving results and strengthening organizational culture.',

'recognitions.card4Organization': 'Organization',
'recognitions.card4Year': '2023',

'recognitions.card5Type': 'Next chapter',
'recognitions.card5Title':
  'Next Chapter',

'recognitions.card5Description':
  'New recognitions, certifications and appearances will be added as Dani Ceballos’s professional journey continues.',

'recognitions.card5Organization': 'In progress',

'recognitions.footerLabel': 'Provisional information',

'recognitions.footerDescription':
  'The current recognitions will be replaced with the real information, photographs, certificates and institutions provided by the client.',

'recognitions.footerLink': 'Explore services',

/* ==================================================
   SERVICES
================================================== */

'services.label': 'Services',

'services.titleLine1': 'Executive experience applied',
'services.titleLine2': 'to new ideas.',

'services.introduction1':
  'Spaces for conversation, support and strategic development for organizations, teams and leaders seeking to move forward with greater clarity and purpose.',

'services.introduction2':
  'Each service will be adapted to the context, needs and objectives of every organization.',

'services.card1Label': 'Keynotes',
'services.card1Title':
  'Leadership, strategy and transformation',
'services.card1Description':
  'Conversations for teams, leaders and organizations about decision-making, culture, purpose and the development of sustainable results.',
'services.card1Topic1': 'Executive leadership',
'services.card1Topic2': 'Organizational culture',
'services.card1Topic3': 'Business transformation',

'services.card2Label': 'Consulting',
'services.card2Title':
  'Strategic support for organizations',
'services.card2Description':
  'Analysis and support to organize priorities, strengthen processes and turn business objectives into clear and executable action plans.',
'services.card2Topic1': 'Strategic planning',
'services.card2Topic2': 'Priority setting',
'services.card2Topic3': 'Results monitoring',

'services.card3Label': 'Executive mentoring',
'services.card3Title':
  'Conversations for leaders and executive teams',
'services.card3Description':
  'Individual or group sessions focused on strengthening leadership, communication, judgment and conscious decision-making skills.',
'services.card3Topic1': 'Leadership development',
'services.card3Topic2': 'Decision-making',
'services.card3Topic3': 'Executive communication',

'services.card4Label': 'Partnerships and events',
'services.card4Title':
  'Participation in high-impact spaces',
'services.card4Description':
  'Participation in panels, corporate meetings, events, interviews and projects that share a responsible vision of leadership and transformation.',
'services.card4Topic1': 'Business panels',
'services.card4Topic2': 'Institutional events',
'services.card4Topic3': 'Strategic partnerships',

'services.informationLink': 'Request information',
'services.inviteLink': 'Invite Dani',

'services.calloutLabel': 'Let’s build a proposal',
'services.calloutTitle':
  'Every organization faces a different challenge.',
'services.calloutDescription':
  'Tell us the purpose of your event, project or support process so we can build a proposal aligned with your needs.',
'services.calloutLink': 'Start a conversation',

/* ==================================================
   CONTACT
================================================== */

'contact.label': "Let's talk",

'contact.titleLine1':
  'Great opportunities begin',

'contact.titleLine2':
  'with a conversation.',

'contact.introduction1':
  'This space is open to invitations, partnerships, keynotes, interviews, consulting engagements and projects that share a responsible vision of leadership and transformation.',

'contact.introduction2':
  'Tell us briefly about the purpose of your proposal so we can direct it to the appropriate channel.',

'contact.informationLabel':
  "Let's connect",

'contact.informationTitle':
  "Let's talk.",

'contact.informationDescription':
  'If you are looking for strategic leadership, keynotes, consulting or an institutional partnership, I would be glad to learn more about your initiative.',

'contact.emailLabel':
  'Email address',

'contact.locationLabel':
  'Location',

'contact.locationValue':
  'Colombia',

'contact.availabilityLabel':
  'Availability',

'contact.availabilityValue':
  'Invitations · Partnerships · Media',

'contact.connectLabel':
  'Connect with Dani',

'contact.formLabel':
  'Send us your proposal',

'contact.formTitle':
  'How can we begin?',

'contact.formDescription':
  'Complete the following information and we will contact you to learn more about your invitation, project or initiative.',

'contact.nameLabel':
  'Full name',

'contact.namePlaceholder':
  'Enter your name',

'contact.emailFieldLabel':
  'Email address',

'contact.emailPlaceholder':
  'email@company.com',

'contact.organizationLabel':
  'Company or organization',

'contact.organizationPlaceholder':
  'Organization name',

'contact.reasonLabel':
  'Reason for contact',

'contact.reasonPlaceholder':
  'Select an option',

'contact.reasonConference':
  'Keynote or event',

'contact.reasonConsulting':
  'Strategic consulting',

'contact.reasonMentoring':
  'Executive mentoring',

'contact.reasonMedia':
  'Media or interview',

'contact.reasonPartnership':
  'Strategic partnership',

'contact.reasonOther':
  'Other',

'contact.messageLabel':
  'Tell us about your proposal',

'contact.messagePlaceholder':
  'Briefly describe the purpose, date and main details.',

'contact.formNotice':
  'By submitting this form, you confirm that the information provided is accurate.',

'contact.submit':
  'Send proposal',

'contact.successLabel':
  'Message registered',

'contact.successTitle':
  'Thank you for starting this conversation.',

'contact.successDescription':
  'The form structure is working correctly. We will later connect the submission to the final contact channel.',

'contact.successButton':
  'Send another message',

/* ==================================================
   SOCIAL MEDIA
================================================== */

'contact.socialLabel':
  'Follow me',

'contact.socialTitleLine1':
  'Let’s stay connected',

'contact.socialTitleLine2':
  'across other platforms.',

'contact.socialDescription':
  'Content, reflections and conversations about leadership, strategy, business growth and organizational transformation.',

'contact.linkedinLabel':
  'Professional network',

'contact.linkedinDescription':
  'Executive experience, leadership and professional connections.',

'contact.instagramLabel':
  'Personal brand',

'contact.instagramDescription':
  'Reflections, experiences and moments from the professional journey.',

'contact.facebookLabel':
  'Community',

'contact.facebookDescription':
  'News, updates and content for a broader community.',

'contact.tiktokLabel':
  'Short-form content',

'contact.tiktokDescription':
  'Concise ideas about leadership and strategy in short format.',

'contact.backTop':
  'Back to the top',

  /* ==================================================
   FOOTER
================================================== */

'footer.homeLabel':
  'Back to home',

'footer.role':
  'CEO · Strategy · Leadership',

'footer.description':
  'An executive vision focused on building organizations, developing teams and turning strategic decisions into sustainable results.',

'footer.navigationLabel':
  'Footer navigation',

'footer.navigationTitle':
  'Navigation',

'footer.profile':
  'Profile',

'footer.trajectory':
  'Career',

'footer.recognitions':
  'Recognitions',

'footer.services':
  'Services',

'footer.contact':
  "Let's talk",

'footer.connectTitle':
  'Connect',

'footer.professionalContactTitle':
  'Professional contact',

'footer.contactTitle':
  'Let’s build a purposeful conversation.',

'footer.contactDescription':
  'For keynotes, consulting, executive mentoring, media opportunities, events and strategic partnerships.',

'footer.contactButton':
  'Start a conversation',

'footer.statementLine1':
  'Leadership means turning a vision',

'footer.statementLine2':
  'into actions that transform.',

'footer.rights':
  'All rights reserved.',

'footer.bottomMessage':
  'Leadership · Strategy · Transformation',

'footer.backTop':
  'Back to top',

'footer.backTopLabel':
  'Back to the top of the page',
    },

    fr: {
      /* ==================================================
         LANGUES
      ================================================== */

      'language.label': 'Sélectionner la langue',
      'language.spanish': 'Español',
      'language.english': 'Inglés',
      'language.french': 'Francés',
      /* ==================================================
         HEADER
      ================================================== */

      'header.homeLabel': "Aller à l'accueil",
      'header.menuLabel': 'Ouvrir ou fermer le menu',
      'header.navigationLabel': 'Navigation principale',

      'header.role': 'CEO · STRATÉGIE · LEADERSHIP',
      'header.profile': 'Profil',
      'header.trajectory': 'Parcours',
      'header.recognitions': 'Distinctions',
      'header.services': 'Services',
      'header.contact': 'Échangeons',
      'header.followLabel': 'Suivez-moi',

      /* ==================================================
         HERO
      ================================================== */

      'hero.eyebrow': 'CEO · Stratégie · Leadership',
      'hero.name': 'Dani',
      'hero.lastname': 'Ceballos',

      'hero.statement':
        'Un leadership qui transforme la vision, la stratégie et le sens en résultats durables.',

      'hero.description':
        'Un dirigeant engagé dans la construction d’organisations solides, l’accompagnement d’équipes performantes et la transformation des décisions stratégiques en opportunités de croissance.',

      'hero.services': 'Voir les services',
      'hero.contact': 'Échangeons',
      'hero.photo': 'Photographie professionnelle',
      'hero.signatureRole': 'CEO · Stratégie · Leadership',
      'hero.profile': 'Profil exécutif',
      'hero.trajectory': 'Découvrir son parcours',

      /* ==================================================
         PROFIL
        ================================================== */

'profile.label': 'Profil professionnel',

'profile.titleLine1': 'Stratégie, leadership',
'profile.titleLine2': 'et vision d’entreprise.',

'profile.introduction1':
  'Dani Ceballos a construit son parcours professionnel autour de la direction stratégique, du développement des équipes et de la prise de décisions orientée vers des résultats durables.',

'profile.introduction2':
  'Sa vision associe expérience exécutive, leadership humain et compréhension approfondie des défis auxquels les organisations sont aujourd’hui confrontées.',

'profile.quote':
  'Les organisations progressent lorsqu’il existe une vision claire, des personnes engagées et des décisions capables de se transformer en actions.',

'profile.signatureRole': 'CEO · Stratégie · Leadership',

'profile.pillar1Title': 'Vision stratégique',
'profile.pillar1Description':
  'La capacité à identifier les opportunités, anticiper les défis et transformer les objectifs organisationnels en plans d’action clairs et mesurables.',

'profile.pillar2Title': 'Leadership humain',
'profile.pillar2Description':
  'Une manière de diriger fondée sur la confiance, l’écoute et le développement d’équipes capables de relever de nouveaux défis.',

'profile.pillar3Title': 'Orientation résultats',
'profile.pillar3Description':
  'Des décisions soutenues par des objectifs, un suivi rigoureux et une exécution disciplinée permettant de créer une valeur durable.',

'profile.footerLabel': 'Expérience exécutive',
'profile.footerLink': 'Voir le parcours professionnel',


/* ==================================================
   PARCOURS
================================================== */

'trajectory.label': 'Mon parcours professionnel',

'trajectory.titleLine1': 'Une expérience qui construit',
'trajectory.titleLine2': 'la vision et les résultats.',

'trajectory.introduction1':
  'Un parcours marqué par l’apprentissage continu, la direction d’équipes et la construction de stratégies orientées vers la croissance organisationnelle.',

'trajectory.introduction2':
  'Chaque étape représente une occasion de comprendre de nouveaux défis, d’accompagner les personnes et de transformer les objectifs en actions concrètes.',

'trajectory.summaryLabel': 'Résumé professionnel',
'trajectory.summaryYears': 'Années d’expérience exécutive',

'trajectory.summaryDescription':
  'Expérience en leadership, planification stratégique, gestion de projets et développement des équipes.',

'trajectory.summaryLink': 'Échangeons',

'trajectory.currentPeriod': '2016 — Aujourd’hui',
'trajectory.currentPosition': 'Directeur Général',
'trajectory.currentCompany': 'La Ofrenda S.A.',
'trajectory.currentStatus': 'Actuel',

'trajectory.currentDescription':
  'Direction stratégique de La Ofrenda S.A., favorisant la croissance organisationnelle, l’innovation, le renforcement institutionnel et le développement d’équipes hautement performantes.',

'trajectory.currentResult1':
  'Direction et suivi des plans stratégiques.',

'trajectory.currentResult2':
  'Renforcement des équipes et de la culture organisationnelle.',

'trajectory.currentResult3':
  'Développement de nouvelles opportunités et alliances.',

'trajectory.currentSkill1': 'Stratégie',
'trajectory.currentSkill2': 'Leadership',
'trajectory.currentSkill3': 'Direction',

'trajectory.previousPeriod1': '2021 — 2024',
'trajectory.previousPosition1': 'Direction stratégique',
'trajectory.previousCompany1': 'Organisation précédente · Colombie',

'trajectory.previousDescription1':
  'Leadership de projets et de processus de transformation visant à améliorer l’efficacité, renforcer le travail collaboratif et consolider les objectifs de l’entreprise.',

'trajectory.previousResult1':
  'Coordination de projets multidisciplinaires.',

'trajectory.previousResult2':
  'Conception de stratégies d’amélioration.',

'trajectory.previousResult3':
  'Accompagnement et développement des équipes.',

'trajectory.previousSkill1': 'Planification',
'trajectory.previousSkill2': 'Gestion',
'trajectory.previousSkill3': 'Transformation',

'trajectory.previousPeriod2': '2018 — 2021',
'trajectory.previousPosition2': 'Gestion et leadership de projets',
'trajectory.previousCompany2': 'Expérience professionnelle · Colombie',

'trajectory.previousDescription2':
  'Participation à des processus de gestion, de coordination et d’exécution ayant permis de développer une vision globale du leadership et des opérations de l’entreprise.',

'trajectory.previousResult4':
  'Suivi des indicateurs et des objectifs.',

'trajectory.previousResult5':
  'Coordination des activités opérationnelles.',

'trajectory.previousResult6':
  'Construction de relations fondées sur la confiance.',

'trajectory.previousSkill4': 'Exécution',
'trajectory.previousSkill5': 'Processus',
'trajectory.previousSkill6': 'Équipes',

'trajectory.footerLabel': 'Parcours professionnel',
'trajectory.footerLink': 'Voir les distinctions',

/* ==================================================
   DISTINCTIONS
================================================== */

'recognitions.label': 'Distinctions',

'recognitions.titleLine1': 'Un parcours soutenu',
'recognitions.titleLine2': 'par l’expérience et les réussites.',

'recognitions.introduction1':
  'Chaque distinction représente un processus, une équipe et une expérience ayant contribué à consolider une vision exécutive axée sur la croissance et la transformation.',

'recognitions.introduction2':
  'Cet espace réunira les prix, certifications, participations remarquables et réalisations professionnelles de Dani Ceballos.',

'recognitions.featuredType': 'Distinction principale',
'recognitions.featuredYear': '2026',

'recognitions.featuredTitle':
  'Leadership Stratégique',

'recognitions.featuredDescription':
  'Une distinction provisoire destinée à mettre en valeur une contribution importante dans le leadership, la stratégie d’entreprise ou le développement organisationnel.',

'recognitions.featuredOrganization':
  'Organisation ou institution',

'recognitions.card2Type': 'Certification',
'recognitions.card2Title':
  'Stratégie d’Entreprise',

'recognitions.card2Description':
  'Formation ou certification liée au leadership, à la gestion, à l’innovation ou à la prise de décisions stratégiques.',

'recognitions.card2Organization': 'Institution',
'recognitions.card2Year': '2025',

'recognitions.card3Type': 'Participation',
'recognitions.card3Title':
  'Conférences et Leadership',

'recognitions.card3Description':
  'Participation provisoire à un événement, un panel, un forum ou un espace de discussion sur le leadership et la croissance des entreprises.',

'recognitions.card3Organization': 'Événement professionnel',
'recognitions.card3Year': '2024',

'recognitions.card4Type': 'Distinction',
'recognitions.card4Title':
  'Équipes Hautement Performantes',

'recognitions.card4Description':
  'Distinction provisoire pour l’accompagnement des équipes, l’atteinte des résultats et le renforcement de la culture organisationnelle.',

'recognitions.card4Organization': 'Organisation',
'recognitions.card4Year': '2023',

'recognitions.card5Type': 'Prochain chapitre',
'recognitions.card5Title':
  'Prochain Chapitre',

'recognitions.card5Description':
  'De nouvelles distinctions, certifications et participations seront ajoutées au fur et à mesure de l’évolution du parcours professionnel de Dani Ceballos.',

'recognitions.card5Organization': 'En construction',

'recognitions.footerLabel': 'Informations provisoires',

'recognitions.footerDescription':
  'Les distinctions actuelles seront remplacées par les informations, photographies, certificats et institutions réels fournis par le client.',

'recognitions.footerLink': 'Découvrir les services',

/* ==================================================
   SERVICES
================================================== */

'services.label': 'Services',

'services.titleLine1': 'Une expérience exécutive mise',
'services.titleLine2': 'au service de nouvelles idées.',

'services.introduction1':
  'Des espaces de conversation, d’accompagnement et de construction stratégique pour les organisations, les équipes et les dirigeants qui souhaitent avancer avec plus de clarté et de sens.',

'services.introduction2':
  'Chaque service sera adapté au contexte, aux besoins et aux objectifs de chaque organisation.',

'services.card1Label': 'Conférences',
'services.card1Title':
  'Leadership, stratégie et transformation',
'services.card1Description':
  'Des conversations destinées aux équipes, dirigeants et organisations sur la prise de décision, la culture, le sens et la création de résultats durables.',
'services.card1Topic1': 'Leadership exécutif',
'services.card1Topic2': 'Culture organisationnelle',
'services.card1Topic3': 'Transformation d’entreprise',

'services.card2Label': 'Conseil',
'services.card2Title':
  'Accompagnement stratégique des organisations',
'services.card2Description':
  'Analyse et accompagnement pour organiser les priorités, renforcer les processus et transformer les objectifs de l’entreprise en plans d’action clairs et réalisables.',
'services.card2Topic1': 'Planification stratégique',
'services.card2Topic2': 'Définition des priorités',
'services.card2Topic3': 'Suivi des résultats',

'services.card3Label': 'Mentorat exécutif',
'services.card3Title':
  'Des conversations pour les dirigeants et les équipes de direction',
'services.card3Description':
  'Des espaces individuels ou collectifs destinés à renforcer les compétences en direction, communication, discernement et prise de décision consciente.',
'services.card3Topic1': 'Développement du leadership',
'services.card3Topic2': 'Prise de décision',
'services.card3Topic3': 'Communication exécutive',

'services.card4Label': 'Alliances et événements',
'services.card4Title':
  'Participation à des espaces à fort impact',
'services.card4Description':
  'Participation à des panels, rencontres d’entreprise, événements, entretiens et projets partageant une vision responsable du leadership et de la transformation.',
'services.card4Topic1': 'Panels professionnels',
'services.card4Topic2': 'Événements institutionnels',
'services.card4Topic3': 'Alliances stratégiques',

'services.informationLink': 'Demander des informations',
'services.inviteLink': 'Inviter Dani',

'services.calloutLabel': 'Construisons une proposition',
'services.calloutTitle':
  'Chaque organisation relève un défi différent.',
'services.calloutDescription':
  'Parlez-nous de l’objectif de votre événement, projet ou processus d’accompagnement afin de construire une proposition adaptée à vos besoins.',
'services.calloutLink': 'Démarrer une conversation',

/* ==================================================
   CONTACT
================================================== */

'contact.label':
  'Échangeons',

'contact.titleLine1':
  'Les grandes opportunités commencent',

'contact.titleLine2':
  'par une conversation.',

'contact.introduction1':
  'Cet espace est ouvert aux invitations, alliances, conférences, entretiens, missions de conseil et projets partageant une vision responsable du leadership et de la transformation.',

'contact.introduction2':
  'Présentez-nous brièvement l’objectif de votre proposition afin que nous puissions l’orienter vers le canal approprié.',

'contact.informationLabel':
  'Échangeons',

'contact.informationTitle':
  'Échangeons',

'contact.informationDescription':
  'Si vous recherchez un leadership stratégique, une conférence, une mission de conseil ou une alliance institutionnelle, je serai ravi de découvrir votre initiative.',
'contact.emailLabel':
  'Adresse électronique',

'contact.locationLabel':
  'Localisation',

'contact.locationValue':
  'Colombie',

'contact.availabilityLabel':
  'Disponibilité',

'contact.availabilityValue':
  'Invitations · Alliances · Médias',

'contact.connectLabel':
  'Connectez-vous avec Dani',

'contact.formLabel':
  'Envoyez-nous votre proposition',

'contact.formTitle':
  'Comment pouvons-nous commencer ?',

'contact.formDescription':
  'Complétez les informations suivantes et nous vous contacterons afin d’en savoir plus sur votre invitation, projet ou initiative.',

'contact.nameLabel':
  'Nom complet',

'contact.namePlaceholder':
  'Saisissez votre nom',

'contact.emailFieldLabel':
  'Adresse électronique',

'contact.emailPlaceholder':
  'email@entreprise.com',

'contact.organizationLabel':
  'Entreprise ou organisation',

'contact.organizationPlaceholder':
  'Nom de l’organisation',

'contact.reasonLabel':
  'Motif du contact',

'contact.reasonPlaceholder':
  'Sélectionnez une option',

'contact.reasonConference':
  'Conférence ou événement',

'contact.reasonConsulting':
  'Conseil stratégique',

'contact.reasonMentoring':
  'Mentorat exécutif',

'contact.reasonMedia':
  'Médias ou entretien',

'contact.reasonPartnership':
  'Alliance stratégique',

'contact.reasonOther':
  'Autre',

'contact.messageLabel':
  'Parlez-nous de votre proposition',

'contact.messagePlaceholder':
  'Décrivez brièvement l’objectif, la date et les principaux détails.',

'contact.formNotice':
  'En envoyant ce formulaire, vous confirmez que les informations fournies sont exactes.',

'contact.submit':
  'Envoyer la proposition',

'contact.successLabel':
  'Message enregistré',

'contact.successTitle':
  'Merci d’avoir initié cette conversation.',

'contact.successDescription':
  'La structure du formulaire fonctionne correctement. Nous connecterons ensuite l’envoi au canal de contact définitif.',

'contact.successButton':
  'Envoyer un autre message',

/* ==================================================
   RÉSEAUX SOCIAUX
================================================== */

'contact.socialLabel':
  'Suivez-moi',

'contact.socialTitleLine1':
  'Restons connectés',

'contact.socialTitleLine2':
  'sur d’autres plateformes.',

'contact.socialDescription':
  'Des contenus, réflexions et conversations sur le leadership, la stratégie, la croissance des entreprises et la transformation organisationnelle.',

'contact.linkedinLabel':
  'Réseau professionnel',

'contact.linkedinDescription':
  'Expérience exécutive, leadership et relations professionnelles.',

'contact.instagramLabel':
  'Marque personnelle',

'contact.instagramDescription':
  'Réflexions, expériences et moments du parcours professionnel.',

'contact.facebookLabel':
  'Communauté',

'contact.facebookDescription':
  'Actualités, nouveautés et contenus destinés à une communauté plus large.',

'contact.tiktokLabel':
  'Contenu court',

'contact.tiktokDescription':
  'Des idées concrètes sur le leadership et la stratégie en format court.',

'contact.backTop':
  'Retour en haut',

  /* ==================================================
   FOOTER
================================================== */

'footer.homeLabel':
  "Retour à l'accueil",

'footer.role':
  'CEO · Stratégie · Leadership',

'footer.description':
  'Une vision exécutive orientée vers la construction d’organisations, le développement des équipes et la transformation des décisions stratégiques en résultats durables.',

'footer.navigationLabel':
  'Navigation du pied de page',

'footer.navigationTitle':
  'Navigation',

'footer.profile':
  'Profil',

'footer.trajectory':
  'Parcours',

'footer.recognitions':
  'Distinctions',

'footer.services':
  'Services',

'footer.contact':
  'Échangeons',

'footer.connectTitle':
  'Connectez-vous',

'footer.professionalContactTitle':
  'Contact professionnel',

'footer.contactTitle':
  'Construisons une conversation porteuse de sens.',

'footer.contactDescription':
  'Pour les conférences, le conseil, le mentorat exécutif, les médias, les événements et les alliances stratégiques.',

'footer.contactButton':
  'Démarrer une conversation',

'footer.statementLine1':
  'Diriger, c’est transformer une vision',

'footer.statementLine2':
  'en actions qui transforment.',

'footer.rights':
  'Tous droits réservés.',

'footer.bottomMessage':
  'Leadership · Stratégie · Transformation',

'footer.backTop':
  'Retour en haut',

'footer.backTopLabel':
  'Retour en haut de la page',
    }
  };

  setLanguage(language: LanguageCode): void {
    this.currentLanguage.set(language);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, language);
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }

  translate(key: string): string {
    const language = this.currentLanguage();

    return (
      this.translations[language][key] ??
      this.translations.es[key] ??
      key
    );
  }

  private getInitialLanguage(): LanguageCode {
    if (typeof localStorage !== 'undefined') {
      const savedLanguage = localStorage.getItem(this.storageKey);

      if (this.isSupportedLanguage(savedLanguage)) {
        this.updateDocumentLanguage(savedLanguage);
        return savedLanguage;
      }
    }

    this.updateDocumentLanguage('es');
    return 'es';
  }

  private isSupportedLanguage(
    language: string | null
  ): language is LanguageCode {
    return (
      language === 'es' ||
      language === 'en' ||
      language === 'fr'
    );
  }

  private updateDocumentLanguage(language: LanguageCode): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }
}
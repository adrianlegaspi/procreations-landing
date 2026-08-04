export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];
export type LegalDocumentKey = "privacy" | "terms" | "eula" | "copyright";

export type InlinePart = {
  text: string;
  href?: string;
  strong?: boolean;
};

export type InlineContent = string | InlinePart[];

export type LegalSection = {
  heading: string;
  paragraphs: InlineContent[];
  list?: InlineContent[];
};

export type LegalDocument = {
  title: string;
  description: string;
  effectiveDate: string;
  introduction?: InlineContent[];
  sections: LegalSection[];
  related: InlineContent;
};

const paths = {
  en: {
    home: "/",
    privacy: "/privacy",
    terms: "/tos",
    eula: "/eula",
    copyright: "/copyright",
  },
  es: {
    home: "/es",
    privacy: "/es/privacidad",
    terms: "/es/terminos",
    eula: "/es/eula",
    copyright: "/es/derechos-de-autor",
  },
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(
  locale: Locale,
  page: "home" | LegalDocumentKey,
) {
  return paths[locale][page];
}

export function localizedLegalKey(
  locale: Locale,
  segment: string,
): LegalDocumentKey | null {
  const match = (Object.keys(paths[locale]) as Array<keyof (typeof paths)[Locale]>).find(
    (key) => key !== "home" && paths[locale][key].split("/").at(-1) === segment,
  );

  return match && match !== "home" ? match : null;
}

export const siteCopy = {
  en: {
    localeName: "English",
    skipToContent: "Skip to content",
    homeAriaLabel: "Pro Creations home",
    languageLabel: "Language",
    hero: "We build software, AI apps, and whatever software dream.",
    intro:
      "A focused developer studio delivering fast, reliable, and beautiful digital products.",
    contactButton: "Contact",
    capabilities: [
      {
        title: "Web & Mobile",
        description: "Modern, scalable apps with excellent DX and UX.",
      },
      {
        title: "AI Applications",
        description: "LLM-powered assistants, automation, and integrations.",
      },
      {
        title: "Consulting",
        description: "Architecture, performance, and product guidance.",
      },
    ],
    portfolioTitle: "Portfolio",
    portfolioIntro: "A selection of projects we’ve shipped.",
    cardomDescription: "A roguelike videogame with turn-based card combat.",
    contactTitle: "Let’s build your next idea",
    contactIntro:
      "Share a few details about the product, platform, or AI experience you want to ship. We’ll reach out within one business day.",
    footerBy: "by",
    legal: {
      privacy: "Privacy",
      terms: "Terms",
      eula: "EULA",
      copyright: "Copyright",
    },
    backHome: "Back to home",
    contactForm: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "Email address",
      messageLabel: "Project details",
      messagePlaceholder: "Tell us about the product, timeline, and any must-haves...",
      send: "Send message",
      sending: "Sending…",
      success: "Received! We’ll reply soon.",
      genericError: "Could not send message.",
      validation: {
        nameRequired: "Name is required.",
        namePattern:
          "Use 2-60 letters and you may include spaces, hyphen, or apostrophe.",
        emailRequired: "Email is required.",
        emailPattern: "Please enter a valid email address.",
        messageRequired: "Message is required.",
        messageMin: "Give us at least 10 characters.",
        messageMax: "Keep it under 2000 characters, please.",
      },
    },
  },
  es: {
    localeName: "Español",
    skipToContent: "Saltar al contenido",
    homeAriaLabel: "Inicio de Pro Creations",
    languageLabel: "Idioma",
    hero: "Creamos software, aplicaciones con IA y cualquier sueño de software.",
    intro:
      "Un estudio de desarrollo especializado en productos digitales rápidos, confiables y atractivos.",
    contactButton: "Contacto",
    capabilities: [
      {
        title: "Web y móvil",
        description: "Aplicaciones modernas y escalables con una excelente DX y UX.",
      },
      {
        title: "Aplicaciones con IA",
        description: "Asistentes con LLM, automatización e integraciones.",
      },
      {
        title: "Consultoría",
        description: "Arquitectura, rendimiento y orientación de producto.",
      },
    ],
    portfolioTitle: "Portafolio",
    portfolioIntro: "Una selección de proyectos que hemos lanzado.",
    cardomDescription: "Un videojuego roguelike con combates de cartas por turnos.",
    contactTitle: "Hagamos realidad tu próxima idea",
    contactIntro:
      "Cuéntanos sobre el producto, la plataforma o la experiencia con IA que quieres lanzar. Te contactaremos en un día hábil.",
    footerBy: "por",
    legal: {
      privacy: "Privacidad",
      terms: "Términos",
      eula: "EULA",
      copyright: "Derechos de autor",
    },
    backHome: "Volver al inicio",
    contactForm: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Dirección de correo",
      messageLabel: "Detalles del proyecto",
      messagePlaceholder: "Cuéntanos sobre el producto, los plazos y los requisitos...",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "¡Recibido! Te responderemos pronto.",
      genericError: "No se pudo enviar el mensaje.",
      validation: {
        nameRequired: "El nombre es obligatorio.",
        namePattern:
          "Usa de 2 a 60 letras; puedes incluir espacios, guiones o apóstrofos.",
        emailRequired: "El correo electrónico es obligatorio.",
        emailPattern: "Ingresa una dirección de correo válida.",
        messageRequired: "El mensaje es obligatorio.",
        messageMin: "Escribe al menos 10 caracteres.",
        messageMax: "El mensaje debe tener menos de 2000 caracteres.",
      },
    },
  },
} as const;

const internalLink = (locale: Locale, key: LegalDocumentKey, text: string): InlinePart => ({
  text,
  href: localizedPath(locale, key),
});

export const legalDocuments: Record<Locale, Record<LegalDocumentKey, LegalDocument>> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      description:
        "Privacy Policy for Pro Creations: how we handle data across our website and services.",
      effectiveDate: "Effective date",
      introduction: [
        "Pro Creations, operated by Adrian Legaspi Silva, respects your privacy. We do not collect, store, or sell personal data. This policy explains what minimal information may pass through our services and how third-party integrations we use handle their own data.",
      ],
      sections: [
        {
          heading: "Information We Collect",
          paragraphs: [
            "We do not directly collect or store personal information such as names, email addresses, or device identifiers. Any data submitted through contact forms is used solely to respond to your inquiry and is not retained beyond that purpose.",
          ],
        },
        {
          heading: "Third-Party Services",
          paragraphs: [
            "Some of our apps and services integrate third-party platforms that may collect data under their own privacy policies. These may include:",
            "We encourage you to review the privacy policies of any third-party services used within the specific app you are using.",
          ],
          list: [
            [
              { text: "Firebase (Google)", strong: true },
              { text: " — may be used for app infrastructure such as authentication or crash reporting. See " },
              { text: "Firebase Privacy", href: "https://firebase.google.com/support/privacy" },
              { text: "." },
            ],
            [
              { text: "Google Sign-In", strong: true },
              { text: " — if offered as a login option, authentication is handled entirely by Google. We do not receive or store your Google credentials. See " },
              { text: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
              { text: "." },
            ],
            [
              { text: "Sign in with Apple", strong: true },
              { text: " — if offered, authentication is handled entirely by Apple. We do not receive your Apple ID password or store authentication tokens beyond what Apple provides. See " },
              { text: "Apple Privacy Policy", href: "https://www.apple.com/legal/privacy/" },
              { text: "." },
            ],
          ],
        },
        {
          heading: "How We Use Information",
          paragraphs: [
            "We do not use personal data for advertising, profiling, or analytics beyond what is strictly necessary for the operation of a given service. Any information exchanged through third-party services is governed by those services' own policies.",
          ],
        },
        {
          heading: "Data Sharing",
          paragraphs: [
            "We do not share, sell, or trade personal data with any third parties. We have no advertising partners and do not engage in data brokering.",
          ],
        },
        {
          heading: "Children’s Privacy",
          paragraphs: [
            "Our services are not directed at children under 13. We do not knowingly collect data from minors. If you believe a child has provided personal information, please contact us so we can address it.",
          ],
        },
        {
          heading: "Your Choices",
          paragraphs: [
            "Since we do not store your personal data, there is typically nothing to request deletion of on our end. For data held by third-party services (e.g., Google, Apple), you can manage or delete it directly through their platforms or account settings.",
          ],
        },
        {
          heading: "Changes to This Policy",
          paragraphs: [
            "We may update this policy if our practices change. Updates will be reflected on this page with a revised effective date.",
          ],
        },
      ],
      related: [
        { text: "For terms governing use of the site, see our " },
        internalLink("en", "terms", "Terms of Service"),
        { text: ". For licensing of deliverables, see the " },
        internalLink("en", "eula", "EULA"),
        { text: ". For copyright information, see our " },
        internalLink("en", "copyright", "Copyright"),
        { text: " page." },
      ],
    },
    terms: {
      title: "Terms of Service",
      description:
        "Terms of Service for Pro Creations: the rules for using our website and services.",
      effectiveDate: "Effective date",
      sections: [
        {
          heading: "Acceptance of Terms",
          paragraphs: [
            "By accessing this site you agree to these Terms. If you do not agree, do not use the site.",
          ],
        },
        {
          heading: "Use of Site and Apps",
          paragraphs: [
            "You may not misuse the site or apps, including violating laws, distributing malware, or interfering with services. For apps, you must comply with app store terms (Google Play, Apple App Store).",
          ],
        },
        {
          heading: "User Accounts and Data",
          paragraphs: [
            "If you create an account, keep credentials secure. We may suspend accounts for violations. Data is handled per our Privacy Policy.",
          ],
        },
        {
          heading: "Subscriptions and Payments",
          paragraphs: [
            "Paid features or subscriptions auto-renew unless canceled. Refunds per app store policies. Prices may change with notice.",
          ],
        },
        {
          heading: "Intellectual Property",
          paragraphs: [
            "All content is owned by Pro Creations or licensed. You grant us rights to user-generated content.",
          ],
        },
        {
          heading: "Third-Party Services",
          paragraphs: [
            "Apps may integrate third-party services. We are not responsible for their policies or performance.",
          ],
        },
        {
          heading: "Termination",
          paragraphs: [
            "We may terminate access for violations. Upon termination, licenses end, and data may be deleted.",
          ],
        },
        {
          heading: "Disclaimers",
          paragraphs: [
            "Services provided “as is” without warranties. We do not guarantee uptime or error-free operation.",
          ],
        },
      ],
      related: [
        { text: "See our " },
        internalLink("en", "privacy", "Privacy Policy"),
        { text: " and " },
        internalLink("en", "eula", "EULA"),
        { text: "." },
      ],
    },
    eula: {
      title: "End User License Agreement (EULA)",
      description:
        "EULA for Pro Creations: license terms for using deliverables and software provided.",
      effectiveDate: "Effective date",
      sections: [
        {
          heading: "License Grant",
          paragraphs: [
            "Subject to full payment and any project-specific agreement, Pro Creations grants you a non-exclusive, non-transferable license to use the software/apps solely for personal or authorized business purposes. For apps, this includes installation on authorized devices per app store terms.",
          ],
        },
        {
          heading: "Restrictions",
          paragraphs: [
            "You may not copy, modify, reverse-engineer, distribute, or create derivative works. No resale or commercial redistribution without permission. Apps must be used on supported platforms (Android/iOS).",
          ],
        },
        {
          heading: "Ownership and Intellectual Property",
          paragraphs: [
            "Pro Creations retains all rights to the software. User-generated content may be used for service improvement.",
          ],
        },
        {
          heading: "Updates and Support",
          paragraphs: [
            "We may provide updates; continued use implies acceptance. Support is limited to standard channels; premium support may require fees.",
          ],
        },
        {
          heading: "Termination",
          paragraphs: [
            "License terminates on violation or account closure. Uninstall software upon termination.",
          ],
        },
        {
          heading: "Warranty Disclaimer",
          paragraphs: [
            "Software provided “as is” without warranties. We disclaim all implied warranties.",
          ],
        },
        {
          heading: "Limitation of Liability",
          paragraphs: [
            "Liability limited to purchase price. No indirect damages. App stores have separate refund policies.",
          ],
        },
      ],
      related: [
        { text: "See also our " },
        internalLink("en", "privacy", "Privacy Policy"),
        { text: " and " },
        internalLink("en", "terms", "Terms of Service"),
        { text: "." },
      ],
    },
    copyright: {
      title: "Copyright",
      description:
        "Copyright notice for Pro Creations: all intellectual property owned by Adrian Legaspi Silva.",
      effectiveDate: "Effective date",
      introduction: [
        [
          { text: "All content, software, and intellectual property made available through Pro Creations — including but not limited to websites, mobile applications, source code, graphics, text, and branding — are the exclusive property of " },
          { text: "Adrian Legaspi Silva", strong: true },
          { text: " unless otherwise noted." },
        ],
      ],
      sections: [
        {
          heading: "Ownership",
          paragraphs: [
            "© {year} Adrian Legaspi Silva. All rights reserved. Pro Creations is a trade name operated by Adrian Legaspi Silva. All works published under this name remain the sole intellectual property of the individual author.",
          ],
        },
        {
          heading: "Permitted Use",
          paragraphs: [
            "You may view and access the content for personal, non-commercial use only. Any reproduction, redistribution, modification, or commercial use of any content without prior written permission is strictly prohibited.",
          ],
        },
        {
          heading: "Third-Party Content",
          paragraphs: [
            "Certain assets, libraries, or components used within Pro Creations products may be licensed under their own terms (e.g., open-source licenses). Where applicable, those licenses are honored and attribution is provided within the respective project.",
          ],
        },
        {
          heading: "App Store Distribution",
          paragraphs: [
            [
              { text: "Applications distributed through the Apple App Store or Google Play Store are published by Adrian Legaspi Silva. All app content, design, and functionality remain the exclusive property of the author. Use of the apps is subject to the applicable " },
              internalLink("en", "eula", "End User License Agreement"),
              { text: "." },
            ],
          ],
        },
        {
          heading: "DMCA & Infringement",
          paragraphs: [
            "If you believe any content infringes your copyright, please contact us with a description of the work, the location of the allegedly infringing content, and your contact information. We will respond promptly to valid notices.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "For licensing inquiries or permission requests, please reach out through the contact form on this site.",
          ],
        },
      ],
      related: [
        { text: "See also our " },
        internalLink("en", "privacy", "Privacy Policy"),
        { text: ", " },
        internalLink("en", "terms", "Terms of Service"),
        { text: ", and " },
        internalLink("en", "eula", "EULA"),
        { text: "." },
      ],
    },
  },
  es: {
    privacy: {
      title: "Política de privacidad",
      description:
        "Política de privacidad de Pro Creations: cómo tratamos los datos en nuestro sitio web y servicios.",
      effectiveDate: "Fecha de entrada en vigor",
      introduction: [
        "Pro Creations, operado por Adrian Legaspi Silva, respeta tu privacidad. No recopilamos, almacenamos ni vendemos datos personales. Esta política explica qué información mínima puede pasar por nuestros servicios y cómo tratan sus propios datos las integraciones de terceros que utilizamos.",
      ],
      sections: [
        {
          heading: "Información que recopilamos",
          paragraphs: [
            "No recopilamos ni almacenamos directamente información personal como nombres, direcciones de correo electrónico o identificadores de dispositivos. Los datos enviados mediante los formularios de contacto se utilizan únicamente para responder a tu consulta y no se conservan más allá de ese propósito.",
          ],
        },
        {
          heading: "Servicios de terceros",
          paragraphs: [
            "Algunas de nuestras aplicaciones y servicios integran plataformas de terceros que pueden recopilar datos conforme a sus propias políticas de privacidad. Estas pueden incluir:",
            "Te recomendamos revisar las políticas de privacidad de cualquier servicio de terceros utilizado en la aplicación específica que estés usando.",
          ],
          list: [
            [
              { text: "Firebase (Google)", strong: true },
              { text: " puede utilizarse para la infraestructura de la aplicación, como autenticación o informes de fallos. Consulta la " },
              { text: "privacidad de Firebase", href: "https://firebase.google.com/support/privacy" },
              { text: "." },
            ],
            [
              { text: "Inicio de sesión con Google", strong: true },
              { text: " gestiona la autenticación íntegramente mediante Google cuando se ofrece como opción. No recibimos ni almacenamos tus credenciales de Google. Consulta la " },
              { text: "Política de Privacidad de Google", href: "https://policies.google.com/privacy" },
              { text: "." },
            ],
            [
              { text: "Iniciar sesión con Apple", strong: true },
              { text: " gestiona la autenticación íntegramente mediante Apple cuando se ofrece. No recibimos la contraseña de tu Apple ID ni almacenamos tokens de autenticación aparte de lo que proporciona Apple. Consulta la " },
              { text: "Política de Privacidad de Apple", href: "https://www.apple.com/legal/privacy/" },
              { text: "." },
            ],
          ],
        },
        {
          heading: "Cómo utilizamos la información",
          paragraphs: [
            "No utilizamos datos personales para publicidad, elaboración de perfiles ni análisis más allá de lo estrictamente necesario para operar un servicio determinado. Toda información intercambiada mediante servicios de terceros se rige por las políticas de esos servicios.",
          ],
        },
        {
          heading: "Divulgación de datos",
          paragraphs: [
            "No compartimos, vendemos ni intercambiamos datos personales con terceros. No tenemos socios publicitarios ni participamos en la intermediación de datos.",
          ],
        },
        {
          heading: "Privacidad de los menores",
          paragraphs: [
            "Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos deliberadamente datos de menores. Si crees que un menor ha proporcionado información personal, contáctanos para que podamos atender la situación.",
          ],
        },
        {
          heading: "Tus opciones",
          paragraphs: [
            "Como no almacenamos tus datos personales, normalmente no hay nada cuya eliminación debas solicitarnos. Puedes gestionar o eliminar los datos en poder de servicios de terceros, como Google o Apple, directamente desde sus plataformas o la configuración de tu cuenta.",
          ],
        },
        {
          heading: "Cambios a esta política",
          paragraphs: [
            "Podemos actualizar esta política si cambian nuestras prácticas. Las actualizaciones aparecerán en esta página con una fecha de entrada en vigor revisada.",
          ],
        },
      ],
      related: [
        { text: "Consulta nuestros " },
        internalLink("es", "terms", "Términos del servicio"),
        { text: " para conocer las condiciones de uso del sitio, el " },
        internalLink("es", "eula", "EULA"),
        { text: " para las licencias de los entregables y nuestra página de " },
        internalLink("es", "copyright", "Derechos de autor"),
        { text: "." },
      ],
    },
    terms: {
      title: "Términos del servicio",
      description:
        "Términos del servicio de Pro Creations: las reglas para utilizar nuestro sitio web y servicios.",
      effectiveDate: "Fecha de entrada en vigor",
      sections: [
        {
          heading: "Aceptación de los términos",
          paragraphs: [
            "Al acceder a este sitio, aceptas estos Términos. Si no estás de acuerdo, no utilices el sitio.",
          ],
        },
        {
          heading: "Uso del sitio y las aplicaciones",
          paragraphs: [
            "No puedes hacer un uso indebido del sitio o las aplicaciones, lo que incluye infringir leyes, distribuir software malicioso o interferir con los servicios. En el caso de las aplicaciones, debes cumplir los términos de la tienda correspondiente, incluidos los de Google Play y Apple App Store.",
          ],
        },
        {
          heading: "Cuentas de usuario y datos",
          paragraphs: [
            "Si creas una cuenta, mantén seguras tus credenciales. Podemos suspender cuentas por incumplimientos. Los datos se tratan conforme a nuestra Política de privacidad.",
          ],
        },
        {
          heading: "Suscripciones y pagos",
          paragraphs: [
            "Las funciones de pago o suscripciones se renuevan automáticamente salvo que se cancelen. Los reembolsos se rigen por las políticas de la tienda de aplicaciones. Los precios pueden cambiar con previo aviso.",
          ],
        },
        {
          heading: "Propiedad intelectual",
          paragraphs: [
            "Todo el contenido pertenece a Pro Creations o se utiliza bajo licencia. Nos concedes derechos sobre el contenido generado por usuarios.",
          ],
        },
        {
          heading: "Servicios de terceros",
          paragraphs: [
            "Las aplicaciones pueden integrar servicios de terceros. No somos responsables de sus políticas ni de su funcionamiento.",
          ],
        },
        {
          heading: "Terminación",
          paragraphs: [
            "Podemos cancelar el acceso por incumplimientos. Cuando se cancela el acceso, las licencias terminan y los datos pueden eliminarse.",
          ],
        },
        {
          heading: "Exclusión de garantías",
          paragraphs: [
            "Los servicios se proporcionan “tal cual”, sin garantías. No garantizamos la disponibilidad continua ni un funcionamiento libre de errores.",
          ],
        },
      ],
      related: [
        { text: "Consulta nuestra " },
        internalLink("es", "privacy", "Política de privacidad"),
        { text: " y el " },
        internalLink("es", "eula", "EULA"),
        { text: "." },
      ],
    },
    eula: {
      title: "Contrato de licencia de usuario final (EULA)",
      description:
        "EULA de Pro Creations: condiciones de licencia para utilizar los entregables y el software proporcionado.",
      effectiveDate: "Fecha de entrada en vigor",
      sections: [
        {
          heading: "Concesión de licencia",
          paragraphs: [
            "Sujeto al pago total y a cualquier acuerdo específico del proyecto, Pro Creations te concede una licencia no exclusiva e intransferible para utilizar el software o las aplicaciones únicamente con fines personales o empresariales autorizados. En el caso de las aplicaciones, esto incluye su instalación en dispositivos autorizados conforme a los términos de la tienda correspondiente.",
          ],
        },
        {
          heading: "Restricciones",
          paragraphs: [
            "No puedes copiar, modificar, aplicar ingeniería inversa, distribuir ni crear obras derivadas. No se permite la reventa ni la redistribución comercial sin autorización. Las aplicaciones deben utilizarse en plataformas compatibles, incluidos Android y iOS.",
          ],
        },
        {
          heading: "Titularidad y propiedad intelectual",
          paragraphs: [
            "Pro Creations conserva todos los derechos sobre el software. El contenido generado por usuarios puede utilizarse para mejorar el servicio.",
          ],
        },
        {
          heading: "Actualizaciones y soporte",
          paragraphs: [
            "Podemos proporcionar actualizaciones; el uso continuado implica su aceptación. El soporte se limita a los canales estándar y el soporte prémium puede requerir el pago de tarifas.",
          ],
        },
        {
          heading: "Terminación",
          paragraphs: [
            "La licencia termina en caso de incumplimiento o cierre de la cuenta. Debes desinstalar el software cuando termine la licencia.",
          ],
        },
        {
          heading: "Exclusión de garantías",
          paragraphs: [
            "El software se proporciona “tal cual”, sin garantías. Rechazamos todas las garantías implícitas.",
          ],
        },
        {
          heading: "Limitación de responsabilidad",
          paragraphs: [
            "La responsabilidad se limita al precio de compra. No somos responsables de daños indirectos. Las tiendas de aplicaciones tienen políticas de reembolso independientes.",
          ],
        },
      ],
      related: [
        { text: "Consulta también nuestra " },
        internalLink("es", "privacy", "Política de privacidad"),
        { text: " y nuestros " },
        internalLink("es", "terms", "Términos del servicio"),
        { text: "." },
      ],
    },
    copyright: {
      title: "Derechos de autor",
      description:
        "Aviso de derechos de autor de Pro Creations: toda la propiedad intelectual pertenece a Adrian Legaspi Silva.",
      effectiveDate: "Fecha de entrada en vigor",
      introduction: [
        [
          { text: "Todo el contenido, software y propiedad intelectual disponibles a través de Pro Creations, incluidos, entre otros, sitios web, aplicaciones móviles, código fuente, gráficos, textos y elementos de marca, son propiedad exclusiva de " },
          { text: "Adrian Legaspi Silva", strong: true },
          { text: ", salvo que se indique lo contrario." },
        ],
      ],
      sections: [
        {
          heading: "Titularidad",
          paragraphs: [
            "© {year} Adrian Legaspi Silva. Todos los derechos reservados. Pro Creations es un nombre comercial operado por Adrian Legaspi Silva. Todas las obras publicadas bajo este nombre siguen siendo propiedad intelectual exclusiva del autor individual.",
          ],
        },
        {
          heading: "Uso permitido",
          paragraphs: [
            "Puedes ver y acceder al contenido únicamente para uso personal y no comercial. Queda estrictamente prohibida la reproducción, redistribución, modificación o utilización comercial de cualquier contenido sin autorización previa por escrito.",
          ],
        },
        {
          heading: "Contenido de terceros",
          paragraphs: [
            "Determinados recursos, bibliotecas o componentes utilizados en los productos de Pro Creations pueden estar sujetos a sus propias licencias, incluidas licencias de código abierto. Cuando corresponde, se respetan esas licencias y se proporciona la atribución dentro del proyecto respectivo.",
          ],
        },
        {
          heading: "Distribución en tiendas de aplicaciones",
          paragraphs: [
            [
              { text: "Las aplicaciones distribuidas mediante Apple App Store o Google Play Store son publicadas por Adrian Legaspi Silva. Todo el contenido, diseño y funcionamiento de las aplicaciones siguen siendo propiedad exclusiva del autor. El uso de las aplicaciones está sujeto al " },
              internalLink("es", "eula", "Contrato de licencia de usuario final"),
              { text: " aplicable." },
            ],
          ],
        },
        {
          heading: "DMCA e infracciones",
          paragraphs: [
            "Si consideras que algún contenido infringe tus derechos de autor, contáctanos con una descripción de la obra, la ubicación del contenido presuntamente infractor y tu información de contacto. Responderemos oportunamente a las notificaciones válidas.",
          ],
        },
        {
          heading: "Contacto",
          paragraphs: [
            "Para consultas sobre licencias o solicitudes de autorización, utiliza el formulario de contacto de este sitio.",
          ],
        },
      ],
      related: [
        { text: "Consulta también nuestra " },
        internalLink("es", "privacy", "Política de privacidad"),
        { text: ", nuestros " },
        internalLink("es", "terms", "Términos del servicio"),
        { text: " y el " },
        internalLink("es", "eula", "EULA"),
        { text: "." },
      ],
    },
  },
};

export function getAlternates(page: "home" | LegalDocumentKey, locale: Locale) {
  return {
    canonical: localizedPath(locale, page),
    languages: {
      en: localizedPath("en", page),
      es: localizedPath("es", page),
      "x-default": localizedPath("en", page),
    },
  };
}

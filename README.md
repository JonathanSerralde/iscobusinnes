# ISCOBusiness — Portal Institucional Matriz
> **International Supreme Council for Social, Business and Industrial Development, A.C.**  
> Portal oficial institucional y ecosistema de educación abierta modular, certificación laboral y vinculación en México.  
> 🌐 [iscobusiness.edu.mx](https://iscobusiness.edu.mx)

---

## 🏛️ Propósito Institucional

**ISCOBusiness** es el portal matriz de una Organización de la Sociedad Civil (Asociación Civil sin fines de lucro) que articula educación abierta, evaluación con fines de certificación de competencias laborales oficiales (**SEP-CONOCER**), educación continua y programas de vinculación comunitaria y productiva en México.

El sistema digital integra el ADN visual y académico del **Instituto Ibérica**, una arquitectura editorial de rigor institucional (estilo UNESCO) y una lógica cromática por área sustantiva que orienta a personas trabajadoras, estudiantes y organizaciones aliadas.

---

## 🧭 Ejes y Unidades Sustantivas

El ecosistema articula 5 unidades estratégicas con atribución cromática y funcional propia:

| Eje Sustantivo | Entidad / Referencia | Color Rector | Propósito Principal |
| :--- | :--- | :--- | :--- |
| **Bachillerato Modular** | Instituto Ibérica / Prepa Abierta | Cian (`#0284c7`) | Acompañamiento docente para acreditar los 22 módulos oficiales de la SEP. |
| **Certificación Laboral** | SEP-CONOCER / ECE760-26 | Violeta (`#4f46e5`) | Evaluación y emisión de certificados con validez nacional oficial en competencias laborales. |
| **Educación Continua** | Diplomados y Cursos | Esmeralda (`#0d9488`) | Capacitación técnica especializada y actualización continua para el sector productivo. |
| **Vinculación Estratégica** | Alianzas y Concertación | Dorado (`#d97706`) | Convenios de colaboración con empresas, dependencias públicas y comunidades. |
| **Transparencia y Gobernanza** | Certeza Jurídica | Navy (`#083665`) | Publicación de estatutos, actas, convenios vigentes y resoluciones oficiales. |

---

## 🚀 Tecnologías y Arquitectura

Este proyecto está construido con un stack moderno enfocado en máxima velocidad de carga, accesibilidad (WCAG AAA) y escalabilidad:

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Lenguaje:** [TypeScript 5](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS 3.4](https://tailwindcss.com/) + CSS Variables personalizadas
- **Tipografía:** [Manrope](https://fonts.google.com/specimen/Manrope) (sans-serif primaria) y Newsreader (editorial)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **SEO & Datos Estructurados:** Metadata API dinámica, OpenGraph, JSON-LD (`BreadcrumbList`, `EducationalOrganization`) y `sitemap.ts`

---

## 📂 Estructura del Proyecto

```bash
├── .agents/                      # Directrices y reglas de estilo normativas
│   └── rules/
│       └── frontend-style-guide.md
├── AGENTS.md                     # Manual normativo de arquitectura frontend y diseño
├── public/                       # Activos estáticos, logotipos y fotografía institucional
│   ├── img/                      # Fotografías auténticas del personal, instalaciones y rutas
│   └── favicon.svg
├── src/
│   ├── app/                      # Rutas principales de Next.js (App Router)
│   │   ├── page.tsx              # Página de Inicio matriz
│   │   ├── nosotros/             # Identidad, misión, pilares y gobernanza
│   │   ├── centro-de-asesoria/   # Bachillerato Modular (Instituto Ibérica)
│   │   ├── educacion-continua/   # Catálogo de diplomados y cursos
│   │   ├── vinculacion/          # Alianzas empresariales e institucionales
│   │   ├── conocimiento/         # Publicaciones, biblioteca digital y artículos
│   │   ├── contacto/             # Sedes presenciales y formulario de orientación
│   │   ├── transparencia/        # Marco legal, instrumentos y repositorio oficial
│   │   ├── sitemap.ts            # Generador de sitemap para motores de búsqueda
│   │   └── globals.css           # Tokens de diseño, gradientes y utilidades maestras
│   └── frontend/
│       └── components/           # Componentes modulares y reutilizables
│           ├── layout/           # Cabecera, pie de página, barra flotante WhatsApp
│           └── shared/           # HeroSection, CtaSection, TrustBar, ImpactModel
└── tailwind.config.ts            # Configuración de paleta, fuentes y contenedores
```

---

## 🛠️ Instalación y Ejecución Local

### Prerrequisitos
- **Node.js** 18.18.0 o superior
- **npm** (o `pnpm` / `yarn`)

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JonathanSerralde/iscobusinnes.git
   cd iscobusinnes
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   Visita [http://localhost:3000](http://localhost:3000) (o el puerto asignado en consola).

---

## 📜 Directrices de Diseño y Contribución

Todo desarrollo o adición al portal debe apegarse estrictamente a las reglas del archivo [`AGENTS.md`](./AGENTS.md):
- **Un solo `<h1>` por página** con jerarquía editorial estricta.
- **Ritmo de fondos alternados**: blanco puro, gris perla, navy institucional y cierre fotográfico con overlay blanco al 50%.
- **Cinta Sticky de Navegación (Ribbon Nav)**: visible en escritorio (`lg:block`), oculta en móviles y tablets para evitar duplicidad de menús.
- **Humanización radical del lenguaje**: redacción orientada a personas reales, evitando jerga corporativa fría o de "startup tecnológica".

---

## ⚖️ Marco Legal y Certeza Jurídica

**ISCOBusiness** opera como persona moral sin fines de lucro legalmente constituida en los Estados Unidos Mexicanos:
- **Figura Jurídica:** Asociación Civil (A.C.).
- **Acreditación Laboral:** Entidad de Certificación y Evaluación **ECE760-26** autorizada por el Consejo Nacional de Normalización y Certificación de Competencias Laborales (**CONOCER / SEP**).
- **Centro de Asesoría:** Instituto Ibérica, con registro y vinculación para el plan modular de Preparatoria Abierta oficial.

---

© 2026 International Supreme Council for Social, Business and Industrial Development, A.C. Todos los derechos reservados.

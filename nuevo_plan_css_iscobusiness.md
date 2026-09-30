# Nuevo Plan CSS para `iscobusiness.edu.mx`
**Versión actualizada con referencia híbrida:**  
**`iberica.iscobusiness.edu.mx` + lógica institucional/editorial de UNESCO + organización cromática por áreas inspirada en Fundación Carlos Slim**

---

# 1. Objetivo del documento

Este documento define el **nuevo plan de cambios en CSS** para `iscobusiness.edu.mx`, tomando en cuenta tres decisiones ya consolidadas:

1. **La base visual del proyecto debe seguir siendo el frontend aprobado de `iberica.iscobusiness.edu.mx`.**
2. **La estructura institucional y editorial puede fortalecerse con referencias como UNESCO.**
3. **La diferenciación por áreas puede enriquecerse con una lógica de color por vertical inspirada en Fundación Carlos Slim**, sin romper la identidad matriz del sitio.

Este plan **no sustituye** los contenidos del plan maestro general, sino que funciona como una **guía específica para la evolución del sistema visual y del CSS**.

---

# 2. Principio rector

El sitio no debe parecer una mezcla caótica de referencias.  
Debe sentirse como un sistema propio con esta lógica:

```text
ADN VISUAL
→ Instituto Ibérica

ARQUITECTURA INSTITUCIONAL Y EDITORIAL
→ UNESCO

LÓGICA DE COLOR POR ÁREA
→ Fundación Carlos Slim

IDENTIDAD FINAL
→ ISCOBusiness
```

---

# 3. Resultado visual esperado

El frontend final debe transmitir:

- claridad;
- confianza;
- modernidad institucional;
- estructura;
- amplitud organizacional;
- capacidad de crecimiento;
- coherencia visual;
- diferenciación por áreas;
- buena lectura editorial;
- preparación para impacto, datos y conocimiento.

No debe verse como:

- dashboard SaaS genérico;
- landing escolar simple;
- sitio corporativo rígido;
- mosaico desordenado de colores;
- portal con demasiados estilos desconectados.

---

# 4. Nuevo criterio general del sistema visual

Se propone que `iscobusiness.edu.mx` funcione con **tres capas cromáticas**:

## Capa 1 — Base institucional
Colores permanentes del ecosistema.

- Navy
- Blue
- Bright Blue
- Cyan
- White
- fondos suaves
- bordes suaves
- texto oscuro institucional

## Capa 2 — Acentos por área
Colores para distinguir verticales sin fragmentar la marca.

- Prepa Abierta → azul / cian
- Educación Continua → verde
- Certificación → violeta
- Vinculación → dorado
- Impacto / ODS / Observatorio → azul + verde
- Transparencia → navy + blue
- Conocimiento → blue + violet
- Donaciones / Colabora → gold + green

## Capa 3 — Estados semánticos
Colores para UI y feedback.

- success
- warning
- danger
- info

---

# 5. Colores principales propuestos

## 5.1. Base institucional

```css
:root {
  --navy: #083665;
  --blue: #075FBA;
  --blue-bright: #0788DC;
  --cyan: #13B6E8;

  --ink: #10243F;
  --ink-soft: #53657B;

  --white: #FFFFFF;
  --pearl: #F7F9FB;
  --blue-mist: #F3F8FC;
  --blue-pale: #EAF5FD;

  --line: #DBE5EE;
  --line-strong: #C5D5E3;
}
```

## Motivo

Esta base conserva el ADN visual de Ibérica y al mismo tiempo se alinea con la lógica institucional observada en UNESCO:

- azul como color dominante;
- fondos muy limpios;
- blancos y azules pálidos;
- texto oscuro no completamente negro;
- bordes suaves.

---

# 6. Colores por área

## 6.1. Educación Continua

```css
--green: #20AD91;
--green-strong: #14966F;
--green-soft: #E7F6F1;
```

## 6.2. Certificación

```css
--violet: #7569E8;
--violet-strong: #6358D2;
--violet-soft: #EFEDFC;
```

## 6.3. Vinculación

```css
--gold: #B38A36;
--gold-bright: #C49A3D;
--gold-soft: #F5EDDC;
```

## 6.4. Impacto / datos / observatorio

```css
--impact-blue: #075FBA;
--impact-cyan: #13B6E8;
--impact-green: #20AD91;
```

## 6.5. Estados auxiliares

```css
--success: #14966F;
--success-soft: #E7F6F1;

--warning: #B78324;
--warning-soft: #FAF3E3;

--danger: #8B1748;
--danger-soft: #F8E8EC;

--info: #0788DC;
--info-soft: #EAF5FD;
```

---

# 7. Qué se toma de UNESCO

De UNESCO **no se copiará la marca**, sino su manera de construir un sistema institucional.

## A adoptar

- gran uso de blancos y fondos suaves;
- jerarquía editorial clara;
- diferenciación entre títulos de página, secciones y piezas editoriales;
- variedad modular de tarjetas;
- bloques de impacto y métricas;
- secciones largas con ritmo visual;
- combinación de contenido institucional + noticias + datos + proyectos;
- paleta base dominante con colores secundarios controlados.

## No adoptar literalmente

- su azul exacto;
- su tipografía;
- sus layouts copiados;
- su iconografía exacta;
- su diseño institucional uno a uno.

---

# 8. Qué se toma de Fundación Carlos Slim

De Fundación Carlos Slim se adopará sobre todo **la lógica de navegación y agrupación por áreas**, además de la idea de **acento por vertical**.

## A adoptar

- una marca matriz fuerte;
- varias líneas de acción bajo una sola institución;
- agrupación por áreas antes que por piezas aisladas;
- reconocimiento cromático por vertical;
- lógica de ecosistema y servicios organizados.

## No adoptar literalmente

- densidad visual excesiva;
- demasiados enlaces simultáneos;
- saturación de subopciones en el header;
- mezcla intensa de muchas paletas sin control.

---

# 9. Nueva arquitectura del sistema CSS

El CSS deberá organizarse por capas:

```text
01-tokens.css
02-foundations.css
03-layout.css
04-components.css
05-sections.css
06-utilities.css
07-dark-mode.css
08-motion-accessibility.css
```

## 9.1. `01-tokens.css`

Contendrá:

- colores base;
- colores por área;
- colores semánticos;
- tipografía;
- radios;
- sombras;
- spacing;
- z-index;
- tamaños de contenedor.

## 9.2. `02-foundations.css`

Contendrá:

- `body`;
- tipografía base;
- headings;
- párrafos;
- listas;
- enlaces;
- imágenes;
- focus states;
- selección de texto.

## 9.3. `03-layout.css`

Contendrá:

- wrappers;
- contenedores;
- grid base;
- columnas;
- espaciados de secciones;
- breakpoints.

## 9.4. `04-components.css`

Contendrá:

- botones;
- cards;
- badges;
- tags;
- forms;
- accordions;
- tabs;
- modals;
- metric blocks;
- nav items;
- dropdowns.

## 9.5. `05-sections.css`

Contendrá estilos específicos por tipo de sección:

- hero;
- trust bar;
- rutas;
- impacto;
- observatorio;
- conocimiento;
- transparencia;
- footer;
- CTA band.

## 9.6. `06-utilities.css`

Helpers:

- alineación;
- espaciado;
- visibilidad;
- max-widths;
- display;
- text utilities;
- color utilities.

## 9.7. `07-dark-mode.css`

Tema oscuro institucional.

## 9.8. `08-motion-accessibility.css`

- reduced motion;
- focus;
- accessibility helpers;
- transiciones controladas.

---

# 10. Tipos de tokens recomendados

## 10.1. Tokens de color

Se recomienda usar prefijos claros:

```css
--color-bg
--color-fg
--color-primary
--color-secondary
--color-accent
--color-border
--color-muted
```

## 10.2. Tokens internos con prefijo de proyecto

Para evitar conflictos:

```css
--isco-blue
--isco-navy
--isco-green
--isco-violet
--isco-gold
--isco-ink
--isco-line
```

## 10.3. Asignación recomendada

```css
:root {
  --isco-navy: #083665;
  --isco-blue: #075FBA;
  --isco-blue-bright: #0788DC;
  --isco-cyan: #13B6E8;

  --isco-green: #20AD91;
  --isco-green-strong: #14966F;

  --isco-violet: #7569E8;
  --isco-violet-strong: #6358D2;

  --isco-gold: #B38A36;
  --isco-gold-bright: #C49A3D;

  --isco-ink: #10243F;
  --isco-ink-soft: #53657B;

  --isco-white: #FFFFFF;
  --isco-pearl: #F7F9FB;
  --isco-blue-mist: #F3F8FC;
  --isco-blue-pale: #EAF5FD;

  --isco-line: #DBE5EE;
  --isco-line-strong: #C5D5E3;

  --isco-success-soft: #E7F6F1;
  --isco-violet-soft: #EFEDFC;
  --isco-gold-soft: #F5EDDC;
  --isco-danger-soft: #F8E8EC;
  --isco-warning-soft: #FAF3E3;
}
```

---

# 11. Variables públicas del sistema

```css
:root {
  --background: var(--isco-white);
  --foreground: var(--isco-ink);

  --card: #FFFFFF;
  --card-foreground: var(--isco-ink);

  --popover: #FFFFFF;
  --popover-foreground: var(--isco-ink);

  --primary: var(--isco-blue);
  --primary-foreground: #FFFFFF;

  --secondary: var(--isco-navy);
  --secondary-foreground: #FFFFFF;

  --muted: var(--isco-blue-mist);
  --muted-foreground: var(--isco-ink-soft);

  --accent: var(--isco-blue-pale);
  --accent-foreground: var(--isco-blue);

  --border: var(--isco-line);
  --input: var(--isco-line-strong);
  --ring: var(--isco-blue);

  --destructive: #8B1748;
  --destructive-foreground: #FFFFFF;

  --success-color: var(--isco-green-strong);
  --warning-color: #B78324;
  --info-color: var(--isco-blue-bright);
}
```

---

# 12. Nueva organización de charts / dataviz

Como ahora ISCOBusiness tendrá:

- Impacto,
- ODS,
- Observatorio,
- Proyectos,
- indicadores,

se deben separar los colores de **brand** de los colores de **data**.

## 12.1. Paleta dataviz

```css
:root {
  --data-blue: #075FBA;
  --data-cyan: #13B6E8;
  --data-green: #20AD91;
  --data-gold: #B38A36;
  --data-violet: #7569E8;
}
```

## 12.2. Variables chart

```css
:root {
  --chart-1: var(--data-blue);
  --chart-2: var(--data-cyan);
  --chart-3: var(--data-green);
  --chart-4: var(--data-gold);
  --chart-5: var(--data-violet);
}
```

## Regla

Los gráficos no deben usar amarillos eléctricos, verdes fluorescentes ni rojos saturados que rompan el tono institucional.

---

# 13. Superficies suaves por categoría

Para evitar un sitio plano en blanco puro, cada vertical puede usar fondos suaves.

## Prepa Abierta

```css
--surface-prepa: #EAF5FD;
```

## Educación Continua

```css
--surface-continua: #E7F6F1;
```

## Certificación

```css
--surface-certificacion: #EFEDFC;
```

## Vinculación

```css
--surface-vinculacion: #F5EDDC;
```

## Impacto / Observatorio

```css
--surface-impacto: #F3F8FC;
```

## Transparencia

```css
--surface-transparencia: #F7F9FB;
```

## Regla

Estos fondos deben usarse en:

- bloques destacados;
- pequeños módulos;
- headers internos;
- callouts;
- bandas de apoyo.

No deben convertir cada página completa en un color dominante.

---

# 14. Tipología de componentes

El sistema debe dejar de depender de una sola tarjeta genérica.

## Componentes principales a crear

```text
BaseCard
RouteCard
ServiceCard
ActionCard
ImpactCard
MetricCard
ProjectCard
ArticleCard
EventCard
PartnerCard
ResourceCard
StatusCard
```

## Todos comparten

- radio;
- border;
- shadow;
- paddings;
- tipografía base;
- contraste.

## Cambian

- icono;
- layout interno;
- peso del título;
- CTA;
- acento de color;
- metadata.

---

# 15. Radios

## Propuesta

```css
:root {
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 30px;
}
```

## Uso

### `--radius-sm`
- botones;
- inputs;
- badges;
- pequeñas chips;
- tabs.

### `--radius-md`
- tarjetas generales;
- formularios;
- módulos medianos.

### `--radius-lg`
- hero cards;
- banners;
- bloques grandes;
- componentes destacados.

---

# 16. Sombras

Las sombras deben continuar la línea de Ibérica.

```css
:root {
  --shadow-sm: 0 10px 30px #0E335314;
  --shadow-md: 0 24px 70px #0E33531F;
}
```

## Regla

- sombra suave;
- nunca pesada ni oscura;
- no usar sombras dramáticas tipo app móvil;
- mantener sensación ligera y limpia.

---

# 17. Layout base

```css
.shell {
  width: min(100% - 48px, 1280px);
  margin-inline: auto;
}
```

## Tablet

```css
@media (max-width: 900px) {
  .shell {
    width: min(100% - 34px, 760px);
  }
}
```

## Mobile

```css
@media (max-width: 640px) {
  .shell {
    width: min(100% - 28px, 560px);
  }
}
```

---

# 18. Espaciado de secciones

```css
.section {
  padding-block: 112px;
}
```

## Tablet

```css
@media (max-width: 900px) {
  .section {
    padding-block: 88px;
  }
}
```

## Mobile

```css
@media (max-width: 640px) {
  .section {
    padding-block: 72px;
  }
}
```

## Motivo

Permite que el sitio se sienta institucional y respirado, más cercano a UNESCO y al frontend aprobado, y menos a una landing comprimida.

---

# 19. Sistema de títulos

Se recomienda formalizar un sistema más amplio que simplemente `h1`, `h2`, `h3`.

## Clases recomendadas

```text
.display-title
.page-title
.hero-title
.section-title
.section-title-small
.article-title
.metric-number
.section-lead
.body
.body-small
.caption
.eyebrow
```

## Ejemplo — Hero

```css
.hero-title {
  font-size: clamp(3.45rem, 5.35vw, 6rem);
  line-height: .96;
  font-weight: 780;
  letter-spacing: -.048em;
  color: var(--foreground);
}
```

## Ejemplo — Section Title

```css
.section-title {
  font-size: clamp(2rem, 3.4vw, 3.4rem);
  line-height: 1.08;
  font-weight: 750;
  letter-spacing: -.042em;
  color: var(--foreground);
}
```

## Eyebrow

```css
.eyebrow {
  font-size: .72rem;
  font-weight: 900;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--primary);
}
```

---

# 20. Header

El header debe reflejar la nueva complejidad del sitio sin saturar.

## Principios

- más limpio;
- navegación escalable;
- posibilidad de dropdowns / mega-menús;
- acceso institucional claro;
- CTA visible;
- foco en usabilidad.

## Recomendación estructural

```text
Top bar
→ mensaje institucional / accesibilidad / contacto

Main bar
→ logo + menú principal + CTA
```

## Colores del header

- fondo blanco;
- borde sutil `var(--line)`;
- hover con `var(--accent)`;
- texto principal `var(--secondary)`;
- CTA primario `var(--primary)`.

---

# 21. Menú principal recomendado

```text
Inicio
Nosotros
Educación
Certificación
Vinculación
Impacto
Conocimiento
Contacto
```

## Dropdown Educación

- Prepa Abierta
- Educación Continua
- Universidad — En desarrollo

## Dropdown Impacto

- Impacto
- ODS
- Observatorio
- Proyectos

## Dropdown Nosotros

- Quiénes somos
- Qué hacemos
- Ecosistema
- Transparencia

---

# 22. Botones

## 22.1. Botón primario

```css
.button-primary {
  min-height: 48px;
  padding: 12px 18px;
  border-radius: 12px;
  color: #FFF;
  background: linear-gradient(120deg, #075FBA, #0788DC 58%, #13B6E8);
  font-weight: 800;
}
```

## 22.2. Botón secundario

```css
.button-secondary {
  min-height: 48px;
  padding: 12px 18px;
  border-radius: 12px;
  color: var(--primary);
  background: #FFF;
  border: 1px solid var(--border);
  font-weight: 800;
}
```

## 22.3. Botón por área

### Verde — Educación Continua
```css
.button-continua {
  background: linear-gradient(135deg, #20AD91, #14966F);
  color: #FFF;
}
```

### Violeta — Certificación
```css
.button-certificacion {
  background: linear-gradient(135deg, #7569E8, #6358D2);
  color: #FFF;
}
```

### Dorado — Vinculación
```css
.button-vinculacion {
  background: linear-gradient(135deg, #B38A36, #C49A3D);
  color: #FFF;
}
```

## Regla

Solo usar botones por área cuando ayuden a reforzar la vertical.  
El botón primario general del sitio seguirá siendo azul institucional.

---

# 23. Tarjetas de rutas

Las rutas principales del Home deberán reflejar la mezcla de estilos que ya visualizamos.

## Prepa Abierta

- borde/acento azul;
- icono azul;
- superficie blanca;
- pequeños apoyos en azul pálido.

## Educación Continua

- icono verde;
- detalles verdes;
- link verde;
- no convertir toda la tarjeta en verde sólido.

## Certificación

- icono violeta;
- pequeños fondos violet soft;
- CTA violeta.

## Vinculación

- icono dorado;
- CTA dorado;
- borde o detalle dorado.

---

# 24. Sistema de secciones largas

El Home y páginas institucionales no deben ser una secuencia infinita de tarjetas iguales.

## Ritmo visual recomendado

```text
Hero grande
↓
Rutas principales
↓
Manifiesto / texto editorial
↓
Seis ejes
↓
Bloque visual destacado
↓
Impacto / Observatorio
↓
Conocimiento / noticias
↓
Transparencia
↓
CTA final
↓
Footer
```

## Aplicación CSS

Se deben alternar:

- secciones blancas;
- secciones `blue-mist`;
- secciones con imagen;
- grids;
- layouts 2 columnas;
- métricas;
- bandas CTA.

---

# 25. Sección de Impacto

La sección Impacto debe verse más institucional/editorial, con influencia de UNESCO.

## Fondo sugerido

```css
background: var(--blue-mist);
```

## Elementos

- título grande;
- texto corto;
- métricas limpias;
- tarjetas de acceso;
- enlace al Observatorio.

## Metric card

```css
.metric-card {
  background: #FFF;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
```

## Número

```css
.metric-number {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  color: var(--secondary);
}
```

---

# 26. Observatorio

El Observatorio necesita un tratamiento CSS más técnico.

## Requisitos visuales

- mucho aire;
- métricas legibles;
- tablas limpias;
- visualización de datos clara;
- colores institucionales;
- superficies blancas y suaves;
- badges de estatus.

## Status badges

```css
.badge-status {
  border-radius: 999px;
  padding: 6px 10px;
  font-size: .78rem;
  font-weight: 700;
}
```

### En integración
```css
background: var(--info-soft);
color: var(--blue);
```

### En validación
```css
background: var(--warning-soft);
color: var(--warning-color);
```

### Operativo
```css
background: var(--success-soft);
color: var(--success-color);
```

---

# 27. Conocimiento / noticias / recursos

Esta zona debe sentirse más editorial.

## Recomendación visual

- una pieza principal grande;
- tres cards secundarias;
- mayor peso en imagen;
- títulos bien jerarquizados;
- no usar únicamente cuadrícula uniforme.

## Article card

```css
.article-card {
  display: grid;
  gap: 16px;
  background: #FFF;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
```

## Featured article

Puede tener radio mayor, imagen grande y fondo más limpio.

---

# 28. Transparencia

La sección de Transparencia debe transmitir sobriedad documental.

## Colores

- fondo `var(--pearl)` o blanco;
- detalles navy;
- links blue;
- íconos simples;
- mucho orden.

## Document card

```css
.document-card {
  background: #FFF;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
}
```

## No usar

- gradientes excesivos;
- color por documento;
- ilustraciones decorativas innecesarias.

---

# 29. Vinculación / Colabora

Vinculación puede aprovechar la inspiración de Fundación Carlos Slim en la organización por público, pero con visual más limpio.

## Color guía

- dorado como acento;
- azul como estructura base.

## Regla

Vinculación no debe verse como una página “de lujo” saturada de dorado.

El dorado debe aparecer en:

- iconos;
- pequeñas líneas;
- badges;
- botones secundarios específicos;
- títulos de apoyo.

---

# 30. Ecosistema

La sección de Ecosistema debe mostrar matriz + unidades.

## Recomendación visual

- tarjetas homogéneas;
- estado visible;
- CTA por unidad;
- color de acento por vertical.

## Status card

Para unidades futuras como Universidad:

```css
.status-card {
  background: #FFF;
  border: 1px dashed var(--line-strong);
  border-radius: var(--radius-md);
}
```

### Estado “En desarrollo”
- badge suave;
- sin promesas exageradas;
- CTA informativo, no comercial.

---

# 31. Gradientes

Los gradientes deben ser suaves y controlados.

## Hero claro

```css
.hero {
  background:
    radial-gradient(circle at 85% 20%, rgba(19,182,232,.16), transparent 28rem),
    linear-gradient(125deg, #FFFFFF 0%, #F3F8FC 55%, #EAF5FD 100%);
}
```

## Hero oscuro / destacado

```css
.hero--dark {
  background:
    radial-gradient(circle at 85% 20%, rgba(19,182,232,.22), transparent 24rem),
    linear-gradient(125deg, #083665 0%, #075FBA 60%, #08766E 100%);
}
```

## Gradientes por área (uso puntual)

### Continua
```css
linear-gradient(135deg, #20AD91, #14966F)
```

### Certificación
```css
linear-gradient(135deg, #7569E8, #6358D2)
```

### Vinculación
```css
linear-gradient(135deg, #B38A36, #C49A3D)
```

---

# 32. Footer

El footer puede acercarse más al lenguaje institucional tipo UNESCO.

## Características

- amplio;
- varias columnas;
- fondo `blue-mist` o `pearl`;
- franja superior sutil de color;
- jerarquía clara.

## Estructura

```text
ISCOBusiness
Institución
Educación
Impacto
Vinculación
Conocimiento
Contacto
Legal
```

## Franja superior opcional

```css
background: linear-gradient(
  90deg,
  #075FBA 0 52%,
  #13B6E8 52% 76%,
  #B38A36 76%
);
```

---

# 33. Dark mode

No se recomienda negro puro.

## Tema oscuro institucional

```css
.dark {
  --background: #071827;
  --foreground: #F2F7FB;

  --card: #0B2236;
  --card-foreground: #F2F7FB;

  --popover: #0B2236;
  --popover-foreground: #F2F7FB;

  --primary: #39A3F1;
  --primary-foreground: #041829;

  --secondary: #EAF5FD;
  --secondary-foreground: #083665;

  --muted: #102C43;
  --muted-foreground: #AAC0D1;

  --accent: #103656;
  --accent-foreground: #75C7F4;

  --border: #24435B;
  --input: #31526A;
  --ring: #39A3F1;

  --sidebar: #081D2E;
  --sidebar-foreground: #EDF6FC;
  --sidebar-primary: #39A3F1;
  --sidebar-primary-foreground: #041829;
}
```

## Regla

No activar en producción sin QA específico.

---

# 34. Accesibilidad

## Focus visible

```css
:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 4px;
}
```

## Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}
```

## Reglas

- no depender solo del color;
- mantener contraste suficiente;
- links identificables;
- estados de error evidentes;
- navegación por teclado usable;
- formularios con `focus` claro.

---

# 35. Corrección de `@theme inline`

El proyecto no debe mezclar tokens no cromáticos como si fueran colores.

## Incorrecto

```css
--color-radius: var(--radius);
--color-font-sans: var(--font-sans);
--color-spacing: var(--spacing);
```

## Correcto

Separar colores, radios, tipografía y sombras.

### Ejemplo

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);

  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);

  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);

  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);

  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);

  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
}
```

---

# 36. Sistema por secciones

## 36.1. Inicio
- azul institucional dominante;
- hero editorial;
- rutas con acento por vertical;
- impacto y conocimiento más visibles.

## 36.2. Nosotros
- navy + blue;
- diseño sobrio;
- más texto y menos decoración.

## 36.3. Prepa Abierta
- azul + cian;
- sensación de oportunidad y acompañamiento;
- no usar dorado ni violeta como base.

## 36.4. Educación Continua
- base azul institucional;
- verde como acento;
- UI limpia.

## 36.5. Certificación
- base azul;
- violeta como refuerzo de identidad de la vertical;
- cuidado de no parecer “otra marca”.

## 36.6. Vinculación
- base azul;
- dorado como acento;
- visual cálido pero sobrio.

## 36.7. Impacto / ODS / Observatorio
- blue-mist;
- azul, cyan y verde;
- diseño dataviz-friendly.

## 36.8. Conocimiento
- azul + violet;
- estética editorial;
- piezas destacadas.

## 36.9. Transparencia
- blanco / pearl;
- navy + blue;
- mínima decoración.

---

# 37. Fases de implementación

## Fase 1 — Reorganización de tokens
- limpiar variables existentes;
- crear tokens `--isco-*`;
- separar tokens brand / data / semantic / surface.

## Fase 2 — Base visual
- actualizar `body`, `headings`, `links`, `buttons`, `forms`, `cards`;
- establecer nuevos radios y sombras.

## Fase 3 — Header y navegación
- construir estructura escalable;
- dropdowns / mega-menús si se aprueba.

## Fase 4 — Home
- hero;
- rutas;
- manifiesto;
- qué hacemos;
- impacto;
- conocimiento;
- transparencia;
- CTA final.

## Fase 5 — Páginas institucionales
- Nosotros;
- Qué hacemos;
- Ecosistema;
- Transparencia.

## Fase 6 — Verticales
- Prepa;
- Continua;
- Certificación;
- Vinculación.

## Fase 7 — Impacto y datos
- Impacto;
- ODS;
- Observatorio;
- Proyectos.

## Fase 8 — Dark mode
- solo si se valida.

## Fase 9 — QA
- responsive;
- accesibilidad;
- consistencia con Ibérica;
- comparación con mockups aprobados.

---

# 38. Breakpoints a validar

```text
360
390
430
640
768
820
900
1050
1120
1280
1440
1920
```

---

# 39. Checklist de revisión visual

## Identidad
- ¿Se sigue sintiendo como familia de Ibérica?
- ¿ISCOBusiness ya tiene identidad propia sin romper el ecosistema?

## Color
- ¿Los acentos ayudan a distinguir áreas?
- ¿No parecen marcas separadas?
- ¿El azul institucional sigue dominando?

## UI
- ¿Los botones son consistentes?
- ¿Las tarjetas tienen misma lógica?
- ¿El sitio evita repetición excesiva?

## Editorial
- ¿Las secciones largas tienen ritmo?
- ¿Hay jerarquía clara?
- ¿Conocimiento e impacto tienen tratamiento más institucional?

## Datos
- ¿Observatorio se siente limpio?
- ¿Las métricas son legibles?
- ¿Los charts respetan la paleta?

## Accesibilidad
- ¿Contraste suficiente?
- ¿Focus visible?
- ¿No se usa solo color para indicar significado?

---

# 40. Criterio final de aceptación

El nuevo sistema CSS se considerará correcto si cumple lo siguiente:

- sigue la familia visual de `iberica.iscobusiness.edu.mx`;
- mejora la dimensión institucional del portal;
- integra una lógica editorial más madura;
- usa color por vertical de forma controlada;
- prepara el sitio para impacto, observatorio y conocimiento;
- no fragmenta la marca matriz;
- mantiene limpieza, claridad y jerarquía;
- puede escalar conforme crezcan nuevas áreas del ecosistema.

---

# 41. Decisión final

> **ISCOBusiness no debe copiar ni a UNESCO ni a Fundación Carlos Slim.**

Debe construir una identidad propia con esta fórmula:

```text
BASE VISUAL
→ Ibérica

ESTRUCTURA INSTITUCIONAL Y EDITORIAL
→ UNESCO

LÓGICA DE COLOR POR ÁREA
→ Fundación Carlos Slim

RESULTADO
→ Un portal institucional contemporáneo,
escalable, claro, modular y visualmente coherente.
```

---

# 42. Resumen ejecutivo

## Mantener
- azul institucional;
- fondos claros;
- radios amplios;
- sombras suaves;
- coherencia visual con Ibérica.

## Incorporar
- mejor jerarquía editorial;
- más variedad de módulos;
- mejor tratamiento para impacto y datos;
- color por vertical;
- diseño más institucional para secciones largas.

## Evitar
- copiar literalmente otras marcas;
- usar demasiados colores como fondo dominante;
- parecer dashboard SaaS;
- parecer landing escolar simple;
- romper la unidad del ecosistema.

---

# 43. Implementación base sugerida

```css
:root {
  --isco-navy: #083665;
  --isco-blue: #075FBA;
  --isco-blue-bright: #0788DC;
  --isco-cyan: #13B6E8;

  --isco-green: #20AD91;
  --isco-green-strong: #14966F;
  --isco-green-soft: #E7F6F1;

  --isco-violet: #7569E8;
  --isco-violet-strong: #6358D2;
  --isco-violet-soft: #EFEDFC;

  --isco-gold: #B38A36;
  --isco-gold-bright: #C49A3D;
  --isco-gold-soft: #F5EDDC;

  --isco-ink: #10243F;
  --isco-ink-soft: #53657B;

  --isco-white: #FFFFFF;
  --isco-pearl: #F7F9FB;
  --isco-blue-mist: #F3F8FC;
  --isco-blue-pale: #EAF5FD;

  --isco-line: #DBE5EE;
  --isco-line-strong: #C5D5E3;

  --isco-danger: #8B1748;
  --isco-danger-soft: #F8E8EC;

  --isco-warning: #B78324;
  --isco-warning-soft: #FAF3E3;

  --isco-shadow-sm: 0 10px 30px #0E335314;
  --isco-shadow-md: 0 24px 70px #0E33531F;

  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 30px;
}
```

---

# 44. Cierre

Este documento debe utilizarse como la nueva referencia CSS para la siguiente etapa del proyecto `iscobusiness.edu.mx`.

Su propósito no es solo “poner bonitos colores”, sino crear un sistema que responda al verdadero crecimiento del sitio:

```text
EDUCACIÓN
+ CERTIFICACIÓN
+ VINCULACIÓN
+ IMPACTO
+ OBSERVATORIO
+ ODS
+ PROYECTOS
+ CONOCIMIENTO
+ TRANSPARENCIA
+ COLABORA
+ DONACIONES
```

y que al mismo tiempo conserve una experiencia coherente, reconocible y profesional.

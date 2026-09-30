# Complemento CSS — Plan de Cambios para `iscobusiness.edu.mx`

**Documento complementario al Plan Maestro de ISCOBusiness**  
**Objetivo:** definir los cambios CSS necesarios para adaptar el nuevo frontend de `iscobusiness.edu.mx` al sistema visual ya aprobado en `iberica.iscobusiness.edu.mx`, tomando como referencia la primera propuesta de variables CSS compartida y corrigiendo los puntos que se alejan del diseño institucional vigente.

---

# 1. Decisión general

Entre las dos propuestas CSS revisadas, la **primera** es la base más adecuada para ISCOBusiness porque conserva una lógica visual más cercana al frontend ya aprobado de Ibérica:

- azul como color principal;
- fondos claros;
- tarjetas redondeadas;
- contraste institucional;
- presencia de cian y verde;
- radio amplio;
- estética moderna pero sobria.

La segunda propuesta debe descartarse como base principal porque:

- utiliza violeta como color dominante;
- usa Montserrat en lugar de Manrope;
- reduce demasiado los radios;
- genera una estética más cercana a un dashboard tecnológico;
- se aleja de la identidad visual de `iberica.iscobusiness.edu.mx`.

La estrategia recomendada será:

```text
PRIMERA PROPUESTA
        +
TIPOGRAFÍA MANROPE
        +
PALETA REAL DE IBÉRICA
        +
DORADO INSTITUCIONAL
        +
RADIOS DEL SISTEMA ACTUAL
        +
SOMBRAS DEL SISTEMA ACTUAL
        +
DARK MODE INSTITUCIONAL
        =
DESIGN SYSTEM ISCOBUSINESS
```

---

# 2. Objetivo del cambio CSS

El nuevo CSS debe lograr que:

```text
iscobusiness.edu.mx
        ↕
iberica.iscobusiness.edu.mx
```

se perciban como parte de una misma familia visual.

El nuevo portal debe conservar:

- misma tipografía;
- misma densidad;
- mismos radios;
- misma lógica de botones;
- mismo tipo de tarjetas;
- mismo uso de sombras;
- mismos fondos claros;
- mismos patrones de gradientes;
- misma lógica responsive;
- misma accesibilidad;
- misma sensación institucional.

Lo que cambia será:

- marca principal;
- contenido;
- navegación;
- arquitectura;
- fotografías;
- acentos temáticos por sección.

---

# 3. Cambio de tipografía principal

## Situación actual de la primera propuesta

```css
--font-sans: Open Sans, sans-serif;
```

## Cambio recomendado

```css
--font-sans: Manrope, "Segoe UI", Arial, sans-serif;
```

## Motivo

Manrope ya forma parte del frontend aprobado de `iberica.iscobusiness.edu.mx` y debe mantenerse como tipografía principal del ecosistema.

### Uso recomendado de Manrope

- navegación;
- H1;
- H2;
- H3;
- párrafos;
- botones;
- tarjetas;
- formularios;
- etiquetas;
- tabs;
- acordeones;
- asistentes;
- dashboards;
- tablas.

## Fuente editorial secundaria

Mantener:

```css
--font-serif: Newsreader, Georgia, serif;
```

### Uso

Newsreader deberá utilizarse únicamente como recurso editorial controlado, por ejemplo:

- citas;
- manifiestos;
- frases institucionales destacadas;
- contenidos especiales;
- componentes donde ya exista su uso en el frontend fuente.

No debe convertirse en la tipografía dominante.

---

# 4. Sustitución del azul principal

## Primera propuesta

```css
--primary: #2e67ff;
--ring: #2e6aff;
```

## Cambio recomendado

```css
--primary: #075fba;
--ring: #075fba;
```

## Color complementario para interacción

```css
--blue-bright: #0788dc;
```

## Color complementario para gradientes y acentos

```css
--cyan: #13b6e8;
```

## Motivo

El azul `#2e67ff` es más eléctrico y genera una percepción más cercana a producto tecnológico o SaaS.

La combinación:

```text
#083665
#075fba
#0788dc
#13b6e8
```

mantiene la familia cromática institucional ya aprobada.

---

# 5. Ajuste del color secundario

## Primera propuesta

```css
--secondary: #0e142b;
```

## Cambio recomendado

```css
--secondary: #083665;
```

## Motivo

Evita introducir un segundo azul oscuro innecesario.

`#083665` ya funciona como navy institucional dentro del frontend actual.

---

# 6. Incorporación del dorado institucional

La primera propuesta no incluye adecuadamente el dorado de marca.

Agregar:

```css
--gold: #b38a36;
--gold-bright: #c49a3d;
--gold-pale: #f5eddc;
```

## Usos recomendados

- Vinculación;
- elementos institucionales;
- indicadores;
- borders destacados;
- eyebrows;
- pequeños detalles;
- estados especiales;
- gráficos;
- llamadas visuales secundarias.

## Restricción

El dorado no debe convertirse en color principal de toda la interfaz.

Debe funcionar como **acento institucional**.

---

# 7. Ajuste de superficies `muted`

## Primera propuesta

```css
--muted: #ffffff;
```

## Problema

El token `muted` pierde sentido si utiliza el mismo blanco que el fondo general.

## Cambio recomendado

```css
--muted: #f3f8fc;
--muted-foreground: #53657b;
```

Alternativa para superficies más neutras:

```css
--muted: #f7f9fb;
```

## Uso recomendado

- secciones suaves;
- áreas secundarias;
- fondos de FAQ;
- bloques informativos;
- cards no destacadas;
- estados de navegación;
- bloques de apoyo.

---

# 8. Ajuste de `accent`

## Primera propuesta

```css
--accent: #ffffff;
--accent-foreground: #2e67ff;
```

## Cambio recomendado

```css
--accent: #eaf5fd;
--accent-foreground: #075fba;
```

## Uso recomendado

- hover en navegación;
- tabs;
- botones secundarios;
- badges;
- chips;
- filtros;
- estados seleccionados;
- navegación lateral.

---

# 9. Ajuste de bordes

## Primera propuesta

```css
--border: #e7e4e4;
--input: #cccccc;
```

## Cambio recomendado

```css
--border: #dbe5ee;
--input: #c5d5e3;
```

## Motivo

El sistema visual aprobado utiliza bordes ligeramente azulados, no grises cálidos.

Esto ayuda a mantener coherencia visual con:

- tarjetas;
- formularios;
- acordeones;
- tablas;
- sidebars;
- elementos de navegación.

---

# 10. Radios de borde

## Primera propuesta

```css
--radius: 1.3rem;
```

Esta decisión es compatible con el sistema actual.

Se recomienda, sin embargo, evolucionar a varios niveles:

```css
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 30px;
```

## Uso

### `--radius-sm`

- botones;
- campos;
- chips;
- etiquetas;
- pequeñas tarjetas.

### `--radius-md`

- tarjetas;
- formularios;
- bloques;
- acordeones.

### `--radius-lg`

- hero cards;
- bloques destacados;
- contenedores visuales;
- componentes premium.

---

# 11. Sombras

## Primera propuesta

```css
--shadow-blur: 0px;
--shadow-spread: -50px;
--shadow-opacity: 0;
```

## Problema

El sistema de sombras queda prácticamente desactivado.

## Cambio recomendado

```css
--shadow-sm: 0 10px 30px #0e335314;
--shadow-md: 0 24px 70px #0e33531f;
```

## Uso recomendado

### `--shadow-sm`

- tarjetas;
- formularios;
- cards de información;
- menús;
- popovers.

### `--shadow-md`

- hero cards;
- modales;
- paneles importantes;
- tarjetas destacadas;
- floating assistant.

---

# 12. Charts / Observatorio

## Primera propuesta

```css
--chart-1: #2e67ff;
--chart-2: #00cdcc;
--chart-3: #f9ff40;
--chart-4: #00eeba;
--chart-5: #ff2822;
```

## Problema

Los colores son demasiado eléctricos para el carácter institucional del portal.

## Cambio recomendado

```css
--chart-1: #075fba;
--chart-2: #13b6e8;
--chart-3: #20ad91;
--chart-4: #b38a36;
--chart-5: #7569e8;
```

## Uso

Estos colores deberán emplearse en:

- Observatorio;
- métricas;
- gráficas;
- dashboards;
- indicadores;
- ODS;
- visualizaciones.

## Regla

Los colores deben conservar contraste y no depender únicamente del color para transmitir significado.

---

# 13. Color de error / destructivo

## Primera propuesta

```css
--destructive: #ff6c35;
```

## Cambio recomendado

```css
--destructive: #8b1748;
--destructive-foreground: #ffffff;
```

## Motivo

El tono burgundy ya existe dentro de la paleta extendida del frontend aprobado y mantiene un carácter más institucional.

---

# 14. Fondo principal

## Primera propuesta

```css
--background: #fcfcfc;
```

Puede utilizarse, aunque para consistencia se recomienda:

```css
--background: #ffffff;
```

y reservar:

```css
--pearl: #f7f9fb;
--blue-mist: #f3f8fc;
--blue-pale: #eaf5fd;
```

para las secciones alternadas.

---

# 15. Foreground

Mantener un tono azul oscuro en lugar de negro puro:

```css
--foreground: #10243f;
```

## Motivo

Mejora coherencia visual y reduce la dureza del negro.

---

# 16. Nueva estructura recomendada de `:root`

```css
:root {
  /* ========================================
     ISCOBUSINESS — DESIGN SYSTEM
     Basado en el frontend aprobado de Ibérica
     ======================================== */

  /* Typography */
  --font-sans: Manrope, "Segoe UI", Arial, sans-serif;
  --font-serif: Newsreader, Georgia, serif;
  --font-mono: Menlo, Monaco, Consolas, monospace;

  /* Core surfaces */
  --background: #ffffff;
  --foreground: #10243f;

  --card: #ffffff;
  --card-foreground: #10243f;

  --popover: #ffffff;
  --popover-foreground: #10243f;

  /* Brand */
  --primary: #075fba;
  --primary-foreground: #ffffff;

  --secondary: #083665;
  --secondary-foreground: #ffffff;

  /* Soft surfaces */
  --muted: #f3f8fc;
  --muted-foreground: #53657b;

  --accent: #eaf5fd;
  --accent-foreground: #075fba;

  /* Institutional colors */
  --blue: #075fba;
  --blue-bright: #0788dc;
  --cyan: #13b6e8;

  --green: #20ad91;
  --success: #14966f;

  --gold: #b38a36;
  --gold-bright: #c49a3d;
  --gold-pale: #f5eddc;

  --violet: #7569e8;

  /* Semantic */
  --destructive: #8b1748;
  --destructive-foreground: #ffffff;

  /* Borders / controls */
  --border: #dbe5ee;
  --input: #c5d5e3;
  --ring: #075fba;

  /* Radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 30px;

  /* Layout */
  --spacing: 0.25rem;

  /* Charts */
  --chart-1: #075fba;
  --chart-2: #13b6e8;
  --chart-3: #20ad91;
  --chart-4: #b38a36;
  --chart-5: #7569e8;

  /* Shadows */
  --shadow-sm: 0 10px 30px #0e335314;
  --shadow-md: 0 24px 70px #0e33531f;

  /* Sidebar */
  --sidebar: #f7f9fb;
  --sidebar-foreground: #10243f;

  --sidebar-primary: #075fba;
  --sidebar-primary-foreground: #ffffff;

  --sidebar-accent: #eaf5fd;
  --sidebar-accent-foreground: #075fba;

  --sidebar-border: #dbe5ee;
  --sidebar-ring: #075fba;
}
```

---

# 17. Dark mode

No se recomienda usar negro absoluto como base.

## Evitar

```css
--background: #000000;
```

## Cambio recomendado

```css
.dark {
  --background: #071827;
  --foreground: #f2f7fb;

  --card: #0b2236;
  --card-foreground: #f2f7fb;

  --popover: #0b2236;
  --popover-foreground: #f2f7fb;

  --primary: #39a3f1;
  --primary-foreground: #041829;

  --secondary: #eaf5fd;
  --secondary-foreground: #083665;

  --muted: #102c43;
  --muted-foreground: #aac0d1;

  --accent: #103656;
  --accent-foreground: #75c7f4;

  --border: #24435b;
  --input: #31526a;

  --ring: #39a3f1;

  --destructive: #d45b72;
  --destructive-foreground: #ffffff;

  --sidebar: #081d2e;
  --sidebar-foreground: #edf6fc;

  --sidebar-primary: #39a3f1;
  --sidebar-primary-foreground: #041829;

  --sidebar-accent: #103656;
  --sidebar-accent-foreground: #75c7f4;

  --sidebar-border: #24435b;
  --sidebar-ring: #39a3f1;

  --chart-1: #58aff1;
  --chart-2: #45c8e8;
  --chart-3: #58c6aa;
  --chart-4: #d3ac58;
  --chart-5: #9f94ef;
}
```

## Resultado esperado

El dark mode debe sentirse como:

> **la versión nocturna de ISCOBusiness**

y no como una aplicación distinta.

---

# 18. Corrección de `@theme inline`

En las propuestas actuales existen variables como:

```css
--color-radius: var(--radius);
--color-spacing: var(--spacing);
--color-font-sans: var(--font-sans);
--color-shadow-blur: var(--shadow-blur);
```

Esto mezcla tokens de color con:

- tipografía;
- espaciado;
- radios;
- sombras.

## Cambio recomendado

Separar namespaces.

```css
@theme inline {
  /* Colors */
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

  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  /* Charts */
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  /* Sidebar */
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);

  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground:
    var(--sidebar-primary-foreground);

  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground:
    var(--sidebar-accent-foreground);

  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}
```

---

# 19. Recomendación para evitar autorreferencias

Si el stack utiliza Tailwind CSS v4, es preferible separar tokens base y tokens del framework.

Ejemplo:

```css
:root {
  --isco-primary: #075fba;
  --isco-primary-foreground: #ffffff;

  --isco-border: #dbe5ee;
  --isco-radius-md: 20px;
}
```

Después:

```css
@theme inline {
  --color-primary: var(--isco-primary);
  --color-primary-foreground:
    var(--isco-primary-foreground);

  --color-border: var(--isco-border);

  --radius-md: var(--isco-radius-md);
}
```

Esto reduce:

- colisiones;
- autorreferencias;
- confusión;
- problemas futuros de mantenimiento.

---

# 20. Tokens recomendados con prefijo `--isco-*`

```css
:root {
  /* Brand */
  --isco-navy: #083665;
  --isco-blue: #075fba;
  --isco-blue-bright: #0788dc;
  --isco-cyan: #13b6e8;

  /* Supporting */
  --isco-green: #20ad91;
  --isco-success: #14966f;

  --isco-gold: #b38a36;
  --isco-gold-bright: #c49a3d;
  --isco-gold-pale: #f5eddc;

  --isco-violet: #7569e8;
  --isco-danger: #8b1748;

  /* Text */
  --isco-ink: #10243f;
  --isco-ink-soft: #53657b;

  /* Surfaces */
  --isco-white: #ffffff;
  --isco-pearl: #f7f9fb;
  --isco-blue-pale: #eaf5fd;
  --isco-blue-mist: #f3f8fc;

  /* Borders */
  --isco-line: #dbe5ee;
  --isco-line-strong: #c5d5e3;

  /* Radius */
  --isco-radius-sm: 12px;
  --isco-radius-md: 20px;
  --isco-radius-lg: 30px;

  /* Shadows */
  --isco-shadow-sm: 0 10px 30px #0e335314;
  --isco-shadow-md: 0 24px 70px #0e33531f;
}
```

---

# 21. Asignación de color por sección

| Sección | Acento principal |
|---|---|
| Inicio | Azul |
| Nosotros | Azul / Navy |
| Prepa Abierta | Azul / Cian |
| Educación Continua | Verde / Cian |
| Certificación | Azul / Violeta |
| Vinculación | Dorado |
| Impacto / ODS | Verde / Azul |
| Observatorio | Azul / Cian / Verde |
| Conocimiento | Azul / Violeta |
| Transparencia | Navy / Azul |
| Donaciones | Dorado / Verde |

## Regla

Los acentos deben utilizarse en:

- borde superior;
- iconos;
- badges;
- número de sección;
- gradientes suaves;
- pequeños fondos decorativos.

No utilizar el color de acento como fondo dominante de toda la página.

---

# 22. Tarjetas por sección

## Base

```css
.card {
  background: var(--card);
  color: var(--card-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
```

## Card interactiva

```css
.card--interactive {
  transition:
    transform .28s ease,
    box-shadow .32s ease,
    border-color .28s ease;
}
```

```css
.card--interactive:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}
```

## Accesibilidad

```css
.card--interactive:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 4px;
}
```

---

# 23. Botón primario

```css
.button-primary {
  min-height: 48px;
  padding: 12px 18px;
  border-radius: 12px;

  color: #fff;

  background:
    linear-gradient(
      120deg,
      #075fba,
      #0788dc 58%,
      #13b6e8
    );

  font-weight: 800;

  transition:
    transform .18s ease,
    box-shadow .18s ease,
    filter .18s ease;
}
```

## Hover

```css
.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px #075fba38;
}
```

---

# 24. Botón secundario

```css
.button-secondary {
  min-height: 48px;
  padding: 12px 18px;

  color: var(--primary);

  background: #fff;

  border: 1px solid var(--border);
  border-radius: 12px;

  font-weight: 800;
}
```

## Hover

```css
.button-secondary:hover {
  background: var(--accent);
  border-color: var(--primary);
}
```

---

# 25. CTA textual

```css
.text-link {
  color: var(--primary);
  font-weight: 800;
  text-decoration: none;
}
```

Formato visual:

```text
Explorar programas →
Conocer la ECE →
Vincularme →
```

---

# 26. Formularios

## Input

```css
.form-control {
  width: 100%;
  min-height: 54px;

  padding: 0 14px;

  background: #fff;

  border: 1px solid var(--input);
  border-radius: 13px;

  color: var(--foreground);
}
```

## Focus

```css
.form-control:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 2px;
  border-color: var(--primary);
}
```

## Error

```css
.form-control[aria-invalid="true"] {
  border-color: var(--destructive);
}
```

---

# 27. Eyebrow / kicker

```css
.eyebrow {
  color: var(--primary);

  font-size: .72rem;
  font-weight: 900;

  letter-spacing: .14em;
  text-transform: uppercase;
}
```

Para Vinculación puede utilizar:

```css
color: var(--gold);
```

Para Impacto:

```css
color: var(--green);
```

---

# 28. Jerarquía H1

```css
.hero-title {
  font-family: var(--font-sans);

  font-size: clamp(3.45rem, 5.35vw, 6rem);
  line-height: .96;

  font-weight: 780;

  letter-spacing: -.048em;

  color: var(--foreground);
}
```

En pantallas pequeñas:

```css
@media (max-width: 640px) {
  .hero-title {
    font-size: clamp(2.75rem, 12vw, 3.8rem);
  }
}
```

---

# 29. H2

```css
.section-title {
  font-family: var(--font-sans);

  font-size: clamp(2rem, 3.4vw, 3.4rem);
  line-height: 1.08;

  font-weight: 750;

  letter-spacing: -.042em;

  color: var(--foreground);
}
```

---

# 30. Body

```css
body {
  font-family: var(--font-sans);

  font-size: 1rem;
  line-height: 1.65;

  color: var(--foreground);
  background: var(--background);
}
```

---

# 31. Layout base

```css
.shell {
  width: min(100% - 48px, 1280px);
  margin-inline: auto;
}
```

Tablet:

```css
@media (max-width: 900px) {
  .shell {
    width: min(100% - 34px, 760px);
  }
}
```

Mobile:

```css
@media (max-width: 640px) {
  .shell {
    width: min(100% - 28px, 560px);
  }
}
```

---

# 32. Espaciado vertical

```css
.section {
  padding-block: 112px;
}
```

Tablet:

```css
@media (max-width: 900px) {
  .section {
    padding-block: 88px;
  }
}
```

Mobile:

```css
@media (max-width: 640px) {
  .section {
    padding-block: 72px;
  }
}
```

---

# 33. Gradientes de hero

Mantener una lógica suave.

Ejemplo:

```css
.hero {
  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(19, 182, 232, .16),
      transparent 28rem
    ),
    linear-gradient(
      125deg,
      #ffffff 0%,
      #f3f8fc 55%,
      #eaf5fd 100%
    );
}
```

Para hero oscuro:

```css
.hero--dark {
  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(19, 182, 232, .22),
      transparent 24rem
    ),
    linear-gradient(
      125deg,
      #083665 0%,
      #075fba 60%,
      #08766e 100%
    );
}
```

---

# 34. Accesibilidad

Mantener globalmente:

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

---

# 35. Reglas para dark mode

El dark mode deberá probar:

- contraste AA;
- texto secundario;
- botones;
- inputs;
- error;
- success;
- charts;
- cards;
- popovers;
- sidebar;
- FAQ;
- links;
- focus.

No activar dark mode en producción hasta completar QA visual.

---

# 36. Plan de implementación

## Fase 1 — Tokens

Sustituir variables generales:

- fuente;
- primary;
- secondary;
- muted;
- accent;
- border;
- input;
- radius;
- shadow;
- charts.

## Fase 2 — Framework bridge

Corregir `@theme inline`.

Separar:

- color;
- radius;
- typography;
- shadow;
- spacing.

Preferir tokens base con prefijo `--isco-*`.

## Fase 3 — Componentes globales

Actualizar:

- body;
- header;
- navigation;
- buttons;
- links;
- cards;
- badges;
- forms;
- accordions;
- tabs;
- sidebar;
- footer.

## Fase 4 — Componentes institucionales

Actualizar:

- Hero.
- Trust Bar.
- Route Cards.
- Process Cards.
- Impact Cards.
- ODS Cards.
- Project Cards.
- Observatorio.
- Knowledge cards.
- Transparency cards.

## Fase 5 — Dark mode

Crear dark mode institucional con navy oscuro y no negro absoluto.

## Fase 6 — Responsive

Validar:

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

## Fase 7 — QA visual

Comparar lado a lado:

```text
iscobusiness.edu.mx
vs
iberica.iscobusiness.edu.mx
```

Validar:

- proporciones;
- tipografía;
- radios;
- shadows;
- hover;
- focus;
- espaciados;
- responsive.

---

# 37. Criterio de aceptación

El nuevo CSS se considerará correctamente implementado cuando:

- Manrope sea la fuente dominante.
- Los azules coincidan con la familia Ibérica.
- El dorado funcione como acento institucional.
- Las tarjetas mantengan radios amplios.
- Las sombras sean suaves.
- Los fondos mantengan blancos y azules pálidos.
- Los estados interactivos sean coherentes.
- El dark mode mantenga identidad institucional.
- Los charts no utilicen colores eléctricos ajenos a la marca.
- El sistema sea accesible.
- `iscobusiness.edu.mx` y `iberica.iscobusiness.edu.mx` se perciban como parte del mismo ecosistema.

---

# 38. Regla final

> **No se adoptará ninguna de las dos propuestas CSS tal como fueron entregadas.**

Se utilizará la **primera propuesta como estructura**, pero ajustada con:

```text
MANROPE
+
AZULES DE IBÉRICA
+
CIAN
+
VERDE
+
DORADO
+
VIOLETA COMO ACENTO
+
RADIOS EXISTENTES
+
SOMBRAS EXISTENTES
+
DARK MODE NAVY
+
TOKENS BIEN ORGANIZADOS
```

El resultado será el **Design System de ISCOBusiness**, compatible visualmente con el frontend aprobado de Instituto Ibérica y preparado para las nuevas áreas del portal matriz:

- Inicio;
- Nosotros;
- Prepa Abierta;
- Educación Continua;
- Certificación;
- Vinculación;
- Impacto;
- ODS;
- Observatorio;
- Proyectos;
- Conocimiento;
- Transparencia;
- Colaboración;
- Donaciones.

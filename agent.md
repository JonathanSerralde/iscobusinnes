# MANUAL DE ESTILO, ARQUITECTURA FRONTEND Y DIRECTRICES DEL AGENTE
> **ISCOBusiness — iscobusiness.edu.mx**  
> Documento normativo de observancia obligatoria para cualquier agente o desarrollador que modifique o cree páginas, componentes o secciones en el proyecto.

---

## 1. PROPÓSITO Y PRINCIPIO RECTOR

El frontend de **ISCOBusiness** (`iscobusiness.edu.mx`) no es un sitio web comercial convencional, ni una plataforma SaaS corporativa, ni un clon de plantillas genéricas. Es el **portal institucional matriz** de una Organización de la Sociedad Civil (Asociación Civil sin fines de lucro) que articula educación abierta modular, certificación de competencias laborales oficiales (SEP-CONOCER), educación continua y vinculación comunitaria y productiva en México.

### Principio Rector
> **Toda nueva página, sección o componente debe replicar exactamente la estructura visual, colorimetría calibrada, escala tipográfica, anatomía de tarjetas, ritmo espacial y calidad humana presentes en la Página de Inicio (`src/app/page.tsx`).**

Cualquier desviación visual (colores fuera de paleta, bordes incoherentes, lenguaje corporativo frío o tarjetas sin estilo institucional) constituye una falta grave al sistema de diseño.

---

## 2. ARQUITECTURA DE MARCA Y LÓGICA CROMÁTICA

El sistema combina el **ADN visual del Instituto Ibérica**, la **arquitectura editorial de alto nivel (estilo UNESCO)** y la **lógica cromática por área sustantiva (estilo Fundación Carlos Slim)** bajo la identidad matriz de **ISCOBusiness**.

### 2.1. Paleta Institucional Matriz (ISCOBusiness Base)

| Token CSS | Variable Tailwind / Hex | Uso Exclusivo y Significado |
| :--- | :--- | :--- |
| `--isco-navy` | `#083665` | Color insignia rector. Fondos de gobernanza, trust bars oscuros, cabeceras institucionales. |
| `navy-950` | `#051d38` | Fondo profundo para hero banners oscuros, gradientes de cierre institucional y footers. |
| `--isco-blue` (`--primary`) | `#075fba` | Color primario de acción interactiva. Botones primarios, enlaces activos, foco. |
| `--isco-blue-bright` | `#0788dc` | Azul de realce en gradientes de botones y estados hover dinámicos. |
| `--isco-cyan` | `#0284c7` / `#13b6e8` | Acento luminoso institucional. Eje de bachillerato flexible, badges y viñetas luminosas. |
| `--isco-ink` (`--foreground`)| `#10243f` | Color de texto principal para lectura en fondos claros. **NUNCA usar `#000000` puro.** |
| `--isco-ink-soft` (`--muted-foreground`) | `#53657b` | Subtítulos, bajadas de títulos, metadatos y texto secundario. |
| `--isco-pearl` | `#f7f9fb` | Superficie neutra clara para alternancia de ritmo en secciones. |
| `--isco-blue-mist` | `#f3f8fc` | Fondo suave para tarjetas y módulos de soporte. |
| `--isco-line` (`--border`) | `#dbe5ee` | Bordes estándar (`border-slate-200/90`). Líneas sutiles de separación. |
| `--isco-line-strong` | `#c5d5e3` | Bordes activos de inputs, tarjetas con foco o divisores marcados. |

### 2.2. Lógica Cromática por Unidad Sustantiva (Atribución Estricta)
Cada unidad o eje temático dentro de ISCOBusiness posee un color de acento asignado que debe respetarse consistentemente en franjas, bordes superiores (`border-t-4`), placas de iconos y badges:

1. **Centro de Asesoría / Bachillerato Modular (Instituto Ibérica):**
   * **Color Rector:** Cian / Sky (`#0284c7` / `#13b6e8`).
   * **Borde superior:** `border-t-[var(--primary)]` o `border-t-[#0284c7]`.
   * **Superficie / Suave:** `var(--surface-prepa)` / `bg-sky-50/40`.
   * **Placa de icono:** Fondo `bg-sky-50` con icono en `text-[#0284c7]`.

2. **Certificación Laboral (SEP-CONOCER / ECE760-26):**
   * **Color Rector:** Violeta / Índigo (`#4f46e5` / `#7569e8` / `#6358d2`).
   * **Borde superior:** `border-t-[var(--violet)]` o `border-t-[#4f46e5]`.
   * **Superficie / Suave:** `var(--surface-certificacion)` / `bg-indigo-50/40`.
   * **Placa de icono:** Fondo `bg-indigo-50` con icono en `text-[#4f46e5]`.

3. **Educación Continua (Diplomados, Cursos, SECTEI):**
   * **Color Rector:** Verde Esmeralda / Teal (`#0d9488` / `#20ad91` / `#14966f`).
   * **Borde superior:** `border-t-[var(--green)]` o `border-t-[#0d9488]`.
   * **Superficie / Suave:** `var(--surface-continua)` / `bg-teal-50/40`.
   * **Placa de icono:** Fondo `bg-teal-50` con icono en `text-[#0d9488]`.

4. **Vinculación y Alianzas Solidarias (Empresas, Gobiernos, Comunidades):**
   * **Color Rector:** Dorado / Ámbar (`#d97706` / `#b38a36` / `#c49a3d`).
   * **Borde superior:** `border-t-[var(--gold)]` o `border-t-[#d97706]`.
   * **Superficie / Suave:** `var(--surface-vinculacion)` / `bg-amber-50/40`.
   * **Placa de icono:** Fondo `bg-amber-50` con icono en `text-[#d97706]`.

5. **Transparencia, Certeza Jurídica y Gobernanza:**
   * **Color Rector:** Navy Institucional (`#083665` / `#102f4d`).
   * **Borde superior:** `border-t-[#083665]` o `border-t-slate-800`.
   * **Superficie / Suave:** `var(--surface-transparencia)` / `bg-slate-50/80`.
   * **Placa de icono:** Fondo `bg-slate-100` con icono en `text-[#083665]`.

---

## 3. TIPOGRAFÍA Y JERARQUÍA VISUAL EDITORIAL

### 3.1. Tipografía Base
* **Fuente Primaria (Sans-serif):** `Manrope` (`var(--font-manrope)`), con fallback a `"Segoe UI", Arial, sans-serif`.
* **Fuente Editorial (Serif opcional para citas célebres):** `Newsreader` (`var(--font-newsreader)`).
* **Fuente Mono (Números de módulo, códigos oficiales):** `Menlo, Monaco, Consolas, monospace`.

### 3.2. Escala Jerárquica y Clases Tipográficas

* **Hero H1 (`.hero-h1` / `h1`):**
  * Clases: `text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-balance`.
  * Color: `text-slate-900` sobre fondos claros (`variant="light"`), o `text-white` sobre fondos oscuros.
  * Regla estricta: **Exactamente un solo `<h1>` por página.**
* **Títulos de Sección (`h2` / `.section-title`):**
  * Clases: `text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug`.
* **Títulos de Tarjeta / Módulo (`h3` / `h4`):**
  * Clases: `text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight leading-snug`.
* **Subtítulos y Bajadas Editoriales (`.text-lead`):**
  * Clases: `text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mt-3`.
* **Cuerpo de Texto (`body`):**
  * Clases: `text-xs md:text-sm text-slate-600 leading-relaxed`.
* **Micro-etiquetas Institucionales (Kickers / Badges):**
  * Clases: `font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-slate-500`.

---

## 4. SISTEMA DE LAYOUT, ESPACIADO Y RITMO VISUAL

### 4.1. Contenedores Autorizados (`Shell`)
* `.shell`: Contenedor universal centrado. `width: min(100% - 48px, 1280px); margin-inline: auto;`.
* `.shell-narrow`: Para lectura concentrada, artículos legales o formularios. Ancho máximo 960px.
* `.shell-wide`: Para galerías o dashboards de impacto. Ancho máximo 1440px.

### 4.2. Espaciado Vertical de Secciones (`section-padding`)
* Secciones estándar: `className="section-padding"` (`padding-block: clamp(64px, 8vw, 112px);`).
* Secciones compactas / cintas: `className="section-padding-sm"` o `py-10 md:py-16`.

### 4.3. Regla de Alternancia de Fondos (Ritmo Visual Obligatorio)
Para evitar monotonía o cansancio visual, dos secciones adyacentes **NUNCA deben tener el mismo fondo**:
1. **Fondo 1:** Blanco puro (`bg-white`).
2. **Fondo 2:** Gris perla / Superficie suave (`bg-slate-50/60` o `bg-[var(--surface-transparencia)]`).
3. **Fondo 3:** Franja de contraste Navy institucional (`bg-[var(--isco-navy)] text-white`).
4. **Fondo 4:** Cierre institucional (`CtaSection` fotográfico con overlay de opacidad blanca equilibrada al 50% con resplandor central suave, permitiendo que la fotografía sea claramente visible y el texto oscuro destaque con máxima nitidez).

---

## 5. ANATOMÍA DE TARJETAS (LOS 4 PATRONES DE LA PÁGINA DE INICIO)

En el frontend de ISCOBusiness existen 4 patrones oficiales de tarjetas que deben utilizarse en todas las páginas:

### Patrón 1: Bloque Editorial Protagónico con Fotografía (Feature Block)
Utilizado para los grandes programas en la página de inicio (Centro de Asesoría, Certificación, etc.):
```tsx
<div className="group relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col justify-end">
  {/* Imagen Fotográfica Auténtica */}
  <img
    src="/img/fcs-educacion-prepa.jpg"
    alt="Descripción accesible"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700 ease-out"
  />
  {/* Gradiente multicapa de legibilidad */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-900/20 group-hover:from-slate-950/98 group-hover:via-slate-950/85 group-hover:to-slate-950/40 transition-all duration-500" />
  
  {/* Distintivo flotante superior */}
  <div className="absolute top-6 left-6 z-20">
    <span className="text-xs font-semibold bg-white/95 text-slate-900 px-3.5 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-xs">
      Categoría o Eje
    </span>
  </div>

  {/* Contenido interactivo progresivo */}
  <div className="relative z-10 p-7 sm:p-10 lg:p-12 text-white flex flex-col justify-end">
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm max-w-4xl">
      Título Humanizado y Contundente
    </h3>
    {/* Revelación suave en hover */}
    <div className="transition-all duration-500 ease-out max-h-[800px] opacity-100 mt-4 lg:max-h-0 lg:opacity-0 lg:mt-0 lg:overflow-hidden lg:translate-y-3 lg:group-hover:translate-y-0 lg:group-hover:max-h-[800px] lg:group-hover:opacity-100 lg:group-hover:mt-4">
      <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 max-w-3xl drop-shadow-xs">
        Explicación empática y cercana.
      </p>
      {/* Botones de acción */}
      <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-3">
        <Link href="/ruta" className="isco-btn isco-btn-primary inline-flex items-center gap-2 shadow-lg">
          <span>Acción principal</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
</div>
```

### Patrón 2: Tarjeta Ejecutiva con Borde Superior de Acento y Placa "Opción A"
Utilizado en `TrustBar`, `Qué Hacemos (6 Ejes)`, `Ecosistema de Unidades` y `Principios`:
```tsx
<div className="bg-white rounded-2xl p-6 md:p-7 border border-slate-200/90 border-t-4 border-t-[var(--primary)] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group">
  <div>
    {/* Placa Opción A para icono */}
    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-center text-slate-900 shadow-2xs group-hover:scale-105 transition-transform mb-4">
      <IconComp className="w-5 h-5 text-slate-900" strokeWidth={1.75} />
    </div>

    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2.5 group-hover:text-[var(--primary)] transition-colors">
      Título de la Tarjeta
    </h3>

    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
      Descripción clara y orientada al usuario.
    </p>
  </div>

  <div className="pt-4 border-t border-slate-100">
    <Link href="/enlace" className="text-xs font-bold text-slate-900 group-hover:text-[var(--primary)] inline-flex items-center gap-1.5 transition-colors">
      <span>Ver más</span>
      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
</div>
```

### Patrón 3: Tarjeta de Certeza Jurídica, Transparencia y Documentos
Utilizado en la sección de Certeza y en el repositorio de Transparencia:
```tsx
<div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
  <div>
    <div className="flex items-center justify-between mb-3">
      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800">
        <IconComp className="w-5 h-5 text-slate-800" />
      </div>
      <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
        Oficial Vigente
      </span>
    </div>
    <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight">
      Nombre del Instrumento Legal
    </h3>
    <p className="text-xs text-slate-600 leading-relaxed mb-4">
      Explicación clara del fundamento legal o resolución oficial.
    </p>
  </div>
  <div className="text-xs text-slate-500 pt-3 border-t border-slate-100 font-medium">
    Referencia Institucional Oficial
  </div>
</div>
```

### Patrón 4: Franja de Indicadores y Métricas Monumentales (Data Strip)
Utilizado para evidenciar logros, sedes y cifras verificables:
```tsx
<section className="py-14 md:py-20 bg-[var(--isco-navy)] text-white border-y border-slate-800">
  <div className="shell">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
      <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
        <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--isco-cyan)] mb-2">
          22
        </span>
        <strong className="text-sm sm:text-base font-bold text-white mb-1">
          Módulos SEP
        </strong>
        <p className="text-xs text-white/70 max-w-[200px]">
          Plan modular oficial con equivalencia y validez federal.
        </p>
      </div>
      {/* Resto de métricas con acentos temáticos: text-[var(--isco-violet)], text-[var(--isco-gold)], text-emerald-400 */}
    </div>
  </div>
</section>
```

---

## 6. SISTEMA DE BOTONES E INTERACTIVIDAD

### 6.1. Clases de Botón Estándar
* **Botón Primario Institucional (`.isco-btn-primary`):**  
  Gradiente: `linear-gradient(120deg, #075fba, #0788dc 58%, #13b6e8)`. Texto blanco, radio de 12px, altura mínima 48px (54px en `lg`), tipografía `font-extrabold`. Hover con elevación `translateY(-2px)` y sombra `0 14px 32px #075fba38`.
* **Botón Secundario (`.isco-btn-secondary`):**  
  Fondo blanco, texto en `var(--primary)`, borde de 1px en `var(--border)`. Hover en `var(--accent)` y borde en `var(--primary)`.
* **Botón de Alto Impacto / Dorado (`.isco-btn-gold`):**  
  Fondo dorado institucional `var(--gold)`. Usado exclusivamente para alianzas, convenios o convocatorias de alto valor.

### 6.2. Reglas de Animación y Micro-interacciones
* **Elevación suave:** Toda tarjeta interactiva o botón debe responder con `transform: translateY(-2px)` o `translateY(-4px)` y elevación de sombra (`hover:shadow-md`).
* **Iconos en placas:** `group-hover:scale-105 transition-transform duration-200`.
* **Flechas indicadoras (`ArrowRight` / `ChevronRight`):** `group-hover:translate-x-1 transition-transform`.
* **Desplazamiento suave de anclas:** Añadir siempre `scroll-mt-24` o `scroll-mt-28` en los IDs de destino para evitar que la barra sticky oculte los encabezados.

---

## 7. CINTAS STICKY DE NAVEGACIÓN DIRECTA (RIBBON NAV)

El submenú de navegación horizontal sticky (**Ribbon Nav**) es el estándar obligatorio para articular la navegación en cualquier página del portal que contenga múltiples secciones (tanto en la **Página de Inicio** como en **todas las páginas interiores**).

> **Regla de Oro:** Se prohíbe el uso de cintas oscuras o enlaces planos sin estilo (`bg-slate-900`). Todas las cintas deben replicar exactamente la estética ejecutiva clara translúcida, las franjas superiores cromáticas, las placas de icono invertibles y la tipografía de dos niveles presente en la Página de Inicio.

### 7.1. Contenedor, Visibilidad Responsiva y Comportamiento Sticky
* **Visibilidad Exclusiva de Escritorio (`hidden lg:block`):**
  En dispositivos móviles y tablets (`< lg`, menores a 1024px), el Ribbon Nav se oculta estrictamente mediante `hidden lg:block`. Esto previene la duplicidad confusa de menús de hamburguesa, elimina barras de desplazamiento horizontal y mantiene la navegación centralizada en el menú de cabecera oficial.
* **Contenedor Principal:**
  ```tsx
  <section className="hidden lg:block bg-white/95 backdrop-blur-md border-y border-slate-200/90 shadow-xs sticky top-[68px] lg:top-[72px] z-30 overflow-x-auto no-scrollbar">
    <div className="shell">
      <div className="min-w-[940px] xl:min-w-0 grid grid-cols-7 text-center divide-x divide-slate-100">
        {/* Pestañas de navegación */}
      </div>
    </div>
  </section>
  ```
* **Alineación con el Header:** La posición `sticky top-[68px] lg:top-[72px]` encaja milimétricamente debajo de la cabecera institucional para acompañar al usuario durante el desplazamiento vertical en pantallas grandes.

### 7.2. Anatomía de cada Pestaña (Los 5 Atributos Obligatorios)
Cada pestaña o botón del submenú debe contar estrictamente con:
1. **Franja Cromática Superior (3.5px a 5px):** En reposo tiene una altura de `3.5px` (`h-[3.5px]`). En hover crece a `h-[5px]` y emite un resplandor cromático tenue (`group-hover:shadow-[0_2px_10px_rgba(...)]`).
2. **Placa de Icono Invertible:** Contenedor `w-6 h-6 rounded-md` con fondo suave y borde tenue (`ring-1`). En hover se invierte: su fondo se llena con el color sólido del área y el icono pasa a blanco puro (`group-hover:bg-[color] group-hover:text-white`).
3. **Jerarquía Tipográfica de Dos Niveles:**
   * **Nivel 1 (Título del Eje o Sección):** `text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[color] transition-colors`.
   * **Nivel 2 (Bajada Contextual):** `text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors` (explica en 2 o 3 palabras el propósito del módulo).
4. **Superficie Interactiva:** `hover:bg-[color]-50/40 transition-all duration-200`.
5. **Divisores Verticales:** `divide-x divide-slate-100` en el contenedor padre.

### 7.3. Patrón de Código Oficial de Pestaña
```tsx
<a
  href="#seccion-destino"
  className="relative py-4 px-3 transition-all duration-200 hover:bg-sky-50/40 flex flex-col items-center justify-center gap-1 group"
>
  {/* 1. Franja superior cromática */}
  <div className="absolute top-0 inset-x-0 h-[3.5px] bg-[#0284c7] transition-all duration-300 group-hover:h-[5px] group-hover:shadow-[0_2px_10px_rgba(2,132,199,0.45)]" />

  {/* 2. Icono en placa + Título principal */}
  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors">
    <div className="w-6 h-6 rounded-md bg-sky-50 text-[#0284c7] flex items-center justify-center ring-1 ring-sky-200/80 group-hover:bg-[#0284c7] group-hover:text-white group-hover:ring-[#0284c7] transition-all shrink-0">
      <GraduationCap className="w-3.5 h-3.5" />
    </div>
    <span>Título de la Sección</span>
  </div>

  {/* 3. Bajada descriptiva contextual */}
  <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
    Subtítulo o Entidad
  </span>
</a>
```

### 7.4. Aplicación de Colores en Páginas Interiores
* **En Páginas Monotemáticas:** Las pestañas pueden compartir el color temático rector de la página (ej. matices de `#0284c7` en Bachillerato, `#0d9488` en Educación Continua, `#d97706` en Vinculación) o aplicar los colores de la unidad sustantiva si la sección enlaza a un eje diferente.
* **En Páginas Multi-sección (como `/nosotros`):** Cada pestaña interna se asocia al color del eje correspondiente (Gobernanza = Navy, Misión = Dorado, Ecosistema = Cian, etc.), manteniendo viva la lógica cromática por área sustantiva.

---

## 8. COMPONENTES GLOBALES REUTILIZABLES (`src/frontend/components/shared`)

Cualquier página debe construirse ensamblando estos componentes oficiales:

### 8.1. Estándar Normativo de Banners Principales (`HeroSection`)
El componente `HeroSection` define el tono visual y la jerarquía de apertura de cada página del portal. Para garantizar una experiencia editorial uniforme, limpia e imponente, se establecen las siguientes reglas obligatorias para todos los banners actuales y futuros:

1. **Regla de Escala Vertical Completa (Full Viewport Height — 100vh):**
   * **En Páginas Interiores (`/nosotros`, `/centro-de-asesoria`, `/vinculacion`, `/conocimiento`, `/contacto`):**
     * El banner abarca el campo visual completo descontando la cabecera:
       ```css
       min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)]
       ```
     * Esta altura mínima viene configurada por defecto en el componente `HeroSection` (`flex flex-col justify-center min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)]`).
   * **En la Página de Inicio (`/`) y Páginas con Ribbon Nav adherido:**
     * Para que el conjunto `[Menú + Banner + Submenú]` encuadre con precisión matemática el primer pliegue de la pantalla (`100vh`) tanto en monitores de escritorio (945–1080px) como en laptops compactas (600–768px), y responda perfectamente a móviles y tablets:
       ```css
       min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)] lg:min-h-[calc(100vh-176px)]
       ```
     * En móvil (`< md`), descuenta la cabecera móvil (64px). En tablet (`md` a `lg`), descuenta la cabecera completa (92px). En escritorio (`lg` en adelante), descuenta exactamente la cabecera (`~95px`) y el Ribbon Nav (`~80px`), garantizando que el submenú repose al ras de la base de la pantalla sin cortarse y sin que la sección inferior se asome antes del scroll.
   * **Calibración de padding interior (`isCompact`):** Cuando el hero no incluye botones ni párrafos descriptivos, el padding vertical interno se calibra a `py-8 md:py-12 lg:py-14` (controlado dinámicamente en `HeroSection`) para que `flex flex-col justify-center` centre el titular con equilibrio óptico sin forzar un alto excesivo en pantallas compactas.
   * **Prohibido encoger el banner:** Bajo ninguna circunstancia se debe permitir que el banner se reduzca arbitrariamente o se encoja la fotografía de fondo al simplificar textos. La imagen debe llenar el campo visual superior completo.

2. **Posicionamiento del Título (`hero-h1`):**
   * **Centrado verticalmente:** Gracias a `flex flex-col justify-center` en el contenedor del banner, el título descansa con equilibrio óptico en el centro vertical de la altura total de la pantalla.
   * **Alineado a la izquierda:** El titular se mantiene alineado a la izquierda (`text-left`) dentro del contenedor `.shell` (ancho máximo `max-w-3xl` o `max-w-4xl`), permitiendo que la fotografía en el lado derecho respire y sea apreciada con claridad.
   * Cuando el banner solo contiene el título (sin párrafos descriptivos ni botones), se retiran automáticamente los márgenes inferiores (`mb-6`) para lograr un centrado vertical milimétrico.

3. **Fotografía de Fondo Auténtica y Calibración Lumínica:**
   * **Prop `backgroundImage`:** Obligatoria en todos los heroes principales. Debe utilizarse exclusivamente fotografía auténtica institucional alojada en `/public/img/` (nunca imágenes genéricas de banco ni placeholders).
   * **Prop `backgroundOpacity`:** Calibrada estrictamente entre `0.75` y `0.82` (por defecto `0.80`).
   * **Degradado multicapa:** La imagen cuenta con un degradado superpuesto (`isco-gradient-light` para fondo claro o `isco-gradient-hero` para fondo navy) que garantiza contraste de texto AAA y legibilidad sin esfuerzo.

4. **Composición Editorial Limpia y Sin Saturación:**
   * En páginas interiores institucionales (como `/nosotros`), se prioriza la fuerza del titular y el impacto visual de la imagen, evitando saturar el banner con textos redundantes, botones amontonados o viñetas dispersas. Las acciones y el desarrollo de contenidos corresponden a las secciones subsiguientes y a la cinta sticky de navegación.

### 8.2. Resto de Componentes Globales
2. `SectionHeading`:
   * Para encabezados limpios con `title`, `subtitle` y alineación `center` o `left`.
3. `TrustBar`:
   * Módulo de 4 placas ejecutivas de certeza jurídica (`Asociación Civil`, `ECE760-26`, `Centro de Asesoría`, `Red CONOCER`).
4. `CtaSection`:
   * Cierre institucional al final de cada página con imagen `/img/cta-conversacion.jpg` visible y cálida, overlay blanco calibrado al `0.50` con resplandor central suave, tipografía oscura de máxima legibilidad (`text-slate-900` / `text-slate-700`) y botones de contacto y sedes.
5. `ImpactModel`:
   * Flujo visual de 5 pasos: *Aprender → Desarrollar → Acreditar → Vincular → Transformar*.

---

## 9. POLÍTICA EDITORIAL, HUMANIZACIÓN Y RIGOR ORTOGRÁFICO

### 9.1. Humanización Radical del Lenguaje
* **Quién es el usuario:** Personas reales, trabajadoras y trabajadores, padres y madres de familia que buscan terminar su bachillerato o certificar lo que aprendieron con años de trabajo.
* **Tono obligado:** Cercano, empático, digno, respetuoso y paciente.
* **Prohibido el lenguaje de tecno-startup o SaaS:** No usar "plataforma de vanguardia", "solución disruptiva 360", "optimizamos tu flujo de trabajo", "ecosistema impulsado por IA", "empodérate hoy".
* **Enfoque de valor:** En lugar de hablar de "procesos burocráticos", hablar de "acompañamiento paso a paso, con docentes que te explican con paciencia". En lugar de "cursos", hablar de "habilidades prácticas para proteger a tu gente y mejorar tu entorno".

### 9.2. Ortografía y Gramática Estricta (0 Faltas)
* **Acentuación estricta:** Todas las palabras con tilde deben llevarla, incluyendo mayúsculas (*Misión, Visión, Propósito, Educación, Certificación, Vinculación, Quiénes, Qué*).
* **Siglas estandarizadas:** SEP, CONOCER, SECTEI, DUA, ARCO.
* **Acreditación federal:** Consignar exactamente como `ECE760-26`.

---

## 10. REGLAS NEGATIVAS Y ANTI-PATRONES (LO QUE NO DEBES HACER)

| Prohibición Estricta | Motivo / Razón |
| :--- | :--- |
| **PROHIBIDO exponer datos sensibles privados:** CLUNI, RFC, Notaría o escrituras privadas. | Restricción legal de privacidad institucional. Solo son públicos la razón social de la A.C., el código de acreditación `ECE760-26` y los acuerdos oficiales de SECTEI. |
| **PROHIBIDO usar negro puro (`#000000`).** | Genera un contraste agresivo y poco profesional. Usar `--isco-ink` (`#10243f`) o `text-slate-900`. |
| **PROHIBIDO usar colores chillones o sin calibrar.** | No usar `#ff0000`, `#00ff00`, `#0000ff` o azul Bootstrap `#007bff`. Usar estrictamente las variables `--isco-*` y la paleta Tailwind configurada. |
| **PROHIBIDO usar placeholders o imágenes rotas.** | No usar `dummyimage.com` ni `via.placeholder.com`. Utilizar los activos fotográficos auténticos alojados en `/public/img/`. |
| **PROHIBIDO crear páginas o rutas duplicadas.** | Si una temática ya está unificada en una página maestra (ej. `/que-hacemos` o `/ecosistema`), se debe redirigir con código 307 a la sección correspondiente (`/nosotros#que-hacemos`). |
| **PROHIBIDO enlaces muertos o vacíos (`href="#"`).** | Todo enlace debe apuntar a una ruta real o a un ancla válida con `scroll-mt` configurado. |
| **PROHIBIDO micro-etiquetas robóticas tipo "AI-POWERED" o "SAAS".** | La institución es una Asociación Civil educativa con trato humano directo. |
| **PROHIBIDO animaciones excesivas, parallax mareante o spinners gigantes.** | El sitio debe ser accesible, sobrio, formal y rápido. |
| **PROHIBIDO alterar la estructura del Layout.** | No quitar `Header`, `Footer`, `FloatingWhatsApp` ni `Toaster` en ninguna ruta pública. |

---

## 11. CHECKLIST OBLIGATORIO ANTES DE ENTREGAR CUALQUIER CAMBIO

Antes de finalizar una respuesta o entregar un cambio en cualquier página, el agente debe verificar los siguientes 10 puntos:

1. [ ] **¿La jerarquía de títulos incluye un único `<h1>` semántico?**
2. [ ] **¿El Hero abarca la altura completa de la pantalla (100vh / min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-92px)]), con fotografía auténtica (opacidad 0.75 - 0.82) y título centrado verticalmente a la izquierda?**
3. [ ] **¿Se respetó la lógica cromática por área (Cian = Bachillerato, Violeta = Certificación, Verde = Educación Continua, Dorado = Vinculación, Navy = Transparencia)?**
4. [ ] **¿Las tarjetas ejecutivas cuentan con su borde superior de 4px (`border-t-4`) y su placa de icono ("Opción A")?**
5. [ ] **¿Los fondos de secciones alternan correctamente (blanco ↔ superficie suave ↔ navy)?**
6. [ ] **¿Los botones utilizan las clases institucionales (`.isco-btn-primary`, `.isco-btn-secondary`, `.isco-btn-gold`)?**
7. [ ] **¿El texto está completamente humanizado y libre de jerga burocrática o de SaaS?**
8. [ ] **¿La ortografía y gramática en español es perfecta (tildes, concordancia, puntuación)?**
9. [ ] **¿Se verificó que NO se expusieron RFC, CLUNI ni datos notariales privados?**
10. [ ] **¿La página cierra armónicamente con el componente oficial `CtaSection`?**
11. [ ] **¿La cinta sticky de navegación (Ribbon Nav) sigue el patrón ejecutivo claro translúcido (`bg-white/95 backdrop-blur-md`), con franja cromática superior de 3.5px a 5px, placa de icono invertible y tipografía de dos niveles (prohibidas cintas oscuras planas)?**

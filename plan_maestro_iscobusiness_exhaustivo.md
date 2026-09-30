# Plan Maestro Exhaustivo de `iscobusiness.edu.mx`

> **Versión integral y explícita**
>
> Este documento consolida, sin resumir la planeación conceptual, institucional, editorial, de experiencia de usuario, arquitectura de información, frontend, CSS, migración, SEO, accesibilidad y operación que se definió para `iscobusiness.edu.mx`, incluyendo la relación con `iberica.mx` y `iberica.iscobusiness.edu.mx`.

---

## 0. Datos institucionales y alcance del proyecto

**Portal institucional principal:** `https://iscobusiness.edu.mx/`  
**Portal especializado de certificación:** `https://iberica.iscobusiness.edu.mx/`  
**Dominio legado a transformar:** `https://iberica.mx/`  
**Razón social:** International Supreme Council for Social, Business and Industrial Development, A.C.  
**Nombre comercial consignado en la Constancia de Situación Fiscal:** ISCO & BAIND  
**Marca digital principal del nuevo ecosistema:** **ISCOBusiness**  
**Figura jurídica:** Asociación Civil  
**RFC:** `ISC240920QB0`  
**CLUNI:** `ISC24092021FQV`  
**Entidad de Certificación y Evaluación:** `ECE760-26`  
**Rama especializada de certificación:** Instituto de Capacitación y Certificación Ibérica  

### Propósito general

`iscobusiness.edu.mx` debe convertirse en el **portal matriz de todo el ecosistema ISCOBusiness**. Su función no será ser un catálogo aislado de cursos ni una sustitución gráfica de `iberica.mx`, sino articular:

- educación;
- Prepa Abierta;
- educación continua;
- capacitación;
- certificación de competencias;
- vinculación;
- cooperación;
- desarrollo humano;
- desarrollo social;
- desarrollo económico;
- inclusión;
- participación ciudadana;
- economía popular;
- protección civil;
- proyectos institucionales;
- atención a empresas;
- atención a instituciones;
- atención a organizaciones de la sociedad civil;
- atención a personas interesadas en estudiar, capacitarse o certificar su experiencia.

### Idea central de comunicación

> **ISCOBusiness integra educación, certificación, desarrollo y vinculación dentro de un mismo ecosistema orientado a generar oportunidades para personas, organizaciones y comunidades.**

---

# 1. Arquitectura institucional y de marca

La arquitectura debe entenderse de la siguiente manera:

```text
ISCOBusiness
iscobusiness.edu.mx
│
├── Inicio
├── Nosotros
├── Prepa Abierta
├── Educación Continua
├── Vinculación
├── Certificación de Competencias
│   │
│   └── Instituto de Capacitación y Certificación Ibérica
│       Entidad de Certificación y Evaluación
│       ECE760-26
│       iberica.iscobusiness.edu.mx
│
└── Contacto
```

## 1.1. ISCOBusiness como marca matriz

ISCOBusiness será la identidad institucional principal.

Cuando una persona llegue a `iscobusiness.edu.mx`, debe comprender que está entrando al ecosistema general de la organización, y que desde ahí puede elegir la ruta que necesita.

### ISCOBusiness debe representar

- educación;
- desarrollo;
- formación;
- actualización;
- certificación;
- vinculación;
- cooperación;
- proyectos sociales;
- proyectos educativos;
- proyectos empresariales;
- relaciones institucionales.

## 1.2. Instituto Ibérica como rama especializada

Instituto Ibérica no se elimina.

Se mantiene como una rama especializada de ISCOBusiness, particularmente para:

- evaluación de competencias;
- certificación de competencias;
- Estándares de Competencia;
- Centros de Evaluación;
- Evaluadores;
- Red de Prestadores;
- Atención a Usuarios;
- plataformas operativas;
- CVC;
- operación especializada ECE760-26.

La relación deberá expresarse visualmente así:

```text
ISCOBusiness
     ↓
Certificación de Competencias
     ↓
Instituto Ibérica
     ↓
ECE760-26
```

## 1.3. Razón para conservar el subdominio

Se conserva:

`iberica.iscobusiness.edu.mx`

porque el subdominio ya comunica correctamente que Ibérica forma parte del ecosistema de ISCOBusiness.

No se recomienda migrarlo inmediatamente a otro dominio o subdominio porque:

- ya tiene estructura funcional;
- ya cuenta con diseño aprobado;
- ya organiza correctamente la operación ECE;
- ya existe relación visual con ISCOBusiness;
- el subdominio refuerza la jerarquía de marca.

## 1.4. Papel de `iberica.mx`

`iberica.mx` debe transformarse en dominio legado.

El contenido útil debe rescatarse, reinterpretarse e integrarse dentro de `iscobusiness.edu.mx`.

Después de la migración:

- `iberica.mx` debe permanecer activo;
- sus URLs deben redirigir con `301`;
- no debe competir como sitio independiente;
- no se debe redirigir indiscriminadamente todo al inicio;
- cada URL debe apuntar al destino equivalente cuando exista.

---

# 2. Navegación principal

La navegación principal será:

```text
Inicio
Nosotros
Prepa Abierta
Educación Continua
Vinculación
Certificación
Contacto
```

## 2.1. Certificación en la navegación

El enlace “Certificación” debe llevar primero a:

`/certificacion-de-competencias`

Esta página explicará que:

- Certificación es una línea de ISCOBusiness;
- Instituto Ibérica es la rama especializada;
- ECE760-26 es la figura operativa de evaluación y certificación;
- la operación especializada vive en `iberica.iscobusiness.edu.mx`.

Después el usuario será dirigido al portal operativo.

---

# 3. Header global

El header de `iscobusiness.edu.mx` deberá tomar como referencia directa el frontend aprobado de `iberica.iscobusiness.edu.mx`.

## 3.1. Estructura

```text
UTILITY / TRUST BAR
─────────────────────────
BRAND / INSTITUTIONAL BAR
─────────────────────────
MAIN NAVIGATION
─────────────────────────
```

## 3.2. Identidad

En el portal principal:

**ISCOBusiness**

será la marca dominante.

Instituto Ibérica no debe aparecer como identidad dominante en el header del portal principal.

## 3.3. Menú

- Inicio
- Nosotros
- Prepa Abierta
- Educación Continua
- Vinculación
- Certificación
- Contacto

## 3.4. CTA principal del header

CTA sugerido:

**Solicitar información**

También podrá variar por contexto:

- Inicio → **Explorar nuestros servicios**
- Nosotros → **Conoce nuestros servicios**
- Prepa Abierta → **Pre-registro**
- Educación Continua → **Explorar programas**
- Vinculación → **Vincúlate**
- Certificación → **Ir a la ECE**
- Contacto → **Enviar mensaje**

---

# 4. SECCIÓN INICIO

**URL:** `/`

La página de Inicio debe responder inmediatamente:

- quién es ISCOBusiness;
- qué puede hacer el visitante;
- qué servicios principales existen;
- qué respaldo tiene;
- qué ruta debe seguir.

---

## 4.1. Primera sección — Hero de `iscobusiness.edu.mx`

**Texto superior / eyebrow**

**EDUCACIÓN · CERTIFICACIÓN · VINCULACIÓN**

### H1 principal

# **Impulsamos tu desarrollo a través de la educación, la certificación y nuevas oportunidades.**

### Texto introductorio

**ISCOBusiness** es un ecosistema de educación, desarrollo social y vinculación que conecta a personas, instituciones, empresas y comunidades con oportunidades para continuar su formación, desarrollar nuevas competencias, acreditar su experiencia y construir alianzas de impacto.

Somos **International Supreme Council for Social, Business and Industrial Development, A.C.**, una organización de la sociedad civil comprometida con el desarrollo humano, social y económico mediante la educación, la inclusión, la cooperación y el fortalecimiento de capacidades. La misión institucional incluye la cooperación, inclusión social y certificación educativa y laboral como motores de desarrollo.

### CTA principal

**Explora nuestros servicios**

Este botón debe hacer scroll inmediatamente al bloque donde aparecerán:

**Prepa Abierta · Educación Continua · Certificación de Competencias · Vinculación**

### CTA secundario

**Conoce ISCOBusiness**

Destino:

`/nosotros`

---

## 4.2. Franja de respaldo institucional

Debajo de los botones debe colocarse una línea visual de confianza:

**Educación y desarrollo | Organización de la Sociedad Civil | Entidad de Certificación y Evaluación ECE760-26**

Puede acompañarse con iconos o distintivos institucionales.

La franja debe comunicar visualmente:

- Educación y desarrollo.
- Organización de la Sociedad Civil.
- CLUNI `ISC24092021FQV`.
- Entidad de Certificación y Evaluación `ECE760-26`.

---

## 4.3. Accesos rápidos dentro del mismo hero

En escritorio, debajo o al costado del texto principal, deberán aparecer cuatro accesos visuales.

En móvil podrán aparecer apilados o en carrusel horizontal accesible.

### **Prepa Abierta**

**Una nueva oportunidad para continuar tus estudios.**

Estamos preparando una nueva alternativa educativa para quienes desean avanzar en su formación de nivel medio superior.

**Próximamente**

Botón:

**Conoce el proyecto →**

Destino:

`/prepa-abierta`

### Restricción de comunicación

No utilizar todavía:

- “validez oficial SEP”;
- “obtén tu certificado”;
- “somos sede autorizada”;
- “inscripciones oficiales abiertas”;
- fechas definitivas;

hasta contar con documentos que respalden esas afirmaciones.

---

### **Educación Continua**

**Sigue aprendiendo. Sigue creciendo.**

Cursos, talleres, diplomados y programas de formación dirigidos a personas y organizaciones que buscan desarrollar conocimientos, habilidades y competencias para responder a los nuevos retos profesionales y sociales.

Botón:

**Explorar programas →**

Destino:

`/educacion-continua`

---

### **Certificación de Competencias**

**Tu experiencia también puede convertirse en evidencia de competencia.**

Conoce nuestros procesos de evaluación y certificación de competencias laborales a través de la **Entidad de Certificación y Evaluación ECE760-26**, acreditada dentro del Sistema Nacional de Competencias.

Botón principal:

**Quiero certificarme →**

Destino actual:

`https://iberica.iscobusiness.edu.mx/`

Microtexto:

**Personas · Empresas · Centros de Evaluación · Evaluadores**

---

### **Vinculación**

**Conectamos capacidades para generar oportunidades.**

Creamos puentes de colaboración con empresas, instituciones educativas, organizaciones de la sociedad civil, especialistas y organismos públicos y privados para desarrollar proyectos, programas de capacitación, certificación y acciones de impacto social.

Botón:

**Vincúlate con nosotros →**

Destino:

`/vinculacion`

---

## 4.4. Cómo debe quedar visualmente el primer impacto

> **EDUCACIÓN · CERTIFICACIÓN · VINCULACIÓN**
>
> # Impulsamos tu desarrollo a través de la educación, la certificación y nuevas oportunidades.
>
> ISCOBusiness conecta a personas, instituciones, empresas y comunidades con oportunidades para continuar su formación, desarrollar nuevas competencias, acreditar su experiencia y construir alianzas de impacto.
>
> **[Explora nuestros servicios]   [Conoce ISCOBusiness]**
>
> Educación y desarrollo · Organización de la Sociedad Civil · **ECE760-26**
>
> **Prepa Abierta**  
> Una nueva oportunidad para continuar tus estudios.  
> *Próximamente*
>
> **Educación Continua**  
> Sigue aprendiendo. Sigue creciendo.
>
> **Certificación de Competencias**  
> Tu experiencia también puede convertirse en evidencia de competencia.
>
> **Vinculación**  
> Conectamos capacidades para generar oportunidades.

---

## 4.5. Decisión de marca en Inicio

No mencionar “Instituto Ibérica” como marca dominante en el hero principal.

La portada debe enseñar que la institución matriz es:

**ISCOBusiness**

Ibérica debe aparecer más adelante:

- en Certificación;
- en la explicación del ecosistema;
- en la transición histórica;
- en el portal especializado.

La razón social completa tampoco debe dominar el hero.

En el hero se utiliza:

**ISCOBusiness**

La razón social se presenta en:

- Nosotros;
- Footer;
- información legal;
- bloques de respaldo.

---

## 4.6. Segunda sección de Inicio — Todo lo que puedes hacer en ISCOBusiness

Título:

# **Todo lo que puedes hacer en ISCOBusiness**

Esta sección debe desarrollar las cuatro rutas con enfoque comercial y orientado a conversión.

### Tarjeta 01 — Prepa Abierta

**Continúa tus estudios.**

Una nueva alternativa educativa para quienes necesitan una modalidad flexible y desean iniciar, retomar o concluir su bachillerato.

Estado:

**PRÓXIMAMENTE**

CTA:

**Conocer Prepa Abierta**

---

### Tarjeta 02 — Educación Continua

**Sigue aprendiendo.**

Cursos, talleres, diplomados, actualización profesional y programas de capacitación para personas, empresas e instituciones.

CTA:

**Explorar programas**

---

### Tarjeta 03 — Certificación de Competencias

**Demuestra lo que sabes hacer.**

Procesos de evaluación y certificación de competencias mediante la rama especializada Instituto Ibérica y la ECE760-26.

CTA:

**Conocer Certificación**

---

### Tarjeta 04 — Vinculación

**Construyamos oportunidades juntos.**

Alianzas, convenios, proyectos, capacitación institucional, certificación de equipos y cooperación.

CTA:

**Vincularme**

---

## 4.7. Bloque institucional de Inicio

Mensaje:

> **ISCOBusiness conecta educación, desarrollo, experiencia y colaboración para generar oportunidades de crecimiento personal, profesional y comunitario.**

CTA:

**Conoce nuestra organización**

Destino:

`/nosotros`

---

## 4.8. Modelo de impacto de Inicio

Representación visual:

```text
APRENDER
   ↓
DESARROLLAR
   ↓
ACREDITAR
   ↓
VINCULAR
   ↓
TRANSFORMAR
```

### Aprender

Facilitamos oportunidades educativas.

### Desarrollar

Fortalecemos conocimientos y competencias.

### Acreditar

Impulsamos el reconocimiento de capacidades y experiencia.

### Vincular

Conectamos personas, empresas e instituciones.

### Transformar

Buscamos convertir esas oportunidades en desarrollo humano, económico y social.

---

## 4.9. CTA final de Inicio

# **Encuentra la ruta adecuada para ti.**

Botones:

**Explorar servicios**

**Contactarnos**

---

# 5. SECCIÓN NOSOTROS

**URL:** `/nosotros`

---

## 5.1. Hero de Nosotros

**Eyebrow**

**QUIÉNES SOMOS**

### H1

# **Desarrollo humano, educación y vinculación con propósito.**

### Texto

**ISCOBusiness** es una organización orientada al desarrollo social, económico y humano que impulsa oportunidades mediante la educación, la certificación de competencias, la inclusión, la cooperación y la vinculación estratégica.

Nuestra razón social es **International Supreme Council for Social, Business and Industrial Development, A.C.**, constituida como Asociación Civil en México.

CTA:

**Conoce nuestros servicios**

---

## 5.2. Quiénes somos

En **ISCOBusiness** creemos que el desarrollo comienza cuando las personas tienen acceso a mejores oportunidades para aprender, fortalecer sus capacidades, acreditar sus conocimientos y conectarse con instituciones capaces de impulsar su crecimiento.

Trabajamos para construir puentes entre:

- educación;
- certificación;
- desarrollo social;
- sector productivo;
- instituciones;
- empresas;
- comunidades;
- cooperación;
- fortalecimiento de capacidades.

Nuestra actuación institucional integra proyectos relacionados con:

- educación;
- desarrollo humano;
- desarrollo económico;
- inclusión;
- bienestar;
- participación social;
- fortalecimiento de capacidades.

---

## 5.3. Nuestra misión

# **Impulsar el desarrollo integral de las personas y las comunidades.**

Fomentamos oportunidades de desarrollo mediante la cooperación, la inclusión social, el reconocimiento de derechos, la educación y la certificación educativa y laboral, contribuyendo a la construcción de una sociedad más equitativa, próspera y sostenible.

---

## 5.4. Nuestra visión

# **Ser un referente en desarrollo social, económico y humano.**

Buscamos consolidarnos como una organización capaz de generar alianzas estratégicas y soluciones innovadoras que contribuyan al fortalecimiento de las personas, las instituciones y la economía, ampliando el acceso a oportunidades de formación, profesionalización y desarrollo.

---

## 5.5. Nuestro propósito

# **Convertir el conocimiento, la experiencia y la colaboración en oportunidades de desarrollo.**

Nuestro propósito institucional se orienta a:

- promover la justicia social mediante el reconocimiento de saberes y experiencia;
- facilitar el acceso a oportunidades educativas y de formación;
- fortalecer capacidades personales, profesionales y comunitarias;
- impulsar la economía social y popular;
- crear alianzas que generen impacto social y económico;
- vincular a personas y organizaciones con oportunidades de capacitación, certificación y desarrollo.

---

# 6. LO QUE HACEMOS — NOSOTROS

## 6.1. Educación

Desarrollamos y promovemos oportunidades de formación dirigidas a personas que buscan continuar sus estudios, actualizar conocimientos o adquirir nuevas competencias.

Nuestros proyectos educativos incluyen:

- Prepa Abierta;
- educación continua;
- formación técnica;
- nuevas alternativas de educación media superior.

CTA:

**Conoce nuestra oferta educativa**

---

## 6.2. Certificación de Competencias

Reconocemos el valor de la experiencia y las habilidades desarrolladas a lo largo de la vida laboral.

ISCOBusiness cuenta con acreditación como:

**Entidad de Certificación y Evaluación ECE760-26**

A través de esta actividad se desarrollan:

- procesos de evaluación;
- certificación;
- operación con Centros de Evaluación;
- operación con Evaluadores Independientes;
- proyectos institucionales de certificación.

CTA:

**Conoce nuestra ECE**

---

## 6.3. Educación Continua

Creamos programas que permiten a las personas mantenerse actualizadas y fortalecer sus capacidades profesionales.

Esta línea puede integrar:

**Cursos · Talleres · Diplomados · Formación técnica · Capacitación empresarial · Programas de actualización**

CTA:

**Explorar Educación Continua**

---

## 6.4. Vinculación

Construimos relaciones entre:

- personas;
- empresas;
- instituciones educativas;
- organizaciones de la sociedad civil;
- organismos públicos;
- organismos privados;
- especialistas;
- organizaciones internacionales.

La vinculación puede facilitar:

**Convenios · Proyectos conjuntos · Programas de capacitación · Certificación de personal · Cooperación institucional · Proyectos sociales**

CTA:

**Vincúlate con ISCOBusiness**

---

# 7. EJES DE ACCIÓN — NOSOTROS

### Educación y Certificación

Generamos oportunidades de formación, evaluación y reconocimiento de conocimientos y competencias.

### Desarrollo Humano y Económico

Promovemos capacidades que contribuyan al crecimiento personal, profesional y comunitario.

### Bienestar Social

Impulsamos acciones orientadas al fortalecimiento de las personas y las comunidades.

### Inclusión y Equidad

Promovemos oportunidades de desarrollo para distintos sectores de la población.

### Derechos Humanos

Integramos principios de dignidad, participación e igualdad en nuestras acciones institucionales.

### Desarrollo Comunitario

Construimos proyectos y alianzas destinados a fortalecer capacidades y generar impacto social.

Los ejes institucionales de base son:

- Educación y Certificación.
- Desarrollo Humano y Económico.
- Bienestar Social y Emocional.
- Inclusión y Equidad.
- Derechos Humanos y Democracia.
- Seguridad Alimentaria y Nutricional.

---

# 8. VALORES — NOSOTROS

### Justicia social

Trabajamos para ampliar el acceso a oportunidades de desarrollo.

### Inclusión

Buscamos que la educación, la formación y el desarrollo sean accesibles para distintos sectores de la sociedad.

### Equidad

Promovemos condiciones que permitan a las personas desarrollar plenamente sus capacidades.

### Empoderamiento

Impulsamos conocimientos y herramientas que permitan transformar oportunidades en resultados.

### Transparencia

Actuamos con responsabilidad y claridad en nuestros procesos institucionales.

### Solidaridad

Creemos en la colaboración como herramienta para generar impacto colectivo.

### Innovación

Buscamos nuevas formas de conectar educación, tecnología y desarrollo.

### Responsabilidad social

Orientamos nuestras acciones hacia el bienestar de las personas y las comunidades.

---

# 9. RESPALDO INSTITUCIONAL — NOSOTROS

Bloque visual con iconos o distintivos.

### Asociación Civil

**International Supreme Council for Social, Business and Industrial Development, A.C.**

### Organización de la Sociedad Civil

Inscrita en el Registro Federal de las Organizaciones de la Sociedad Civil.

### CLUNI

**ISC24092021FQV**

### Entidad de Certificación y Evaluación

**ECE760-26**

Acreditación dentro del Sistema Nacional de Competencias.

---

# 10. MODELO DE IMPACTO — NOSOTROS

```text
APRENDER → DESARROLLAR → ACREDITAR → VINCULAR → TRANSFORMAR
```

### Aprender

Facilitamos oportunidades educativas.

### Desarrollar

Fortalecemos conocimientos y competencias.

### Acreditar

Impulsamos el reconocimiento de capacidades y experiencia.

### Vincular

Conectamos personas, empresas e instituciones.

### Transformar

Buscamos convertir esas oportunidades en desarrollo humano, económico y social.

---

# 11. CIERRE — NOSOTROS

# **Creamos oportunidades conectando educación, experiencia y colaboración.**

En ISCOBusiness creemos que una persona, una institución o una comunidad pueden avanzar cuando cuentan con los conocimientos, las herramientas y las conexiones adecuadas.

Por eso integramos educación, certificación y vinculación dentro de un mismo ecosistema orientado al desarrollo.

CTA:

**Conoce nuestros servicios**

**Vincúlate con nosotros**

**Conoce la ECE760-26**

---

# 12. SECCIÓN PREPA ABIERTA

**URL:** `/prepa-abierta`

---

## 12.1. Consideración principal

La sección debe añadirse desde ahora porque el servicio está en proyecto de salir al público.

Se contemplan dos rutas distintas:

1. **Preparatoria Abierta — Plan Modular SEP**
2. **Acreditación de conocimientos — Acuerdo 286**

Estas rutas **no deben presentarse como el mismo procedimiento**.

---

## 12.2. Hero Prepa Abierta

**Eyebrow**

**PREPA ABIERTA ISCOBUSINESS**

### H1

# **Tu educación puede continuar. A tu ritmo y de acuerdo con tus metas.**

### Texto

Estamos desarrollando una nueva línea educativa para acercar a jóvenes y personas adultas alternativas flexibles que les permitan **iniciar, continuar o concluir sus estudios de bachillerato**.

El proyecto **Prepa Abierta ISCOBusiness** contempla la vinculación con el modelo oficial de Preparatoria Abierta de la Secretaría de Educación Pública y la incorporación de servicios relacionados con la acreditación de conocimientos en el marco del **Acuerdo 286**, conforme a las autorizaciones y disposiciones aplicables.

**Próximamente**

CTA:

**Quiero recibir información**

Secundario:

**Conocer el Plan Modular**

Microcopy:

> **Pre-registro informativo disponible. La apertura del servicio estará sujeta a la conclusión de los procesos institucionales y autorizaciones correspondientes.**

---

# 13. PREPA ABIERTA — ALTERNATIVA FLEXIBLE

## **Estudiar también debe adaptarse a tu vida**

Preparatoria Abierta es un servicio educativo de **modalidad no escolarizada** de la Secretaría de Educación Pública, diseñado para que las personas puedan iniciar, continuar o concluir sus estudios de bachillerato mediante evaluaciones parciales.

Su modelo se caracteriza por:

- flexibilidad en los tiempos;
- flexibilidad en la trayectoria;
- periodos de evaluación;
- estudio independiente;
- avance de acuerdo con condiciones y ritmo de aprendizaje.

El servicio puede resultar especialmente relevante para:

- jóvenes;
- personas adultas;
- personas que trabajan;
- personas con estudios parciales;
- quienes no pueden asistir a un sistema escolarizado tradicional;
- quienes desean retomar estudios;
- quienes necesitan organizar sus tiempos.

Destacado visual:

**Aprende a tu ritmo · Estudio independiente · Trayectoria flexible · Evaluaciones parciales · Continuidad educativa**

---

# 14. PLAN DE ESTUDIOS MODULAR

## **22 módulos para desarrollar conocimientos y competencias**

El proyecto académico contempla trabajar con el **Plan de Estudios Modular de Preparatoria Abierta de la SEP**.

El plan oficial está integrado por:

**22 módulos**

### 21 módulos — Componente Básico

Áreas:

- Comunicación.
- Matemáticas.
- Ciencias Experimentales.
- Humanidades.
- Ciencias Sociales.

### 1 módulo — Componente Profesional

Área:

**Informática**

CTA:

**Conoce cómo funciona el Plan Modular**

Posteriormente se puede crear una subpágina para desarrollar los 22 módulos individualmente.

---

# 15. ¿CÓMO SE ESTUDIA?

## **Una modalidad diseñada para el aprendizaje independiente**

A diferencia de un bachillerato escolarizado tradicional, Preparatoria Abierta permite que las y los estudiantes desarrollen gran parte de su preparación mediante **estudio independiente**.

La aportación de ISCOBusiness debe concentrarse en el **acompañamiento educativo**, no en crear la impresión de que altera el modelo oficial.

Ruta visual:

```text
ORIENTACIÓN
   ↓
ESTUDIO
   ↓
ACOMPAÑAMIENTO
   ↓
PREPARACIÓN
   ↓
EVALUACIÓN
   ↓
AVANCE ACADÉMICO
```

---

# 16. ¿QUÉ QUEREMOS OFRECER DESDE ISCOBUSINESS?

## **No solamente acceso: acompañamiento durante tu trayectoria**

El proyecto busca desarrollar un centro de acompañamiento educativo en el que las personas puedan recibir orientación para:

- comprender el modelo;
- organizar su trayectoria académica;
- prepararse para las diferentes etapas;
- recibir asesoría;
- dar seguimiento a módulos;
- prepararse para evaluaciones;
- recibir apoyo administrativo;
- vincularse con procedimientos oficiales correspondientes.

Etiqueta:

### **SERVICIO EN DESARROLLO**

Texto:

**Estamos trabajando en la integración institucional de esta nueva línea educativa.**

---

# 17. ¿PARA QUIÉN ES PREPA ABIERTA?

- Personas adultas que desean concluir su bachillerato.
- Jóvenes que requieren una modalidad educativa flexible.
- Personas que trabajan.
- Personas que dejaron inconclusa su educación media superior.
- Estudiantes con estudios previos de bachillerato.
- Personas que requieren avanzar a su propio ritmo.
- Personas que desean continuar hacia educación superior.

---

# 18. INDICADORES DE PREPA

### 22

**Módulos del Plan Modular**

### 21 + 1

**Componente básico + componente profesional**

### A tu ritmo

**Trayectoria académica flexible**

### Sin límite de edad

**De acuerdo con las condiciones del servicio oficial de Preparatoria Abierta**

---

# 19. ESTUDIOS PREVIOS

## **Tus estudios anteriores pueden ser importantes**

Las personas que cuentan con estudios previos de educación media superior pueden consultar la posibilidad de reconocimiento mediante procedimientos de **equivalencia de estudios**.

No prometer:

> “Te revalidamos tus materias”.

La equivalencia o revalidación depende de procedimientos de la autoridad educativa.

CTA:

**Solicitar orientación**

---

# 20. DOS CAMINOS QUE SE PRETENDEN INTEGRAR

## 20.1. Preparatoria Abierta — Plan Modular

### **Avanza módulo por módulo**

Ruta basada en:

- Plan Modular;
- 22 módulos;
- trayectoria flexible;
- evaluaciones parciales;
- avance progresivo.

Estado:

**EN DESARROLLO**

CTA:

**Conocer el Plan Modular**

---

## 20.2. Acreditación de conocimientos — Acuerdo 286

### **Otra vía para reconocer conocimientos adquiridos a lo largo de la vida**

El Acuerdo 286 y su modificatorio establecen procedimientos mediante los cuales pueden acreditarse conocimientos cuando han sido adquiridos:

- de forma autodidacta;
- mediante experiencia laboral;
- mediante otras vías contempladas en la normatividad.

Para educación media superior se contempla el perfil:

**Bachillerato General**

Los procesos de evaluación se realizan ante **Instituciones Evaluadoras autorizadas**.

### Proyecto ISCOBusiness

ISCOBusiness pretende desarrollar la vinculación institucional necesaria para participar en este esquema y contar con una **sede para los procesos correspondientes al Acuerdo 286**, una vez obtenidas las autorizaciones y formalizaciones aplicables.

Estado:

**EN PROCESO DE GESTIÓN**

CTA:

**Quiero conocer esta modalidad**

---

# 21. COMPARATIVO PREPA ABIERTA VS ACUERDO 286

| | Preparatoria Abierta | Acuerdo 286 |
|---|---|---|
| Enfoque | Trayectoria académica modular | Acreditación de conocimientos |
| Modelo | 22 módulos | Procedimiento de evaluación autorizado |
| Forma de avance | Evaluaciones parciales | Evaluaciones determinadas por Institución Evaluadora |
| Ideal para | Quien desea avanzar progresivamente | Quien busca acreditar conocimientos previamente adquiridos |
| Marco | Preparatoria Abierta SEP | Acuerdo 286 |
| ISCOBusiness | Proyecto en desarrollo | Proyecto de sede/vinculación en gestión |

---

# 22. RESPALDO Y CERTIFICADO

## **Trabajamos para integrarnos a mecanismos oficiales, no para crear certificados propios**

El proyecto debe operar dentro de los mecanismos educativos oficiales que correspondan.

ISCOBusiness **no debe presentarse como emisor del certificado** mientras esa facultad no esté acreditada documentalmente.

La comunicación debe ajustarse a la figura finalmente autorizada:

- sede;
- centro de servicio;
- institución vinculada;
- institución evaluadora;
- otra figura aplicable.

---

# 23. PRE-REGISTRO PREPA ABIERTA

Campos sugeridos:

- Nombre completo.
- Correo.
- Teléfono/WhatsApp.
- Ciudad/Estado.
- Último grado cursado.
- ¿Cuenta con estudios parciales de bachillerato?
- Ruta de interés:
  - Plan Modular.
  - Acuerdo 286.
  - Necesito orientación.
- Aviso de privacidad.

CTA:

**QUIERO PRE-REGISTRARME**

Microcopy obligatorio:

> **El pre-registro no constituye inscripción oficial ni garantiza un lugar. Su finalidad es mantenerte informado sobre la apertura del servicio.**

---

# 24. FAQ PREPA ABIERTA

### ¿Ya puedo inscribirme con ISCOBusiness?

Aún no. El proyecto se encuentra en proceso de desarrollo y formalización. Puede habilitarse un pre-registro informativo.

### ¿Preparatoria Abierta tiene 22 materias?

Debe comunicarse correctamente como **22 módulos**: 21 del componente básico y uno del componente profesional.

### ¿Tengo que estudiar todos los días en un salón?

No. Es una modalidad no escolarizada basada principalmente en estudio independiente.

### ¿Hay límite de edad?

El servicio oficial de Preparatoria Abierta contempla atención sin límite de edad, sujeto a requisitos aplicables.

### ¿Qué es el Acuerdo 286?

Es un marco que establece procedimientos para acreditar conocimientos adquiridos por determinadas vías, a través de Instituciones Evaluadoras autorizadas.

### ¿ISCOBusiness ya es sede del Acuerdo 286?

No debe publicarse todavía como tal. El proyecto está en gestión.

---

# 25. CIERRE PREPA ABIERTA

# **Tu historia educativa puede continuar.**

No importa si dejaste de estudiar hace algunos meses o varios años. Dar continuidad a tu educación puede abrir nuevas oportunidades personales, académicas y profesionales.

### **Prepa Abierta ISCOBusiness**

**Educación flexible. Acompañamiento. Nuevas oportunidades.**

CTA:

**Quiero recibir información**

**Pre-registro Prepa Abierta**

---

# 26. SECCIÓN EDUCACIÓN CONTINUA

**URL:** `/educacion-continua`

---

## 26.1. Hero

**Eyebrow**

**EDUCACIÓN CONTINUA ISCOBUSINESS**

### H1

# **Aprender continuamente transforma lo que puedes hacer.**

### Texto

Fortalece tus conocimientos, desarrolla nuevas habilidades y adquiere herramientas aplicables a tu vida profesional, laboral y social.

En **ISCOBusiness** entendemos la educación continua como un proceso de aprendizaje a lo largo de la vida. Por ello desarrollamos **cursos, talleres, diplomados y programas de capacitación** orientados al desarrollo de competencias y a las necesidades actuales de personas, empresas, instituciones y comunidades.

CTA:

**Explorar programas**

**Solicitar información**

Microtexto:

**Modalidades presenciales, en línea y mixtas, de acuerdo con las características de cada programa.**

---

# 27. EDUCACIÓN PARA SEGUIR AVANZANDO

## **Tu formación no termina cuando concluyes una etapa académica**

El entorno profesional y laboral cambia constantemente. Nuevas tecnologías, procesos, conocimientos y necesidades sociales hacen indispensable mantener nuestras capacidades actualizadas.

La Educación Continua de ISCOBusiness busca acercar oportunidades a quienes desean:

- actualizar conocimientos;
- desarrollar nuevas habilidades;
- fortalecer perfil profesional;
- adquirir herramientas prácticas;
- prepararse para nuevas responsabilidades;
- complementar experiencia;
- fortalecer equipos de trabajo;
- continuar aprendiendo por desarrollo personal y profesional.

Objetivo:

> generar experiencias de aprendizaje que puedan convertirse en conocimientos aplicables, habilidades demostrables y mejores capacidades para desenvolverse en contextos reales.

---

# 28. MODELO FORMATIVO

## **Conocimiento + práctica + actitud + colaboración**

Conservar del modelo Ibérica:

### Saber

**Conocimiento**

Comprender conceptos, principios, metodologías y fundamentos.

### Saber Hacer

**Desempeño**

Convertir conocimiento en acciones, procedimientos, productos y habilidades.

### Saber Ser

**Actitudes y valores**

Fortalecer ética, responsabilidad, compromiso y actitudes profesionales.

### Saber Convivir

**Colaboración**

Desarrollar comunicación, colaboración, respeto a la diversidad y participación constructiva.

Frase:

# **Aprender no significa únicamente saber más. Significa ser capaz de hacer más y hacerlo mejor.**

---

# 29. OFERTA DE EDUCACIÓN CONTINUA

## **Encuentra una ruta de formación de acuerdo con tus objetivos**

---

## 29.1. Educación Continua y Extensión

### **Actualiza tus conocimientos y desarrolla nuevas competencias**

Oferta:

- Diplomados.
- Cursos.
- Talleres.
- Seminarios.
- Conferencias.
- Programas de actualización.

Dirigido a:

- estudiantes;
- profesionistas;
- trabajadores;
- emprendedores;
- especialistas;
- personas interesadas en seguir desarrollándose.

CTA:

**Explorar Educación Continua**

---

## 29.2. Formación de Capital Humano

### **Personas mejor preparadas construyen organizaciones más fuertes**

Programas dirigidos a empresas e instituciones.

Líneas:

- Desarrollo profesional.
- Habilidades laborales.
- Liderazgo.
- Comunicación.
- Formación de instructores.
- Competencias digitales.
- Procesos administrativos.
- Atención y servicio.
- Desarrollo organizacional.

También debe permitirse capacitación **a la medida**.

CTA:

**Solicitar propuesta de capacitación**

---

## 29.3. Inclusión y Educación Especial

### **La educación debe generar oportunidades para todas las personas**

Líneas:

- Inclusión educativa.
- Atención a la diversidad.
- Accesibilidad.
- Derechos humanos.
- Equidad.
- Atención a grupos prioritarios.

CTA:

**Conocer programas de inclusión**

---

## 29.4. Protección Civil y Gestión Integral del Riesgo

### **Prepararse también es una forma de proteger.**

Líneas:

- Protección Civil.
- Primeros Auxilios.
- Prevención de Riesgos.
- Seguridad.
- Brigadas.
- Planes de Emergencia.
- Gestión Integral del Riesgo de Desastres.

CTA:

**Explorar programas de Protección Civil**

---

## 29.5. Programas de Educación y Desarrollo

### **Formación orientada a nuevas oportunidades**

Líneas:

- Educación para adultos.
- Competencias digitales.
- Desarrollo comunitario.
- Economía popular.
- Emprendimiento.
- Formación para el trabajo.
- Desarrollo humano.

---

# 30. TIPOS DE PROGRAMAS

### Diplomados

Programas estructurados para profundizar en un campo específico mediante diferentes unidades o módulos de aprendizaje.

### Cursos

Programas enfocados en desarrollar conocimientos o habilidades concretas en periodos determinados.

### Talleres

Experiencias predominantemente prácticas para desarrollar y aplicar habilidades.

### Seminarios y conferencias

Espacios de actualización, análisis e intercambio de conocimientos sobre temas especializados.

### Capacitación empresarial

Programas dirigidos a organizaciones y equipos de trabajo.

### Programas especiales

Proyectos educativos desarrollados en colaboración con instituciones, empresas u organizaciones.

---

# 31. MODALIDADES DE APRENDIZAJE

### Presencial

Experiencias de aprendizaje con acompañamiento directo de instructores y actividades desarrolladas físicamente.

### En línea

Programas apoyados por plataformas digitales que permiten ampliar el acceso.

### Mixta

Combinación de experiencias presenciales y recursos digitales.

Microcopy:

> **La modalidad disponible dependerá de las características de cada programa.**

---

# 32. METODOLOGÍA

## **Aprender haciendo**

Dependiendo del programa:

- casos prácticos;
- proyectos;
- ejercicios;
- simulaciones;
- resolución de problemas;
- actividades colaborativas;
- productos;
- evidencias de aprendizaje.

Frase:

# **El conocimiento adquiere valor cuando puede convertirse en acción.**

---

# 33. TECNOLOGÍA PARA EL APRENDIZAJE

## **Educación que aprovecha las nuevas herramientas**

Utilizar:

- aulas virtuales;
- plataformas educativas;
- recursos multimedia;
- herramientas colaborativas;
- tecnologías digitales;
- inteligencia artificial aplicada al aprendizaje.

CTA futuro:

**Ingresar al Aula Virtual**

---

# 34. EDUCACIÓN CONTINUA Y CERTIFICACIÓN: DOS PROCESOS DIFERENTES

## **Puedes capacitarte, certificarte o hacer ambas cosas**

### Educación Continua

**Aprender y desarrollar competencias**

Cursos, talleres, diplomados y capacitación.

### Certificación de Competencias

**Demostrar y acreditar una competencia**

Proceso especializado mediante ECE760-26.

No comunicar un curso como si produjera automáticamente una certificación CONOCER.

Cuando un programa se relacione con un Estándar de Competencia, indicar claramente si corresponde a:

- capacitación;
- alineación;
- preparación;
- evaluación;
- certificación.

---

# 35. FORMACIÓN ALINEADA CON COMPETENCIAS

Los programas pueden considerar:

- necesidades del sector productivo;
- perfiles ocupacionales;
- normatividad aplicable;
- buenas prácticas;
- Estándares de Competencia.

---

# 36. PÚBLICOS DE EDUCACIÓN CONTINUA

### Personas

Que desean aprender, actualizarse y desarrollar habilidades.

### Profesionistas

Que necesitan mantenerse actualizados.

### Empresas

Que requieren fortalecer a sus equipos.

### Instituciones

Que buscan desarrollar programas para estudiantes, colaboradores o comunidades.

### Organizaciones de la Sociedad Civil

Que requieren capacitación vinculada a sus proyectos.

### Sector público

Para proyectos de capacitación y fortalecimiento institucional.

---

# 37. CAPACITACIÓN PARA EMPRESAS E INSTITUCIONES

## **Podemos desarrollar un programa de acuerdo con tus necesidades**

Variables:

- objetivo;
- perfil de participantes;
- competencias requeridas;
- duración;
- modalidad;
- evidencias;
- seguimiento.

CTA:

**Solicitar propuesta**

**Hablar con Vinculación**

---

# 38. CATÁLOGO DE PROGRAMAS

Filtros:

```text
Todos
Diplomados
Cursos
Talleres
Capital Humano
Inclusión
Protección Civil
Educación
En línea
Presencial
```

Cada tarjeta:

- Nombre del programa.
- Área.
- Modalidad.
- Duración.
- Fecha de inicio.
- Estado.
- Imagen.
- Resumen.
- CTA.

Estados:

- Inscripciones abiertas.
- Próximamente.
- Convocatoria cerrada.

CTA:

**Ver programa**

**Solicitar información**

---

# 39. CIERRE EDUCACIÓN CONTINUA

# **El aprendizaje puede acompañarte durante toda la vida.**

Cada nueva competencia puede convertirse en una herramienta para avanzar profesionalmente, responder a nuevos retos y generar oportunidades.

CTA:

**Explorar programas**

**Solicitar información**

**Capacitación para empresas**

---

# 40. SECCIÓN VINCULACIÓN

**URL:** `/vinculacion`

---

## 40.1. Hero

**Eyebrow**

**VINCULACIÓN ISCOBUSINESS**

### H1

# **Conectamos personas, instituciones y capacidades para crear oportunidades.**

### Texto

Construimos alianzas entre el sector educativo, empresarial, social y público para desarrollar proyectos que generen valor, fortalezcan capacidades y contribuyan al desarrollo humano, profesional, económico y comunitario.

En **ISCOBusiness** creemos que los mejores resultados surgen de la colaboración. Por ello generamos espacios de vinculación con empresas, instituciones educativas, organizaciones de la sociedad civil, organismos públicos, especialistas y aliados estratégicos.

CTA:

**Quiero vincularme con ISCOBusiness**

**Solicitar una reunión**

Microtexto:

**Empresas · Instituciones educativas · Sector público · OSC · Especialistas · Organizaciones nacionales e internacionales**

---

# 41. VINCULACIÓN QUE GENERA RESULTADOS

## **De una alianza pueden surgir nuevas oportunidades**

La vinculación no consiste únicamente en firmar convenios.

El objetivo es convertir relaciones institucionales en:

- proyectos;
- programas;
- acciones concretas;
- capacitación;
- certificación;
- desarrollo de talento;
- proyectos sociales;
- inclusión;
- cooperación institucional;
- desarrollo comunitario.

---

# 42. ¿CON QUIÉN NOS VINCULAMOS?

## 42.1. Empresas

### **Desarrollemos el talento de tu organización**

Servicios:

- Capacitación empresarial.
- Desarrollo de competencias.
- Educación continua.
- Evaluación de personal.
- Certificación de competencias.
- Proyectos especiales.

CTA:

**Quiero una propuesta para mi empresa**

---

## 42.2. Instituciones educativas

### **Construyamos nuevas oportunidades de formación**

Posibilidades:

- Educación continua.
- Programas conjuntos.
- Formación especializada.
- Vinculación con certificación.
- Conferencias.
- Actividades académicas.
- Proyectos educativos.

CTA:

**Proponer una alianza educativa**

---

## 42.3. Sector empresarial y productivo

### **Formación conectada con necesidades reales**

La vinculación con el sector productivo permite identificar:

- competencias necesarias;
- conocimientos;
- capacidades;
- necesidades actuales de organizaciones.

Objetivo:

acercar educación y desarrollo de competencias a situaciones reales de desempeño.

CTA:

**Hablar con Vinculación Empresarial**

---

## 42.4. Sector público

### **Colaboración para proyectos con impacto social**

Áreas:

- Educación.
- Capacitación.
- Desarrollo social.
- Inclusión.
- Participación ciudadana.
- Economía popular.
- Protección civil.
- Fortalecimiento comunitario.

CTA:

**Presentar un proyecto institucional**

---

## 42.5. Organizaciones de la Sociedad Civil

### **Sumamos capacidades para ampliar el impacto**

Posibilidades:

- Programas de formación.
- Proyectos conjuntos.
- Fortalecimiento de capacidades.
- Cooperación técnica.
- Educación comunitaria.
- Certificación de competencias relacionada con sus proyectos.

CTA:

**Vincular mi organización**

---

# 43. CERTIFICACIÓN PARA ORGANIZACIONES

## **Fortalece a tu organización mediante competencias verificables**

ISCOBusiness cuenta con una línea especializada de evaluación y certificación de competencias operada dentro de la acreditación **ECE760-26**.

Los proyectos pueden contemplar:

- identificación de Estándares;
- número de participantes;
- sedes;
- evaluadores;
- infraestructura;
- calendario;
- seguimiento.

CTA:

**Certificar a mi equipo**

Destino:

`https://iberica.iscobusiness.edu.mx/`

---

# 44. RED DE PRESTADORES

## **Centros de Evaluación y Evaluadores**

### Centro de Evaluación

Dirigido a organizaciones interesadas en conocer los requisitos para integrarse a la Red.

CTA:

**Quiero conocer el modelo de Centro de Evaluación**

### Evaluador Independiente

Dirigido a especialistas interesados en integrarse.

CTA:

**Quiero conocer la ruta para Evaluadores**

Microcopy:

> **La integración a la Red está sujeta al cumplimiento de requisitos, procesos de acreditación, Estándares autorizados y demás disposiciones aplicables.**

---

# 45. ESPECIALISTAS Y PROFESIONALES

## **Tu experiencia puede convertirse en colaboración**

Perfiles:

- docentes;
- instructores;
- consultores;
- evaluadores;
- especialistas técnicos;
- profesionales de diferentes sectores.

CTA:

**Quiero colaborar con ISCOBusiness**

Formulario puede permitir:

```text
Docencia
Capacitación
Evaluación
Consultoría
Proyecto social
Otro
```

---

# 46. COOPERACIÓN NACIONAL E INTERNACIONAL

## **Las oportunidades no tienen por qué limitarse a una sola institución o territorio**

Buscar relaciones con:

- instituciones educativas;
- organismos de cooperación;
- empresas;
- asociaciones;
- fundaciones;
- redes profesionales;
- organizaciones nacionales;
- organizaciones internacionales.

Posibilidades:

- programas educativos;
- cooperación técnica;
- proyectos sociales;
- capacitación;
- intercambio de conocimiento;
- alianzas.

CTA:

**Explorar oportunidades de cooperación**

---

# 47. PROYECTOS SOCIALES Y COMUNITARIOS

## **La vinculación también puede transformar comunidades**

Áreas:

- Educación y formación.
- Inclusión social.
- Derechos humanos.
- Desarrollo económico.
- Economía popular.
- Participación ciudadana.
- Protección civil.
- Fortalecimiento de capacidades.

CTA:

**Presentar un proyecto social**

---

# 48. CONVENIOS Y ALIANZAS ESTRATÉGICAS

## **De la intención a la colaboración formal**

Un convenio puede definir:

- objetivos;
- responsabilidades;
- alcances;
- actividades;
- población beneficiaria;
- recursos;
- vigencia;
- seguimiento.

Mensaje central:

# **No buscamos acumular convenios. Buscamos construir alianzas que produzcan resultados.**

---

# 49. PROCESO DE VINCULACIÓN

### 1. Conversemos

Cuéntanos quién eres, qué organización representas y qué objetivo quieres alcanzar.

### 2. Identificamos la necesidad

Analizamos proyecto, población, alcance y resultados esperados.

### 3. Diseñamos una ruta

Determinamos qué áreas de ISCOBusiness pueden intervenir.

### 4. Formalizamos

Definimos alcances, responsabilidades y mecanismos.

### 5. Implementamos y damos seguimiento

Convertimos la vinculación en acciones y evaluamos resultados.

---

# 50. SOLUCIONES PARA ORGANIZACIONES

## **Un solo punto de entrada a diferentes capacidades**

Ejemplos:

> “Necesito capacitar 100 colaboradores.”  
> → Educación Continua.

> “Quiero certificar las competencias de mi personal.”  
> → ECE760-26.

> “Somos una universidad y queremos desarrollar programas conjuntos.”  
> → Vinculación Educativa.

> “Somos una asociación y queremos implementar un proyecto comunitario.”  
> → Desarrollo Social.

> “Queremos integrarnos como Centro de Evaluación.”  
> → Red ECE760-26.

---

# 51. FORMULARIO DE VINCULACIÓN

Campos:

- Nombre y apellidos.
- Organización.
- Cargo.
- Correo institucional.
- Teléfono.
- Tipo de organización.
- Área de interés.
- Descripción de propuesta.
- Aviso de privacidad.

Tipo de organización:

```text
Empresa
Institución educativa
Gobierno
OSC
Especialista
Organización internacional
Otro
```

Interés:

```text
Educación Continua
Capacitación empresarial
Certificación
Centro de Evaluación
Proyectos sociales
Convenio
Cooperación
Otro
```

Botón:

**Enviar propuesta de vinculación**

Microcopy:

> Nuestro equipo revisará tu solicitud para identificar el área correspondiente. El envío de una propuesta no constituye aceptación, convenio o relación contractual.

---

# 52. ALIANZAS PUBLICADAS

Antes de mostrar logotipos o nombres heredados de Ibérica validar:

- ¿Existe convenio vigente?
- ¿Qué entidad lo firmó?
- ¿Está activo?
- ¿Existe permiso de uso de logotipo?
- ¿Cuál es el alcance real de la relación?

No migrar automáticamente todos los logotipos.

---

# 53. CIERRE VINCULACIÓN

# **Las grandes oportunidades se construyen conectando capacidades.**

CTA:

**Quiero vincularme**

**Solicitar una reunión**

**Certificación para organizaciones**

---

# 54. SECCIÓN CERTIFICACIÓN DE COMPETENCIAS

**URL contextual:** `/certificacion-de-competencias`  
**Portal operativo:** `https://iberica.iscobusiness.edu.mx/`

---

## 54.1. Principio fundamental

Esta página **no debe duplicar**:

- buscador de Estándares;
- catálogo de Estándares;
- proceso operativo completo;
- Red de Prestadores;
- CVC;
- CVC Colaboradores;
- portal interno;
- Atención a Usuarios;
- operación administrativa de la ECE.

Su función debe ser:

```text
EXPLICAR
   ↓
CONTEXTUALIZAR
   ↓
ORIENTAR
   ↓
DIRIGIR
```

---

# 55. HERO CERTIFICACIÓN

**Eyebrow**

**CERTIFICACIÓN DE COMPETENCIAS**

### H1

# **Convierte lo que sabes hacer en evidencia reconocida oficialmente.**

### Texto

Tu experiencia laboral, profesional o independiente puede ser evaluada con base en **Estándares de Competencia** que establecen los conocimientos, habilidades, destrezas, actitudes y evidencias que una persona debe demostrar para realizar una función.

La línea de **Certificación de Competencias de ISCOBusiness** opera a través del **Instituto de Capacitación y Certificación Ibérica**, nuestra rama especializada y **Entidad de Certificación y Evaluación ECE760-26**.

CTA:

**Quiero certificarme**

**Explorar la ECE760-26**

Destino:

`https://iberica.iscobusiness.edu.mx/`

Microtexto:

**Instituto Ibérica forma parte de ISCOBusiness.**

---

# 56. UNA RAMA ESPECIALIZADA DE ISCOBUSINESS

## **Educación, desarrollo y certificación dentro de un mismo ecosistema**

Visualmente:

```text
ISCOBusiness
     ↓
Certificación de Competencias
     ↓
Instituto Ibérica
     ↓
ECE760-26
```

La certificación debe entenderse como una línea estratégica de ISCOBusiness con operación especializada.

---

# 57. ¿QUÉ ES LA CERTIFICACIÓN DE COMPETENCIAS?

## **Reconocer formalmente lo que una persona sabe hacer**

La evaluación considera evidencias de:

- desempeño;
- productos;
- conocimientos;
- comportamientos;
- actitudes.

Cuando la persona obtiene resultado Competente y el proceso es procedente, la ECE realiza la gestión correspondiente ante CONOCER.

Mensaje:

# **No se certifica lo que estudiaste. Se evalúa lo que puedes demostrar que sabes hacer.**

---

# 58. TU EXPERIENCIA TIENE VALOR

## **Lo que has aprendido trabajando también puede demostrarse**

Las competencias pueden desarrollarse mediante:

- experiencia laboral;
- práctica profesional;
- emprendimiento;
- formación;
- capacitación;
- experiencia independiente;
- actividades desarrolladas a lo largo de la trayectoria.

CTA:

**Encontrar mi Estándar**

---

# 59. ECE760-26

## **Nuestra Entidad de Certificación y Evaluación**

Operación especializada mediante:

### Instituto de Capacitación y Certificación Ibérica

**Entidad de Certificación y Evaluación ECE760-26**

Principios:

- Legalidad.
- Imparcialidad.
- Calidad.
- Confidencialidad.
- Respeto.
- Responsabilidad.
- Transparencia.
- Trazabilidad.

CTA:

**Conocer la ECE760-26**

---

# 60. RUTAS DE CERTIFICACIÓN

### 1. Quiero certificarme

Persona que desea identificar un Estándar aplicable y conocer cómo evaluarse.

CTA:

**Quiero certificarme**

### 2. Quiero certificar a mi equipo

Empresas e instituciones.

CTA:

**Certificación para organizaciones**

### 3. Quiero ser Centro de Evaluación

Organizaciones interesadas en incorporarse a la Red.

CTA:

**Conocer la ruta para CE**

### 4. Quiero ser Evaluador Independiente

Especialistas.

CTA:

**Conocer la ruta para EI**

---

# 61. CUATRO CONCEPTOS QUE DEBEN EXPLICARSE

## Capacitación

Permite aprender o fortalecer conocimientos y habilidades.

Ruta principal:

**Educación Continua**

## Alineación

Permite contrastar experiencia existente con criterios y evidencias de un Estándar.

No es un curso.

Es opcional.

No garantiza resultado Competente.

## Evaluación

Proceso mediante el cual se recopilan y valoran evidencias.

## Certificación

Reconocimiento correspondiente a una competencia demostrada conforme a un Estándar.

Mensaje:

> **Puedes capacitarte sin certificarte y puedes solicitar evaluación sin haber tomado previamente un curso, siempre que cuentes con la competencia necesaria.**

---

# 62. PROCESO DE CERTIFICACIÓN

### 1. Identifica el Estándar

Encuentra la función relacionada con lo que sabes hacer.

### 2. Recibe orientación

Conoce requisitos, costos, evidencias, etapas, modalidad y condiciones.

### 3. Regístrate

Integra la información requerida.

### 4. Planea tu evaluación

Se acuerdan actividades, fechas, lugares y evidencias.

### 5. Demuestra tu competencia

Presentas desempeños, productos, conocimientos y comportamientos.

### 6. Recibe tu resultado

**Competente** o **Todavía no competente**

### 7. Gestión del certificado

Cuando el resultado es Competente y el proceso procede, se realiza la gestión correspondiente.

CTA:

**Conocer el proceso completo**

---

# 63. ESTÁNDARES DE COMPETENCIA

## **Encuentra la función que quieres demostrar**

Cada Estándar establece lo que una persona debe:

**Saber · Hacer · Demostrar**

CTA:

**Consultar Estándares acreditados**

No duplicar el catálogo en `iscobusiness.edu.mx`.

La fuente actualizada debe permanecer en:

`iberica.iscobusiness.edu.mx`

---

# 64. PARA PERSONAS

## **Reconoce tu experiencia**

Beneficios:

- Reconocer experiencia.
- Fortalecer perfil profesional.
- Ampliar oportunidades.

CTA:

**Quiero conocer mis opciones**

---

# 65. PARA EMPRESAS E INSTITUCIONES

## **Certificación de competencias para equipos**

Pueden desarrollarse proyectos para:

- empresas;
- instituciones educativas;
- dependencias;
- asociaciones;
- organizaciones sociales.

Variables:

- Estándares.
- Viabilidad.
- Grupos.
- Sedes.
- Evaluadores.
- Infraestructura.
- Programación.
- Seguimiento.

CTA:

**Solicitar propuesta institucional**

---

# 66. RED DE PRESTADORES

### Centro de Evaluación

Organización acreditada para desarrollar evaluaciones mediante evaluadores autorizados dentro de su alcance.

### Evaluador Independiente

Persona física acreditada para realizar evaluaciones directamente.

### Evaluador adscrito

Persona que evalúa bajo responsabilidad y alcance de una ECE o CE.

### Sede de evaluación

Espacio con condiciones e infraestructura para realizar evaluaciones.

Importante:

> Una sede por sí misma no equivale a un Centro de Evaluación.

CTA:

**Consultar Red de Prestadores**

**Quiero incorporarme a la Red**

---

# 67. ¿QUIÉN EXPIDE EL CERTIFICADO?

## La persona candidata

Demuestra la competencia.

## Evaluador / Centro

Recopila y valora evidencias dentro de su alcance.

## Instituto Ibérica / ECE760-26

Revisa, dictamina y realiza la gestión cuando corresponde.

## CONOCER

Expide el certificado cuando el proceso cumple las condiciones aplicables.

Evitar la frase simplificada:

> “ISCOBusiness te expide tu certificado CONOCER”.

---

# 68. PRINCIPIOS DE OPERACIÓN

- Legalidad.
- Imparcialidad.
- Transparencia.
- Calidad.
- Confidencialidad.
- Respeto.
- Responsabilidad.
- Trazabilidad.

También deben mantenerse:

- evaluación separada de capacitación;
- prevención de conflicto de interés;
- protección de datos;
- mecanismos de inconformidad;
- claridad de alcance.

---

# 69. ATENCIÓN A USUARIOS

El portal especializado debe mantener información sobre:

- alcance;
- requisitos;
- condiciones;
- costos;
- evidencias;
- etapas;
- modalidad;
- derechos;
- obligaciones;
- privacidad;
- quejas;
- aclaraciones;
- derechos ARCO;
- accesibilidad.

CTA:

**Ir a Atención a Usuarios**

---

# 70. PLATAFORMAS ESPECIALIZADAS

Conservar en Ibérica:

### CVC — Centro Virtual

Capacitación y orientación.

### CVC Colaboradores

Portal para Centros y Evaluadores.

### Portal interno

Personal autorizado.

No duplicar estas plataformas en ISCOBusiness salvo como enlaces.

---

# 71. DEL APRENDIZAJE AL RECONOCIMIENTO

```text
APRENDER
Educación Continua
   ↓
PRACTICAR
Experiencia
   ↓
DEMOSTRAR
Evaluación
   ↓
CERTIFICAR
ECE760-26
   ↓
SEGUIR CRECIENDO
ISCOBusiness
```

---

# 72. HISTORIA Y TRANSICIÓN DE IBÉRICA

## **Instituto Ibérica: nuestra especialización en competencias**

Instituto Ibérica nació con el propósito de unir:

- conocimiento;
- habilidades;
- práctica;
- ética profesional.

Lema:

### **Talento con evidencia, competencias con impacto.**

Modelo:

**Saber · Saber Hacer · Saber Ser · Saber Convivir**

Ejes históricos:

- Formación Profesional y Capacitación.
- Certificación de Competencias.
- Vinculación Estratégica.

Con la evolución institucional, esta experiencia se integra dentro del ecosistema ISCOBusiness.

---

# 73. PORTAL ESPECIALIZADO

## **Todo lo relacionado con tu proceso de certificación está en un solo lugar**

URL:

`https://iberica.iscobusiness.edu.mx/`

Funciones:

- Consultar Estándares.
- Conocer cómo certificarte.
- Solicitar orientación.
- Consultar Red de Prestadores.
- Iniciar procesos.
- Conocer opciones para empresas.
- Solicitar incorporación CE/EI.
- Atención a Usuarios.
- Acceder a plataformas.

CTA:

**INGRESAR AL PORTAL DE CERTIFICACIÓN**

---

# 74. FAQ CERTIFICACIÓN

### ¿Ibérica e ISCOBusiness son instituciones diferentes?

Instituto Ibérica forma parte de ISCOBusiness y opera como rama especializada en evaluación y certificación.

### ¿Por qué la página de certificación está en otro subdominio?

Porque cuenta con procesos, usuarios, plataformas y operación especializada.

### ¿Necesito tomar un curso antes de certificarme?

No necesariamente.

### ¿La alineación garantiza resultado Competente?

No.

### ¿Un Centro de Evaluación expide certificados?

No.

### ¿Puedo certificar a varias personas de mi empresa?

Sí, mediante proyectos grupales con resultados individuales.

---

# 75. CIERRE CERTIFICACIÓN

# **Tu experiencia puede convertirse en evidencia.**

### Certificación de Competencias ISCOBusiness

Operada mediante:

**Instituto de Capacitación y Certificación Ibérica — ECE760-26**

**Talento con evidencia, competencias con impacto.**

CTA:

**Quiero certificarme**

**Consultar Estándares**

**Ingresar a la ECE760-26**

---

# 76. SECCIÓN CONTACTO

**URL:** `/contacto`

---

## 76.1. Hero

**Eyebrow**

**CONTACTO ISCOBUSINESS**

### H1

# **Estamos para orientarte.**

### Texto

¿Quieres continuar tus estudios, conocer nuestra oferta de Educación Continua, iniciar un proceso de certificación o desarrollar un proyecto con ISCOBusiness?

Nuestro equipo puede ayudarte a identificar la ruta adecuada.

**Educación · Capacitación · Certificación · Vinculación**

CTA:

**Envíanos un mensaje**

**Hablar por WhatsApp**

---

# 77. ¿CÓMO PODEMOS AYUDARTE?

### Prepa Abierta

Información sobre el nuevo proyecto de educación media superior.

CTA:

**Información de Prepa Abierta**

Microtexto:

**Servicio actualmente en desarrollo.**

### Educación Continua

Información sobre cursos, talleres y diplomados.

CTA:

**Consultar programas**

### Certificación de Competencias

Orientación sobre Estándares, evaluación y certificación.

CTA:

**Ir a Certificación**

Destino:

`https://iberica.iscobusiness.edu.mx/`

### Vinculación

Para empresas, instituciones, organizaciones y dependencias.

CTA:

**Hablar con Vinculación**

---

# 78. FORMULARIO GENERAL

Campos:

**Nombre completo**

**Correo electrónico**

**Teléfono / WhatsApp**

**¿Sobre qué necesitas información?**

Opciones:

- Prepa Abierta
- Educación Continua
- Curso o diplomado
- Capacitación empresarial
- Certificación de competencias
- Centro de Evaluación
- Evaluador
- Vinculación institucional
- Convenios
- Proyecto social
- Otro

**¿Eres?**

- Persona interesada
- Estudiante
- Profesionista
- Empresa
- Institución educativa
- Organización de la Sociedad Civil
- Dependencia / organismo público
- Especialista
- Otro

**Mensaje**

**Aviso de privacidad**

CTA:

**Enviar mensaje**

Microcopy:

> Los datos proporcionados serán utilizados exclusivamente para atender tu solicitud conforme a nuestro Aviso de Privacidad.

---

# 79. CANALES DE CONTACTO HEREDADOS DE IBÉRICA

A validar antes de publicación:

- `222 105 0550`
- `222 999 9497`
- `contacto@iberica.mx`

Correo nuevo recomendado:

`contacto@iscobusiness.edu.mx`

Mantener redirección temporal:

```text
contacto@iberica.mx
      ↓
contacto@iscobusiness.edu.mx
```

---

# 80. CORREOS ESPECIALIZADOS FUTUROS

```text
prepa@iscobusiness.edu.mx
educacioncontinua@iscobusiness.edu.mx
vinculacion@iscobusiness.edu.mx
contacto@iscobusiness.edu.mx
```

La ECE conserva sus propios canales especializados.

---

# 81. HORARIOS

A validar:

**Lunes a viernes**  
08:00–18:00

**Sábados**  
08:00–14:00

Microcopy:

> Los horarios de atención presencial pueden variar según la sede o el servicio solicitado. Recomendamos confirmar la visita previamente.

---

# 82. SEDES

## Puebla

**Avenida Orión Sur 733-2**  
Villa Floresta  
San Andrés Cholula, Puebla  
C.P. 72825

## Córdoba, Veracruz

**Avenida 15 No. 1307**  
Entre Calles 13 y 15  
Fraccionamiento Guadalupe  
C.P. 94590  
Córdoba, Veracruz

## Ciudad de México

**José María Mestre 186**  
Tlalpan  
C.P. 14260  
Ciudad de México

Antes de publicar cada sede se debe definir qué servicios presta.

Etiquetas futuras:

- Atención general.
- Educación Continua.
- Prepa Abierta.
- ECE / Certificación.
- Aplicación de evaluaciones.
- Vinculación.

---

# 83. ATENCIÓN DIGITAL

Canales:

- WhatsApp.
- Correo.
- Formulario.
- Redes sociales.

No crear múltiples perfiles sin una arquitectura de marca definida.

---

# 84. FAQ CONTACTO

### ¿Necesito cita?

Algunos servicios pueden requerirla.

### ¿Puedo solicitar información por WhatsApp?

Sí.

### ¿Todos los programas se imparten en las tres sedes?

No necesariamente.

### ¿Dónde solicito información de Prepa Abierta?

En su sección o formulario.

### ¿Dónde solicito certificación CONOCER?

En ECE760-26.

### ¿Cómo propongo un convenio?

Mediante Vinculación.

---

# 85. CIERRE CONTACTO

# **Tu siguiente oportunidad puede comenzar con una conversación.**

CTA:

**Enviar mensaje**

**WhatsApp**

**Vinculación institucional**

---

# 86. FOOTER GLOBAL

## Columna 1 — Identidad

Logo ISCOBusiness.

Razón social:

**International Supreme Council for Social, Business and Industrial Development, A.C.**

Descripción breve de la organización.

## Columna 2 — Navegación

- Inicio
- Nosotros
- Prepa Abierta
- Educación Continua
- Vinculación
- Certificación
- Contacto

## Columna 3 — Ecosistema

- Instituto Ibérica
- ECE760-26
- Campus
- Plataformas futuras

## Columna 4 — Contacto

- Teléfono
- Correo
- Sedes
- Horario

## Columna 5 — Legal

- Aviso de Privacidad
- Términos y condiciones
- Cookies
- Accesibilidad

---

# 87. FRONTEND Y SISTEMA VISUAL

## 87.1. Regla principal

El frontend de `iberica.iscobusiness.edu.mx` será la **fuente de verdad visual** para `iscobusiness.edu.mx`.

No crear:

- otra tipografía;
- otro sistema de botones;
- otras sombras;
- otros radios;
- otra escala tipográfica;
- otro sistema de tarjetas;
- otro sistema de formularios;
- otro comportamiento responsive;
- otro lenguaje de animación.

La diferencia estará en:

- marca;
- contenido;
- arquitectura;
- navegación;
- fotografías;
- rutas;
- jerarquía de información.

---

# 88. TOKENS DE COLOR BASE

```css
:root {
  --ink:#10243f;
  --ink-soft:#53657b;

  --navy:#083665;

  --blue:#075fba;
  --blue-bright:#0788dc;
  --cyan:#13b6e8;

  --blue-pale:#eaf5fd;
  --blue-mist:#f3f8fc;

  --gold:#b38a36;
  --gold-pale:#f5eddc;

  --pearl:#f7f9fb;
  --white:#fff;

  --line:#dbe5ee;
  --line-strong:#c5d5e3;

  --success:#14966f;

  --shadow-sm:0 10px 30px #0e335314;
  --shadow-md:0 24px 70px #0e33531f;

  --radius-sm:12px;
  --radius-md:20px;
  --radius-lg:30px;
}
```

---

# 89. PALETA EXTENDIDA DEL FRONTEND ECE

```css
--cvc-ink:#102f4d;
--cvc-heading:#073c69;
--cvc-muted:#526d83;

--cvc-blue:#066fc4;
--cvc-blue-dark:#062f59;

--cvc-learning:#2569d8;
--cvc-cyan:#22b8df;
--cvc-green:#20ad91;

--cvc-gold:#c49a3d;
--cvc-amber:#f2b43c;

--cvc-violet:#7569e8;
--cvc-burgundy:#8b1748;

--cvc-line:#ccdde8;
--cvc-surface:#fff;
--cvc-soft:#edf6fb;
```

---

# 90. ASIGNACIÓN DE ACENTOS POR SERVICIO

| Área | Acento |
|---|---|
| ISCOBusiness institucional | Azul |
| Prepa Abierta | Azul / Cian |
| Educación Continua | Verde / Cian |
| Certificación | Azul / Violeta |
| Vinculación | Dorado |
| Éxito / progreso | Verde |
| Advertencia | Ámbar |
| Error | Burgundy |

Los colores deben funcionar como **acentos**.

No convertir cada área en un universo visual independiente.

---

# 91. TIPOGRAFÍA

Familias presentes en el frontend existente:

- **Manrope** variable 200–800.
- **Newsreader** variable 200–800.

## Fuente principal

```css
font-family: var(--font-manrope), "Segoe UI", sans-serif;
```

Usar Manrope en:

- navegación;
- H1;
- H2;
- H3;
- cuerpo;
- botones;
- tarjetas;
- formularios;
- etiquetas;
- navegación secundaria.

Newsreader se mantiene como recurso editorial controlado o donde el frontend fuente ya lo utilice.

---

# 92. ESCALA TIPOGRÁFICA

## Hero H1

Referencia:

```css
font-size: clamp(3.6rem, 6vw, 6.5rem);
line-height: .92;
letter-spacing: -.058em;
```

Variantes:

```css
font-size: clamp(3.45rem, 5.35vw, 6rem);
line-height: .96;
```

No fijar H1 a un único tamaño.

## H2

```css
font-size: clamp(2rem, 3.4vw, 3.4rem);
line-height: 1.08;
```

## H3

```css
font-size: 1.4rem;
line-height: 1.3;
```

## Body

```css
font-size: 1rem;
line-height: 1.65;
```

## Lead

```css
font-size: 1.125rem;
line-height: 1.65;
```

## Kicker / Eyebrow

```css
font-size: .7rem - .79rem;
font-weight: 800 - 900;
letter-spacing: .10em - .16em;
text-transform: uppercase;
```

---

# 93. LAYOUT GLOBAL

```css
.shell {
  width: min(100% - 48px, 1280px);
  margin-inline: auto;
}
```

No crear páginas `full-width` sin una justificación concreta.

---

# 94. ESPACIADO DE SECCIONES

Desktop:

```css
padding-block: 96px - 112px;
```

Tablet:

```css
padding-block: 80px - 90px;
```

Mobile:

```css
padding-block: 64px - 78px;
```

---

# 95. BOTONES

Base:

```css
.button {
  border-radius: 12px;
  min-height: 48px;
  padding: 12px 18px;
  font-size: .9rem;
  font-weight: 800;
}
```

Grande:

```css
.button-large {
  min-height: 54px;
  padding-inline: 22px;
  font-size: .96rem;
}
```

Estados obligatorios:

- default;
- hover;
- focus;
- active;
- disabled.

Conservar `focus-visible`.

---

# 96. TARJETAS

## Card estándar

```css
background:#fff;
border:1px solid #d5e3ed;
border-radius:20px - 26px;
padding:24px - 40px;
box-shadow:var(--shadow-sm);
```

## Card con acento

```css
border-top:3px solid var(--accent);
```

## Hover

Según componente:

```css
transform: translateY(-3px);
```

hasta:

```css
transform: translateY(-9px);
```

No animar tarjetas informativas que no sean interactivas.

---

# 97. TARJETAS DE PROCESO

Referencia:

```css
border-radius:24px;
padding:30px 26px 28px;
min-height:245px;
```

Aplicaciones:

### Prepa

01 Infórmate  
02 Elige tu ruta  
03 Estudia  
04 Evalúa

### Vinculación

01 Conversemos  
02 Analizamos  
03 Diseñamos  
04 Formalizamos  
05 Implementamos

### Educación Continua

01 Explora  
02 Inscríbete  
03 Aprende  
04 Aplica

---

# 98. FORMULARIOS

## Fieldset

```css
background:#fff;
border:1px solid #cddfea;
border-radius:18px;
padding:24px;
```

## Inputs/select

```css
min-height:54px;
```

## Error

```css
border-color:#a3263d;
color:#9d2338;
```

## Focus

```css
outline:3px solid #075fba;
outline-offset:4px;
```

Reutilizar el mismo sistema en:

- Contacto.
- Pre-registro Prepa.
- Vinculación.
- Solicitud de capacitación.

---

# 99. HERO INSTITUCIONAL

Mantener:

- gradientes;
- radiales;
- grid decorativo;
- grandes espacios;
- H1 dominante;
- CTA;
- trust bar;
- composición responsive.

No utilizar sliders/carouseles automáticos en el hero.

---

# 100. IMÁGENES Y OVERLAYS

Mantener la lógica existente:

- `object-fit: cover`;
- overlays;
- gradientes;
- máscaras;
- transiciones suaves;
- hover `scale(1.035)` cuando proceda.

---

# 101. NUMERACIÓN VISUAL

Componente:

```text
01
02
03
04
05
```

Uso:

- rutas;
- procesos;
- principios;
- bloques institucionales.

---

# 102. GRADIENTES

Ejemplo de lenguaje visual:

```css
background:
  radial-gradient(circle at 85% 20%, #22b8df33, transparent 24rem),
  linear-gradient(125deg, #062f59 0%, #074d72 58%, #08766e 100%);
```

ISCOBusiness puede usar variantes más luminosas, siempre derivadas de la misma paleta.

---

# 103. RESPONSIVE

Breakpoints existentes o equivalentes:

```text
1120px
1050px
900px
820px
760px
640px
```

## Desktop

- hasta cuatro columnas;
- hero de dos columnas;
- formularios de dos columnas;
- header completo.

## Tablet

- dos columnas;
- hero adaptado;
- navegación móvil cuando corresponda.

## Mobile

- una columna;
- CTA apilados;
- márgenes reducidos;
- hero simplificado;
- tarjetas full width;
- tipografía con `clamp()`.

---

# 104. ACCESIBILIDAD

Mantener:

- `focus-visible`;
- `aria-invalid`;
- labels explícitos;
- contraste AA;
- controles de al menos 44px;
- navegación por teclado;
- skip link;
- jerarquía correcta de títulos;
- atributos `alt`;
- mensajes de error;
- `prefers-reduced-motion`;
- estados de formularios;
- no depender únicamente del color.

---

# 105. ANIMACIONES

Microinteracciones:

```text
180–360ms
```

Aplicar en:

- hover;
- borde;
- sombra;
- desplazamiento;
- focus.

Animaciones ambientales:

más lentas y sutiles.

Respetar:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 106. WHATSAPP FLOTANTE

Reutilizar componente existente.

Aproximadamente:

```text
48 × 48px
```

Evitar que cubra:

- CTA;
- campos;
- controles;
- navegación móvil.

---

# 107. ASISTENTE ISCOBUSINESS

Adaptar el asistente actual.

Pregunta inicial:

# **¿En qué podemos ayudarte?**

Opciones:

- Prepa Abierta.
- Educación Continua.
- Certificación.
- Vinculación.
- Contacto.

Si selecciona Certificación:

→ dirigir a la experiencia ECE.

---

# 108. ARQUITECTURA DE COMPONENTES

```text
/components
│
├── Header
├── UtilityBar
├── BrandBar
├── Navigation
├── MobileNavigation
│
├── Hero
├── SectionHeading
├── TrustBar
│
├── Button
├── TextLink
│
├── Card
├── RouteCard
├── FeatureCard
├── ProcessCard
├── TrustCard
│
├── ProcessSteps
├── Accordion
├── Tabs
├── Filters
│
├── ContactForm
├── LeadForm
├── PreRegistrationForm
├── PartnershipForm
│
├── FloatingWhatsApp
├── PublicAssistant
│
└── Footer
```

---

# 109. ORGANIZACIÓN DEL CSS

No trabajar directamente sobre bundles minificados de producción.

Los archivos CSS proporcionados contienen clases compiladas y CSS Modules.

Estructura recomendada:

```text
/styles
│
├── tokens.css
├── fonts.css
├── reset.css
├── globals.css
├── typography.css
├── layout.css
├── buttons.css
├── cards.css
├── forms.css
├── header.css
├── footer.css
├── animations.css
├── accessibility.css
└── responsive.css
```

Si se utilizan CSS Modules:

```text
/components/Hero/Hero.module.css
/components/Card/Card.module.css
/components/Form/Form.module.css
```

---

# 110. TOKENS NORMALIZADOS ISCOBUSINESS

```css
:root {
  --font-primary: var(--font-manrope), "Segoe UI", sans-serif;
  --font-editorial: var(--font-newsreader), Georgia, serif;

  --isco-ink: #10243f;
  --isco-ink-soft: #53657b;
  --isco-navy: #083665;

  --isco-blue: #075fba;
  --isco-blue-bright: #0788dc;
  --isco-learning: #2569d8;
  --isco-cyan: #13b6e8;

  --isco-green: #20ad91;
  --isco-success: #14966f;

  --isco-gold: #b38a36;
  --isco-gold-bright: #c49a3d;
  --isco-amber: #f2b43c;

  --isco-violet: #7569e8;
  --isco-danger: #8b1748;

  --isco-white: #ffffff;
  --isco-pearl: #f7f9fb;
  --isco-soft: #edf6fb;
  --isco-blue-pale: #eaf5fd;
  --isco-blue-mist: #f3f8fc;
  --isco-gold-pale: #f5eddc;

  --isco-line: #dbe5ee;
  --isco-line-strong: #c5d5e3;

  --isco-radius-sm: 12px;
  --isco-radius-md: 20px;
  --isco-radius-lg: 30px;

  --isco-shadow-sm: 0 10px 30px #0e335314;
  --isco-shadow-md: 0 24px 70px #0e33531f;

  --isco-shell: 1280px;
}
```

---

# 111. SEO GENERAL

Cada página debe contar con:

- title único;
- meta description;
- H1 único;
- canonical;
- OpenGraph;
- Twitter Card;
- schema pertinente;
- sitemap;
- robots;
- breadcrumbs cuando corresponda.

---

# 112. SEO POR PÁGINA

| Página | Keyword principal |
|---|---|
| Inicio | ISCOBusiness |
| Nosotros | ISCOBusiness |
| Prepa Abierta | Prepa Abierta |
| Plan Modular | Prepa Abierta 22 módulos |
| Acuerdo 286 | Acuerdo 286 Bachillerato |
| Educación Continua | Educación Continua |
| Certificación | Certificación de Competencias |
| Vinculación | Vinculación institucional |
| Contacto | ISCOBusiness contacto |

---

# 113. SEO PREPA ABIERTA

Trabajar de manera natural:

```text
prepa abierta
preparatoria abierta
terminar preparatoria
bachillerato para adultos
plan modular SEP
22 módulos
Acuerdo 286
bachillerato general
estudio flexible
```

No utilizar SEO para hacer afirmaciones regulatorias todavía no autorizadas.

---

# 114. SEO CERTIFICACIÓN

No duplicar contenido operativo.

`iscobusiness.edu.mx/certificacion-de-competencias`

→ intención institucional y contextual.

`iberica.iscobusiness.edu.mx`

→ intención operativa y transaccional.

---

# 115. MIGRACIÓN SEO DESDE IBERICA.MX

Pasos:

1. Inventariar todas las URLs.
2. Determinar página equivalente.
3. Crear redirecciones `301`.
4. Conservar contenido valioso.
5. Actualizar enlaces internos.
6. Actualizar sitemap.
7. Enviar nuevo sitemap.
8. Revisar Search Console.
9. Validar canonical.
10. Revisar errores 404.
11. Mantener dominio antiguo activo.
12. No redirigir todo indiscriminadamente al home.

Ejemplos:

```text
iberica.mx/
→ iscobusiness.edu.mx/

iberica.mx/nosotros
→ iscobusiness.edu.mx/nosotros

iberica.mx/oferta-formativa
→ iscobusiness.edu.mx/educacion-continua

iberica.mx/contacto
→ iscobusiness.edu.mx/contacto
```

---

# 116. ANALÍTICA

Implementar:

- GA4 o equivalente;
- Search Console;
- Tag Manager si aplica;
- eventos de CTA;
- formularios;
- WhatsApp;
- ECE;
- Pre-registro;
- Vinculación;
- búsquedas de programas.

Eventos sugeridos:

```text
hero_cta_click
prepa_interest
prepa_preregister
education_program_click
corporate_training_lead
ece_portal_click
partnership_lead
contact_submit
whatsapp_click
```

---

# 117. PRIVACIDAD

Todo formulario debe:

- informar finalidad;
- enlazar aviso;
- solicitar aceptación cuando corresponda;
- minimizar datos;
- proteger información;
- evitar recopilar información innecesaria.

---

# 118. PERFORMANCE

Objetivos:

- imágenes WebP/AVIF;
- lazy loading;
- `next/image` o equivalente;
- fuentes optimizadas;
- CSS crítico controlado;
- JS mínimo necesario;
- evitar duplicidad de librerías;
- minimizar terceros;
- caché;
- CDN;
- compresión.

---

# 119. CORE WEB VITALS

Metas orientativas:

```text
LCP < 2.5 s
INP < 200 ms
CLS < 0.1
```

---

# 120. BANCO DE IMÁGENES

Categorías:

- Educación.
- Adultos estudiando.
- Profesionales.
- Capacitación.
- Empresas.
- Comunidades.
- Certificación.
- Tecnología educativa.
- Inclusión.
- Protección civil.
- Vinculación.
- Cooperación.

Evitar:

- stock demasiado genérico;
- imágenes irrelevantes;
- representaciones falsas de instalaciones;
- uso incorrecto de EPP;
- logotipos sin autorización.

---

# 121. CLAIMS REGULATORIOS

Antes de publicar expresiones como:

```text
Validez oficial
Avalado por SEP
Reconocido por SEP
Sede autorizada
Institución Evaluadora
Prepa oficial
Certificado oficial
```

debe existir respaldo documental específico.

---

# 122. ESTADOS REGULATORIOS DE PREPA

Mientras el proyecto continúe en desarrollo usar:

```text
PRÓXIMAMENTE
PROYECTO EN DESARROLLO
EN PROCESO DE VINCULACIÓN
```

No usar todavía:

```text
INSCRIPCIONES ABIERTAS
SEDE AUTORIZADA
SOMOS INSTITUCIÓN EVALUADORA
```

---

# 123. IDENTIDAD INSTITUCIONAL CONSISTENTE

**Razón social:**  
International Supreme Council for Social, Business and Industrial Development, A.C.

**RFC:**  
ISC240920QB0

**CLUNI:**  
ISC24092021FQV

**ECE:**  
ECE760-26

**Marca digital:**  
ISCOBusiness

**Rama especializada:**  
Instituto Ibérica

---

# 124. MENSAJES POR VERTICAL

## Prepa Abierta

**Continúa tu educación.**

## Educación Continua

**Sigue aprendiendo y desarrollando competencias.**

## Certificación

**Demuestra lo que sabes hacer.**

## Vinculación

**Construyamos oportunidades juntos.**

---

# 125. RUTEO POR NECESIDAD

```text
QUIERO ESTUDIAR
→ Prepa Abierta

QUIERO APRENDER / ACTUALIZARME
→ Educación Continua

QUIERO DEMOSTRAR UNA COMPETENCIA
→ Certificación

REPRESENTO UNA ORGANIZACIÓN
→ Vinculación

NO SÉ QUÉ NECESITO
→ Contacto
```

---

# 126. ESTADOS GLOBALES DE TARJETAS

```text
PRÓXIMAMENTE
INSCRIPCIONES ABIERTAS
DISPONIBLE
CONVOCATORIA CERRADA
EN DESARROLLO
```

---

# 127. CONTENIDO ADMINISTRABLE

Idealmente deben administrarse sin tocar código:

- programas;
- cursos;
- fechas;
- modalidades;
- sedes;
- FAQ;
- noticias;
- convocatorias;
- alianzas verificadas;
- testimonios autorizados.

---

# 128. MODELO DE DATOS — PROGRAMAS

```yaml
program:
  id:
  slug:
  title:
  shortDescription:
  fullDescription:
  category:
  type:
  modality:
  duration:
  startDate:
  registrationEnd:
  status:
  location:
  image:
  audience:
  objectives:
  requirements:
  price:
  contactRoute:
  seoTitle:
  seoDescription:
```

---

# 129. MODELO DE DATOS — SEDES

```yaml
location:
  id:
  name:
  address:
  city:
  state:
  postalCode:
  phone:
  email:
  schedules:
  services:
  mapsUrl:
  active:
```

---

# 130. MODELO DE DATOS — ALIADOS

```yaml
partner:
  institution:
  logo:
  relationshipType:
  agreementStart:
  agreementEnd:
  permissionToUseLogo:
  description:
  website:
  status:
```

Solo publicar aliados verificados.

---

# 131. QA DE CONTENIDO

Revisar:

- ortografía;
- nombres institucionales;
- siglas;
- cargos;
- teléfonos;
- correos;
- direcciones;
- claims;
- enlaces;
- fechas;
- autorizaciones;
- logotipos.

---

# 132. QA FRONTEND

Navegadores:

```text
Chrome
Edge
Firefox
Safari
Android Chrome
iOS Safari
```

Viewports:

```text
360
390
430
768
900
1024
1280
1440
1920
```

---

# 133. QA ACCESIBILIDAD

Revisar:

- teclado;
- tab order;
- focus;
- contraste;
- labels;
- ARIA;
- zoom 200%;
- reduced motion;
- errores de formulario;
- lectores de pantalla.

---

# 134. QA SEO

Validar:

- 200;
- 301;
- 404;
- canonical;
- title;
- description;
- H1;
- OpenGraph;
- sitemap;
- robots;
- JSON-LD;
- enlaces internos;
- redirects.

---

# 135. FASES DE DESARROLLO

## Fase 1 — Base

- Recuperar frontend fuente de Ibérica.
- Identificar componentes.
- Extraer design system.
- Normalizar tokens.
- Configurar proyecto ISCOBusiness.

## Fase 2 — Layout global

- Header.
- Navegación.
- Footer.
- WhatsApp.
- Asistente.
- Componentes comunes.

## Fase 3 — Inicio

Construir portal matriz y sus cuatro rutas principales.

## Fase 4 — Nosotros

Construir identidad institucional.

## Fase 5 — Prepa Abierta

Contenido, regulación, pre-registro.

## Fase 6 — Educación Continua

Catálogo, filtros, programas.

## Fase 7 — Vinculación

Públicos, procesos, formulario.

## Fase 8 — Certificación

Página puente hacia Ibérica.

## Fase 9 — Contacto

Canalización por áreas.

## Fase 10 — Migración

`iberica.mx → iscobusiness.edu.mx`

## Fase 11 — SEO / Analítica

Configuración y validación.

## Fase 12 — QA

Multidispositivo, accesibilidad, contenido y regulación.

## Fase 13 — Lanzamiento

DNS, monitoreo, redirects e indexación.

---

# 136. CRITERIO DE ACEPTACIÓN VISUAL

Dirección ya aprobó el estilo completo de:

`iberica.iscobusiness.edu.mx`

Por ello el nuevo portal debe conservar:

```text
Misma tipografía
Mismos tamaños
Mismos pesos
Misma densidad
Mismos radios
Mismos botones
Mismos bordes
Mismas sombras
Mismas tarjetas
Mismos espacios
Mismos gradientes
Mismos estados
Mismas animaciones
Mismo responsive
Misma accesibilidad
```

---

# 137. CRITERIO DE DIFERENCIACIÓN

Lo que sí cambia:

```text
Logo
Jerarquía institucional
Contenido
Menú
Rutas
Fotografía
Textos
CTA
Servicios
```

No el sistema visual.

---

# 138. RESULTADO FINAL ESPERADO

```text
              ISCOBUSINESS
                   │
        ┌──────────┼──────────┐
        │          │          │
    Educación  Certificación Vinculación
        │          │          │
 ┌──────┴─────┐    │      Organizaciones
 │            │    │      Empresas
Prepa      Educación│      Instituciones
Abierta     Continua│      OSC
                   │
                   ↓
          Instituto Ibérica
              ECE760-26
                   │
      iberica.iscobusiness.edu.mx
```

El visitante debe sentir que todo forma parte de la misma organización y el mismo sistema digital, aunque existan portales especializados.

---

# 139. REGLA FINAL DEL PROYECTO

> **ISCOBusiness será el portal institucional principal. Ibérica continuará como rama especializada de certificación. El nuevo frontend heredará íntegramente el lenguaje visual aprobado de `iberica.iscobusiness.edu.mx`, mientras que la arquitectura, el contenido y la navegación evolucionarán para representar correctamente la dimensión completa de ISCOBusiness.**

El resultado no debe ser “otra página parecida a Ibérica”.

Debe ser:

# **Un único ecosistema digital con una misma identidad de interfaz, organizado jerárquicamente alrededor de ISCOBusiness.**

---

# 140. FUENTES Y DOCUMENTOS BASE QUE DEBEN CONSERVARSE EN EL EXPEDIENTE DEL PROYECTO

Este plan se construyó considerando:

- Acta constitutiva / objeto social de International Supreme Council for Social, Business and Industrial Development, A.C.
- Constancia de Situación Fiscal.
- Constancia CLUNI.
- Presentación Ejecutiva ISCO & BAIND, A.C.
- Contrato de acreditación como Entidad de Certificación.
- Placa ECE760-26.
- Identidad gráfica de Instituto Ibérica.
- Identidad gráfica de ISCOBusiness.
- Sitio legado `iberica.mx`.
- Portal especializado `iberica.iscobusiness.edu.mx`.
- CSS de producción proporcionado del frontend vigente.
- Sitio oficial de Preparatoria Abierta SEP:
  `https://prepaabierta.sep.gob.mx/`
- Plan de Estudio Modular:
  `https://prepaabierta.sep.gob.mx/plan-de-estudio-modular`
- DGAIR / Acreditación de conocimientos:
  `https://dgair.sep.gob.mx/acreditacion`

---

# 141. NOTA OPERATIVA SOBRE ESTE DOCUMENTO

Este archivo debe utilizarse como:

- documento de planeación;
- especificación editorial;
- especificación de UX;
- especificación de arquitectura;
- referencia de frontend;
- referencia CSS;
- checklist de desarrollo;
- checklist de QA;
- checklist regulatorio;
- base para la construcción técnica de `iscobusiness.edu.mx`.

No sustituye documentos jurídicos, autorizaciones regulatorias ni contratos.

Las afirmaciones que dependan de autorización futura deberán actualizarse cuando la autorización exista y pueda documentarse.

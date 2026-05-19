const quizInfo = {
    title: "Navegadores e Internet",
    subtitle: "Conceptos Fundamentales de Conectividad y Web",
    welcomeTitle: "¡Desafío de Redes y Navegación!",
    welcomeDescription: "Pon a prueba tus conocimientos sobre el funcionamiento de los navegadores web, motores de búsqueda y el rol de los Proveedores de Servicios de Internet (ISP)."
};

const quizData = [
    {
        question: "¿Cuál es el propósito principal de un navegador web?",
        hint: "Pensá en qué hace el software con la información que descarga de un servidor.",
        options: [
            { text: "Permitir a los usuarios acceder y visualizar páginas web traduciendo código.", isCorrect: true, rationale: "El propósito central del navegador es recuperar recursos de la web y renderizarlos en la pantalla para que el usuario pueda interactuar con ellos de forma visual." },
            { text: "Almacenar de forma permanente los archivos de un sitio web en el disco local.", isCorrect: false, rationale: "Incorrecto. El navegador solo almacena archivos temporales (caché), no aloja sitios de manera permanente." },
            { text: "Conectar físicamente la computadora del usuario a la red troncal de Internet.", isCorrect: false, rationale: "Incorrecto. La conexión física o el enlace de red es responsabilidad del hardware y del ISP, no de la aplicación de navegación." },
            { text: "Garantizar la seguridad absoluta contra virus al descargar archivos.", isCorrect: false, rationale: "Incorrecto. Aunque incluyen funciones de seguridad básicas, esa no es la función principal ni el propósito del software." }
        ]
    },
    {
        question: "¿Qué lenguaje específico interpreta y renderiza un navegador para mostrar las páginas web?",
        hint: "Es el lenguaje de marcado estructurado base de cualquier sitio.",
        options: [
            { text: "Python", isCorrect: false, rationale: "Incorrecto. Python es un lenguaje de programación de backend y propósito general, no lo renderiza directamente el navegador para mostrar la interfaz." },
            { text: "HTML", isCorrect: true, rationale: "¡Correcto! HTML (HyperText Markup Language) es el lenguaje estándar que los navegadores web leen y procesan para estructurar y desplegar el contenido visualizado." },
            { text: "C++", isCorrect: false, rationale: "Incorrecto. C++ es un lenguaje compilado utilizado para desarrollo de software de sistema y videojuegos, no para estructurar páginas web." },
            { text: "SQL", isCorrect: false, rationale: "Incorrecto. SQL se utiliza exclusivamente para realizar consultas y gestionar bases de datos relacionales." }
        ]
    },
    {
        question: "Además de renderizar páginas web, ¿cuáles son otras dos funciones clave de un navegador?",
        hint: "Pensá en la gestión de accesos y la transferencia de archivos.",
        options: [
            { text: "Administrar el historial de navegación y gestionar la descarga de archivos.", isCorrect: true, rationale: "¡Exacto! Los navegadores modernos gestionan el almacenamiento de páginas visitadas (historial), cookies, marcadores y controlan las descargas de elementos externos." },
            { text: "Compilar código fuente de backend y configurar routers locales.", isCorrect: false, rationale: "Incorrecto. La compilación backend ocurre en el servidor y los routers se configuran mediante firmware específico, no por el navegador." },
            { text: "Asignar direcciones IP y proveer hosting gratuito a los usuarios.", isCorrect: false, rationale: "Incorrecto. Estas son funciones de los servidores de red y de las empresas proveedoras de hosting o ISPs." },
            { text: "Reparar sectores defectuosos del disco y optimizar la memoria RAM.", isCorrect: false, rationale: "Incorrecto. Esas son tareas utilitarias de optimización del sistema operativo, totalmente ajenas al navegador." }
        ]
    },
    {
        question: "¿Qué significan las siglas ISP en el contexto de redes?",
        hint: "Está relacionado con la entidad que te da acceso a la red en tu hogar o escuela.",
        options: [
            { text: "Internet Service Provider", isCorrect: true, rationale: "¡Correcto! Significa Proveedor de Servicios de Internet (Internet Service Provider), la empresa que proporciona la conexión a la red informática mundial." },
            { text: "Internal System Protocol", isCorrect: false, rationale: "Incorrecto. Es una combinación de términos técnicos que no corresponde a las siglas del proveedor de conectividad." },
            { text: "Internet Security Private", isCorrect: false, rationale: "Incorrecto. Aunque la seguridad en internet es vital, la sigla 'ISP' se refiere estrictamente a la provisión del servicio." },
            { text: "Information Storage Platform", isCorrect: false, rationale: "Incorrecto. Las plataformas de almacenamiento de información suelen llamarse Cloud Storage o Data Centers." }
        ]
    },
    {
        question: "¿Cuál es el rol principal de un ISP en una red informática?",
        hint: "Es el intermediario entre tu dispositivo e Internet.",
        options: [
            { text: "Diseñar la interfaz gráfica y los estilos CSS de los sitios web comerciales.", isCorrect: false, rationale: "Incorrecto. El diseño y desarrollo de interfaces corresponde a los diseñadores y desarrolladores web front-end." },
            { text: "Proporcionar a los usuarios acceso, conectividad y tránsito hacia Internet.", isCorrect: true, rationale: "¡Así es! El ISP provee la infraestructura y las rutas de enlace necesarias para que los paquetes de datos viajen desde el dispositivo del usuario hacia el resto del mundo." },
            { text: "Traducir automáticamente todas las páginas web a diferentes idiomas.", isCorrect: false, rationale: "Incorrecto. La traducción es un servicio basado en software de aplicaciones o extensiones del navegador, no del proveedor de red." },
            { text: "Fabricar las tarjetas de red y los cables de fibra óptica del mercado.", isCorrect: false, rationale: "Incorrecto. Los ISPs compran e instalan estos insumos, pero su fabricación corresponde a industrias de hardware tecnológico." }
        ]
    },
    {
        question: "¿Qué componente de red se encarga de asignar una dirección IP a la conexión de un usuario?",
        hint: "Viene del lado del proveedor cuando el módem/router se autentica.",
        options: [
            { text: "La memoria caché del navegador local.", isCorrect: false, rationale: "Incorrecto. La caché web guarda imágenes y scripts locales, no tiene relación con el direccionamiento lógico de la red." },
            { text: "El servidor DHCP del Proveedor de Servicios de Internet (ISP).", isCorrect: true, rationale: "¡Correcto! El ISP, mediante sus servidores (generalmente usando el protocolo DHCP), asigna dinámicamente o estáticamente una dirección IP pública a la conexión del cliente." },
            { text: "El motor de búsqueda que el usuario elija por defecto.", isCorrect: false, rationale: "Incorrecto. Los buscadores operan en la capa de aplicación web y no intervienen en la asignación de IPs de red." },
            { text: "La unidad de procesamiento central (CPU) de la computadora.", isCorrect: false, rationale: "Incorrecto. La CPU procesa los datos locales, pero el identificador numérico de red (IP) es otorgado externamente por la infraestructura del proveedor." }
        ]
    },
    {
        question: "¿Cuál es la diferencia fundamental entre un navegador web y un motor de búsqueda?",
        hint: "Uno es la herramienta de software instalada; el otro es un sitio que indexa internet.",
        options: [
            { text: "El navegador es una aplicación de software para acceder a páginas; el motor de búsqueda es un sitio web que ayuda a encontrar contenido.", isCorrect: true, rationale: "¡Exacto! El navegador es el vehículo de software local (ej. Chrome, Firefox) que usamos para abrir cualquier web. El motor de búsqueda (ej. Google, Bing) es una página web específica diseñada para indexar y buscar información." },
            { text: "El navegador requiere una conexión cableada y el motor de búsqueda funciona solo por Wi-Fi.", isCorrect: false, rationale: "Incorrecto. Ambos servicios operan independientemente de si la conexión física de red es inalámbrica o por cable estructurado." },
            { text: "El motor de búsqueda descarga los archivos y el navegador los borra automáticamente.", isCorrect: false, rationale: "Incorrecto. Ninguno de los dos borra datos de forma destructiva; el navegador gestiona descargas explícitas del usuario." },
            { text: "No existe ninguna diferencia, son dos términos comerciales para referirse al mismo programa.", isCorrect: false, rationale: "Incorrecto. Es un error conceptual muy común en los estudiantes. Es crucial distinguir el programa cliente del servicio web de indexación." }
        ]
    },
    {
        question: "¿Qué característica del navegador permite visualizar múltiples sitios web dentro de una misma ventana?",
        hint: "Evita tener que abrir muchas ventanas independientes del programa.",
        options: [
            { text: "La navegación por pestañas (Tabs).", isCorrect: true, rationale: "¡Correcto! La introducción de pestañas en los navegadores revolucionó la experiencia de usuario, permitiendo cambiar de un sitio a otro velozmente sin saturar la barra de tareas." },
            { text: "El modo incógnito o privado.", isCorrect: false, rationale: "Incorrecto. El modo incógnito sirve para navegar sin guardar historial ni cookies locales, pero no define la estructura de ventanas múltiple." },
            { text: "La barra de direcciones (URL bar).", isCorrect: false, rationale: "Incorrecto. La barra de direcciones se utiliza para escribir y visualizar la ubicación del recurso web actual." },
            { text: "El bloqueador de ventanas emergentes (Pop-up blocker).", isCorrect: false, rationale: "Incorrecto. Esta es una función de seguridad/privacidad que impide la apertura descontrolada de publicidad invasiva." }
        ]
    },
    {
        question: "¿Cómo se llama la función del navegador que registra cronológicamente las páginas web visitadas?",
        hint: "Te permite volver a encontrar un sitio que viste ayer pero cuyo nombre olvidaste.",
        options: [
            { text: "Administrador de Marcadores.", isCorrect: false, rationale: "Incorrecto. Los marcadores o favoritos guardan páginas de forma permanente bajo la elección explícita del usuario, no de forma automática y cronológica." },
            { text: "Historial de navegación.", isCorrect: true, rationale: "¡Correcto! El historial almacena de forma local un registro temporal de las direcciones URL y las horas exactas en las que el usuario accedió a ellas." },
            { text: "Consola de Desarrollador.", isCorrect: false, rationale: "Incorrecto. La consola de desarrollo sirve para inspeccionar código, depurar scripts JS y analizar la red, no para el rastreo de uso común." },
            { text: "Administrador de contraseñas.", isCorrect: false, rationale: "Incorrecto. Esta herramienta guarda credenciales criptográficamente seguras para facilitar el login en los sitios guardados." }
        ]
    },
    {
        question: "¿Qué función permite guardar un sitio web específico para acceder a él rápidamente en el futuro?",
        hint: "En algunos navegadores se activa haciendo clic en el ícono de una estrella.",
        options: [
            { text: "Descargar página como PDF.", isCorrect: false, rationale: "Incorrecto. Guardar como PDF congela el diseño visual en un documento estático offline, impidiendo la navegación web fluida en el futuro." },
            { text: "Marcadores o Favoritos (Bookmarks).", isCorrect: true, rationale: "¡Excelente! Los marcadores permiten estructurar accesos directos personalizados (muchas veces organizados en carpetas) para volver a tus webs más utilizadas con un solo clic." },
            { text: "Limpieza de cookies de terceros.", isCorrect: false, rationale: "Incorrecto. Borrar cookies es una tarea de mantenimiento de privacidad que, de hecho, cierra las sesiones activas en los sitios." },
            { text: "Anclaje de red dinámico.", isCorrect: false, rationale: "Incorrecto. El anclaje se refiere a compartir datos móviles o configuraciones a nivel de sistema operativo y hardware de red." }
        ]
    }
];
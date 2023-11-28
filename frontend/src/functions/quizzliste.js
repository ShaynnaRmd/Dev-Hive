export const quizQuestions = {
  python: [
    {
      quiz: "Quel mot-clé crée une fonction en Python ?",
      reponseA: "func",
      reponseB: "def",
      reponseC: "function",
      correctAnswer: "B",
    },
    // ... autres questions sur Python
  ],
  html: [
    // Questions sur HTML
    {
      quiz: "Quelle balise est utilisée pour créer un lien hypertexte en HTML ?",
      reponseA: "<link>",
      reponseB: "<a>",
      reponseC: "<href>",
      correctAnswer: "B",
    },
    {
      quiz: "Quelle balise est utilisée pour insérer une image en HTML ?",
      reponseA: "<img>",
      reponseB: "<picture>",
      reponseC: "<graphics>",
      correctAnswer: "A",
    },
    {
      quiz: "Quelle balise HTML est utilisée pour définir un paragraphe ?",
      reponseA: "<paragraph>",
      reponseB: "<pg>",
      reponseC: "<p>",
      correctAnswer: "C",
    },
    {
      quiz: "Quel attribut HTML spécifie l'URL d'une image ?",
      reponseA: "src",
      reponseB: "href",
      reponseC: "link",
      correctAnswer: "A",
    },
    {
      quiz: "Comment créer une liste non ordonnée en HTML ?",
      reponseA: "<ol>",
      reponseB: "<ul>",
      reponseC: "<li>",
      correctAnswer: "B",
    },
    {
      quiz: "Quelle balise HTML est utilisée pour définir un titre de niveau 1 ?",
      reponseA: "<h1>",
      reponseB: "<header>",
      reponseC: "<heading>",
      correctAnswer: "A",
    },
    {
      quiz: "Quel élément HTML est utilisé pour définir le pied de page d'un document ?",
      reponseA: "<footer>",
      reponseB: "<bottom>",
      reponseC: "<foot>",
      correctAnswer: "A",
    },
    {
      quiz: "Comment spécifier que le champ de formulaire doit être obligatoirement rempli en HTML ?",
      reponseA: "required='true'",
      reponseB: "mandatory='true'",
      reponseC: "needed='true'",
      correctAnswer: "A",
    },
    {
      quiz: "Quelle est la bonne syntaxe pour faire référence à un script JavaScript externe en HTML ?",
      reponseA: "<script src='nom_du_fichier.js'>",
      reponseB: "<javascript>nom_du_fichier.js</javascript>",
      reponseC: "<js>nom_du_fichier.js</js>",
      correctAnswer: "A",
    },
    {
      quiz: "Comment commenter du code en HTML ?",
      reponseA: "// Ce commentaire",
      reponseB: "<!-- Ce commentaire -->",
      reponseC: "# Ce commentaire",
      correctAnswer: "B",
    },
    // ... autres questions sur HTML
  ],

  cpp: [
    // Questions sur C++
    {
      quiz: "Quelle est la syntaxe correcte pour déclarer un pointeur en C++ ?",
      reponseA: "int p;",
      reponseB: "int *p;",
      reponseC: "int &p;",
      correctAnswer: "B",
    },
    // ... autres questions sur C++
  ],
  nodejs: [
    // Questions sur Node.js
    {
      quiz: "Qu'est-ce que Node.js ?",
      reponseA: "Un framework front-end",
      reponseB: "Un langage de programmation",
      reponseC: "Un environnement d'exécution JavaScript côté serveur",
      correctAnswer: "C",
    },
    {
      quiz: "Comment installer un paquet npm localement ?",
      reponseA: "npm install <nom_du_paquet>",
      reponseB: "npm global add <nom_du_paquet>",
      reponseC: "install npm <nom_du_paquet>",
      correctAnswer: "A",
    },
    {
      quiz: "Quel fichier définit les dépendances d'un projet Node.js ?",
      reponseA: "node_modules",
      reponseB: "package.json",
      reponseC: "app.js",
      correctAnswer: "B",
    },
    {
      quiz: "Quelle méthode est utilisée pour lire des données d'un fichier en Node.js ?",
      reponseA: "fs.readFile()",
      reponseB: "fs.readData()",
      reponseC: "fs.getData()",
      correctAnswer: "A",
    },
    {
      quiz: "Comment exporter un module en Node.js ?",
      reponseA: "module.create()",
      reponseB: "module.export()",
      reponseC: "module.exports = {}",
      correctAnswer: "C",
    },
    {
      quiz: "Quel est l'outil de Node.js utilisé pour exécuter des tâches en arrière-plan ?",
      reponseA: "Nodemon",
      reponseB: "Webpack",
      reponseC: "Grunt",
      correctAnswer: "A",
    },
    {
      quiz: "Quel est le gestionnaire de paquets par défaut pour Node.js ?",
      reponseA: "Yarn",
      reponseB: "npm",
      reponseC: "Bower",
      correctAnswer: "B",
    },
    {
      quiz: "Qu'est-ce qu'un callback en Node.js ?",
      reponseA: "Une fonction exécutée à la fin d'une tâche",
      reponseB: "Une requête à une base de données",
      reponseC: "Un type de module Node.js",
      correctAnswer: "A",
    },
    {
      quiz: "Quelle méthode est utilisée pour créer un serveur HTTP en Node.js ?",
      reponseA: "http.createServer()",
      reponseB: "server.start()",
      reponseC: "createServer.http()",
      correctAnswer: "A",
    },
    {
      quiz: "Quelle est la caractéristique principale de l'Event Loop de Node.js ?",
      reponseA: "Traitement multi-thread",
      reponseB: "Exécution synchrone",
      reponseC: "Boucle d'événements non bloquante",
      correctAnswer: "C",
    },
    // ... autres questions sur Node.js
  ],
  php: [
    // Questions sur PHP
    {
      quiz: "Que signifie PHP ?",
      reponseA: "Personal Home Page",
      reponseB: "PHP: Hypertext Preprocessor",
      reponseC: "Private Home Protocol",
      correctAnswer: "B",
    },
    {
      quiz: "Comment déclare-t-on une variable en PHP ?",
      reponseA: "var variableName;",
      reponseB: "let variableName;",
      reponseC: "$variableName;",
      correctAnswer: "C",
    },
    {
      quiz: "Quelle fonction est utilisée pour écrire du texte dans un fichier en PHP ?",
      reponseA: "file_put_contents()",
      reponseB: "fwrite()",
      reponseC: "writeFile()",
      correctAnswer: "B",
    },
    {
      quiz: "Comment appelle-t-on une méthode statique en PHP ?",
      reponseA: "ClassName->methodName();",
      reponseB: "ClassName::methodName();",
      reponseC: "ClassName@methodName();",
      correctAnswer: "B",
    },
    {
      quiz: "Quel est le moyen de transmettre des données de formulaire en PHP de manière sécurisée ?",
      reponseA: "GET",
      reponseB: "POST",
      reponseC: "AJAX",
      correctAnswer: "B",
    },
    {
      quiz: "Quel superglobal en PHP contient des informations sur les en-têtes, chemins et emplacements de scripts ?",
      reponseA: "$_SERVER",
      reponseB: "$_ENV",
      reponseC: "$_SESSION",
      correctAnswer: "A",
    },
    {
      quiz: "Comment définir une constante en PHP ?",
      reponseA: "define('CONST_NAME', 'value');",
      reponseB: "const CONST_NAME = 'value';",
      reponseC: "Both A and B",
      correctAnswer: "C",
    },
    {
      quiz: "Quelle fonction en PHP retourne la longueur d'une chaîne de caractères ?",
      reponseA: "strlength()",
      reponseB: "strlen()",
      reponseC: "stringlen()",
      correctAnswer: "B",
    },
    {
      quiz: "Comment accéder à une base de données MySQL en utilisant PHP ?",
      reponseA: "En utilisant l'extension MySQLi ou PDO",
      reponseB: "En utilisant l'extension Apache",
      reponseC: "En utilisant HTML et CSS",
      correctAnswer: "A",
    },
    {
      quiz: "Quelle est la syntaxe correcte pour démarrer une session en PHP ?",
      reponseA: "session_start();",
      reponseB: "start_session();",
      reponseC: "begin_session();",
      correctAnswer: "A",
    },
    // ... autres questions sur PHP
  ],
  react: [
    {
      quiz: "📱 Quel hook React est utilisé pour gérer l'état local dans un composant fonctionnel ?",
      reponseA: "useEffect",
      reponseB: "useState",
      reponseC: "useContext",
      correctAnswer: "B",
    },
    {
      quiz: "🔄 Quel est le but principal de Redux en React ?",
      reponseA: "Gestion du routing",
      reponseB: "Animation des composants",
      reponseC: "Gestion d'état global",
      correctAnswer: "C",
    },
    {
      quiz: "🔗 Quelle est la différence entre un composant de classe et un composant fonctionnel en React ?",
      reponseA: "Seuls les composants de classe peuvent gérer l'état",
      reponseB: "Les composants fonctionnels sont plus performants",
      reponseC: "Aucune différence",
      correctAnswer: "B",
    },
    {
      quiz: "🌐 Comment ReactJS met-il à jour le DOM ?",
      reponseA: "Mise à jour directe du DOM",
      reponseB: "Utilisation du Virtual DOM",
      reponseC: "Mise à jour via des plugins",
      correctAnswer: "B",
    },
    {
      quiz: "🔍 Quel hook est utilisé pour effectuer des opérations de nettoyage dans un composant fonctionnel ?",
      reponseA: "useEffect",
      reponseB: "useReducer",
      reponseC: "useMemo",
      correctAnswer: "A",
    },
    {
      quiz: "💡 Qu'est-ce que JSX en React ?",
      reponseA: "Une bibliothèque JavaScript",
      reponseB: "Une extension de syntaxe",
      reponseC: "Un framework CSS",
      correctAnswer: "B",
    },
    {
      quiz: "🔄 Quel hook est utilisé pour mémoriser une valeur calculée en React ?",
      reponseA: "useCallback",
      reponseB: "useMemo",
      reponseC: "useEffect",
      correctAnswer: "B",
    },
    {
      quiz: "🗂 Qu'est-ce qu'un composant de plus haut niveau (Higher-Order Component, HOC) en React ?",
      reponseA: "Un composant qui retourne un autre composant",
      reponseB: "Un composant parent de tous les autres composants",
      reponseC: "Un composant de la bibliothèque React",
      correctAnswer: "A",
    },
    {
      quiz: "⚛️ Quel est le rôle principal de React Router ?",
      reponseA: "Gestion d'état",
      reponseB: "Routing côté client",
      reponseC: "Sécurité des données",
      correctAnswer: "B",
    },
    {
      quiz: "📦 Qu'est-ce que 'props' en React ?",
      reponseA: "Des fonctions intégrées",
      reponseB: "Des paramètres passés aux composants",
      reponseC: "Des méthodes pour manipuler l'état",
      correctAnswer: "B",
    },
  ],
  angular: [
    // Questions sur Angular
    {
      quiz: "Qu'est-ce qu'Angular ?",
      reponseA: "Un langage de programmation",
      reponseB: "Un framework JavaScript pour construire des applications web",
      reponseC: "Une base de données NoSQL",
      correctAnswer: "B",
    },
    {
      quiz: "Quel fichier est utilisé pour configurer les routes dans une application Angular ?",
      reponseA: "app.module.ts",
      reponseB: "app.routing.module.ts",
      reponseC: "app.routes.ts",
      correctAnswer: "B",
    },
    {
      quiz: "Quelle commande est utilisée pour créer un nouveau projet Angular ?",
      reponseA: "ng new projectName",
      reponseB: "angular create projectName",
      reponseC: "ng generate app projectName",
      correctAnswer: "A",
    },
    {
      quiz: "Quel décorateur est utilisé pour définir un composant en Angular ?",
      reponseA: "@NgModule",
      reponseB: "@Component",
      reponseC: "@Directive",
      correctAnswer: "B",
    },
    {
      quiz: "Comment lie-t-on une propriété en Angular ?",
      reponseA: "{[propertyName]}",
      reponseB: "[(propertyName)]",
      reponseC: "[propertyName]",
      correctAnswer: "C",
    },
    {
      quiz: "Quel est le but du service HttpClient en Angular ?",
      reponseA: "Pour gérer les routes",
      reponseB: "Pour effectuer des requêtes HTTP",
      reponseC: "Pour stocker des données localement",
      correctAnswer: "B",
    },
    {
      quiz: "Que signifie le terme 'data binding' en Angular ?",
      reponseA: "Lier une base de données à une application",
      reponseB: "Lier des propriétés de composants à des éléments du DOM",
      reponseC: "Lier des fichiers CSS à des composants",
      correctAnswer: "B",
    },
    {
      quiz: "Quel est le rôle de NgRx en Angular ?",
      reponseA: "Pour la gestion de la configuration",
      reponseB: "Pour la gestion des états d'application",
      reponseC: "Pour la gestion des modules",
      correctAnswer: "B",
    },
    {
      quiz: "Quel est l'outil de ligne de commande pour Angular ?",
      reponseA: "Angular CLI",
      reponseB: "Angular NPM",
      reponseC: "Angular Builder",
      correctAnswer: "A",
    },
    {
      quiz: "Comment déclarez-vous un module en Angular ?",
      reponseA: "@Module({})",
      reponseB: "@NgModule({})",
      reponseC: "@AngularModule({})",
      correctAnswer: "B",
    },
    // ... autres questions sur Angular
  ],
  java: [
    {
      quiz: "Quel mot-clé crée une fonction en Python ?",
      reponseA: "func",
      reponseB: "def",
      reponseC: "function",
      correctAnswer: "B",
    },
    // ... autres questions sur Python
  ],
  javascript: [
    {
      quiz: "Quel mot-clé crée une fonction en Python ?",
      reponseA: "func",
      reponseB: "def",
      reponseC: "function",
      correctAnswer: "B",
    },
    // ... autres questions sur Python
  ],
  ruby: [
    {
      quiz: "Quel mot-clé crée une fonction en Python ?",
      reponseA: "func",
      reponseB: "def",
      reponseC: "function",
      correctAnswer: "B",
    },
    // ... autres questions sur Python
  ],
  swift: [
    {
      quiz: "Quel mot-clé crée une fonction en Python ?",
      reponseA: "func",
      reponseB: "def",
      reponseC: "function",
      correctAnswer: "B",
    },
    // ... autres questions sur Python
  ],
  kotlin: [
    {
      quiz: "Quel mot-clé crée une fonction en Python ?",
      reponseA: "func",
      reponseB: "def",
      reponseC: "function",
      correctAnswer: "B",
    },

    // ... autres questions sur Python
  ],
};

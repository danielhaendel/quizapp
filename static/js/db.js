let quizs = [
    {
        "name": "HTML",
        "questions": "quiz_html"
    },
    {
        "name": "CSS",
        "questions": "quiz_css"
    },
    {
        "name": "JavaScript",
        "questions": "quiz_js"
    }
]

let quiz_html = [
    {
        "question": "Welches Protokoll wird häufig für den Versand von Webseiten verwendet?",
        "option1": "FTP",
        "option2": "SMTP",
        "option3": "HTTP",
        "option4": "SSH",
        "answer": 3
    },
    {
        "question": "Wofür steht das 'C' in CSS?",
        "option1": "Color",
        "option2": "Cascading",
        "option3": "Code",
        "option4": "Clear",
        "answer": 2
    },
    {
        "question": "Welche Programmiersprache wird häufig für dynamische Inhalte in Webanwendungen verwendet?",
        "option1": "Python",
        "option2": "JavaScript",
        "option3": "Java",
        "option4": "C++",
        "answer": 2
    },
    {
        "question": "Welche dieser HTML-Tags dient zur Darstellung von Bildern?",
        "option1": "&lt;div&gt;",
        "option2": "&lt;p&gt;",
        "option3": "&lt;img&gt;",
        "option4": "&lt;table&gt;",
        "answer": 3
    },
    {
        "question": "Mit welchem Attribut lässt sich ein Hyperlink in einem neuen Tab öffnen?",
        "option1": "open='_new'",
        "option2": "window='_blank'",
        "option3": "target='_newtab'",
        "option4": "target='_blank'",
        "answer": 4
    },
    {
        "question": "Wie heißt die Markup-Sprache, die auf XML basiert und häufig für Webseiten verwendet wird?",
        "option1": "JSON",
        "option2": "HTML",
        "option3": "CSS",
        "option4": "Markdown",
        "answer": 2
    },
    {
        "question": "Wofür steht das 'S' in HTTPS?",
        "option1": "Secure",
        "option2": "Socket",
        "option3": "Service",
        "option4": "Standard",
        "answer": 1
    },
    {
        "question": "Welches HTML-Tag wird für einen Absatz verwendet?",
        "option1": "&lt;p&gt;",
        "option2": "&lt;div&gt;",
        "option3": "&lt;span&gt;",
        "option4": "&lt;title&gt;",
        "answer": 1
    },
    {
        "question": "Welcher dieser Selektoren in CSS spricht alle Elemente an?",
        "option1": "*",
        "option2": "#",
        "option3": ".",
        "option4": "all",
        "answer": 1
    },
    {
        "question": "Welche Eigenschaft wird in CSS verwendet, um die Hintergrundfarbe zu ändern?",
        "option1": "color",
        "option2": "font-color",
        "option3": "background",
        "option4": "background-color",
        "answer": 4
    },
    {
        "question": "Welche HTML-Tag ist ideal für die Darstellung von Überschriften auf einer Webseite?",
        "option1": "&lt;h1&gt;",
        "option2": "&lt;header&gt;",
        "option3": "&lt;title&gt;",
        "option4": "&lt;strong&gt;",
        "answer": 1
    },
    {
        "question": "Mit welchem CSS-Befehl können alle Außenabstände (margin) eines Elements auf null gesetzt werden?",
        "option1": "padding: 0;",
        "option2": "margin: 0;",
        "option3": "spacing: 0;",
        "option4": "border: 0;",
        "answer": 2
    },
    {
        "question": "Welche Programmiersprache ist speziell für die Gestaltung und das Layout von Webseiten zuständig?",
        "option1": "JavaScript",
        "option2": "PHP",
        "option3": "CSS",
        "option4": "HTML",
        "answer": 3
    }
];
let quiz_css = [
    {
        "question": "Wofür steht CSS?",
        "option1": "Cascading Style Sheets",
        "option2": "Colorful Style Sheets",
        "option3": "Computer Style Sheets",
        "option4": "Creative Style Sheets",
        "answer": 1
    },
    {
        "question": "Mit welcher Eigenschaft kann die Textfarbe eines Elements geändert werden?",
        "option1": "text-color",
        "option2": "color",
        "option3": "font-color",
        "option4": "background-color",
        "answer": 2
    },
    {
        "question": "Wie definiert man eine Schriftgröße von 16 Pixeln in CSS?",
        "option1": "font-size: 16px;",
        "option2": "text-size: 16px;",
        "option3": "size: 16px;",
        "option4": "font: 16px;",
        "answer": 1
    },
    {
        "question": "Welche Eigenschaft wird verwendet, um den Abstand innerhalb eines Elements zu definieren?",
        "option1": "margin",
        "option2": "padding",
        "option3": "border",
        "option4": "spacing",
        "answer": 2
    },
    {
        "question": "Wie lautet der CSS-Befehl, um die Hintergrundfarbe zu ändern?",
        "option1": "color",
        "option2": "background-color",
        "option3": "bg-color",
        "option4": "back-color",
        "answer": 2
    },
    {
        "question": "Mit welchem Selektor werden alle Elemente auf der Seite angesprochen?",
        "option1": "*",
        "option2": "#",
        "option3": ".",
        "option4": "all",
        "answer": 1
    },
    {
        "question": "Welche Eigenschaft ändert die Schriftart eines Elements?",
        "option1": "font-weight",
        "option2": "font-family",
        "option3": "font-style",
        "option4": "font-type",
        "answer": 2
    },
    {
        "question": "Welche Eigenschaft wird verwendet, um ein Element zu zentrieren?",
        "option1": "center",
        "option2": "align",
        "option3": "text-align",
        "option4": "float",
        "answer": 3
    },
    {
        "question": "Welcher Wert für die `display`-Eigenschaft entfernt ein Element aus dem Layoutfluss?",
        "option1": "block",
        "option2": "inline",
        "option3": "none",
        "option4": "hidden",
        "answer": 3
    },
    {
        "question": "Mit welcher Eigenschaft kann ein Schatten hinter einem Element erstellt werden?",
        "option1": "shadow",
        "option2": "box-shadow",
        "option3": "background-shadow",
        "option4": "filter-shadow",
        "answer": 2
    },
    {
        "question": "Wie können Pseudoklassen wie `:hover` verwendet werden?",
        "option1": "Mit einem Punkt vor dem Element",
        "option2": "Mit einer Raute vor dem Element",
        "option3": "Mit einem Doppelpunkt vor dem Element",
        "option4": "Mit einem Unterstrich vor dem Element",
        "answer": 3
    },
    {
        "question": "Welche Einheit ist relativ zur Schriftgröße des Elternelements?",
        "option1": "px",
        "option2": "em",
        "option3": "cm",
        "option4": "%",
        "answer": 2
    },
    {
        "question": "Welche Eigenschaft wird verwendet, um die Transparenz eines Elements zu ändern?",
        "option1": "opacity",
        "option2": "visibility",
        "option3": "transparency",
        "option4": "display",
        "answer": 1
    }
];
let quiz_js = [
    {
        "question": "Wofür steht die Abkürzung JS?",
        "option1": "Java Standards",
        "option2": "JavaScript",
        "option3": "Java Services",
        "option4": "Just Simple",
        "answer": 2
    },
    {
        "question": "Welcher Befehl gibt Daten in der Konsole aus?",
        "option1": "console.print()",
        "option2": "console.output()",
        "option3": "console.log()",
        "option4": "console.write()",
        "answer": 3
    },
    {
        "question": "Welche Methode wird verwendet, um ein Array zu sortieren?",
        "option1": "sort()",
        "option2": "order()",
        "option3": "align()",
        "option4": "arrange()",
        "answer": 1
    },
    {
        "question": "Wie deklariert man eine Variable in JavaScript?",
        "option1": "var",
        "option2": "let",
        "option3": "const",
        "option4": "Alle oben genannten",
        "answer": 4
    },
    {
        "question": "Welche Methode konvertiert eine Zeichenkette in Kleinbuchstaben?",
        "option1": "toLower()",
        "option2": "lowercase()",
        "option3": "toLowerCase()",
        "option4": "small()",
        "answer": 3
    },
    {
        "question": "Mit welchem Befehl wird eine Funktion definiert?",
        "option1": "def",
        "option2": "function",
        "option3": "define",
        "option4": "func",
        "answer": 2
    },
    {
        "question": "Was gibt `typeof null` in JavaScript zurück?",
        "option1": "null",
        "option2": "object",
        "option3": "undefined",
        "option4": "boolean",
        "answer": 2
    },
    {
        "question": "Welche Methode fügt ein Element am Ende eines Arrays hinzu?",
        "option1": "add()",
        "option2": "insert()",
        "option3": "append()",
        "option4": "push()",
        "answer": 4
    },
    {
        "question": "Mit welchem Symbol wird eine Bedingung verglichen?",
        "option1": "=",
        "option2": "==",
        "option3": "===",
        "option4": "== oder ===",
        "answer": 4
    },
    {
        "question": "Wie definiert man ein Objekt in JavaScript?",
        "option1": "[]",
        "option2": "{}",
        "option3": "()",
        "option4": "<>",
        "answer": 2
    },
    {
        "question": "Welche Methode ruft eine Funktion mit einem bestimmten Wert als Kontext auf?",
        "option1": "call()",
        "option2": "apply()",
        "option3": "bind()",
        "option4": "execute()",
        "answer": 1
    },
    {
        "question": "Welches Schlüsselwort beendet eine Schleife?",
        "option1": "exit",
        "option2": "stop",
        "option3": "break",
        "option4": "end",
        "answer": 3
    },
    {
        "question": "Was wird verwendet, um Code bedingt auszuführen?",
        "option1": "if",
        "option2": "else",
        "option3": "switch",
        "option4": "Alle oben genannten",
        "answer": 4
    }
];
let quiz_java = [
    {
        "question": "Wofür steht JVM in Java?",
        "option1": "Java Variable Machine",
        "option2": "Java Virtual Machine",
        "option3": "Java Verified Machine",
        "option4": "Java Value Machine",
        "answer": 2
    },
    {
        "question": "Welches Schlüsselwort wird verwendet, um eine Klasse zu definieren?",
        "option1": "class",
        "option2": "def",
        "option3": "struct",
        "option4": "define",
        "answer": 1
    },
    {
        "question": "Wie nennt man die Methode, die als Programmstart dient?",
        "option1": "begin()",
        "option2": "start()",
        "option3": "main()",
        "option4": "init()",
        "answer": 3
    },
    {
        "question": "Welcher Datentyp wird für Ganzzahlen verwendet?",
        "option1": "int",
        "option2": "float",
        "option3": "char",
        "option4": "boolean",
        "answer": 1
    },
    {
        "question": "Mit welchem Schlüsselwort wird ein Objekt in Java erzeugt?",
        "option1": "create",
        "option2": "make",
        "option3": "new",
        "option4": "instance",
        "answer": 3
    },
    {
        "question": "Welches Schlüsselwort wird verwendet, um eine Methode in einer abgeleiteten Klasse zu überschreiben?",
        "option1": "override",
        "option2": "overwrite",
        "option3": "overload",
        "option4": "implement",
        "answer": 1
    },
    {
        "question": "Was ist die Standard-Datentypgröße für `int` in Java?",
        "option1": "8-bit",
        "option2": "16-bit",
        "option3": "32-bit",
        "option4": "64-bit",
        "answer": 3
    },
    {
        "question": "Wie bezeichnet man eine Variable, die nur einmal festgelegt und nicht geändert werden kann?",
        "option1": "constant",
        "option2": "static",
        "option3": "final",
        "option4": "immutable",
        "answer": 3
    },
    {
        "question": "Mit welchem Schlüsselwort wird Vererbung in Java erreicht?",
        "option1": "extends",
        "option2": "inherits",
        "option3": "derives",
        "option4": "super",
        "answer": 1
    },
    {
        "question": "Welche Ausnahme wird bei einer Division durch Null ausgelöst?",
        "option1": "NullPointerException",
        "option2": "DivisionByZeroException",
        "option3": "ArithmeticException",
        "option4": "IllegalArgumentException",
        "answer": 3
    },
    {
        "question": "Was ist das Ergebnis von `10 % 3` in Java?",
        "option1": "1",
        "option2": "2",
        "option3": "3",
        "option4": "0",
        "answer": 1
    },
    {
        "question": "Welches Schlüsselwort wird verwendet, um eine Methode zu deklarieren, die in Unterklassen implementiert werden muss?",
        "option1": "abstract",
        "option2": "static",
        "option3": "final",
        "option4": "public",
        "answer": 1
    },
    {
        "question": "Wie viele Konstruktoren kann eine Klasse in Java haben?",
        "option1": "Einen",
        "option2": "Beliebig viele",
        "option3": "Nur zwei",
        "option4": "Keinen",
        "answer": 2
    }
];

export const SPANISH_SUBSET = [
    {
        index: "acid-arrow",
        name: "Flecha Ácida de Melf",
        name_en: "Melf's Acid Arrow",
        level: 2,
        school: "evocación",
        casting_time: "1 acción",
        range: "90 pies",
        components: "V, S, M",
        duration: "Instantánea",
        desc: [
            "Una flecha verde brillante surca el aire hacia un objetivo dentro del alcance y explota en un estallido de ácido. Realiza un ataque de conjuro a distancia contra el objetivo. Si impactas, el objetivo recibe 4d4 de daño por ácido inmediatamente y 2d4 de daño por ácido al final de su próximo turno. Si fallas, la flecha salpica al objetivo con ácido por la mitad del daño inicial y no recibe daño al final de su próximo turno."
        ],
        higher_level: ["Cuando lanzas este hechizo usando un espacio de conjuro de nivel 3 o superior, el daño (tanto inicial como posterior) aumenta en 1d4 por cada nivel de espacio por encima de 2."]
    },
    {
        index: "acid-splash",
        name: "Salpicadura de Ácido",
        name_en: "Acid Splash",
        level: 0,
        school: "conjuración",
        casting_time: "1 acción",
        range: "60 pies",
        components: "V, S",
        duration: "Instantánea",
        desc: [
            "Lanzas una burbuja de ácido. Elige una criatura dentro del alcance, o dos criaturas dentro del alcance que estén a 5 pies una de la otra. Un objetivo debe tener éxito en una tirada de salvación de Destreza o recibir 1d6 de daño por ácido."
        ],
        higher_level: ["El daño de este conjuro aumenta en 1d6 cuando alcanzas el nivel 5 (2d6), nivel 11 (3d6) y nivel 17 (4d6)."]
    },
    {
        index: "alarm",
        name: "Alarma",
        name_en: "Alarm",
        level: 1,
        school: "abjuración",
        casting_time: "1 minuto",
        range: "30 pies",
        components: "V, S, M",
        duration: "8 horas",
        desc: [
            "Colocas una alarma contra intrusos no deseados. Elige una puerta, una ventana o un área dentro del alcance que no sea mayor a un cubo de 20 pies. Hasta que el conjuro termine, una alarma suena siempre que una criatura Diminuta o más grande toque o entre en el área protegida."
        ]
    },
    {
        index: "burning-hands",
        name: "Manos Ardientes",
        name_en: "Burning Hands",
        level: 1,
        school: "evocación",
        casting_time: "1 acción",
        range: "Toque (cono de 15 pies)",
        components: "V, S",
        duration: "Instantánea",
        desc: [
            "Mientras sostienes tus manos con los pulgares tocándose y los dedos extendidos, una delgada lámina de llamas sale de tus dedos extendidos. Cada criatura en un cono de 15 pies debe hacer una tirada de salvación de Destreza. Una criatura recibe 3d6 de daño por fuego si falla la tirada, o la mitad si tiene éxito."
        ],
        higher_level: ["El daño aumenta en 1d6 por cada nivel de espacio por encima de 1."]
    },
    {
        index: "cure-wounds",
        name: "Curar Heridas",
        name_en: "Cure Wounds",
        level: 1,
        school: "evocación",
        casting_time: "1 acción",
        range: "Toque",
        components: "V, S",
        duration: "Instantánea",
        desc: [
            "Una criatura que tocas recupera puntos de golpe iguales a 1d8 + tu modificador de característica para lanzar conjuros. Este conjuro no tiene efecto en no muertos o constructos."
        ],
        higher_level: ["La curación aumenta en 1d8 por cada nivel de espacio por encima de 1."]
    },
    {
        index: "detect-magic",
        name: "Detectar Magia",
        name_en: "Detect Magic",
        level: 1,
        school: "adivinación",
        casting_time: "1 acción",
        range: "Personal",
        components: "V, S",
        duration: "Concentración, hasta 10 minutos",
        desc: [
            "Por la duración, sientes la presencia de magia a 30 pies de ti. Si sientes magia de esta manera, puedes usar tu acción para ver un aura tenue alrededor de cualquier criatura u objeto visible en el área que tenga magia, y aprendes su escuela de magia, si la hay."
        ]
    },
    {
        index: "fireball",
        name: "Bola de Fuego",
        name_en: "Fireball",
        level: 3,
        school: "evocación",
        casting_time: "1 acción",
        range: "150 pies",
        components: "V, S, M",
        duration: "Instantánea",
        desc: [
            "Un brillante rayo de luz sale de tu dedo hacia un punto que elijas dentro del alcance y luego florece con un rugido bajo en una explosión de llamas. Cada criatura en una esfera de 20 pies de radio centrada en ese punto debe hacer una tirada de salvación de Destreza. El objetivo recibe 8d6 de daño por fuego si falla, o la mitad si tiene éxito."
        ],
        higher_level: ["El daño aumenta en 1d6 por cada nivel de espacio por encima de 3."]
    },
    {
        index: "fly",
        name: "Volar",
        name_en: "Fly",
        level: 3,
        school: "transmutación",
        casting_time: "1 acción",
        range: "Toque",
        components: "V, S, M",
        duration: "Concentración, hasta 10 minutos",
        desc: [
            "Tocas a una criatura voluntaria. El objetivo gana una velocidad de vuelo de 60 pies por la duración. Cuando el conjuro termina, el objetivo cae si todavía está en el aire, a menos que pueda detener la caída."
        ],
        higher_level: ["Puedes seleccionar una criatura adicional por cada nivel de espacio por encima de 3."]
    },
    {
        index: "healing-word",
        name: "Palabra de Curación",
        name_en: "Healing Word",
        level: 1,
        school: "evocación",
        casting_time: "1 acción adicional",
        range: "60 pies",
        components: "V",
        duration: "Instantánea",
        desc: [
            "Una criatura de tu elección que puedas ver dentro del alcance recupera puntos de golpe iguales a 1d4 + tu modificador de característica para lanzar conjuros. Este conjuro no tiene efecto en no muertos o constructos."
        ],
        higher_level: ["La curación aumenta en 1d4 por cada nivel de espacio por encima de 1."]
    },
    {
        index: "identify",
        name: "Identificar",
        name_en: "Identify",
        level: 1,
        school: "adivinación",
        casting_time: "1 minuto",
        range: "Toque",
        components: "V, S, M",
        duration: "Instantánea",
        desc: [
            "Eliges un objeto que debes tocar durante todo el lanzamiento del conjuro. Si es un objeto mágico o algún otro objeto imbuido de magia, aprendes sus propiedades y cómo usarlas, si requiere sintonización para usarlo, y cuántas cargas tiene, si las hay."
        ]
    },
    {
        index: "mage-armor",
        name: "Armadura de Mago",
        name_en: "Mage Armor",
        level: 1,
        school: "abjuración",
        casting_time: "1 acción",
        range: "Toque",
        components: "V, S, M",
        duration: "8 horas",
        desc: [
            "Tocas a una criatura voluntaria que no lleve armadura, y una fuerza mágica protectora la rodea hasta que el conjuro termine. La CA base del objetivo se convierte en 13 + su modificador de Destreza. El conjuro termina si el objetivo se pone armadura o si usas una acción para descartarlo."
        ]
    },
    {
        index: "magic-missile",
        name: "Proyectil Mágico",
        name_en: "Magic Missile",
        level: 1,
        school: "evocación",
        casting_time: "1 acción",
        range: "120 pies",
        components: "V, S",
        duration: "Instantánea",
        desc: [
            "Creas tres dardos brillantes de fuerza mágica. Cada dardo golpea a una criatura de tu elección que puedas ver dentro del alcance. Un dardo inflige 1d4 + 1 de daño de fuerza a su objetivo. Los dardos golpean simultáneamente y puedes dirigirlos a uno o varios objetivos."
        ],
        higher_level: ["Creas un dardo adicional por cada nivel de espacio por encima de 1."]
    },
    {
        index: "shield",
        name: "Escudo",
        name_en: "Shield",
        level: 1,
        school: "abjuración",
        casting_time: "1 reacción",
        range: "Personal",
        components: "V, S",
        duration: "1 ronda",
        desc: [
            "Una barrera invisible de fuerza mágica aparece y te protege. Hasta el comienzo de tu próximo turno, tienes un bonificador de +5 a la CA, incluido contra el ataque que desencadenó el conjuro, y no recibes daño de proyectil mágico."
        ]
    },
    {
        index: "sleep",
        name: "Dormir",
        name_en: "Sleep",
        level: 1,
        school: "encantamiento",
        casting_time: "1 acción",
        range: "90 pies",
        components: "V, S, M",
        duration: "1 minuto",
        desc: [
            "Este conjuro envía a las criaturas a un sueño mágico. Tira 5d8; el total es cuántos puntos de golpe de criaturas puede afectar este conjuro. Las criaturas en un radio de 20 pies de un punto que elijas dentro del alcance son afectadas en orden ascendente de sus puntos de golpe actuales."
        ],
        higher_level: ["Tira 2d8 adicionales por cada nivel de espacio por encima de 1."]
    },
    {
        index: "haste",
        name: "Acelerar",
        name_en: "Haste",
        level: 3,
        school: "transmutación",
        casting_time: "1 acción",
        range: "30 pies",
        components: "V, S, M",
        duration: "Concentración, hasta 1 minuto",
        desc: [
            "Elige una criatura voluntaria que puedas ver dentro del alcance. Hasta que el conjuro termine, la velocidad del objetivo se duplica, gana un bonificador de +2 a la CA, tiene ventaja en tiradas de salvación de Destreza y gana una acción adicional en cada uno de sus turnos. Esa acción solo puede usarse para Atacar (un solo ataque de arma), Correr, Destrabarse, Esconderse o Usar un Objeto."
        ]
    },
    {
        index: "invisibility",
        name: "Invisibilidad",
        name_en: "Invisibility",
        level: 2,
        school: "ilusión",
        casting_time: "1 acción",
        range: "Toque",
        components: "V, S, M",
        duration: "Concentración, hasta 1 hora",
        desc: [
            "Una criatura que tocas se vuelve invisible hasta que el conjuro termine. Todo lo que el objetivo lleva puesto o transporta es invisible mientras esté en su persona. El conjuro termina para un objetivo que ataca o lanza un conjuro."
        ]
    },
    {
        index: "counterspell",
        name: "Contrahechizo",
        name_en: "Counterspell",
        level: 3,
        school: "abjuración",
        casting_time: "1 reacción",
        range: "60 pies",
        components: "S",
        duration: "Instantánea",
        desc: [
            "Intentas interrumpir a una criatura en el proceso de lanzar un conjuro. Si la criatura está lanzando un conjuro de 3er nivel o inferior, su conjuro falla y no tiene efecto. Si está lanzando un conjuro de 4º nivel o superior, haz una prueba de característica usando tu característica para lanzar conjuros. La CD es 10 + el nivel del conjuro. Si tienes éxito, el conjuro de la criatura falla y no tiene efecto."
        ]
    },
    {
        index: "lightning-bolt",
        name: "Rayo Relampagueante",
        name_en: "Lightning Bolt",
        level: 3,
        school: "evocación",
        casting_time: "1 acción",
        range: "Personal (línea de 100 pies)",
        components: "V, S, M",
        duration: "Instantánea",
        desc: [
            "Un golpe de relámpago forma una línea de 100 pies de largo y 5 pies de ancho que sale de ti en una dirección que elijas. Cada criatura en la línea debe hacer una tirada de salvación de Destreza. Una criatura recibe 8d6 de daño por relámpago si falla la tirada, o la mitad si tiene éxito."
        ]
    },
    {
        index: "wish",
        name: "Deseo",
        name_en: "Wish",
        level: 9,
        school: "conjuración",
        casting_time: "1 acción",
        range: "Personal",
        components: "V",
        duration: "Instantánea",
        desc: [
            "Deseo es el conjuro mortal más poderoso que puede lanzar una criatura. Simplemente hablando en voz alta, puedes alterar los fundamentos mismos de la realidad de acuerdo con tus deseos."
        ]
    },
    {
        index: "web",
        name: "Telaraña",
        name_en: "Web",
        level: 2,
        school: "conjuración",
        casting_time: "1 acción",
        range: "60 pies",
        components: "V, S, M",
        duration: "Concentración, hasta 1 hora",
        desc: [
            "Conjuras una masa de telarañas pegajosas y gruesas en un punto de tu elección dentro del alcance. Las telarañas llenan un cubo de 20 pies desde ese punto por la duración. Las telarañas son terreno difícil y oscurecen ligeramente su área."
        ]
    }
];

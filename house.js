var headerText = "Dr. House Bingo";

var footerText = "";

var winText = "Bingo!";

var clickSnd = new Audio("https://jsslf.s-ul.eu/m0krDxrS");

var winSnd = new Audio("https://jsslf.s-ul.eu/6trBbPYf");

var JSONBingo = {"squares": [
	{"square": "Paro cardiaco/desfibrilación"},
	{"square": "Cuddy consiente las acciones de House"},
	{"square": "Perforación craneal"},
	{"square": "House se explica con metáfora"},
	{"square": "Empeoran intencionalmente al paciente"},
	{"square": "Momento Giga<br />(Cualquiera excepto House)"},
	{"square": "House hace enojar a Wilson"},
	{"square": "House acecha o interroga a Wilson"},
	{"square": "House toca un instrumento"},
	{"square": "House acosa sexualmente a alguien"},
	{"square": "Mención de la sexualidad de Trece"},
	{"square": "Allanamiento de morada"},
	{"square": "Intuban al paciente"},
	{"square": "House llama al ascensor con el bastón"},
	{"square": "Cuddy es intimidada para decir sí"},
	{"square": "Diagnóstico: <br />Sarcoidosis"},
	{"square": "Diagnóstico: <br />Cáncer"},
	{"square": "Diagnóstico: <br />Enfermedad de Wilson"},
	{"square": "Diagnóstico: <br />Lupus"},
	{"square": "Diagnóstico: <br />Autoinmunitario"},
	{"square": "Diagnóstico: <br />Parásito o hongo"},
	{"square": "House ofende al paciente en la clínica"},
	{"square": "House toma droga (excepto Vicodin)"},
	{"square": "Ordenar pruebas innecesarias"},
	{"square": "Discusión estilo Redditor"},
	{"square": "House detiene la cirugía"},
	{"square": "House toma una decisión ética"},
	{"square": "House bloquea a alguien con el bastón"},
	{"square": "El paciente pierde repentinamente una función (visión, piernas, etc)"},
	{"square": "House almuerza en la morgue o en la habitación del paciente"},
	{"square": "House durmiendo en el hospital"},
	{"square": "Paciente miente"},
	{"square": "Paciente no miente (Sí, en serio)"},
	{"square": "House visita el baño durante la conversación"},
	{"square": "Wilson en problemas por algo que hizo House"},
	{"square": "Wilson trata de proteger a House"},
	{"square": "Wilson consulta sobre sospecha de cáncer"},
	{"square": "Sesión de diagnóstico en pizarra"},
	{"square": "Cuddy frustra el plan astuto"},
	{"square": "Paciente de la clínica regresa varias veces"},
	{"square": "Paciente muere"},
	{"square": "House toma comida de Wilson"},
	{"square": "House roba dinero o artículos a alguien"},
	{"square": "House y/o personal apuesta inapropiadamente"},
	{"square": "Sangre en orina o heces"},
	{"square": "Mención de la raza de Foreman"},
	{"square": "Punción lumbar"},
	{"square": "House miente a la gerencia o al consejo"},
	{"square": "El paciente tiene una convulsión"},
	{"square": "Chase realiza cirugía"},
	{"square": "Más de 3 diagnósticos incorrectos"},
	{"square": "Más de 5 diagnósticos incorrectos"},
	{"square": "Chase realiza cirugía"},
	{"square": "House ayuda o interrumpe la cirugía"},
	{"square": "House juega rebotando/lanzando una pelota"},
	{"square": "House hace Bodyshaming"},
	{"square": "¡La pierna de House le duele MUCHO!"},
	{"square": "Subordinados juzgan al paciente<br />(En su cara)"},
	{"square": "House humilla a un subordinado"},
	{"square": "Error común de Foreman"},
	{"square": "Doctor necesita dinero"},
	{"square": "Canción de cierre optimista"},
	{"square": "Canción de cierre deprimente"},
	{"square": "El matrimonio de Wilson se convierte en parte del episodio"}
]
};

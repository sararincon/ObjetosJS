function Consultorio(nombre,paciente){
    let _nombre = nombre; 
    let _paciente = paciente || [];

    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre;
        },
    });
    Object.defineProperty(this, "setNombre", {
        set: function(nombre){
             _nombre = nombre
        }
    });

    Object.defineProperty(this, "_getPaciente", {
        get: function() {
            return _paciente;
        },
    });
    Object.defineProperty(this, "setPaciente", {
        set: function(paciente){
             _paciente = paciente
        }
    });
}

function Paciente(nombre, edad, rut, diagnostico){
    let _nombre = nombre;
    let _edad = edad; 
    let _rut = rut;
    let _diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre;
        },
    });
    Object.defineProperty(this, "setNombre", {
        set: function(nombre){
             _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getEdad", {
        get: function() {
            return _edad;
        },
    });
    Object.defineProperty(this, "setEdad", {
        set: function(edad){
             _edad = edad;
        }
    });
    Object.defineProperty(this, "_getRut", {
		get: function () {
			return _rut;
		},
	});
	Object.defineProperty(this, "_setRut", {
		set: function (rut) {
			_rut = rut;
		},
	});
	Object.defineProperty(this, "_getDiagnostico", {
		get: function () {
			return _diagnostico;
		},
	});
	Object.defineProperty(this, "_setDiagnostico", {
		set: function (diagnostico) {
			_diagnostico = diagnostico;
		},
	});
}

//Get y Set de la Función Paciente
Paciente.prototype.getNombre = function () {
	return this._getNombre;
};
Paciente.prototype.setNombre = function (nombre) {
	this._setNombre = nombre;
};
Paciente.prototype.getEdad = function () {
	return this._getEdad;
};
Paciente.prototype.setEdad = function (edad) {
	this._setEdad = edad;
};
Paciente.prototype.getRut = function () {
	return this._getRut;
};
Paciente.prototype.setRut = function (rut) {
	this._setRut = rut;
};
Paciente.prototype.getDiagnostico = function () {
	return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function (diagnostico) {
	this._setDiagnostico = diagnostico;
};

//Get y Set de la Función Consultorio
Consultorio.prototype.getNombre = function () {
	return this._getNombre;
};
Consultorio.prototype.setNombre = function (nombre) {
	this._setNombre = nombre;
};
Consultorio.prototype.getPaciente = function () {
	return this._getPaciente;
};
Consultorio.prototype.setPaciente = function (paciente) {
	this._setPaciente = paciente;
};

// Paciente.prototype.buscar_paciente = function(nombre) {
//     this._paciente.filter(paciente => paciente._nombre == nombre)
// }

//Instanciando Paciente
let pacienteUno = new Paciente ("Frank" , 26, "8907654-4", "COVID-19" )
let pacienteDos = new Paciente ("Javier" , 25, "4567896-3", "Bronquitis")
let pacienteTres = new Paciente ("Gabriel" , 26, "9969909-4", "Dolor de Garganta" )
let pacienteCuatro = new Paciente ("Nicole" , 45, "10345678-5", "Resfriado Común")
let pacienteCinco = new Paciente ("Sabrina" , 15, "789647483-7", ["Tos Seca", " Bronquitis"])
// console.log(pacienteCuatro.getRut());

//Instanciando Consultorio

let consultorioProvi = new Consultorio ("Providencia", [pacienteUno, pacienteDos, pacienteTres, pacienteCuatro, pacienteCinco]);


//Buscando solo por nombre 
Consultorio.prototype.justName = function (nombre) {
	this._getPaciente
		.filter((paciente) => paciente._getNombre == nombre)
		.map((paciente) => {
            document.write(`Nombre:  ${paciente._getNombre}<br>`);
            document.write(`Edad:  ${paciente._getEdad}<br>`);
            document.write(`Rut:  ${paciente._getRut}<br>`);
            document.write(`Diagnostico:  ${paciente._getDiagnostico}<br><br>`);
			
		});
};

consultorioProvi.justName("Frank");

//Mostrando todos los datos de los pacientes asociados 
Consultorio.prototype.allPatients = function (){
    this._getPaciente.map((paciente)=>{
        document.write(`Nombre:  ${paciente._getNombre}<br>`);
        document.write(`Edad:  ${paciente._getEdad}<br>`);
        document.write(`Rut:  ${paciente._getRut}<br>`);
        document.write(`Diagnostico:  ${paciente._getDiagnostico}<br><br>`);
        
    });
};

consultorioProvi.allPatients();




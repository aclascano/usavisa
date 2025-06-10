// src/components/templates/ProcesosUsaWizard.tsx
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  IdentificationIcon,
  GlobeAmericasIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

type FormDataType = {
  // Paso 1: Datos Básicos
  nombreCompleto: string;
  beneficiarios: string;
  alienNumber: string;
  comoEntero: string;
  observaciones: string;
  edad: string;
  correo: string;
  paisOrigen: string;

  // Paso 2: Datos en EE. UU.
  ubicacionEEUU: string;
  fechaLlegada: string;
  ultimoIngreso: string;
  contactoOficial: string;
  procesoMigratorio: string;
  audiencias: string;
  proximaAudiencia: string;
  citasSupervision: string;
  deportacion: string;
  datosAbogadoAnterior: string;
  abogadoActual: string;
  conQuienIngreso: string;
  estadoCivil: string;
  conyugeEEUU: string;
  hijos: string;
  hijosResidencia: string;
  familiaresCiudadano: string;
  ingresoLegalFuturo: string;
  perdioTrabajos: string;
  trabajoActual: string;
  registroPenal: string;
  expectativas: string;
  motivoSalida: string;

  // Paso 3: Tópicos Humanitarios
  victimaViolencia: string;
  historiaClinica: string;
  miedoRegresar: string;
  victimasFamilia: string;
  ascendenciaIndigena: string;
  actividadPolitica: string;
};

export function ProcesosUsaWizard() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [formData, setFormData] = useState<FormDataType>({
    // Valores iniciales
    nombreCompleto: "",
    beneficiarios: "",
    alienNumber: "",
    comoEntero: "",
    observaciones: "",
    edad: "",
    correo: "",
    paisOrigen: "",

    ubicacionEEUU: "",
    fechaLlegada: "",
    ultimoIngreso: "",
    contactoOficial: "",
    procesoMigratorio: "",
    audiencias: "",
    proximaAudiencia: "",
    citasSupervision: "",
    deportacion: "",
    datosAbogadoAnterior: "",
    abogadoActual: "",
    conQuienIngreso: "",
    estadoCivil: "",
    conyugeEEUU: "",
    hijos: "",
    hijosResidencia: "",
    familiaresCiudadano: "",
    ingresoLegalFuturo: "",
    perdioTrabajos: "",
    trabajoActual: "",
    registroPenal: "",
    expectativas: "",
    motivoSalida: "",

    victimaViolencia: "",
    historiaClinica: "",
    miedoRegresar: "",
    victimasFamilia: "",
    ascendenciaIndigena: "",
    actividadPolitica: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Permitir onChange tanto para <input>, <textarea> como <select>
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Formulario Procesos USA enviado:", formData);
    setShowSuccessModal(true);
  };

  // Barra de progreso simple
  function ProgressBar() {
    const labels = ["Básicos", "EE. UU.", "Humanitarios"];
    return (
      <div className="mb-6">
        <div className="flex items-center">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const stepNum = i + 1;
            const completed = stepNum < step;
            const active = stepNum === step;
            return (
              <React.Fragment key={stepNum}>
                <div className="flex flex-col items-center z-10">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      completed
                        ? "bg-[#E31B23]"
                        : active
                        ? "bg-[#F7B500]"
                        : "bg-gray-300"
                    }`}
                  >
                    <span className="text-white font-semibold">{stepNum}</span>
                  </div>
                  <span className="text-xs text-gray-700 mt-1">
                    {labels[i]}
                  </span>
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mt-4 ${
                      step > i + 1 ? "bg-[#E31B23]" : "bg-gray-300"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  // ===== Paso 1: Datos Básicos =====
  const Paso1 = (
    <div className="space-y-6" key="paso1">
      <div className="flex items-center space-x-2 mb-4">
        <IdentificationIcon className="h-7 w-7 text-[#E31B23]" />
        <h2 className="text-2xl font-semibold text-[#E31B23]">Datos Básicos</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nombre Completo */}
        <div>
          <label htmlFor="nombreCompleto" className="block text-gray-700 mb-1">
            Nombre Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nombreCompleto"
            id="nombreCompleto"
            value={formData.nombreCompleto}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
            required
          />
        </div>

        {/* Beneficiarios */}
        <div>
          <label htmlFor="beneficiarios" className="block text-gray-700 mb-1">
            Nombre de los beneficiarios
          </label>
          <input
            type="text"
            name="beneficiarios"
            id="beneficiarios"
            value={formData.beneficiarios}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez (hijo), María López (esposa)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Alien Number */}
        <div>
          <label htmlFor="alienNumber" className="block text-gray-700 mb-1">
            Alien/Aliens Number
          </label>
          <input
            type="text"
            name="alienNumber"
            id="alienNumber"
            value={formData.alienNumber}
            onChange={handleChange}
            placeholder="A123456789"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* ¿Cómo se enteró? */}
        <div>
          <label htmlFor="comoEntero" className="block text-gray-700 mb-1">
            ¿Cómo se enteró de nosotros?
          </label>
          <input
            type="text"
            name="comoEntero"
            id="comoEntero"
            value={formData.comoEntero}
            onChange={handleChange}
            placeholder="Ej. Redes sociales, recomendado"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Observaciones */}
        <div className="sm:col-span-2">
          <label htmlFor="observaciones" className="block text-gray-700 mb-1">
            Observaciones e información relevante
          </label>
          <textarea
            name="observaciones"
            id="observaciones"
            rows={2}
            value={formData.observaciones}
            onChange={handleChange}
            placeholder="Cualquier dato adicional..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Edad */}
        <div>
          <label htmlFor="edad" className="block text-gray-700 mb-1">
            ¿Qué edad tiene?
          </label>
          <input
            type="number"
            name="edad"
            id="edad"
            value={formData.edad}
            onChange={handleChange}
            placeholder="Ej. 35"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Correo */}
        <div>
          <label htmlFor="correo" className="block text-gray-700 mb-1">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
            required
          />
        </div>

        {/* País de Origen */}
        <div>
          <label htmlFor="paisOrigen" className="block text-gray-700 mb-1">
            ¿De dónde es usted?
          </label>
          <input
            type="text"
            name="paisOrigen"
            id="paisOrigen"
            value={formData.paisOrigen}
            onChange={handleChange}
            placeholder="Ciudad, País"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>
      </div>
    </div>
  );

  // ===== Paso 2: Datos en EE. UU. =====
  const Paso2 = (
    <div className="space-y-6" key="paso2">
      <div className="flex items-center space-x-2 mb-4">
        <GlobeAmericasIcon className="h-7 w-7 text-[#E31B23]" />
        <h2 className="text-2xl font-semibold text-[#E31B23]">
          Datos en EE. UU.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Ubicación EE. UU. */}
        <div className="sm:col-span-2">
          <label htmlFor="ubicacionEEUU" className="block text-gray-700 mb-1">
            ¿En qué parte de los EE. UU. se encuentra?
          </label>
          <input
            type="text"
            name="ubicacionEEUU"
            id="ubicacionEEUU"
            value={formData.ubicacionEEUU}
            onChange={handleChange}
            placeholder="Ej. Los Ángeles, CA"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Fecha de Llegada */}
        <div>
          <label htmlFor="fechaLlegada" className="block text-gray-700 mb-1">
            ¿Hace cuánto llegó a los EE. UU.? (fecha)
          </label>
          <input
            type="date"
            name="fechaLlegada"
            id="fechaLlegada"
            value={formData.fechaLlegada}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Último Ingreso */}
        <div className="sm:col-span-2">
          <label htmlFor="ultimoIngreso" className="block text-gray-700 mb-1">
            ¿Cómo fue su último ingreso a los EE. UU.?
          </label>
          <input
            type="text"
            name="ultimoIngreso"
            id="ultimoIngreso"
            value={formData.ultimoIngreso}
            onChange={handleChange}
            placeholder="Ej. Visa turista, asilo, etc."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Contacto con Oficial */}
        <div className="sm:col-span-2">
          <label htmlFor="contactoOficial" className="block text-gray-700 mb-1">
            ¿Ha tenido contacto con algún oficial de inmigración?
          </label>
          <select
            name="contactoOficial"
            id="contactoOficial"
            value={formData.contactoOficial}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Proceso Migratorio */}
        <div className="sm:col-span-2">
          <label
            htmlFor="procesoMigratorio"
            className="block text-gray-700 mb-1"
          >
            ¿Ha llevado o está llevando algún proceso ante inmigración?
          </label>
          <select
            name="procesoMigratorio"
            id="procesoMigratorio"
            value={formData.procesoMigratorio}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Audiencias */}
        <div className="sm:col-span-2">
          <label htmlFor="audiencias" className="block text-gray-700 mb-1">
            ¿Ha tenido audiencias ante un juez de migración? ¿Cuántas veces?
          </label>
          <input
            type="text"
            name="audiencias"
            id="audiencias"
            value={formData.audiencias}
            onChange={handleChange}
            placeholder="Ej. 2 veces (puedes indicar fechas)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Próxima Audiencia */}
        <div>
          <label
            htmlFor="proximaAudiencia"
            className="block text-gray-700 mb-1"
          >
            ¿Cuándo y cuál es la siguiente audiencia?
          </label>
          <input
            type="text"
            name="proximaAudiencia"
            id="proximaAudiencia"
            value={formData.proximaAudiencia}
            onChange={handleChange}
            placeholder="Ej. 10/10/2025 – Audiencia Asilo"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Citas de Supervisión */}
        <div>
          <label
            htmlFor="citasSupervision"
            className="block text-gray-700 mb-1"
          >
            ¿Tiene citas de supervisión?
          </label>
          <select
            name="citasSupervision"
            id="citasSupervision"
            value={formData.citasSupervision}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Deportación */}
        <div className="sm:col-span-2">
          <label htmlFor="deportacion" className="block text-gray-700 mb-1">
            ¿Ha tenido deportación anteriormente? Indique fecha y motivo
          </label>
          <textarea
            name="deportacion"
            id="deportacion"
            rows={2}
            value={formData.deportacion}
            onChange={handleChange}
            placeholder="Ej. 01/01/2020 – Orden de deportación por entrada irregular"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Datos Abogado Anterior */}
        <div className="sm:col-span-2">
          <label
            htmlFor="datosAbogadoAnterior"
            className="block text-gray-700 mb-1"
          >
            Para qué alivio migratorio aplica y datos de su anterior abogado (si
            aplica)
          </label>
          <textarea
            name="datosAbogadoAnterior"
            id="datosAbogadoAnterior"
            rows={2}
            value={formData.datosAbogadoAnterior}
            onChange={handleChange}
            placeholder="Ej. Asilo – Abogado John Doe, (555) 123-4567"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Abogado Actual */}
        <div className="sm:col-span-2">
          <label htmlFor="abogadoActual" className="block text-gray-700 mb-1">
            ¿Ha tenido un abogado que le haya ayudado o esté ayudando?
          </label>
          <select
            name="abogadoActual"
            id="abogadoActual"
            value={formData.abogadoActual}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Con quién ingresó */}
        <div>
          <label htmlFor="conQuienIngreso" className="block text-gray-700 mb-1">
            ¿Con quién ingresó?
          </label>
          <input
            type="text"
            name="conQuienIngreso"
            id="conQuienIngreso"
            value={formData.conQuienIngreso}
            onChange={handleChange}
            placeholder="Ej. Esposa (Nombre), hijo(s) (Nombre)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Estado Civil */}
        <div>
          <label htmlFor="estadoCivil" className="block text-gray-700 mb-1">
            ¿Cuál es su estado civil?
          </label>
          <select
            name="estadoCivil"
            id="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="soltero">Soltero(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viudo">Viudo(a)</option>
          </select>
        </div>

        {formData.estadoCivil === "casado" && (
          <div className="sm:col-span-2">
            <label htmlFor="conyugeEEUU" className="block text-gray-700 mb-1">
              Si es casado(a), ¿es con un ciudadano americano o residente
              permanente?
            </label>
            <select
              name="conyugeEEUU"
              id="conyugeEEUU"
              value={formData.conyugeEEUU}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
            >
              <option value="">Seleccione</option>
              <option value="ciudadano">Ciudadano americano</option>
              <option value="residente">Residente permanente</option>
              <option value="otro">Otro / No aplica</option>
            </select>
          </div>
        )}

        {/* Hijos */}
        <div>
          <label htmlFor="hijos" className="block text-gray-700 mb-1">
            ¿Tiene hijos? ¿Qué edades tienen? ¿Dónde nacieron? ¿Dónde están?
          </label>
          <textarea
            name="hijos"
            id="hijos"
            rows={2}
            value={formData.hijos}
            onChange={handleChange}
            placeholder="Ej. 2 hijos: Juan (5 años, nacido en Quito, con padre en EE. UU.), María (3 años, nacida en Los Ángeles)"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Hijos con residencia */}
        <div>
          <label htmlFor="hijosResidencia" className="block text-gray-700 mb-1">
            ¿Tiene hijos residentes o ciudadanos americanos mayores de 21 años?
          </label>
          <select
            name="hijosResidencia"
            id="hijosResidencia"
            value={formData.hijosResidencia}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Familiares Ciudadanos */}
        <div>
          <label
            htmlFor="familiaresCiudadano"
            className="block text-gray-700 mb-1"
          >
            ¿Alguno de sus padres o hermanos es ciudadano americano?
          </label>
          <select
            name="familiaresCiudadano"
            id="familiaresCiudadano"
            value={formData.familiaresCiudadano}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Ingreso legal futuro */}
        <div>
          <label
            htmlFor="ingresoLegalFuturo"
            className="block text-gray-700 mb-1"
          >
            Si el ingreso fue legal y aún está en estatus, ¿tiene una empresa
            interesada en pedirlo?
          </label>
          <select
            name="ingresoLegalFuturo"
            id="ingresoLegalFuturo"
            value={formData.ingresoLegalFuturo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Perdió Trabajos */}
        <div>
          <label htmlFor="perdioTrabajos" className="block text-gray-700 mb-1">
            ¿Ha perdido oportunidades de trabajo por no estar legal?
          </label>
          <select
            name="perdioTrabajos"
            id="perdioTrabajos"
            value={formData.perdioTrabajos}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Trabajo Actual */}
        <div className="sm:col-span-2">
          <label htmlFor="trabajoActual" className="block text-gray-700 mb-1">
            ¿Actualmente en qué trabaja?
          </label>
          <input
            type="text"
            name="trabajoActual"
            id="trabajoActual"
            value={formData.trabajoActual}
            onChange={handleChange}
            placeholder="Ej. Limpieza, construcción, etc."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Registro Penal */}
        <div className="sm:col-span-2">
          <label htmlFor="registroPenal" className="block text-gray-700 mb-1">
            ¿Tiene usted limpio su récord? Cuénteme… ¿qué sucedió?
          </label>
          <textarea
            name="registroPenal"
            id="registroPenal"
            rows={2}
            value={formData.registroPenal}
            onChange={handleChange}
            placeholder="Si ha tenido arrestos o multas, especifíquelos"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Expectativas */}
        <div className="sm:col-span-2">
          <label htmlFor="expectativas" className="block text-gray-700 mb-1">
            ¿Qué expectativas tiene acerca de su estadía dentro de EE. UU.?
          </label>
          <textarea
            name="expectativas"
            id="expectativas"
            rows={2}
            value={formData.expectativas}
            onChange={handleChange}
            placeholder="Ej. Estudiar, reunirme con familia, trabajo permanente, etc."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>

        {/* Motivo de Salida */}
        <div className="sm:col-span-2">
          <label htmlFor="motivoSalida" className="block text-gray-700 mb-1">
            ¿Cuál fue el motivo por el cual decidió salir de su país?
          </label>
          <textarea
            name="motivoSalida"
            id="motivoSalida"
            rows={2}
            value={formData.motivoSalida}
            onChange={handleChange}
            placeholder="Ej. Violencia, persecución política, desempleo..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>
      </div>
    </div>
  );

  // ===== Paso 3: Tópicos Humanitarios =====
  const Paso3 = (
    <div className="space-y-6" key="paso3">
      <div className="flex items-center space-x-2 mb-4">
        <DocumentTextIcon className="h-7 w-7 text-[#E31B23]" />
        <h2 className="text-2xl font-semibold text-[#E31B23]">
          Tópicos Humanitarios
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Víctima Violencia */}
        <div>
          <label
            htmlFor="victimaViolencia"
            className="block text-gray-700 mb-1"
          >
            ¿Ha sido usted víctima de violencia en EE. UU.?
          </label>
          <select
            name="victimaViolencia"
            id="victimaViolencia"
            value={formData.victimaViolencia}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Historia Clínica */}
        <div>
          <label htmlFor="historiaClinica" className="block text-gray-700 mb-1">
            ¿Tiene usted historia clínica y reporte policial?
          </label>
          <select
            name="historiaClinica"
            id="historiaClinica"
            value={formData.historiaClinica}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Miedo a Regresar */}
        <div>
          <label htmlFor="miedoRegresar" className="block text-gray-700 mb-1">
            ¿Tiene miedo de regresar a su país?
          </label>
          <select
            name="miedoRegresar"
            id="miedoRegresar"
            value={formData.miedoRegresar}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Víctimas Familia */}
        <div className="sm:col-span-2">
          <label htmlFor="victimasFamilia" className="block text-gray-700 mb-1">
            ¿Usted, su familia o amigos han sido víctimas de violencia en su
            país?
          </label>
          <select
            name="victimasFamilia"
            id="victimasFamilia"
            value={formData.victimasFamilia}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Ascendencia Indígena */}
        <div>
          <label
            htmlFor="ascendenciaIndigena"
            className="block text-gray-700 mb-1"
          >
            ¿Es de raza indígena o habla dialecto?
          </label>
          <select
            name="ascendenciaIndigena"
            id="ascendenciaIndigena"
            value={formData.ascendenciaIndigena}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Actividad Política/Social */}
        <div className="sm:col-span-2">
          <label
            htmlFor="actividadPolitica"
            className="block text-gray-700 mb-1"
          >
            ¿Participaba en ayuda comunitaria, expresión política o social?
          </label>
          <textarea
            name="actividadPolitica"
            id="actividadPolitica"
            rows={2}
            value={formData.actividadPolitica}
            onChange={handleChange}
            placeholder="Ej. Miembro de grupo político X, activista comunitario..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#E31B23]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 pt-8 pb-16">
          <ProgressBar />

          {/* Renderizar paso actual */}
          {step === 1 && Paso1}
          {step === 2 && Paso2}
          {step === 3 && Paso3}

          {/* Botones de navegación */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center space-x-1 px-4 py-2 rounded-md ${
                step === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700 transition"
              }`}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Atrás</span>
            </button>

            {step < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center space-x-1 px-4 py-2 bg-[#E31B23] text-white rounded-md hover:bg-[#C91B1B] transition"
              >
                <span>Siguiente</span>
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-[#E31B23] text-white rounded-full hover:bg-[#C91B1B] transition shadow-lg"
              >
                <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                Enviar Procesos USA
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Modal de éxito (muestra solo cuando se envía en el paso 3) */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-auto text-center space-y-4">
            <CheckCircleIcon className="h-16 w-16 text-[#E31B23] mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-800">
              ¡Enviado con éxito!
            </h2>
            <p className="text-gray-700">
              Tu formulario de Procesos USA ha sido recibido. Nos pondremos en
              contacto pronto.
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                setStep(1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-4 inline-flex items-center bg-[#E31B23] text-white px-4 py-2 rounded-md hover:bg-[#C91B1B] transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

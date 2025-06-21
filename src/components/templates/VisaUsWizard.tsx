// src/components/templates/VisaUsWizard.tsx
"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import {
  UserIcon,
  IdentificationIcon,
  GlobeAmericasIcon,
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import Select, { SingleValue } from "react-select";
import { Country, State, City } from "country-state-city";

type PaisFecha = { id: number; pais: string; fecha: string };

type FormDataType = {
  // Paso 1: Información personal
  nombres: string;
  correo: string;
  celular: string;
  telefonoFijo: string;
  estadoCivil: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  tipoDocumento: string;
  numeroDocumento: string;
  direccion: string;
  ciudad: string;
  paisResidencia: string;
  facebook: string;
  instagram: string;
  photoFile: File | null;

  // Paso 2: Información del pasaporte
  numeroPasaporte: string;
  lugarEmision: string;
  fechaEmision: string;
  fechaCaducidad: string;
  perdioPasaporte: string;

  // Paso 3: Información del viaje
  fechaPrevioViaje: string;
  duracionEstadia: string;
  ciudadHospedaje: string;
  direccionHospedaje: string;
  telefonoHospedaje: string;
  quienPagara: string;
  acompanantes: string;
  estuvoEnEEUU: string;
  fechasEstadia: string;
  emitidoVisaAnterior: string;
  numeroVisaAnterior: string;
  fechaExpedicionVisa: string;
  negadoVisa: string;
  viajesUltimosCincoAnios: PaisFecha[];

  // Paso 4: Información familiar
  padreNombre: string;
  padreCiudad: string;
  padreFechaNacimiento: string;
  madreNombre: string;
  madreCiudad: string;
  madreFechaNacimiento: string;
  conyugeNombre: string;
  conyugeCiudad: string;
  conyugeFechaNacimiento: string;

  // Paso 5: Información de estudios
  colegioBachillerato: string;
  colegioDireccion: string;
  colegioCiudad: string;
  colegioTelefono: string;
  colegioFechaInicio: string;
  colegioFechaFin: string;
  universidadNombre: string;
  universidadPrograma: string;
  universidadDireccion: string;
  universidadCiudad: string;
  universidadTelefono: string;
  universidadFechaInicio: string;
  universidadFechaFin: string;
  otrosEstudiosNombre: string;
  otrosEstudiosDireccion: string;
  otrosEstudiosCiudad: string;
  otrosEstudiosTelefono: string;
  otrosEstudiosFechaInicio: string;
  otrosEstudiosFechaFin: string;

  // Paso 6: Información laboral
  laboralEmpresaActual: string;
  laboralCargoActual: string;
  laboralDireccionActual: string;
  laboralCiudadActual: string;
  laboralTelefonoActual: string;
  laboralIngresos: string;
  laboralSupervisor: string;
  laboralFechaInicio: string;
  laboralFunciones: string;
  laboralAnteriorEmpresa: string;
  laboralAnteriorCargo: string;
  laboralAnteriorDireccion: string;
  laboralAnteriorCiudad: string;
  laboralAnteriorTelefono: string;
  laboralAnteriorSupervisor: string;
  laboralAnteriorFechaInicio: string;
  laboralAnteriorFechaFin: string;
};

export function VisaUsWizard() {
  const [step, setStep] = useState<number>(1);
  const totalSteps = 6;

  const [formData, setFormData] = useState<FormDataType>({
    nombres: "",
    correo: "",
    celular: "",
    telefonoFijo: "",
    estadoCivil: "",
    fechaNacimiento: "",
    lugarNacimiento: "",
    tipoDocumento: "",
    numeroDocumento: "",
    direccion: "",
    ciudad: "",
    paisResidencia: "",
    facebook: "",
    instagram: "",
    photoFile: null,

    numeroPasaporte: "",
    lugarEmision: "",
    fechaEmision: "",
    fechaCaducidad: "",
    perdioPasaporte: "",

    fechaPrevioViaje: "",
    duracionEstadia: "",
    ciudadHospedaje: "",
    direccionHospedaje: "",
    telefonoHospedaje: "",
    quienPagara: "",
    acompanantes: "",
    estuvoEnEEUU: "",
    fechasEstadia: "",
    emitidoVisaAnterior: "",
    numeroVisaAnterior: "",
    fechaExpedicionVisa: "",
    negadoVisa: "",
    viajesUltimosCincoAnios: [{ id: 1, pais: "", fecha: "" }],

    padreNombre: "",
    padreCiudad: "",
    padreFechaNacimiento: "",
    madreNombre: "",
    madreCiudad: "",
    madreFechaNacimiento: "",
    conyugeNombre: "",
    conyugeCiudad: "",
    conyugeFechaNacimiento: "",

    colegioBachillerato: "",
    colegioDireccion: "",
    colegioCiudad: "",
    colegioTelefono: "",
    colegioFechaInicio: "",
    colegioFechaFin: "",
    universidadNombre: "",
    universidadPrograma: "",
    universidadDireccion: "",
    universidadCiudad: "",
    universidadTelefono: "",
    universidadFechaInicio: "",
    universidadFechaFin: "",
    otrosEstudiosNombre: "",
    otrosEstudiosDireccion: "",
    otrosEstudiosCiudad: "",
    otrosEstudiosTelefono: "",
    otrosEstudiosFechaInicio: "",
    otrosEstudiosFechaFin: "",

    laboralEmpresaActual: "",
    laboralCargoActual: "",
    laboralDireccionActual: "",
    laboralCiudadActual: "",
    laboralTelefonoActual: "",
    laboralIngresos: "",
    laboralSupervisor: "",
    laboralFechaInicio: "",
    laboralFunciones: "",
    laboralAnteriorEmpresa: "",
    laboralAnteriorCargo: "",
    laboralAnteriorDireccion: "",
    laboralAnteriorCiudad: "",
    laboralAnteriorTelefono: "",
    laboralAnteriorSupervisor: "",
    laboralAnteriorFechaInicio: "",
    laboralAnteriorFechaFin: "",
  });

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // Listas de países, estados y ciudades
  const [countryOptions, setCountryOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [stateOptions, setStateOptions] = useState<
    { label: string; value: string }[]
  >([]);
  const [cityOptions, setCityOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const [selectedCountry, setSelectedCountry] =
    useState<SingleValue<{ label: string; value: string }>>(null);
  const [selectedState, setSelectedState] =
    useState<SingleValue<{ label: string; value: string }>>(null);
  const [selectedCity, setSelectedCity] =
    useState<SingleValue<{ label: string; value: string }>>(null);

  // Modal de éxito
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // Obtener lista de países
    const countries = Country.getAllCountries().map((c: any) => ({
      label: c.name,
      value: c.isoCode,
    }));
    setCountryOptions(countries);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Obtener estados del país seleccionado
      const states = State.getStatesOfCountry(selectedCountry.value).map(
        (s: any) => ({
          label: s.name,
          value: s.isoCode,
        })
      );
      setStateOptions(states);
      setSelectedState(null);
      setCityOptions([]);
      setSelectedCity(null);
      setFormData((prev) => ({
        ...prev,
        paisResidencia: selectedCountry.label,
        ciudad: "",
      }));
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState && selectedCountry) {
      // Obtener ciudades dado país y estado
      const cities = City.getCitiesOfState(
        selectedCountry.value,
        selectedState.value
      ).map((c: any) => ({ label: c.name, value: c.name }));
      setCityOptions(cities);
      setSelectedCity(null);
      setFormData((prev) => ({ ...prev, ciudad: "" }));
    }
  }, [selectedState]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, photoFile: file }));
      setPhotoPreview(URL.createObjectURL(file));
    }
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
    console.log("Formulario enviado:", formData);
    setShowSuccessModal(true);
  };

  // ------- Barra de progreso -------
  function ProgressBar() {
    const labels = [
      "Personal",
      "Pasaporte",
      "Viaje",
      "Familiar",
      "Estudios",
      "Laboral",
    ];
    return (
      <div className="mb-8">
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
                        ? "bg-primary"
                        : active
                        ? "bg-accent-red"
                        : "bg-neutral-dark/20"
                    }`}
                  >
                    <span className="text-white font-semibold">{stepNum}</span>
                  </div>
                  <span className="text-xs text-neutral-dark mt-1">
                    {labels[i]}
                  </span>
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mt-4 ${
                      step > i + 1 ? "bg-primary" : "bg-neutral-dark/20"
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

  // ------- Cada “Paso” del Wizard (se mantienen inputs sin animaciones de desmontaje) -------

  const Paso1 = (
    <div className="space-y-6" key="paso1">
      <div className="flex items-center space-x-3 mb-4">
        <UserIcon className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          Información Personal
        </h2>
      </div>

      {/* Fotografía con preview centrada */}
      <div className="flex justify-center mb-6 bg-white rounded-xl shadow-lg p-4">
        <div className="text-center">
          <label className="block text-neutral-dark mb-1">
            Foto Reciente (Menor a 6 meses){" "}
            <span className="text-accent-red">*</span>
          </label>
          <input
            type="file"
            accept=".jpg,.png,.tiff"
            onChange={handlePhotoChange}
            className="border border-neutral-dark/30 rounded-md p-2 focus:ring-2 focus:ring-primary"
          />
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Previsualización"
              className="mt-4 h-32 w-32 object-cover rounded-md shadow-md mx-auto"
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nombres y Apellidos */}
        <div>
          <label htmlFor="nombres" className="block text-neutral-dark mb-1">
            Nombres y Apellidos <span className="text-accent-red">*</span>
          </label>
          <input
            type="text"
            name="nombres"
            id="nombres"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="Tu nombre completo"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Correo Electrónico */}
        <div>
          <label htmlFor="correo" className="block text-neutral-dark mb-1">
            Correo Electrónico <span className="text-accent-red">*</span>
          </label>
          <input
            type="email"
            name="correo"
            id="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="tucorreo@ejemplo.com"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Celular */}
        <div>
          <label htmlFor="celular" className="block text-neutral-dark mb-1">
            Celular
          </label>
          <input
            type="tel"
            name="celular"
            id="celular"
            value={formData.celular}
            onChange={handleChange}
            placeholder="+1 555 123 4567"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Teléfono Fijo */}
        <div>
          <label
            htmlFor="telefonoFijo"
            className="block text-neutral-dark mb-1"
          >
            Teléfono Fijo
          </label>
          <input
            type="tel"
            name="telefonoFijo"
            id="telefonoFijo"
            value={formData.telefonoFijo}
            onChange={handleChange}
            placeholder="+593 2 123 4567"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Estado Civil */}
        <div>
          <label htmlFor="estadoCivil" className="block text-neutral-dark mb-1">
            Estado Civil
          </label>
          <select
            name="estadoCivil"
            id="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          >
            <option value="">Seleccione</option>
            <option value="soltero">Soltero(a)</option>
            <option value="casado">Casado(a)</option>
            <option value="divorciado">Divorciado(a)</option>
            <option value="viudo">Viudo(a)</option>
          </select>
        </div>

        {/* Fecha de Nacimiento */}
        <div>
          <label
            htmlFor="fechaNacimiento"
            className="block text-neutral-dark mb-1"
          >
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            id="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Lugar de Nacimiento */}
        <div>
          <label
            htmlFor="lugarNacimiento"
            className="block text-neutral-dark mb-1"
          >
            Lugar de Nacimiento
          </label>
          <input
            type="text"
            name="lugarNacimiento"
            id="lugarNacimiento"
            value={formData.lugarNacimiento}
            onChange={handleChange}
            placeholder="Ciudad, País"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Tipo de Documento */}
        <div>
          <label
            htmlFor="tipoDocumento"
            className="block text-neutral-dark mb-1"
          >
            Tipo de Documento
          </label>
          <input
            type="text"
            name="tipoDocumento"
            id="tipoDocumento"
            value={formData.tipoDocumento}
            onChange={handleChange}
            placeholder="Ej. Cédula, Pasaporte"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Número de Documento */}
        <div>
          <label
            htmlFor="numeroDocumento"
            className="block text-neutral-dark mb-1"
          >
            Número de Documento
          </label>
          <input
            type="text"
            name="numeroDocumento"
            id="numeroDocumento"
            value={formData.numeroDocumento}
            onChange={handleChange}
            placeholder="1234567890"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* País de Residencia */}
        <div>
          <label
            htmlFor="paisResidencia"
            className="block text-neutral-dark mb-1"
          >
            País de Residencia
          </label>
          <Select
            options={countryOptions}
            value={selectedCountry}
            onChange={(option) => setSelectedCountry(option as any)}
            placeholder="Selecciona país..."
            className="z-10"
          />
        </div>

        {/* Estado / Provincia */}
        {stateOptions.length > 0 && (
          <div>
            <label htmlFor="estado" className="block text-neutral-dark mb-1">
              Estado / Provincia
            </label>
            <Select
              options={stateOptions}
              value={selectedState}
              onChange={(option) => setSelectedState(option as any)}
              placeholder="Selecciona estado..."
              className="z-10"
            />
          </div>
        )}

        {/* Ciudad */}
        {cityOptions.length > 0 && (
          <div>
            <label htmlFor="ciudad" className="block text-neutral-dark mb-1">
              Ciudad
            </label>
            <Select
              options={cityOptions}
              value={selectedCity}
              onChange={(option) => {
                setSelectedCity(option as any);
                setFormData((prev) => ({
                  ...prev,
                  ciudad: (option as any).value,
                }));
              }}
              placeholder="Selecciona ciudad..."
              className="z-10"
            />
          </div>
        )}

        {/* Dirección */}
        <div>
          <label htmlFor="direccion" className="block text-neutral-dark mb-1">
            Dirección
          </label>
          <input
            type="text"
            name="direccion"
            id="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Calle, número, apto., etc."
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Facebook */}
        <div>
          <label htmlFor="facebook" className="block text-neutral-dark mb-1">
            Facebook
          </label>
          <input
            type="text"
            name="facebook"
            id="facebook"
            value={formData.facebook}
            onChange={handleChange}
            placeholder="URL de tu perfil"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Instagram */}
        <div>
          <label htmlFor="instagram" className="block text-neutral-dark mb-1">
            Instagram
          </label>
          <input
            type="text"
            name="instagram"
            id="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="@tuusuario"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );

  const Paso2 = (
    <div className="space-y-6" key="paso2">
      <div className="flex items-center space-x-3 mb-4">
        <IdentificationIcon className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          Información del Pasaporte
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="numeroPasaporte"
            className="block text-neutral-dark mb-1"
          >
            Número de Pasaporte
          </label>
          <input
            type="text"
            name="numeroPasaporte"
            id="numeroPasaporte"
            value={formData.numeroPasaporte}
            onChange={handleChange}
            placeholder="ABC123456"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="lugarEmision"
            className="block text-neutral-dark mb-1"
          >
            País y Ciudad de Emisión
          </label>
          <input
            type="text"
            name="lugarEmision"
            id="lugarEmision"
            value={formData.lugarEmision}
            onChange={handleChange}
            placeholder="Ciudad, País"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="fechaEmision"
            className="block text-neutral-dark mb-1"
          >
            Fecha de Emisión
          </label>
          <input
            type="date"
            name="fechaEmision"
            id="fechaEmision"
            value={formData.fechaEmision}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="fechaCaducidad"
            className="block text-neutral-dark mb-1"
          >
            Fecha de Caducidad
          </label>
          <input
            type="date"
            name="fechaCaducidad"
            id="fechaCaducidad"
            value={formData.fechaCaducidad}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="perdioPasaporte"
            className="block text-neutral-dark mb-1"
          >
            ¿Ha perdido alguna vez su pasaporte?
          </label>
          <select
            name="perdioPasaporte"
            id="perdioPasaporte"
            value={formData.perdioPasaporte}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          >
            <option value="">Seleccione</option>
            <option value="sí">Sí</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
    </div>
  );

  const Paso3 = (
    <div className="space-y-6" key="paso3">
      <div className="flex items-center space-x-3 mb-4">
        <GlobeAmericasIcon className="h-8 w-8 text-primary" />
        <h2 className="text-2xl font-semibold text-primary">
          Información del Viaje
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="fechaPrevioViaje"
            className="block text-neutral-dark mb-1"
          >
            Fecha Previa del Viaje
          </label>
          <input
            type="date"
            name="fechaPrevioViaje"
            id="fechaPrevioViaje"
            value={formData.fechaPrevioViaje}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="duracionEstadia"
            className="block text-neutral-dark mb-1"
          >
            Duración de estadía (días)
          </label>
          <input
            type="number"
            name="duracionEstadia"
            id="duracionEstadia"
            value={formData.duracionEstadia}
            onChange={handleChange}
            placeholder="Ej. 7"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="ciudadHospedaje"
            className="block text-neutral-dark mb-1"
          >
            Ciudad donde se hospedará
          </label>
          <input
            type="text"
            name="ciudadHospedaje"
            id="ciudadHospedaje"
            value={formData.ciudadHospedaje}
            onChange={handleChange}
            placeholder="Ciudad de hotel o familiar"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="direccionHospedaje"
            className="block text-neutral-dark mb-1"
          >
            Dirección del hospedaje
          </label>
          <input
            type="text"
            name="direccionHospedaje"
            id="direccionHospedaje"
            value={formData.direccionHospedaje}
            onChange={handleChange}
            placeholder="Calle, número, apto."
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="telefonoHospedaje"
            className="block text-neutral-dark mb-1"
          >
            Teléfono del hospedaje
          </label>
          <input
            type="tel"
            name="telefonoHospedaje"
            id="telefonoHospedaje"
            value={formData.telefonoHospedaje}
            onChange={handleChange}
            placeholder="+1 555 123 0000"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quienPagara" className="block text-neutral-dark mb-1">
            ¿Quién pagará el viaje?
          </label>
          <input
            type="text"
            name="quienPagara"
            id="quienPagara"
            value={formData.quienPagara}
            onChange={handleChange}
            placeholder="Ej. Yo mismo / Empresa / Familiar"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="acompanantes"
            className="block text-neutral-dark mb-1"
          >
            Acompañantes y parentesco (si aplica)
          </label>
          <textarea
            name="acompanantes"
            id="acompanantes"
            value={formData.acompanantes}
            onChange={handleChange}
            rows={2}
            placeholder="Ej. Juan Pérez (hermano), María López (esposa)"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Lista de viajes últimos 5 años */}
      <ViajesUltimosCincoAnios
        viajes={formData.viajesUltimosCincoAnios}
        onAdd={() =>
          setFormData((prev) => ({
            ...prev,
            viajesUltimosCincoAnios: [
              ...prev.viajesUltimosCincoAnios,
              { id: Date.now(), pais: "", fecha: "" },
            ],
          }))
        }
        onRemove={(id) =>
          setFormData((prev) => ({
            ...prev,
            viajesUltimosCincoAnios: prev.viajesUltimosCincoAnios.filter(
              (v) => v.id !== id
            ),
          }))
        }
        onUpdate={(id, field, value) =>
          setFormData((prev) => ({
            ...prev,
            viajesUltimosCincoAnios: prev.viajesUltimosCincoAnios.map((v) =>
              v.id === id ? { ...v, [field]: value } : v
            ),
          }))
        }
      />
    </div>
  );

  const Paso4 = (
    <div className="space-y-6" key="paso4">
      <div className="flex items-center space-x-3 mb-4">
        <HomeIcon className="h-8 w-8 text-accent-gold" />
        <h2 className="text-2xl font-semibold text-accent-gold">
          Información Familiar
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Padre */}
        <div>
          <label htmlFor="padreNombre" className="block text-neutral-dark mb-1">
            Nombre Padre
          </label>
          <input
            type="text"
            name="padreNombre"
            id="padreNombre"
            value={formData.padreNombre}
            onChange={handleChange}
            placeholder="Nombres y Apellidos Padre"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="padreCiudad" className="block text-neutral-dark mb-1">
            Ciudad Nacimiento Padre
          </label>
          <input
            type="text"
            name="padreCiudad"
            id="padreCiudad"
            value={formData.padreCiudad}
            onChange={handleChange}
            placeholder="Ciudad"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="padreFechaNacimiento"
            className="block text-neutral-dark mb-1"
          >
            Fecha Nacimiento Padre
          </label>
          <input
            type="date"
            name="padreFechaNacimiento"
            id="padreFechaNacimiento"
            value={formData.padreFechaNacimiento}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Madre */}
        <div>
          <label htmlFor="madreNombre" className="block text-neutral-dark mb-1">
            Nombre Madre
          </label>
          <input
            type="text"
            name="madreNombre"
            id="madreNombre"
            value={formData.madreNombre}
            onChange={handleChange}
            placeholder="Nombres y Apellidos Madre"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="madreCiudad" className="block text-neutral-dark mb-1">
            Ciudad Nacimiento Madre
          </label>
          <input
            type="text"
            name="madreCiudad"
            id="madreCiudad"
            value={formData.madreCiudad}
            onChange={handleChange}
            placeholder="Ciudad"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="madreFechaNacimiento"
            className="block text-neutral-dark mb-1"
          >
            Fecha Nacimiento Madre
          </label>
          <input
            type="date"
            name="madreFechaNacimiento"
            id="madreFechaNacimiento"
            value={formData.madreFechaNacimiento}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Cónyuge */}
        <div>
          <label
            htmlFor="conyugeNombre"
            className="block text-neutral-dark mb-1"
          >
            Nombre Cónyuge
          </label>
          <input
            type="text"
            name="conyugeNombre"
            id="conyugeNombre"
            value={formData.conyugeNombre}
            onChange={handleChange}
            placeholder="Nombres y Apellidos Cónyuge"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="conyugeCiudad"
            className="block text-neutral-dark mb-1"
          >
            Ciudad Nacimiento Cónyuge
          </label>
          <input
            type="text"
            name="conyugeCiudad"
            id="conyugeCiudad"
            value={formData.conyugeCiudad}
            onChange={handleChange}
            placeholder="Ciudad"
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="conyugeFechaNacimiento"
            className="block text-neutral-dark mb-1"
          >
            Fecha Nacimiento Cónyuge
          </label>
          <input
            type="date"
            name="conyugeFechaNacimiento"
            id="conyugeFechaNacimiento"
            value={formData.conyugeFechaNacimiento}
            onChange={handleChange}
            className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );

  const Paso5 = (
    <div className="space-y-6" key="paso5">
      <div className="flex items-center space-x-3 mb-4">
        <AcademicCapIcon className="h-8 w-8 text-accent-gold" />
        <h2 className="text-2xl font-semibold text-accent-gold">
          Información de Estudios
        </h2>
      </div>

      {/* Bachillerato */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
          Bachillerato
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="colegioBachillerato"
              className="block text-neutral-dark mb-1"
            >
              Nombre del colegio
            </label>
            <input
              type="text"
              name="colegioBachillerato"
              id="colegioBachillerato"
              value={formData.colegioBachillerato}
              onChange={handleChange}
              placeholder="Instituto / Colegio"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="colegioDireccion"
              className="block text-neutral-dark mb-1"
            >
              Dirección
            </label>
            <input
              type="text"
              name="colegioDireccion"
              id="colegioDireccion"
              value={formData.colegioDireccion}
              onChange={handleChange}
              placeholder="Calle, número"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="colegioCiudad"
              className="block text-neutral-dark mb-1"
            >
              Ciudad
            </label>
            <input
              type="text"
              name="colegioCiudad"
              id="colegioCiudad"
              value={formData.colegioCiudad}
              onChange={handleChange}
              placeholder="Ciudad del colegio"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="colegioTelefono"
              className="block text-neutral-dark mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              name="colegioTelefono"
              id="colegioTelefono"
              value={formData.colegioTelefono}
              onChange={handleChange}
              placeholder="+1 555 123 0000"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="colegioFechaInicio"
              className="block text-neutral-dark mb-1"
            >
              Fecha inicio
            </label>
            <input
              type="month"
              name="colegioFechaInicio"
              id="colegioFechaInicio"
              value={formData.colegioFechaInicio}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="colegioFechaFin"
              className="block text-neutral-dark mb-1"
            >
              Fecha fin
            </label>
            <input
              type="month"
              name="colegioFechaFin"
              id="colegioFechaFin"
              value={formData.colegioFechaFin}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Universidad */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
          Universidad / Institución
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="universidadNombre"
              className="block text-neutral-dark mb-1"
            >
              Nombre de la institución
            </label>
            <input
              type="text"
              name="universidadNombre"
              id="universidadNombre"
              value={formData.universidadNombre}
              onChange={handleChange}
              placeholder="Universidad / Instituto"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="universidadPrograma"
              className="block text-neutral-dark mb-1"
            >
              Programa estudiado
            </label>
            <input
              type="text"
              name="universidadPrograma"
              id="universidadPrograma"
              value={formData.universidadPrograma}
              onChange={handleChange}
              placeholder="Carrera / Diplomado"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="universidadDireccion"
              className="block text-neutral-dark mb-1"
            >
              Dirección
            </label>
            <input
              type="text"
              name="universidadDireccion"
              id="universidadDireccion"
              value={formData.universidadDireccion}
              onChange={handleChange}
              placeholder="Calle, número"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="universidadCiudad"
              className="block text-neutral-dark mb-1"
            >
              Ciudad
            </label>
            <input
              type="text"
              name="universidadCiudad"
              id="universidadCiudad"
              value={formData.universidadCiudad}
              onChange={handleChange}
              placeholder="Ciudad de la institución"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="universidadTelefono"
              className="block text-neutral-dark mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              name="universidadTelefono"
              id="universidadTelefono"
              value={formData.universidadTelefono}
              onChange={handleChange}
              placeholder="+1 555 123 0000"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="universidadFechaInicio"
              className="block text-neutral-dark mb-1"
            >
              Fecha inicio
            </label>
            <input
              type="month"
              name="universidadFechaInicio"
              id="universidadFechaInicio"
              value={formData.universidadFechaInicio}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="universidadFechaFin"
              className="block text-neutral-dark mb-1"
            >
              Fecha fin
            </label>
            <input
              type="month"
              name="universidadFechaFin"
              id="universidadFechaFin"
              value={formData.universidadFechaFin}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Otros Estudios */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
          Otros Estudios (si aplica)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="otrosEstudiosNombre"
              className="block text-neutral-dark mb-1"
            >
              Nombre de la institución
            </label>
            <input
              type="text"
              name="otrosEstudiosNombre"
              id="otrosEstudiosNombre"
              value={formData.otrosEstudiosNombre}
              onChange={handleChange}
              placeholder="Institución"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="otrosEstudiosDireccion"
              className="block text-neutral-dark mb-1"
            >
              Dirección
            </label>
            <input
              type="text"
              name="otrosEstudiosDireccion"
              id="otrosEstudiosDireccion"
              value={formData.otrosEstudiosDireccion}
              onChange={handleChange}
              placeholder="Calle, número"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="otrosEstudiosCiudad"
              className="block text-neutral-dark mb-1"
            >
              Ciudad
            </label>
            <input
              type="text"
              name="otrosEstudiosCiudad"
              id="otrosEstudiosCiudad"
              value={formData.otrosEstudiosCiudad}
              onChange={handleChange}
              placeholder="Ciudad"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="otrosEstudiosTelefono"
              className="block text-neutral-dark mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              name="otrosEstudiosTelefono"
              id="otrosEstudiosTelefono"
              value={formData.otrosEstudiosTelefono}
              onChange={handleChange}
              placeholder="+1 555 123 0000"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="otrosEstudiosFechaInicio"
              className="block text-neutral-dark mb-1"
            >
              Fecha inicio
            </label>
            <input
              type="month"
              name="otrosEstudiosFechaInicio"
              id="otrosEstudiosFechaInicio"
              value={formData.otrosEstudiosFechaInicio}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="otrosEstudiosFechaFin"
              className="block text-neutral-dark mb-1"
            >
              Fecha fin
            </label>
            <input
              type="month"
              name="otrosEstudiosFechaFin"
              id="otrosEstudiosFechaFin"
              value={formData.otrosEstudiosFechaFin}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const Paso6 = (
    <div className="space-y-6" key="paso6">
      <div className="flex items-center space-x-3 mb-4">
        <BriefcaseIcon className="h-8 w-8 text-accent-red" />
        <h2 className="text-2xl font-semibold text-accent-red">
          Información Laboral
        </h2>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
          Empleo Actual
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="laboralEmpresaActual"
              className="block text-neutral-dark mb-1"
            >
              Razón Social
            </label>
            <input
              type="text"
              name="laboralEmpresaActual"
              id="laboralEmpresaActual"
              value={formData.laboralEmpresaActual}
              onChange={handleChange}
              placeholder="Nombre de la empresa"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralCargoActual"
              className="block text-neutral-dark mb-1"
            >
              Cargo
            </label>
            <input
              type="text"
              name="laboralCargoActual"
              id="laboralCargoActual"
              value={formData.laboralCargoActual}
              onChange={handleChange}
              placeholder="Tu puesto"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralDireccionActual"
              className="block text-neutral-dark mb-1"
            >
              Dirección
            </label>
            <input
              type="text"
              name="laboralDireccionActual"
              id="laboralDireccionActual"
              value={formData.laboralDireccionActual}
              onChange={handleChange}
              placeholder="Calle, número"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralCiudadActual"
              className="block text-neutral-dark mb-1"
            >
              Ciudad
            </label>
            <input
              type="text"
              name="laboralCiudadActual"
              id="laboralCiudadActual"
              value={formData.laboralCiudadActual}
              onChange={handleChange}
              placeholder="Ciudad"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralTelefonoActual"
              className="block text-neutral-dark mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              name="laboralTelefonoActual"
              id="laboralTelefonoActual"
              value={formData.laboralTelefonoActual}
              onChange={handleChange}
              placeholder="+1 555 123 0000"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralIngresos"
              className="block text-neutral-dark mb-1"
            >
              Ingresos mensuales
            </label>
            <input
              type="text"
              name="laboralIngresos"
              id="laboralIngresos"
              value={formData.laboralIngresos}
              onChange={handleChange}
              placeholder="Ej. 1500 USD"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralSupervisor"
              className="block text-neutral-dark mb-1"
            >
              Supervisor / Jefe inmediato
            </label>
            <input
              type="text"
              name="laboralSupervisor"
              id="laboralSupervisor"
              value={formData.laboralSupervisor}
              onChange={handleChange}
              placeholder="Nombre completo"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralFechaInicio"
              className="block text-neutral-dark mb-1"
            >
              Fecha de inicio
            </label>
            <input
              type="date"
              name="laboralFechaInicio"
              id="laboralFechaInicio"
              value={formData.laboralFechaInicio}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="laboralFunciones"
              className="block text-neutral-dark mb-1"
            >
              Funciones actuales
            </label>
            <textarea
              name="laboralFunciones"
              id="laboralFunciones"
              value={formData.laboralFunciones}
              onChange={handleChange}
              rows={2}
              placeholder="Describe brevemente tus tareas"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Empleo Anterior (opcional) */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
          Empleo Anterior (si aplica)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="laboralAnteriorEmpresa"
              className="block text-neutral-dark mb-1"
            >
              Razón Social
            </label>
            <input
              type="text"
              name="laboralAnteriorEmpresa"
              id="laboralAnteriorEmpresa"
              value={formData.laboralAnteriorEmpresa}
              onChange={handleChange}
              placeholder="Nombre de la empresa anterior"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralAnteriorCargo"
              className="block text-neutral-dark mb-1"
            >
              Cargo
            </label>
            <input
              type="text"
              name="laboralAnteriorCargo"
              id="laboralAnteriorCargo"
              value={formData.laboralAnteriorCargo}
              onChange={handleChange}
              placeholder="Puesto anterior"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralAnteriorDireccion"
              className="block text-neutral-dark mb-1"
            >
              Dirección
            </label>
            <input
              type="text"
              name="laboralAnteriorDireccion"
              id="laboralAnteriorDireccion"
              value={formData.laboralAnteriorDireccion}
              onChange={handleChange}
              placeholder="Calle, número"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralAnteriorCiudad"
              className="block text-neutral-dark mb-1"
            >
              Ciudad
            </label>
            <input
              type="text"
              name="laboralAnteriorCiudad"
              id="laboralAnteriorCiudad"
              value={formData.laboralAnteriorCiudad}
              onChange={handleChange}
              placeholder="Ciudad"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralAnteriorTelefono"
              className="block text-neutral-dark mb-1"
            >
              Teléfono
            </label>
            <input
              type="tel"
              name="laboralAnteriorTelefono"
              id="laboralAnteriorTelefono"
              value={formData.laboralAnteriorTelefono}
              onChange={handleChange}
              placeholder="+1 555 123 0000"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralAnteriorSupervisor"
              className="block text-neutral-dark mb-1"
            >
              Supervisor / Jefe inmediato
            </label>
            <input
              type="text"
              name="laboralAnteriorSupervisor"
              id="laboralAnteriorSupervisor"
              value={formData.laboralAnteriorSupervisor}
              onChange={handleChange}
              placeholder="Nombre completo"
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralAnteriorFechaInicio"
              className="block text-neutral-dark mb-1"
            >
              Fecha inicio
            </label>
            <input
              type="date"
              name="laboralAnteriorFechaInicio"
              id="laboralAnteriorFechaInicio"
              value={formData.laboralAnteriorFechaInicio}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="laboralAnteriorFechaFin"
              className="block text-neutral-dark mb-1"
            >
              Fecha fin
            </label>
            <input
              type="date"
              name="laboralAnteriorFechaFin"
              id="laboralAnteriorFechaFin"
              value={formData.laboralAnteriorFechaFin}
              onChange={handleChange}
              className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Componente para lista dinámica de viajes
  function ViajesUltimosCincoAnios({
    viajes,
    onAdd,
    onRemove,
    onUpdate,
  }: {
    viajes: PaisFecha[];
    onAdd: () => void;
    onRemove: (id: number) => void;
    onUpdate: (id: number, field: keyof PaisFecha, value: string) => void;
  }) {
    return (
      <div className="mt-6 space-y-4">
        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
          Viajes en últimos 5 años
        </h3>
        {viajes.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end"
          >
            <div className="sm:col-span-1">
              <label
                htmlFor={`pais-${item.id}`}
                className="block text-neutral-dark mb-1"
              >
                País
              </label>
              <input
                type="text"
                id={`pais-${item.id}`}
                value={item.pais}
                onChange={(e) => onUpdate(item.id, "pais", e.target.value)}
                placeholder="Nombre del país"
                className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor={`fecha-${item.id}`}
                className="block text-neutral-dark mb-1"
              >
                Fecha (MM/AAAA)
              </label>
              <input
                type="month"
                id={`fecha-${item.id}`}
                value={item.fecha}
                onChange={(e) => onUpdate(item.id, "fecha", e.target.value)}
                className="w-full border border-neutral-dark/30 rounded-md px-3 py-2 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="sm:col-span-1 flex space-x-2">
              <button
                type="button"
                onClick={() => onRemove(item.id)}
                className="bg-neutral-dark/20 hover:bg-neutral-dark/40 text-neutral-dark rounded-md px-3 py-2"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={onAdd}
          className="mt-2 inline-flex items-center bg-accent-gold text-white px-4 py-2 rounded-md hover:bg-accent-gold/90 transition"
        >
          Agregar otro viaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-light">
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-16">
        {/* Barra de progreso */}
        <ProgressBar />

        {/* Contenido del paso actual */}
        {step === 1 && Paso1}
        {step === 2 && Paso2}
        {step === 3 && Paso3}
        {step === 4 && Paso4}
        {step === 5 && Paso5}
        {step === 6 && Paso6}

        {/* Botones de navegación */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center space-x-1 px-4 py-2 rounded-md ${
              step === 1
                ? "bg-neutral-dark/20 text-neutral-dark/50 cursor-not-allowed"
                : "bg-neutral-dark text-white hover:bg-neutral-dark/80 transition"
            }`}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>Atrás</span>
          </button>

          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center space-x-1 px-4 py-2 bg-accent-red text-white rounded-md hover:bg-accent-coral transition"
            >
              <span>Siguiente</span>
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          ) : (
            // SOLO en step === 6 aparece este botón de "Enviar"
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-accent-red text-white rounded-full hover:bg-accent-coral transition shadow-lg"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2" />
              Enviar Solicitud USA
            </button>
          )}
        </div>
      </div>

      {/* Modal de éxito SOLO tras enviar (step === 6 y submit) */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto text-center space-y-4">
            <CheckCircleIcon className="h-16 w-16 text-accent-red mx-auto" />
            <h2 className="text-2xl font-semibold text-neutral-dark">
              ¡Formulario enviado exitosamente!
            </h2>
            <p className="text-neutral-dark">
              Gracias por completar tu solicitud. Nos pondremos en contacto
              pronto.
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
                setStep(1);
              }}
              className="mt-4 inline-flex items-center bg-accent-red text-white px-6 py-2 rounded-md hover:bg-accent-coral transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

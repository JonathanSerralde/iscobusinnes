'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, Handshake, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function VinculacionForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    organizacion: '',
    cargo: '',
    email: '',
    telefono: '',
    tipoOrganizacion: 'Empresa',
    areaInteres: 'Capacitación empresarial',
    descripcion: '',
    aceptaPrivacidad: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaPrivacidad) {
      alert('Debes aceptar el aviso de privacidad para continuar.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200/90 shadow-xl text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-amber-50 text-[#d97706] border border-amber-200 rounded-full flex items-center justify-center mx-auto mb-5 shadow-2xs">
          <Handshake className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
          ¡Propuesta de vinculación recibida con éxito!
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          Gracias por acercarte, <strong>{formData.nombre}</strong>. Hemos registrado con agrado el interés de{' '}
          <strong className="text-slate-900">"{formData.organizacion}"</strong> en el ámbito de{' '}
          <strong className="text-[#d97706]">{formData.areaInteres}</strong>. Nuestro equipo de Vinculación Institucional revisará tu planteamiento para coordinar una primera reunión de trabajo constructiva.
        </p>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs text-slate-600 mb-6 text-left leading-relaxed">
          <strong className="text-slate-900 block mb-1">Aviso de transparencia y certeza:</strong>
          El registro de esta propuesta es un paso inicial de exploración mutua y no genera compromisos contractuales vinculantes hasta la suscripción voluntaria y formal de convenios o acuerdos de colaboración específicos.
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              nombre: '',
              organizacion: '',
              cargo: '',
              email: '',
              telefono: '',
              tipoOrganizacion: 'Empresa',
              areaInteres: 'Capacitación empresarial',
              descripcion: '',
              aceptaPrivacidad: false,
            });
          }}
          className="btn-secondary text-sm cursor-pointer"
        >
          Enviar otra propuesta
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 border border-slate-200/90 shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#d97706] mb-2">
        <Building2 className="w-4 h-4 text-[#d97706]" />
        Mesa de Vinculación Institucional
      </div>
      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
        Presenta tu propuesta o proyecto de colaboración
      </h3>
      <p className="text-sm text-slate-600 mb-8 leading-relaxed">
        Cuéntanos sobre tu organización, tus necesidades operativas o académicas y los objetivos de bienestar colectivo que deseas alcanzar junto con ISCOBusiness.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-nombre">
              Nombre y apellidos *
            </label>
            <input
              id="v-nombre"
              type="text"
              required
              placeholder="Ej. Mtra. Sofía Morales Ramos"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-organizacion">
              Organización o Razón Social *
            </label>
            <input
              id="v-organizacion"
              type="text"
              required
              placeholder="Ej. Corporativo Industrial / Universidad / OSC"
              value={formData.organizacion}
              onChange={(e) => setFormData({ ...formData, organizacion: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-cargo">
              Cargo o puesto institucional *
            </label>
            <input
              id="v-cargo"
              type="text"
              required
              placeholder="Ej. Directora de Vinculación / RH"
              value={formData.cargo}
              onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-email">
              Correo institucional *
            </label>
            <input
              id="v-email"
              type="email"
              required
              placeholder="contacto@organizacion.org.mx"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-tel">
              Teléfono de contacto (10 dígitos) *
            </label>
            <input
              id="v-tel"
              type="tel"
              required
              maxLength={10}
              placeholder="Ej. 222 123 4567"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-tipo">
              Tipo de entidad u organización *
            </label>
            <select
              id="v-tipo"
              value={formData.tipoOrganizacion}
              onChange={(e) => setFormData({ ...formData, tipoOrganizacion: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900"
            >
              <option value="Empresa">Empresa privada / Sector productivo</option>
              <option value="Institución educativa">Institución educativa (Superior / Media Superior)</option>
              <option value="Gobierno">Sector público / Dependencia gubernamental</option>
              <option value="OSC">Organización de la Sociedad Civil (OSC / A.C.)</option>
              <option value="Especialista">Especialista / Consultor independiente</option>
              <option value="Organización internacional">Organismo internacional / Cooperación bilateral</option>
              <option value="Otro">Otro tipo de entidad</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-area">
              Área de interés principal *
            </label>
            <select
              id="v-area"
              value={formData.areaInteres}
              onChange={(e) => setFormData({ ...formData, areaInteres: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900"
            >
              <option value="Capacitación empresarial">Capacitación empresarial a la medida (In-Company)</option>
              <option value="Certificación de competencias">Certificación de competencias laborales (ECE760-26)</option>
              <option value="Centro de Evaluación">Integrarse como Centro de Evaluación a la Red</option>
              <option value="Educación Continua">Cursos, talleres o diplomados conjuntos</option>
              <option value="Bachillerato para colaboradores">Bachillerato modular para colaboradores</option>
              <option value="Proyectos sociales">Proyectos sociales, comunitarios o de inclusión</option>
              <option value="Convenio">Convenio marco de colaboración institucional</option>
              <option value="Colaboración docente">Colaboración como docente o evaluador acreditado</option>
              <option value="Otro">Otro requerimiento específico</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="v-desc">
            Descripción de la propuesta o requerimiento institucional *
          </label>
          <textarea
            id="v-desc"
            required
            rows={3}
            placeholder="Describe brevemente el alcance del proyecto, número estimado de personas a capacitar o evaluar, cronograma tentativo o meta de impacto..."
            value={formData.descripcion}
            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:border-transparent text-slate-900 placeholder:text-gray-400"
          />
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.aceptaPrivacidad}
              onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
              className="mt-1 rounded border-gray-300 text-[#d97706] focus:ring-[#d97706]"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              He leído y acepto el{' '}
              <a href="/transparencia#arco" className="text-[#d97706] underline hover:text-amber-800">
                Aviso de Privacidad
              </a>{' '}
              institucional para el tratamiento responsable y confidencial de datos corporativos y personales.
            </span>
          </label>
        </div>

        {/* Microcopy de certeza y transparencia */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2.5 text-slate-600 text-xs leading-relaxed">
          <AlertCircle className="w-4 h-4 shrink-0 text-slate-500 mt-0.5" />
          <span>
            Nuestro equipo revisará tu planteamiento con discreción y profesionalismo. El envío de una propuesta no constituye aceptación tácita ni relación contractual formal hasta la firma de los instrumentos legales respectivos.
          </span>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className={cn(
            'btn-gold w-full py-3.5 text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50'
          )}
        >
          {status === 'submitting' ? (
            <span>Enviando propuesta...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Enviar propuesta de vinculación</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

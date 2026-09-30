'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tema: 'Centro de Asesoría',
    perfil: 'Persona interesada',
    mensaje: '',
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
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-emerald-200/90 shadow-2xs text-center border-t-4 border-t-emerald-500">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-200 flex items-center justify-center mx-auto mb-4 shadow-2xs">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <span className="font-mono text-[11px] font-semibold uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 inline-block mb-2">
          SOLICITUD REGISTRADA CON ÉXITO
        </span>
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2 tracking-tight">
          ¡Gracias por comunicarte con nosotros!
        </h3>
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 max-w-md mx-auto">
          Estimado/a <strong>{formData.nombre}</strong>, hemos recibido tu consulta sobre{' '}
          <strong className="text-slate-900">"{formData.tema}"</strong>. Un coordinador de orientación institucional revisará tu mensaje y se pondrá en contacto contigo en un plazo no mayor a 24 horas hábiles.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              nombre: '',
              email: '',
              telefono: '',
              tema: 'Centro de Asesoría',
              perfil: 'Persona interesada',
              mensaje: '',
              aceptaPrivacidad: false,
            });
          }}
          className="btn-secondary text-xs py-2.5 px-6 cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="c-nombre">
            Nombre y apellidos *
          </label>
          <input
            id="c-nombre"
            type="text"
            required
            placeholder="Ej. Ana Laura Morales Ramos"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#075fba] focus:border-transparent text-slate-900 placeholder:text-slate-400 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="c-email">
            Correo electrónico institucional o personal *
          </label>
          <input
            id="c-email"
            type="email"
            required
            placeholder="correo@ejemplo.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#075fba] focus:border-transparent text-slate-900 placeholder:text-slate-400 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="c-tel">
            Teléfono o WhatsApp (10 dígitos) *
          </label>
          <input
            id="c-tel"
            type="tel"
            required
            maxLength={10}
            placeholder="Ej. 222 123 4567"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#075fba] focus:border-transparent text-slate-900 placeholder:text-slate-400 bg-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="c-perfil">
            Perfil de atención *
          </label>
          <select
            id="c-perfil"
            value={formData.perfil}
            onChange={(e) => setFormData({ ...formData, perfil: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#075fba] focus:border-transparent text-slate-900"
          >
            <option value="Persona interesada">Persona interesada / Estudiante</option>
            <option value="Trabajador">Trabajador que desea certificar su oficio</option>
            <option value="Docente">Docente o profesionista en ejercicio</option>
            <option value="Empresa">Representante de empresa o centro de trabajo</option>
            <option value="Institución educativa">Institución educativa / Universidad</option>
            <option value="OSC">Organización de la Sociedad Civil (OSC)</option>
            <option value="Sector público">Dependencia de gobierno / Sector público</option>
            <option value="Evaluador">Evaluador independiente o Centro de Evaluación</option>
            <option value="Otro">Otro perfil de atención</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="c-tema">
          ¿Sobre qué tema o servicio necesitas orientación? *
        </label>
        <select
          id="c-tema"
          value={formData.tema}
          onChange={(e) => setFormData({ ...formData, tema: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 bg-white focus:outline-none focus:ring-2 focus:ring-[#075fba] focus:border-transparent text-slate-900"
        >
          <option value="Centro de Asesoría">Centro de Asesoría — Bachillerato Abierto Modular (Instituto Ibérica)</option>
          <option value="Acreditación Acuerdo 286">Acreditación de conocimientos de Bachillerato — Acuerdo 286</option>
          <option value="Educación Continua">Educación Continua (Cursos y diplomados oficiales SECTEI)</option>
          <option value="Capacitación corporativa">Capacitación empresarial in-company a la medida</option>
          <option value="Certificación CONOCER">Certificación oficial de competencias laborales (ECE760-26)</option>
          <option value="Red de Prestadores">Acreditación como Centro de Evaluación o Evaluador Independiente</option>
          <option value="Vinculación y convenios">Vinculación interinstitucional y convenios marco</option>
          <option value="Prensa y medios">Prensa, comunicación y publicaciones editoriales</option>
          <option value="Otro asunto">Otro requerimiento general</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-900 mb-1.5" htmlFor="c-mensaje">
          Mensaje o consulta específica *
        </label>
        <textarea
          id="c-mensaje"
          required
          rows={3}
          placeholder="Escribe tu consulta con claridad (dudas de horarios, requisitos, sedes o metas) para asignarte al coordinador indicado..."
          value={formData.mensaje}
          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200/90 focus:outline-none focus:ring-2 focus:ring-[#075fba] focus:border-transparent text-slate-900 placeholder:text-slate-400 bg-white"
        />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            required
            checked={formData.aceptaPrivacidad}
            onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
            className="mt-1 rounded border-slate-300 text-[#075fba] focus:ring-[#075fba]"
          />
          <span className="text-xs text-slate-600 leading-relaxed">
            He leído y acepto el{' '}
            <Link href="/transparencia#arco" className="text-[#075fba] underline hover:text-blue-800">
              Aviso de Privacidad Integral
            </Link>{' '}
            de ISCOBusiness para la protección confidencial de mis datos personales.
          </span>
        </label>
      </div>

      <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-slate-600 text-xs leading-relaxed flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 shrink-0 text-slate-500 mt-0.5" />
        <span>
          Tus datos personales están protegidos con apego irrestricto a la legislación mexicana. No compartimos tu información con terceros ni la empleamos para fines comerciales.
        </span>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'btn-primary w-full py-3.5 px-6 text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50 transition'
        )}
      >
        {status === 'submitting' ? (
          <span>Enviando consulta...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Enviar mensaje de orientación</span>
          </>
        )}
      </button>
    </form>
  );
}

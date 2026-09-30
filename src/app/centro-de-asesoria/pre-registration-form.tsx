'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PreRegistrationForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    ciudadEstado: '',
    ultimoGrado: 'Secundaria concluida',
    estudiosParciales: 'No',
    rutaInteres: 'Plan Modular',
    mensaje: '',
    aceptaPrivacidad: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptaPrivacidad) {
      alert('Debes aceptar el aviso de privacidad para continuar.');
      return;
    }

    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-10 border border-[var(--isco-line)] shadow-xl text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-[var(--isco-green)]/15 text-[var(--isco-green)] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-extrabold text-[var(--isco-ink)] mb-3">
          ¡Tu registro de asesoría fue recibido con éxito!
        </h3>
        <p className="text-[var(--isco-ink-soft)] text-sm md:text-base leading-relaxed mb-6">
          Gracias por dar este importante paso, <strong>{formData.nombre}</strong>. Hemos registrado tu solicitud con la ruta{' '}
          <strong className="text-[var(--isco-navy)]">"{formData.rutaInteres}"</strong> en el <strong>Centro de Asesoría — Instituto Ibérica</strong>. Nos contactaremos personalmente por WhatsApp y correo electrónico con toda la orientación pedagógica y los pasos a seguir.
        </p>
        <div className="p-4 bg-[var(--isco-bg-alt)] rounded-xl border border-[var(--isco-line)] text-xs text-[var(--isco-ink-muted)] mb-6 text-left">
          <strong>Aviso de transparencia:</strong> Este registro es completamente gratuito e informativo. No genera pagos anticipados ni compromisos forzosos; su propósito es acompañarte con asesoría clara, honesta y oportuna.
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setFormData({
              nombre: '',
              email: '',
              telefono: '',
              ciudadEstado: '',
              ultimoGrado: 'Secundaria concluida',
              estudiosParciales: 'No',
              rutaInteres: 'Plan Modular',
              mensaje: '',
              aceptaPrivacidad: false,
            });
          }}
          className="btn-secondary text-sm"
        >
          Registrar a otra persona
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 border border-[var(--isco-line)] shadow-xl max-w-2xl mx-auto">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--isco-blue)] mb-2">
        <Sparkles className="w-4 h-4 text-[var(--isco-cyan)]" />
        Registro de Asesoría Pedagógica · Sin Costo
      </div>
      <h3 className="text-xl md:text-2xl font-extrabold text-[var(--isco-ink)] mb-2">
        Solicita orientación personalizada con un asesor
      </h3>
      <p className="text-xs md:text-sm text-[var(--isco-ink-soft)] mb-8">
        Completa tus datos para recibir asesoría sobre el modelo modular de bachillerato, equivalencia de estudios previos y fechas de acompañamiento en el <strong>Centro de Asesoría — Instituto Ibérica</strong>.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="nombre">
            Nombre completo *
          </label>
          <input
            id="nombre"
            type="text"
            required
            placeholder="Ej. María Elena González López"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)] placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="email">
              Correo electrónico *
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="tu.correo@ejemplo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)] placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="telefono">
              Teléfono o WhatsApp (10 dígitos) *
            </label>
            <input
              id="telefono"
              type="tel"
              required
              maxLength={10}
              placeholder="222 123 4567"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)] placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="ciudadEstado">
            Ciudad y Estado donde vives *
          </label>
          <input
            id="ciudadEstado"
            type="text"
            required
            placeholder="Ej. Puebla, Pue. / Córdoba, Ver. / CDMX"
            value={formData.ciudadEstado}
            onChange={(e) => setFormData({ ...formData, ciudadEstado: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)] placeholder:text-gray-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="ultimoGrado">
              Último grado de estudios concluido *
            </label>
            <select
              id="ultimoGrado"
              value={formData.ultimoGrado}
              onChange={(e) => setFormData({ ...formData, ultimoGrado: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)]"
            >
              <option value="Secundaria concluida">Secundaria concluida (con certificado)</option>
              <option value="Bachillerato trunco">Bachillerato iniciado pero inconcluso</option>
              <option value="Secundaria en trámite">Secundaria en proceso de certificación</option>
              <option value="Otro">Otro antecedente</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="estudiosParciales">
              ¿Cuentas con materias o semestres previos de bachillerato? *
            </label>
            <select
              id="estudiosParciales"
              value={formData.estudiosParciales}
              onChange={(e) => setFormData({ ...formData, estudiosParciales: e.target.value })}
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)]"
            >
              <option value="No">No, iniciaría desde el primer módulo</option>
              <option value="Sí, tengo certificado parcial">Sí, tengo certificado parcial oficial</option>
              <option value="Sí, tengo boletas de calificaciones">Sí, tengo boletas de calificaciones</option>
              <option value="No estoy seguro/a">No estoy seguro/a de mis documentos</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="rutaInteres">
            Ruta de interés preferida *
          </label>
          <select
            id="rutaInteres"
            value={formData.rutaInteres}
            onChange={(e) => setFormData({ ...formData, rutaInteres: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)]"
          >
            <option value="Plan Modular">Centro de Asesoría — Bachillerato Modular (22 módulos)</option>
            <option value="Acuerdo 286">Acreditación de conocimientos — Acuerdo 286 (Preparación)</option>
            <option value="Orientación">No estoy seguro/a, requiero orientación sobre cuál me conviene</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[var(--isco-ink)] mb-1.5" htmlFor="mensaje">
            Comentario o duda particular (opcional)
          </label>
          <textarea
            id="mensaje"
            rows={2}
            placeholder="¿Tienes alguna duda específica sobre equivalencias, tiempos o documentación?"
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[var(--isco-line)] focus:outline-none focus:ring-2 focus:ring-[var(--isco-blue)] focus:border-transparent text-[var(--isco-ink)] placeholder:text-gray-400"
          />
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.aceptaPrivacidad}
              onChange={(e) => setFormData({ ...formData, aceptaPrivacidad: e.target.checked })}
              className="mt-1 rounded border-gray-300 text-[var(--isco-blue)] focus:ring-[var(--isco-blue)]"
            />
            <span className="text-xs text-[var(--isco-ink-muted)] leading-relaxed">
              He leído y acepto el{' '}
              <a href="/transparencia#arco" className="text-[var(--isco-blue)] underline hover:text-[var(--isco-navy)]">
                Aviso de Privacidad
              </a>
              . Entiendo que este registro es únicamente informativo para recibir asesoría y orientación personalizada.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[var(--isco-blue)] hover:bg-[var(--isco-navy)] transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {status === 'submitting' ? (
            <span>Enviando información...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Solicitar asesoría gratuita</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

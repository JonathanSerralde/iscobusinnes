import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aula Virtual - Iniciar Sesión',
  description: 'Accede a nuestra plataforma de aprendizaje en línea.',
};

export default function AulaVirtualPage() {
  return (
    <div className="h-full w-full">
      <iframe
        src="https://academia.iberica.mx/login"
        className="h-full w-full border-0"
        title="Aula Virtual Iniciar Sesión"
      />
    </div>
  );
}

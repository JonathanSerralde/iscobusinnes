import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aula Virtual - Registro',
  description: 'Crea una cuenta para acceder a nuestra plataforma de aprendizaje en línea.',
};

export default function RegistroPage() {
  return (
    <div className="h-full w-full">
      <iframe
        src="https://academia.iberica.mx/register"
        className="h-full w-full border-0"
        title="Aula Virtual Registro"
      />
    </div>
  );
}

import { RegisterForm } from '@/components/aula-virtual/register-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aula Virtual - Registro',
  description: 'Crea una cuenta para acceder a nuestra plataforma de aprendizaje en línea.',
};

export default function RegistroPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)] bg-background p-4">
      <RegisterForm />
    </div>
  );
}

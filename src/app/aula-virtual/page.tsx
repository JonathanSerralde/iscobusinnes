import { LoginForm } from '@/components/aula-virtual/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aula Virtual - Iniciar Sesión',
  description: 'Accede a nuestra plataforma de aprendizaje en línea.',
};

export default function AulaVirtualPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)] bg-background p-4">
       <LoginForm />
    </div>
  );
}

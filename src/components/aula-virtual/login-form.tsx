"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { LogIn } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." }),
});

export function LoginForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Inicio de Sesión (Simulación)",
        description: `Bienvenido, ${values.email}. En una aplicación real, serías redirigido.`,
      });
      setIsLoading(false);
    }, 1500);
  }

  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-headline text-primary">Aula Virtual</CardTitle>
        <CardDescription>Ingresa a tu cuenta para continuar</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Ingresando..." : <>Iniciar Sesión <LogIn className="ml-2 h-4 w-4" /></>}
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-center text-sm space-y-2">
            <p>
                <Link href="#" className="underline text-muted-foreground hover:text-primary">
                    ¿Olvidaste tu contraseña?
                </Link>
            </p>
            <p>
                ¿No tienes una cuenta?{' '}
                <Link href="/aula-virtual/registro" className="underline text-primary font-semibold hover:text-primary/80">
                    Regístrate aquí
                </Link>
            </p>
        </div>
      </CardContent>
    </Card>
  );
}

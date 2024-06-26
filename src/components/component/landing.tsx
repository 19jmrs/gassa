/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/IPyAou8kTKP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Gabarito } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { preview } from "astro";

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-10 px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          {/*TODO Image to be added */}

          <span className="sr-only">GasSa</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Serviços
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Projetos
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Sobre nos
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contactos
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/tight lg:text-6xl/tighter">
                Soluções Tecnicas de Gas
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Especializamo-nos em instalaçoes de redes de gas... etc etc
              </p>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-[4/1] overflow-hidden rounded-b-xl object-cover object-center"
            height="400"
            src="/placeholder.svg"
            width="1800"
          />
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Os nossos Serviços
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From concept to completion, we cover every phase of your
                project.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 md:gap-10">
              <div className="mx-auto space-y-4">
                <WrenchIcon className="w-20 mx-auto" />
                <h3 className="text-xl font-bold">Renovations</h3>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Transform your space with our expert renovation services.
                </p>
              </div>
              <div className="mx-auto space-y-4">
                <BookTemplateIcon className="w-20 mx-auto" />
                <h3 className="text-xl font-bold">Design & Build</h3>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Let us bring your vision to life with our design & build
                  expertise.
                </p>
              </div>
              <div className="mx-auto space-y-4">
                <ConstructionIcon className="w-20 mx-auto" />
                <h3 className="text-xl font-bold">New Construction</h3>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Start fresh with our new construction services, built to last.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Os Nossos Projetos
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Veja a qualidade do nosso trabalho atraves destes projetos.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-10">
              <div className="flex flex-col space-y-2">
                <img
                  alt="Project 1"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">
                    Modernizing the City Park
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    A sleek, modern design to revitalize the community space.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  alt="Project 2"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Luxury Condo Complex</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Elegant, high-quality construction for a sophisticated
                    living experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  alt="Project 3"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Suburban Dream Homes</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Beautiful, family-friendly homes in a peaceful suburban
                    setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Clientes Satisfeitos
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A qualidade do nosso trabalho fala por si mesma. Veja o que os
                nossos clientes tenhem a dizer.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="mx-auto space-y-4">
                <p className="italic text-gray-500 dark:text-gray-400">
                  “The construction team was professional and efficient. They
                  paid attention to every detail and the final result exceeded
                  our expectations.”
                </p>
                <h3 className="text-xl font-semibold">Alice Thompson</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Project Manager, Thompson Enterprises
                </p>
              </div>
              <div className="mx-auto space-y-4">
                <p className="italic text-gray-500 dark:text-gray-400">
                  “The construction team was professional and efficient. They
                  paid attention to every detail and the final result exceeded
                  our expectations.”
                </p>
                <h3 className="text-xl font-semibold">Alice Thompson</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Project Manager, Thompson Enterprises
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Entre em Contacto
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Preparado para começar o seu projeto? Fale connopsco para
                discutir a sua visao.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[400px] space-y-4">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Primeiro Nome" required type="text" />
                  <Input placeholder="Apelido" required type="text" />
                </div>
                <Input
                  className="w-full"
                  placeholder="Email"
                  required
                  type="email"
                />
                <Input
                  className="w-full"
                  placeholder="Assunto"
                  required
                  type="text"
                />
                <Textarea
                  className="min-h-[100px] w-full"
                  placeholder="Mensagem"
                  required
                />
                <Button type="submit">Submeter</Button>
              </form>
              <h3 className="text-lg text-gray-500 dark:text-gray-400 mt-8">
                Telemovel:{" "}
                <a
                  className="font-semibold text-gray-900 dark:text-gray-300"
                  href="tel:963449473"
                >
                  963 449 473
                </a>
              </h3>
            </div>
          </div>
        </section>
        <footer className="flex items-center justify-between py-6 px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 GasSa. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Politica de Privacidade
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Termos de Serviço
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Entre em Contacto
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

function BookTemplateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 22h-2" />
      <path d="M20 15v2h-2" />
      <path d="M4 19.5V15" />
      <path d="M20 8v3" />
      <path d="M18 2h2v2" />
      <path d="M4 11V9" />
      <path d="M12 2h2" />
      <path d="M12 22h2" />
      <path d="M12 17h2" />
      <path d="M8 22H6.5a2.5 2.5 0 0 1 0-5H8" />
      <path d="M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" />
    </svg>
  );
}

function ConstructionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function WrenchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

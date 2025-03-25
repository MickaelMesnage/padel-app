import { Button } from "@/components/ui/button";
import { PATHS } from "@/PATHS";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-primary-foreground">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center gap-12">
          <h1 className="text-center text-secondary text-4xl font-bold">
            Rejoins la communauté fullpadel
          </h1>
          <Link className="mb-8" href={PATHS.loginByEmail} passHref>
            <Button>Créer un compte</Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 -mt-16 flex justify-center">
        <Image
          width={600}
          height={400}
          src="/images/padel-cover.webp"
          alt="Terrain de padel"
          className="rounded-2xl"
        />
      </div>
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-background">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-secondary/10 p-6 rounded-full">
            <svg
              className="size-12 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Rencontre des joueurs</h3>
          <p className="text-muted-foreground">
            Trouve des partenaires de jeu avec un niveau certifié pour des
            matchs équilibrés
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-secondary/10 p-6 rounded-full">
            <svg
              className="size-12 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Participe à des tournois</h3>
          <p className="text-muted-foreground">
            Inscris-toi à des tournois amateurs et mesure-toi à d&apos;autres
            joueurs
          </p>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-secondary/10 p-6 rounded-full">
            <svg
              className="size-12 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
              <circle cx="17" cy="7" r="5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Trouve un coach</h3>
          <p className="text-muted-foreground">
            Progresse avec des coachs amateurs certifiés qui s&apos;adaptent à
            ton niveau
          </p>
        </div>
      </div>
    </>
  );
}

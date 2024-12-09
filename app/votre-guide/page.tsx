import Image from 'next/image'
import { Waves, Fish, Award, Users } from 'lucide-react'

export default function VotreGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative h-[50vh] overflow-hidden">
        <Image
          src="/votre-guide_couverture.jpg"
          alt="Guide de pêche en action"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Votre Guide de Pêche
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">À Propos de Votre Guide</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image
              src="/votre-guide_alex.jpg"
              alt="Portrait du guide"
              width={300}
              height={300}
              className="rounded-full"
            />
            <div>
            <p className="text-lg mb-4 leading-relaxed text-justify">
  Je me nomme <strong>Alexis Boreau</strong>, un pur produit de l’Aude depuis maintenant 25 ans. <br />
  La nature, la pêche et moi menons une grande histoire d’amour depuis que mes jambes m’ont permis de faire mes premiers pas.  
  <br /><br />
  Cet amour du monde extérieur m’est venu grâce à mes grands-parents. J’ai pu découvrir les reptiles, les insectes, les oiseaux ainsi que la flore locale, pour ensuite être initié à la pêche de loisir.  
  <br /><br />
  Comme nous tous, j'ai commencé par la pêche au coup avec un bambou, du nylon et un hameçon. J’ai rapidement évolué dans le milieu de la pêche de loisir en ciblant par la suite les carnassiers avec la pêche du sandre et du brochet sous toutes ses formes, avant de tomber amoureux du plus gros poisson d’eau douce !  
  <br /><br />
  Un jour vient le drame : je perds un de mes meilleurs amis dans un accident de voiture et tombe dans une dépression. La seule façon pour moi de me sentir à nouveau vivant à l’intérieur de moi était de pratiquer la pêche au moindre moment de temps libre.  
  <br /><br />
  Le midi à la pause déjeuner au travail, le soir en sortant du travail, et quelquefois même le matin avant d’aller travailler.  
  <br /><br />
  C’est là que j’ai pris conscience des bienfaits de la pêche et que je devais partager ça avec vous, mes chers clients.  
  <br /><br />
  Je me suis donc lancé en février 2024. J’ai tout plaqué pour devenir <strong>moniteur, animateur, guide de pêche</strong> pour l’année 2025.
</p>

              <p className="text-lg">
                Découvrez les secrets des meilleurs spots de pêche et perfectionnez vos techniques avec un professionnel dévoué à votre réussite.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Waves, title: "Pêche en Mer", description: "Maîtrise des techniques de pêche côtière et en haute mer" },
              { icon: Fish, title: "Pêche en Eau Douce", description: "Expert en pêche en rivière, lac et étang" },
              { icon: Award, title: "Certifications", description: "Guide certifié et formé aux dernières techniques" },
              { icon: Users, title: "Tous Niveaux", description: "Adapte ses conseils à tous les niveaux, du débutant à l'expert" }
            ].map((item, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg shadow-md">
                <item.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "Marie L.", text: "Une expérience inoubliable ! Le guide connaît vraiment son métier et les meilleurs coins de pêche." },
              { name: "Thomas R.", text: "J'ai appris plus en une journée qu'en des années de pêche en solitaire. Vraiment recommandé !" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-accent p-6 rounded-lg shadow-md">
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


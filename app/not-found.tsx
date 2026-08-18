import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container className="text-center">
        <SectionEyebrow label="Erreur 404" className="justify-center" />
        <h1 className="mx-auto mt-6 max-w-xl text-balance font-display text-3xl font-medium leading-tight text-green-950 sm:text-4xl">
          Cette page-là n&rsquo;existe pas. <span className="italic text-rose-900">Mais votre projet, oui.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md font-sans text-base text-green-950/70">
          La page que vous cherchez a peut-être changé d&rsquo;adresse. Revenez à l&rsquo;accueil ou
          parlons directement de votre projet.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-5">
          <Button href="/" variant="primary">
            Retour à l&rsquo;accueil
          </Button>
          <Button href="/contact" variant="secondary">
            Parlons de votre projet
          </Button>
        </div>
      </Container>
    </section>
  );
}

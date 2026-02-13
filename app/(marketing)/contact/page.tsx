import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Send us a message and we&apos;ll get back to you.
        </p>

        <div className="mt-10 max-w-2xl">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}

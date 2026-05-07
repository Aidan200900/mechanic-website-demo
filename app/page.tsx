import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import LeadForm from "@/app/components/LeadForm";
import Testimonials from "@/app/components/Testimonials";
import ServiceArea from "@/app/components/ServiceArea";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <section id="quote">
        <LeadForm />
      </section>
      <Testimonials />
      <ServiceArea />
    </main>
  );
}

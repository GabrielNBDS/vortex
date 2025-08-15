import ContactForm from "./form";

export default function GetInTouch() {
  return (
    <div className="py-24 p-8 max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Join the Revolution</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Drop your e-mail below and we&apos;ll get in touch with you to get your position with Vortex.
      </p>

      <ContactForm />
    </div>
  )
}
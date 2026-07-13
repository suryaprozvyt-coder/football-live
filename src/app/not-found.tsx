import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent-red">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-sm text-white/60">
        That page doesn&apos;t exist. It might have moved, or the link may be
        incorrect.
      </p>
      <div className="mt-8">
        <Button href="/">Back to Home</Button>
      </div>
    </Container>
  );
}

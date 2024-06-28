import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import Image from "next/image";

export default function HomePage() {

  const events = [
    {
      id: '1',
      name: "Evento 1",
      organization: "Organização 1",
      date: "2022-01-01",
      price: 100,
      rating: "★★★★☆",
      image_url: "",
      location: "Local 1",
    }
  ]

  return (
    <main className="mt-10 flex flex-col">
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}

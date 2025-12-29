
import Image from "next/image";

const Founder = () => {
  return (
    <section className="bg-background py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-headline text-primary mb-4">The Visionary</h2>
            <p className="text-muted-foreground">
              Aaron Chris Price, is a pioneering force in engineering and industrial innovation. With over two decades of expertise in electrical engineering, robotics, and intelligent automation, he blends deep technical knowledge with global manufacturing leadership to deliver future-proof solutions. His work is driven by precision, built on experience, and focused on defining the next era of intelligent machines.
            </p>
            <button className="mt-6 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 md:pl-8">
          <div className="w-full">
            <Image
              src="/visionary-1.jpg"
              alt="Aaron Chris Price 1"
              width={400}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/visionary-2.jpg"
              alt="Aaron Chris Price 2"
              width={400}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="w-full">
            <Image
              src="/visionary-3.jpg"
              alt="Aaron Chris Price 3"
              width={400}
              height={600}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;

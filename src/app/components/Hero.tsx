import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-zinc-600 bg-no-repeat bg-blend-multiply bg-cover bg-[75%] bg-[url('https://images.unsplash.com/photo-1659471202280-742f0e0934c1?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-300 md:text-5xl lg:text-6xl">
          Track your racers live on the map!
        </h1>
        <p className="mb-8 text-lg font-normal text-neutral-200 lg:text-xl sm:px-16 lg:px-48">
          You can register your races and track your racers live by checkpoints.
        </p>
      </div>
    </section>
  );
}

export default Hero;
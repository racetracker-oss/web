import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  className?: string;
  image: string;
  title: string;
  paragraph: string;
  link?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, image, title, paragraph, link }, ref) => {
  const navigate = useNavigate();

  return (
    <div ref={ref}
      className={`${className ? className : ""} relative h-96 w-96 max-w-[90vw] rounded-sm bg-light hover:shadow-lg hover:border overflow-hidden cursor-pointer`}
      title={title} onClick={() => {
        link && navigate(link);
      }}
    >
      <>
        <img
          className={`h-1/2 w-full object-cover rounded-t-sm`}
          src={image}
          alt={title}
        />
        <h3 className="my-2 text-center font-bold">
          {title}
        </h3>
        <p className="mb-3 px-5 pb-5 overflow-auto">
          {paragraph}
        </p>
      </>
    </div>
  );
});

export default Card;
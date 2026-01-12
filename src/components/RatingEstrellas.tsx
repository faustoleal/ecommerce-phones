import { Star, StarHalf } from "lucide-react";

const RatingEstrellas = ({ rating }: { rating: number }) => {
  const stars = (rating / 100) * 5;

  const fullStars = Math.floor(stars);
  const hasHalfStar = stars - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} />
      ))}

      {hasHalfStar && <StarHalf />}
    </div>
  );
};

export default RatingEstrellas;

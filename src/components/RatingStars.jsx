import { Star } from "lucide-react";

function RatingStars({ rating }) {

  const rateCount= [1, 2, 3, 4, 5];

  return (

    <>
    <div className="flex gap-1">
      { rateCount.map((n) => (
        <span key={n} className="bg-[#06201c] p-1">
          <Star
            size={12}
            className={n <= rating ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"}
          />
          
        </span>
      ))}

     
    </div>

     

    </>
  );
}

export default RatingStars;
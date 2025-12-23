import React from "react";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  info: string[];
};

const Card: React.FC<CardProps> = ({ icon, title, info }) => {
  return (
    <article className="min-h-30 max-w-90 sm:max-w-70 border mx-auto py-2 rounded-md">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-[#6366F1]/10 rounded-lg">{icon}</div>
          <div>
            <h3 className="font-medium mb-1">{title}</h3>
            {info.map((el, i) => (
              <p key={i} className="text-sm text-muted-foreground text-balance">
                {el}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;

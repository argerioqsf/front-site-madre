import { CardType } from "@/types";
import { CardBody, Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

const CardDefault: React.FC<{ card: CardType }> = ({ card }) => {
  return (
    <Card className="lg:mb-0 mb-8 w-full">
      <CardBody className="overflow-visible p-0">
        <Image
          alt="Card background"
          width="100%"
          className="object-cover rounded-xl w-full"
          src={card.image}
        />
      </CardBody>
      <CardHeader className="flex pt-8 px-8 pb-8 flex-col justify-start items-start gap-4 h-full">
        <p className="text-tiny uppercase font-bold">{card.subTitle}</p>
        <h2 className="font-bold text-large">{card.title}</h2>
        <h3 className="ont-bold text-default-500">{card.describe}</h3>
      </CardHeader>
    </Card>
  );
};

export default CardDefault;

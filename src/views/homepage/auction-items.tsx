import React from "react";

import Button from "~/components/button";
import Card from "~/components/card";
import Text from "~/components/text";

interface AuctionItemsProps {
  name: string;
  currentPrice: number;
  duration: string;
  onBid?: (id: string) => void;
}
const AuctionItems: React.FC<AuctionItemsProps> = ({
  name,
  currentPrice,
  duration,
  onBid,
}) => {
  return (
    <Card className="p-4 sm:max-w-full">
      <div className="flex items-center">
        <div className="flex-1">
          <Text>{name}</Text>
        </div>
        <div className="flex-1">
          <Text>{currentPrice}</Text>
        </div>
        <div className="flex-1">
          <Text>{duration}</Text>
        </div>
        <div className="flex-none">
          <Button variant="secondary" onClick={onBid}>
            Bid
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AuctionItems;

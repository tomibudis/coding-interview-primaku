import cx from "classnames";
import React from "react";

import { useCountdown } from "~/hooks/use-countdown";

import Button from "~/components/button";
import Card from "~/components/card";
import Text from "~/components/text";

interface AuctionItemsProps {
  name: string;
  currentPrice: number;
  duration: string;
  isHideBid: boolean;
  onBid?: (id: string) => void;
}
const AuctionItems: React.FC<AuctionItemsProps> = ({
  name,
  currentPrice,
  duration,
  onBid,
  isHideBid,
}) => {
  const [days, hours, minutes, seconds] = useCountdown(duration);
  return (
    <Card className="p-4 sm:!max-w-full">
      <div className="flex items-center">
        <div className="flex-1">
          <Text>{name}</Text>
        </div>
        <div className="flex-1">
          <Text>${currentPrice}</Text>
        </div>
        <div className="flex-1">
          <Text>
            {days}d {hours}h {minutes}-{seconds}
          </Text>
        </div>
        <div className="flex-none">
          <Button
            variant="secondary"
            onClick={onBid}
            className={cx({ invisible: isHideBid })}
          >
            Bid
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AuctionItems;

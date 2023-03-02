import cx from "classnames";
import React, { useState } from "react";
import { useEffect } from "react";

import { useCountdown } from "~/hooks/use-countdown";
import useDisclosure from "~/hooks/use-disclosure";

import Button from "~/components/button";
import Card from "~/components/card";
import Text from "~/components/text";

import BidModal from "../modals/bid";

interface AuctionItemsProps {
  name: string;
  currentPrice: number;
  duration: string;
  isHideBid: boolean;
}
const DURATION_SHOW = 5; // in second;
const AuctionItems: React.FC<AuctionItemsProps> = ({
  name,
  currentPrice,
  duration,
  isHideBid,
}) => {
  const [days, hours, minutes, seconds] = useCountdown(duration);
  const bidModal = useDisclosure(false);

  const [durationDisabled, setDurationDisabled] = useState();

  const timerShowBidButton = useCountdown(durationDisabled);
  const isDisabledButton =
    timerShowBidButton.at(3) && timerShowBidButton.at(3) > 0;
  const handleSuccessBid = () => {
    const now = new Date();
    setDurationDisabled(now.setSeconds(now.getSeconds() + DURATION_SHOW));

    bidModal.onClose();
  };

  useEffect(() => {
    if (!isDisabledButton) {
      setDurationDisabled(NaN);
    }
  }, [isDisabledButton]);

  return (
    <>
      <BidModal
        isOpen={bidModal.isOpen}
        onClose={bidModal.onClose}
        initialValues={{
          currentPrice,
        }}
        onSuccess={handleSuccessBid}
      />
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
              {days}d {hours}h {minutes}m {seconds}s
            </Text>
          </div>
          <div className="flex-none">
            <Button
              variant="secondary"
              onClick={bidModal.onOpen}
              className={cx(
                { "opacity-25": isDisabledButton },
                { invisible: isHideBid }
              )}
              disabled={!!isDisabledButton}
            >
              Bid
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AuctionItems;

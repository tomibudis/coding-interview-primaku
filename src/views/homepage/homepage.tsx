import Link from "next/link";
import React, { memo } from "react";

import useGetItems from "~/hooks/queries/use-get-items";
import { useGetProfile } from "~/hooks/queries/use-get-profile";

import Text from "~/components/text/index";

import AuctionItems from "./auction-items";
import ProfileMenu from "./profile-menu";

const Homepage: React.FC = () => {
  const profile = useGetProfile();
  const items = useGetItems();

  return (
    <div>
      <nav className="font-sans text-center py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="container mx-auto px-4">
          <div className="w-full flex flex-col sm:flex-row sm:text-left sm:justify-between items-center">
            <div className="mb-2 sm:mb-0">
              <Link
                href="/homepage"
                className="flex items-center text-md font-extrabold no-underline text-grey-darkest hover:text-blue-dark"
              >
                <img
                  className="w-6 h-6 mr-2"
                  src="/icon-192x192.png"
                  alt="logo"
                />
                Jitera Auction
              </Link>
            </div>
            <div
              className="flex items-center gap-4
            "
            >
              <Text>Balance: ${profile.data?.balance}</Text>
              <ProfileMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 my-4">
        <div className="flex px-10">
          <div className="flex-1">
            <Text>Name</Text>
          </div>
          <div className="flex-1">
            <Text>Current Price</Text>
          </div>
          <div className="flex-1">
            <Text>Duration</Text>
          </div>
          <div className="flex-none">
            <Text className="px-5">Bid</Text>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center px-6 py-2 mx-auto">
          {items.data?.map((item, idx) => {
            return (
              <AuctionItems
                key={idx}
                name={item.name}
                currentPrice={item.currentPrice}
                duration={item.timeWindow}
                onBid={() => null}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Homepage);

import Link from "next/link";
import React, { memo } from "react";
import AuctionItems from "~/views/auction-items";

import useGetMyItems from "~/hooks/queries/use-get-my-items";
import { useGetProfile } from "~/hooks/queries/use-get-profile";
import useDisclosure from "~/hooks/use-disclosure";

import Button from "~/components/button";
import Text from "~/components/text/index";

import CreateItemModal from "../modals/create-item";
import ProfileMenu from "../profile-menu";

const Homepage: React.FC = () => {
  const profile = useGetProfile();
  const items = useGetMyItems();
  const createItemModal = useDisclosure(false);

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
              <Text>
                Balance: $
                {profile.isFetching ? "loading..." : profile.data?.balance}
              </Text>
              <ProfileMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4">
        <div className="flex flex-col py-4">
          <p>My Items</p>
          <div className="mt-2 flex justify-between">
            <div>
              <Button onClick={createItemModal.onOpen}>Create Item</Button>
              <CreateItemModal
                isOpen={createItemModal.isOpen}
                onClose={createItemModal.onClose}
                onSuccess={items.refetch}
              />
            </div>
          </div>
        </div>
        <div className="flex px-4">
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
        <div className="flex flex-col items-center gap-2 justify-center py-2 mx-auto">
          {items?.isLoading && "Loading..."}
          {!items?.isLoading &&
            items.data?.map((item, idx) => {
              return (
                <AuctionItems
                  key={idx}
                  name={item.name}
                  itemId={item._id}
                  currentPrice={item.currentPrice}
                  duration={item.timeWindow}
                  isHideBid={item.creator === profile.data._id}
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

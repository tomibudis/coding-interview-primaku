import Link from "next/link";
import React, { memo } from "react";

import { useGetProfile } from "~/hooks/queries/use-get-profile";

import Text from "~/components/text/index";

import ProfileMenu from "./profile-menu";

const Homepage: React.FC = () => {
  const profile = useGetProfile();
  return (
    <>
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
    </>
  );
};

export default memo(Homepage);

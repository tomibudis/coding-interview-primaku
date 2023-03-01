import cx from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { clearCookieToken } from "~/utils/cookies";

import { useGetProfile } from "~/hooks/queries/use-get-profile";
import useDisclosure from "~/hooks/use-disclosure";

import Text from "~/components/text/index";

const ProfileMenu = () => {
  const dropdownMenu = useDisclosure();
  const router = useRouter();
  const profile = useGetProfile();

  const username = profile.data?.email?.split("@")?.at(0);

  const handleLogout = async () => {
    await clearCookieToken();
    return router.push("/login");
  };

  return (
    <div>
      <button
        id="dropdownInformationButton"
        data-dropdown-toggle="dropdownInformation"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={dropdownMenu.onToggle}
      >
        <Text className="!text-white">
          {profile.isFetching ? "loading..." : username}
        </Text>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdownInformation"
        className={cx(
          "z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600",
          {
            hidden: dropdownMenu.isOpen,
          }
        )}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{username}</div>
          <div className="font-medium truncate">{profile.data?.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <Link
              href="/homepage"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Homepage
            </Link>
          </li>
          <li>
            <Link
              href="/my-items"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              My Items
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <div
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;

import cx from "classnames";
import { useRouter } from "next/router";
import React from "react";

const COMPLETED_KEY = "completed";
const FilterItem = () => {
  const router = useRouter();
  const activeClass = "text-white bg-blue-600 active";
  const inactiveClass =
    "hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white";

  const isCompletedActive = router.query?.filter === COMPLETED_KEY;
  return (
    <ul className="mt-2 flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li className="mr-2">
        <div
          className={cx(
            "cursor-pointer inline-block px-4 py-3 rounded-sm",
            {
              [activeClass]: !isCompletedActive,
            },
            {
              [inactiveClass]: isCompletedActive,
            }
          )}
          onClick={() => router.push("/homepage")}
        >
          On Going
        </div>
      </li>
      <li className="mr-2">
        <div
          className={cx(
            "cursor-pointer inline-block px-4 py-3 rounded-sm",
            {
              [activeClass]: isCompletedActive,
            },
            {
              [inactiveClass]: !isCompletedActive,
            }
          )}
          onClick={() => router.push("/homepage?filter=completed")}
        >
          Completed
        </div>
      </li>
    </ul>
  );
};

export default FilterItem;

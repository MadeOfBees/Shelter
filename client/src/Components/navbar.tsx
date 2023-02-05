import React from "react";
import Link from "next/link";

export default function Navbar(props: { userID: number }) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">ShelterGame</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 h-10 p-1 bg-red-500 rounded-full">
              <p>B</p>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between" href={`/profile/${props.userID}`}>
                Profile
              </a>
            </li>
            <li>
              <a href= "/signin">Sign in</a>
            </li>
            <li>
                <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

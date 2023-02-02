import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 w-full">
        <div className="footer footer-center p-4 bg-base-300 text-base-content">
          <a
            href="http://www.github.com/MadeOfBees"
            className="text-base-content"
          >
            This site is MadeOfBees
          </a>
        </div>
      </footer>
    </>
  );
}

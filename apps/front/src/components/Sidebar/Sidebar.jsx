export default function Sidebar() {
  return (
    <div className="flex flex-col w-32 h-full bg-slate-500 fixed">
      <div>
        <h1 className="text-3xl font-bold">Booker</h1>
      </div>
      <nav>
        <ul className="flex flex-col">
          <li>
            <a className="block w-full p-2 hover:bg-sky-700" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="block w-full p-2 hover:bg-sky-700" href="#">
              Bookmarks
            </a>
          </li>
        </ul>
      </nav>

      <p className="relative bottom-0">Booker 2024</p>
    </div>
  );
}

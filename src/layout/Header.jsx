import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-[350px] h-[950px] bg-slate-800">
        <nav className="text-white font-bold text-2xl flex flex-col items-start ml-12 gap-20 mt-28 ">
          <div>
            <FontAwesomeIcon
              className="w-[150px] h-[150px]"
              icon={faChalkboardUser}
              style={{ color: "#B197FC" }}
            />
            <h1 className="text-sm text-[#B197FC]">
              Real-Time User Connection Monitoring
            </h1>
          </div>

          <Link to="/dashboard" className="hover:text-[#B197FC] text-3xl">
            Dashboard
          </Link>
          <Link
            to="/chat"
            target="_blank"
            className="hover:text-[#B197FC] text-3xl"
          >
            Chat
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;

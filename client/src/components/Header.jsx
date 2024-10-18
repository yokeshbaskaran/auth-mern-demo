import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className="bg-slate-200">
        <div className="max-w-6xl mx-auto p-3 flex justify-between items-center">
          <Link to="/">
            <h1 className="font-bold">Auth App</h1>
          </Link>

          <ul className="flex gap-4 items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="h-7 w-7 rounded-full object-cover"
                  src={currentUser.profilePicture}
                  alt="profile-img"
                />
              ) : (
                <li>Sign In</li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;

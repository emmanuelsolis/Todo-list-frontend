export const Header = () => {
  return (
    <div className="header-navbar  bg-white ">
      <div className="container-fluid">
        <a className="navbar-logo" href="#">
          Todo App
        </a>
      </div>
      <div className="sign-In">
        <button className="bg-[#a6c1ee] text-white px-5 py-1 rounded-full hover:bg-[#87acec]">
          Sign in
        </button>
      </div>
    </div>
  );
};

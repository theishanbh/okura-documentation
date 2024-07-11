import Image from "next/image";
import ClearDay from "../assets/navbar/ClearDay.svg";
import NotificationBell from "../assets/navbar/NotificationBell.svg";
import QuestionMark from "../assets/navbar/QuestionMark.svg";
import Settings from "../assets/common/Settings.svg";

const Navbar = () => {
  return (
    <div className="flex h-14">
      {/* left section */}
      <div className="min-w-48 bg-blue-primary border-blue-secondary border pl-4 ">
        <div className="flex items-center h-full gap-2">
          {/* circular div */}
          <div className=" h-6 w-6 bg-white-primary rounded-full"></div>
          {/* brand name */}
          <span className="text-white-primary text-lg">Brand Name</span>
        </div>
      </div>
      {/* right section */}
      <div className="flex-grow pr-4 justify-between flex items-center h-full border-blue-secondary border">
        {/* home, project, templates, create */}
        <div className="pl-4 flex gap-6 justify-center items-center text-blue-primary  h-full text-lg">
          <span className="">Home</span>
          <span className="">Projects</span>
          <span className="">Templates</span>
          <span className="">Create</span>
        </div>
        {/* {search, appearance mode}, {notifications, question, settings,account} */}
        <div className="flex gap-6 h-full items-center ">
          {/* search, appearance mode */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-1 border-2 border-blue-secondary text-blue-primary rounded-lg focus:border-2 focus:border-blue-secondary "
                placeholder="Search....."
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-primary w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4.35-4.35m2.35-7.65A8.5 8.5 0 1112 3.5a8.5 8.5 0 017 10.85z"
                ></path>
              </svg>
            </div>
            {/* appearance mode */}
            <div className="w-6 h-6 relative rounded-full bg-blue-200 flex items-center justify-center">
              <Image priority src={ClearDay} alt="Follow us on Twitter" />
            </div>
          </div>
          {/* {(notifications, question, settings, account)} */}
          <div className="flex items-center gap-2 pl-6">
            {/* Notification */}
            <div className="w-8 h-8 relative flex items-center justify-center">
              <Image
                priority
                src={NotificationBell}
                alt="Follow us on Twitter"
              />
            </div>
            {/* Question mark */}
            <div className="w-6 h-6 relative rounded-full bg-blue-primary border border-blue-secondary flex items-center justify-center">
              <Image priority src={QuestionMark} alt="Follow us on Twitter" />
            </div>
            {/* Settings */}
            <div className="w-8 h-8 relative flex items-center justify-center">
              <Image priority src={Settings} alt="Follow us on Twitter" />
            </div>
            {/* Account */}
            <div className="w-8 h-8 relative rounded-full bg-blue-primary border border-blue-secondary flex items-center justify-center">
              <span className=" text-white-primary">G</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

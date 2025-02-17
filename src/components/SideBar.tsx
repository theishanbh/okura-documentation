import Image from "next/image";
import AllContents from "/public/assets/sidebar/AllContents.svg";
import Blog from "/public/assets/sidebar/Blog.svg";
import CalendarToday from "/public/assets/sidebar/CalendarToday.svg";
import AddSection from "/public/assets/sidebar/AddSection.svg";
import Settings from "/public/assets/common/Settings.svg";

const SideBar = () => {
  return (
    <div className="flex min-w-48 border-r border-custom-gray-primary">
      <div className="pt-4 pl-4 flex flex-col gap-8">
        {/* name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative rounded-full bg-custom-blue-primary border border-custom-blue-secondary flex items-center justify-center">
            <span className=" text-custom-white-primary">G</span>
          </div>
          <span>Alvina</span>
        </div>
        {/* all contents, blogs, calendar, add section, setting */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Image
              className="w-5 h-5"
              src={AllContents}
              alt="Follow us on Twitter"
            />
            <span>All Contents</span>
          </div>
          <div className="flex gap-2">
            <Image className="w-5 h-5" src={Blog} alt="Follow us on Twitter" />
            <span>Blogs</span>
          </div>
          <div className="flex gap-2">
            <Image
              className="w-5 h-5"
              src={CalendarToday}
              alt="Follow us on Twitter"
            />
            <span>Calendar</span>
          </div>
          <div className="flex gap-2">
            <Image
              className="w-5 h-5"
              src={AddSection}
              alt="Follow us on Twitter"
            />
            <span>Add Section</span>
          </div>
          <div className="flex gap-2">
            <Image
              className="w-5 h-5"
              src={Settings}
              alt="Follow us on Twitter"
            />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

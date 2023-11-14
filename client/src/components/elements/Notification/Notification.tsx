import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import {
  BellIcon,
  DeleteIcon,
  CheckCircleIcon,
  EmailIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";

const allNotifications = [
  {
    id: 1,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: DeleteIcon,
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: CheckCircleIcon,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: EmailIcon,
    color: "bg-blue-500",
  },
  {
    id: 4,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: WarningTwoIcon,
    color: "bg-gray-500",
  },
  {
    id: 5,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: DeleteIcon,
    color: "bg-red-500",
  },
  {
    id: 6,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: DeleteIcon,
    color: "bg-red-500",
  },
  {
    id: 7,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: EmailIcon,
    color: "bg-blue-500",
  },
  {
    id: 8,
    title: "New Order Recieved",
    description: "Dummy text of the printing and typesetting industry.",
    time: "3 min ago",
    icon: WarningTwoIcon,
    color: "bg-gray-500",
  },
];

export default function Notification() {
  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          isRound={true}
          className="bg-black relative hover:bg-black"
          variant="solid"
          icon={<BellIcon w={8} h={8} color={"white"} />}
        />
        <div
          className={`absolute top-7 rounded-full bg-green-600 w-5 h-5 flex justify-center items-center p-2`}
        >
          <p className="text-xs text-white ">10</p>
        </div>
        <MenuList className="bg-white rounded-lg p-2 w-100 h-[400px]">
          <div className="flex items-center fixed top-0 w-[90%] h-8 bg-white p-2 space-x-2">
            <h1 className="text-lg font-bold">Notifications</h1>
            <Divider className="ml-auto" />
          </div>
          <div className="bg-white rounded-lg mt-5 w-full h-[95%] overflow-y-scroll no-scrollbar">
            {allNotifications.map((notification, index) => (
              <MenuItem key={notification.id}>
                <div
                  className={`flex flex-col bg-gray-100 px-4 py-2 hover:bg-gray-300 cursor-pointer  relative inline-flex  overflow-hidden transition-all rounded hover:bg-white group`}
                >
                  <span className="w-0 h-0 rounded bg-background-primary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"/>
                  <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                    <div className="flex row">
                      <h1 className="text-sm font-bold">
                        {notification.title}
                      </h1>
                      <notification.icon className="ml-auto" />
                    </div>
                    <p className="text-xs">{notification.description}</p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                    {index !== allNotifications.length - 1 && <Divider />}
                  </span>
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}

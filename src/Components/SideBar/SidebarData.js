import React from 'react';
import * as FaIcons from 'react-icons/fa';
import{AiOutlineHolder} from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';




export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    // icon: <AiOutlineHolder/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Sales',
    path: '/sales',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Capital',
    path: '/capital',
    // icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   // icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
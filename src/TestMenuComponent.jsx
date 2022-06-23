import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";
import logo03 from "./assets/startbutton02.png";
import logo04 from "./assets/StopButton.png";


import React from "react";

// Import the circular menu
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from "react-circular-menu";

export const TestMenuComponent = (props) => {
  const [menu,setMenu] = React.useState(false)

  return (
    <CircleMenu
      startAngle={-45} /* position objets */
      rotationAngle={360} /*effet de rotation */
      itemSize={1} /* taille objets */
      radius={6} /* rayons */
      /**
       * rotationAngleInclusive (default true)
       * Whether to include the ending angle in rotation because an
       * item at 360deg is the same as an item at 0deg if inclusive.
       * Leave this prop for angles other than 360deg unless otherwise desired.
       */
      rotationAngleInclusive={false}
      menuToggleElement={<img className="myRadial"src={menu?logo04:logo03} alt="" width="100px"/>}
      onMenuToggle={(menuActive) => setMenu(menuActive)}
    >
      <CircleMenuItem
        onClick={() => alert("Clicked the item")}
        tooltip="Email"
        tooltipPlacement={TooltipPlacement.Right}
      >
        <img src={logo03} alt="" srcset="" width="50px"/>
        {/* <MailIcon /> */}
      </CircleMenuItem>
      <CircleMenuItem tooltip="Help">
      <img src={logo03} alt="" srcset="" width="50px"/>
        {/* <HelpOutlineIcon /> */}
      </CircleMenuItem>
      <CircleMenuItem tooltip="Location">
      <img src={logo03} alt="" srcset="" width="50px"/>
        {/* <MapIcon /> */}
      </CircleMenuItem>
      <CircleMenuItem tooltip="Info">
      <img src={logo03} alt="" srcset="" width="50px"/>
        {/* <InfoIcon /> */}
      </CircleMenuItem>
    </CircleMenu>
  );
};
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "../icons";

const Sociais: React.FC = () => {
  return (
    <Navbar
      className="flex flex-row justify-center items-center"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarItem className="flex flex-row justify-start items-center gap-4">
          <InstagramIcon />
          <FacebookIcon />
          <YoutubeIcon />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="flex flex-row justify-start items-center gap-4">
          <WhatsappIcon />
          <div>(96) 9114-5531</div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Sociais;

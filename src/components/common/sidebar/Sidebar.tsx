import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import { SidebarWrapper } from "./sidebar.style";
import { IconChevronDown } from "@tabler/icons-react";
import styled from "styled-components";
import SidebarRequestCard from "../card/SidebarRequestCard";
import useSidebar from "./useSidebar";
const Sidebar = () => {
  const {myRequests} = useSidebar({init : true});
  return (
    <SidebarWrapper>
      <CustomAccordion defaultExpanded style={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<IconChevronDown color="var(--gold-primary)" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            color={"var(--gold-primary)"}
            fontWeight={600}
            fontSize={"var(--text-2xl)"}
          >
            Pending Request
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            myRequests?.map((req:any)=>(
              <SidebarRequestCard key={req?.id} request={req} />
            ))
          }
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion style={{ backgroundColor: "transparent" }}>
        <AccordionSummary
          expandIcon={<IconChevronDown color="var(--gold-primary)" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            color={"var(--gold-primary)"}
            fontWeight={600}
            fontSize={"var(--text-2xl)"}
          >
            Group
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SidebarRequestCard request={{} as any} />
        </AccordionDetails>
      </CustomAccordion>
      Sidebar
    </SidebarWrapper>
  );
};
const CustomAccordion = styled(Accordion)`
  background-color: transparent;
  color: var(--gold-primary);
  box-shadow: none !important;
`;
export default Sidebar;

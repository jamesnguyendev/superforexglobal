import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";
import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CustomArrowDownwardIcon = styled(ArrowDownwardIcon)(({ theme }) => ({
  color: "#35465B",
  backgroundColor: "#f5f6fa",
  borderRadius: "50%",
  padding: "3px",
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "10px",
  "&:hover .MuiSvgIcon-root": {
    color: "#3ECF8E",
    backgroundColor: "#d7f7e1",
  },
}));

const FrequentlyQuestions = ({ data, title }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="py-3">
        <h2 className="text-center text-[40px] font-semibold text-default">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-y-4">
        {data?.map((item, index) => (
          <div key={index}>
            <CustomAccordion
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
              className="p-0 border outline-none shadow-none text-default"
            >
              <AccordionSummary
                expandIcon={<CustomArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h5 className="font-medium text-lg">{item.title}</h5>
              </AccordionSummary>
              <AccordionDetails className="border-t">
                <h5>{item.content}</h5>
              </AccordionDetails>
            </CustomAccordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyQuestions;

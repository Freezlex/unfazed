import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundComponent from "./not-found.component";

it("Should render not-found page", () => {
  screen.findAllByText("404");
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("should render the home page", () => {
    render(<Home />);

    const logos = screen.getAllByAltText("Turborepo logo");
    expect(logos).toHaveLength(2);
    expect(screen.getByText(/Get started by editing/)).toBeInTheDocument();
    expect(
      screen.getByText("Save and see your changes instantly."),
    ).toBeInTheDocument();
  });

  it("should render call-to-action buttons", () => {
    render(<Home />);

    expect(screen.getByText("Deploy now")).toBeInTheDocument();
    expect(screen.getByText("Read our docs")).toBeInTheDocument();
    expect(screen.getByText("Open alert")).toBeInTheDocument();
  });

  it("should render footer links", () => {
    render(<Home />);

    expect(screen.getByText("Examples")).toBeInTheDocument();
    expect(screen.getByText("Go to turborepo.com →")).toBeInTheDocument();
  });
});

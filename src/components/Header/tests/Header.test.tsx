import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("deve renderizar o logo", () => {
    render(<Header />);
    expect(screen.getByText("LACREI_SAÚDE")).toBeInTheDocument();
  });
});
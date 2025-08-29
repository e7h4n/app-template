import { render, type RenderResult } from "@testing-library/react";
import type { ReactElement } from "react";

export function renderWithProviders(ui: ReactElement): RenderResult {
  return render(ui);
}

import {createMemoryHistory} from 'history';
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CarroucelComponent } from "@/components/home/carroucel";

describe("Carroucel Component", () => {
    describe("CarroucelComponent rendering", () => {
      it("should have Title Text", () => {
        render(<CarroucelComponent />);
        expect(screen.getByText("LUXURY")).toBeInTheDocument();
        expect(screen.getByText("FASHION")).toBeInTheDocument();
        expect(screen.getByText("& ACCESSORIES")).toBeInTheDocument();
      });
    
      it("should have Link with text EXPLORE COLLECTION", () => {
        render(<CarroucelComponent />);
        expect(
          screen.getByRole("link", { name: "EXPLORE COLLECTION" })
        ).toBeInTheDocument();
      });
    
      it("should Link have attribute href equal to /product/list", () => {
        render(<CarroucelComponent />);
        expect(screen.getByRole("link")).toHaveAttribute("href", "/product/list");
      });
    });
    
   /*  describe("CarroucelComponent behavior", () => {
      it("should Link push user to /product/list", async () => {
        render(<CarroucelComponent />);
        const history = createMemoryHistory();
        const link = screen.getByRole("link");
        fireEvent.click(link);
        await waitFor(() => expect(screen.getByRole("textbox")))
      });
    }); */
})

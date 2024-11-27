import { createRoot } from "react-dom/client";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes/AppRouter";

createRoot(document.getElementById("root")!).render(<AppRouter />);

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Providers";
import { authenticatedRoutes, unAuthenticatedRoutes } from "./Utils";
import { Footer } from "./Components";

function App() {
  const router = createBrowserRouter([
    ...unAuthenticatedRoutes,
    ...authenticatedRoutes,
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Footer/>
    </AuthProvider>
  );
}

export default App;

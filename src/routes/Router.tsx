import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Make a Lazy-loading for pages
import { lazy, Suspense } from "react";
const Layout = lazy(() => import("@/layouts/MainLayout/Layout"));
const Home = lazy(() => import("@/pages/Home/Home"));
const Login = lazy(() => import("@/pages/Login/Login"));
const Cart = lazy(() => import("@/pages/Cart/Cart"));
const About = lazy(() => import("@/pages/About/About"));
const Wishlist = lazy(() => import("@/pages/Wishlist/Wishlist"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));
const Account = lazy(() => import("@/pages/Account/Account"));
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import Error from "@/pages/Error/Error";
import { LottieHandler, PageSuspenseFallback } from "@/components/feedback";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center h-svh">
              <LottieHandler type="loading" message="Loading please wait..." />
            </div>
          }
        >
          <Layout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <Home />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/cart",
          element: (
            <PageSuspenseFallback>
              <Cart />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <ProtectedRoute>
              <PageSuspenseFallback>
                <Wishlist />
              </PageSuspenseFallback>
            </ProtectedRoute>
          ),
        },
        { path: "/login", element: <PageSuspenseFallback><Login /></PageSuspenseFallback> },
        { path: "/about", element: <PageSuspenseFallback><About /></PageSuspenseFallback> },
        { path: "/contact", element: <PageSuspenseFallback><Contact /></PageSuspenseFallback> },
        {
          path: "/account",
          element: (
            <ProtectedRoute>
              <PageSuspenseFallback>
                <Account />
              </PageSuspenseFallback>
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Router;
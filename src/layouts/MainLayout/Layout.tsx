import { Footer, Header } from "@/components/common";
import{ ScrollToTop} from "@/components/common";
import FooterFeature from "@/components/common/Footer/FooterFeature/FooterFeature";
import { Toaster } from "@/components/ui/toaster";
import { useAuthLogoutMutation } from "@/store/auth/api/authApiSlice";
import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);


  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTop />
      <Toaster />
      <FooterFeature/>
      <Footer />
    </>
  );
};
export default Layout;
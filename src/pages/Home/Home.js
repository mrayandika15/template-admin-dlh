import React from "react";
import { ContentWidget, Navbar, Sidebar } from "../../containers";
import { Bannerwidget } from "../../containers/Bannerwidget/Bannerwidget";
// Layout
import { HomeLayout, DashboardLayout } from "../../layouts";
// icon

const Home = () => {
  return (
    <HomeLayout>
      <Sidebar />
      <DashboardLayout>
        <Navbar />
        <Bannerwidget />
        <ContentWidget />
      </DashboardLayout>
    </HomeLayout>
  );
};

export default Home;

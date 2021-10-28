import React from "react";
import {
  Button,
  Card,
  SearchBar,
  Status,
  Typography,
  Widget,
} from "../../components";
// Layout
import { HomeLayout } from "../../layouts";

// icon

import {
  dashboardIcon,
  peopleIcon,
  chartIcon,
  chartWidget,
  arrowRight,
  onePeople,
} from "../../assets";

export default function Home() {
  return (
    <HomeLayout>
      <Button sidebarActive icon iconSrc={dashboardIcon} iconAlt="dashboard">
        Dashboard
      </Button>
      <Button sidebarInActive icon iconSrc={dashboardIcon} iconAlt="dashboard">
        Dashboard
      </Button>
      <Button primary> UPDATE</Button>
      <Button danger> DELETE</Button>
      <Button yesModal> Yes</Button>
      <Button noModal> No</Button>
      <Button primary> No</Button>
      <Button login> Login </Button>
      <Button
        detail
        icon
        iconRight
        iconSrc={arrowRight}
        widthIcon={30}
        iconAlt="arrowRight"
      >
        Lihat Semua Riwayat
      </Button>
      <Card>Raka</Card>
      <Card smallCard>Raka</Card>
      <Card mediumCard>Raka</Card>
      <Card largeCard>Raka</Card>
      <Widget
        smallWidget
        iconSrc={peopleIcon}
        altIcon="people"
        label="Member"
        quantity="321"
      />

      <Widget
        rightIcon
        smallWidget
        iconSrc={peopleIcon}
        altIcon="people"
        label="Member"
        quantity="321"
      />
      <Widget
        linearColor
        rightIcon
        smallWidget
        iconSrc={chartIcon}
        altIcon="people"
        label="Laporan"
        quantity="65"
      />

      <Widget
        largeWidget
        header="Data BOD"
        desc="Masukan Data BOD dengan Klik Button di bawah ini !"
        imgSrc={chartWidget}
        button="Masukan Data"
      />

      <Widget mediumWidget history content="raka" />
      <Widget
        mediumWidget
        userWidget
        iconSrc={onePeople}
        heading="Pengelolaan Akun"
        content="Fitur untuk mengelola akun yang sudah terdaftar di website kami !"
        buttonName="Kelola Akun"
      />
      <SearchBar />
      <Status process />
      <Status finish />
      <Typography name="Hi Reza," header="Welcome to PT.Main!" />
    </HomeLayout>
  );
}

import { Header, MainWrapper, Footer } from "@/components/index";

export default function Home() {
  return (
    <div className="min-h-screen text-primaryGray bg-white dark:text-white dark:bg-primaryDarkGray shadow-2xl shadow-primaryGray max-w-screen-2xl m-auto">
      <Header />

      <MainWrapper />

      <Footer />
    </div>
  );
}

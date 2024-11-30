import Image from "next/image";
import Header from "@/components/ui/header.ui.component";

export default function Home() {
  return (
    <>
      <Header
        brandImg={"Oasis.svg"}
        nav={[
          { 'Home': '/home' },
          { 'Shop': '/shop' },
          { 'Categories': '/categories' },
          { 'Blog': '/blog' },
        ]} />
    </>
  );
}

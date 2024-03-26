import HomePage from "@/components/pages/Homepage";
import MainLayout from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </>
  );
}

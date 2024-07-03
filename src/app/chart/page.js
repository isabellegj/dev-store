"use client";
import Header from "../../components/header";
import Table from "../../components/table";

export default function Chart() {
  return (
    <div className="bg-gray min-h-screen">
      <Header />
      <div className="lg:px-32 justify-center">
        <Table />
      </div>
    </div>
  );
}

"use client";
import Header from "../../components/Header";
import Table from "../../components/Table";

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

"use client";
import Header from "../../components/header";
import Table from "../../components/table";

export default function Chart() {
  return (
    <div className="bg-gray min-h-screen items-center justify-center">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
        <Table />
      </div>
    </div>
  );
}

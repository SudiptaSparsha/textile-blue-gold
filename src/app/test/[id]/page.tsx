"use client";
import { useParams } from "next/navigation";
export default function TestPage() {
  const params = useParams();
  return <div>Test Params: {JSON.stringify(params)}</div>;
}

import Image from "next/image";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Button label="Capture Image" />
    </div>
  );
}

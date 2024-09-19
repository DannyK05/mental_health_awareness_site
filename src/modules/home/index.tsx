import Image from "next/image";
import PageLayout from "@/layout/layout";
import Ribbon from "@/assets/images/ribbon.avif";

export default function Home() {
  return (
    <PageLayout step={0}>
      <div className="home-container">
        <div className="brain-cloud">
          <span>Be positive</span>
        </div>
        <div className="brain-cloud">
          <span>Be positive</span>
        </div>
        <div className="brain-cloud">
          <span>Be positive</span>
        </div>
        <Image src={Ribbon} alt="Mental Health Ribbon" />
        <div>
          <h1>World Mental Health Day</h1>
          <span>October 10</span>
          <span>A remainder to take control of your mental health</span>
        </div>
      </div>
    </PageLayout>
  );
}

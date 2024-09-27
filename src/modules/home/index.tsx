import Image from "next/image";
import PageLayout from "@/layout/layout";
import Ribbon from "@/assets/images/ribbon.avif";
import Flower1 from "@/assets/svgs/flowers-1.svg";
import Flower2 from "@/assets/svgs/flowers-2.svg";
import Sunflower from "@/assets/images/sunflower.avif";
import "./index.scss";
import SunFlower from "@/assets/svgs/Sunflower";

export default function Home() {
  return (
    <PageLayout step={0}>
      <div className="home-container">
        <div className="brain-cloud cloud-1"></div>
        <div className="brain-cloud cloud-2"></div>
        <div className="brain-cloud cloud-3"></div>
        <div className="brain-cloud cloud-4"></div>
        <div className="brain-cloud cloud-5"></div>
        <div className="brain-cloud cloud-6"></div>
        <div className="brain-cloud cloud-7"></div>
        <Image
          className="sunflower-sun"
          src={Sunflower}
          alt="Sunflower"
          width={200}
          height={200}
        />
        <div className="home-container__content">
          <Image
            className="ribbon"
            src={Ribbon}
            width={553}
            height={300}
            alt="Mental Health Ribbon"
          />
          <div className="home-container__content__text">
            <h1>World Mental Health Day</h1>
            <span>October 10</span>
            <span>A remainder to take control of your mental health🌻</span>
            <span className="bud">
              <SunFlower />
            </span>
          </div>
        </div>
        <Image
          className="flower1"
          src={Flower1}
          width={200}
          height={80}
          alt="Flower 1"
        />
        <Image
          className="flower2"
          src={Flower2}
          width={200}
          height={100}
          alt="Flower 2"
        />
        <div className="home-container__grass"></div>
      </div>
    </PageLayout>
  );
}

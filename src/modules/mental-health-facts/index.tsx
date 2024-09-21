import PageLayout from "@/layout/layout";
import "./index.scss";
import StickyNote from "./components/StickyNote";
import Image, { StaticImageData } from "next/image";
import Teens from "@/assets/images/teens-outside.jpg";
import Dandelions from "@/assets/images/woman-blowing-flower.jpg";
import Conflicts from "@/assets/images/refugee-camp.avif";
import Depressed from "@/assets/images/depressed-man.jpeg";
export default function MentalHealthFacts() {
  type TFacts = {
    no: number;
    message: string;
    image: StaticImageData;
    alt: string;
  }[];
  const facts: TFacts = [
    {
      no: 1,
      message:
        "Mental, neurological and substance use disorders make up 10% of the global burdern of disease and 25.1% of non-fatal disease burden ",
      image: Dandelions,
      alt: "Woman blowing dandelions",
    },
    {
      no: 2,
      message:
        "Around 1 in 7 of the world's adolescents have a medical disorder",
      image: Teens,
      alt: "Teenagers camping in the woods",
    },
    {
      no: 3,
      message:
        "Around 1 in 9 people in settings affected by conflict have a moderate or severe mental disorder ",
      image: Conflicts,
      alt: "Refugee camp",
    },
    {
      no: 4,
      message: " Depression is the most common mental disorder ",
      image: Depressed,
      alt: "Depressed man in the field",
    },
  ];
  return (
    <PageLayout step={1}>
      <div className="facts-container">
        <h1>Facts</h1>
        <div className="facts-container__sticky-notes">
          {facts.map(({ no, message, image, alt }) => (
            <StickyNote key={no} no={no}>
              <p>{message}</p>
              <Image src={image} width={340} height={180} alt={alt} />
            </StickyNote>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

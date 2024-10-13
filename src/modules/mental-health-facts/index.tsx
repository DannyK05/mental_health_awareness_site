import PageLayout from "@/layout/layout";
import "./index.scss";
import StickyNote from "../../components/StickyNote";
import Image, { StaticImageData } from "next/image";
import Teens from "@/assets/images/teens-outside.jpg";
import Dandelions from "@/assets/images/woman-blowing-flower.avif";
import Conflicts from "@/assets/images/refugee-camp.avif";
import Depressed from "@/assets/images/depressed-man.jpeg";
import Sunflower from "@/assets/images/sunflower.avif";
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
        <h1 className="facts-container__title">Mental Health Facts</h1>
        <div className="facts-container__sticky-notes">
          {facts.map(({ no, message, image, alt }) => (
            <StickyNote key={no} header={no}>
              <p>{message}</p>
              <Image src={image} width={300} height={180} alt={alt} />
            </StickyNote>
          ))}
        </div>
        <div className="facts-container__others">
          <StickyNote header={"What are the Causes ?"}>
            <ul>
              <li>Adverse Childhood experience such as trauma</li>
              <li>Biological factors or chemical Imbalances in the brain</li>
              <li>Use of alcohol or drugs</li>
              <li>Having feelings of loneliness or isolation</li>
              <li>
                Experiences related to other ongoing (chronic) medical
                conditions, such as a traumatic brain injury, cancer, or
                diabetes
              </li>
            </ul>
          </StickyNote>
          <StickyNote header={"Who are at risk ?"}>
            <p>
              At any one time, a diverse set of individual, family, community,
              and structural factors may combine to protect or undermine mental
              health. Although most people are resilient, people who are exposed
              to adverse circumstances - including poverty, violence,
              disability, and inequality - are at higher risk. Protective and
              risk factors include individual psychological and biological
              factors, such as emotional skills as well as genetics. Many of the
              risk and protective factors are influenced through changes in
              brain structure and/or function.
            </p>
          </StickyNote>
          <Image src={Sunflower} width={300} height={250} alt="Sunflower" />
        </div>
      </div>
    </PageLayout>
  );
}

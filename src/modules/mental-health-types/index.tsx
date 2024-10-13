import PageLayout from "@/layout/layout";
import "./index.scss";
import Anxiety from "../../assets/images/anxiety-disorder.jpg";
import Depression from "../../assets/images/depression-art.jpg";
import Bipolar from "../../assets/images/bipolar-disorder.jpg";
import Ptsd from "../../assets/images/ptsd.jpg";
import Image, { StaticImageData } from "next/image";
import GlassCard from "./components/GlassCard";
import Leaf from "@/assets/svgs/Leaf";
import Rose from "@/assets/svgs/Rose";
import Tulip from "@/assets/svgs/Tulip";
import SunFlower from "@/assets/svgs/Sunflower";

type TMentalIllness = {
  id: number;
  name: string;
  content: string;
  image: StaticImageData;
}[];
const mentalIllness: TMentalIllness = [
  {
    id: 1,
    name: "Anxiety Disorder",
    content:
      "Affects 301 million people globally (2019). Characterized by excessive fear, worry, and related behavioral disturbances, anxiety disorders include generalized anxiety, panic disorder, social anxiety, and separation anxiety. Effective treatments include psychological therapy and, in some cases, medication.",
    image: Anxiety,
  },
  {
    id: 2,
    name: "Depression",
    content:
      "Affects 280 million people (2019). Symptoms include persistent sadness, loss of interest, guilt, low self-worth, sleep issues, and fatigue. Depression increases the risk of suicide, but effective treatments such as therapy and medication are available.",
    image: Depression,
  },
  {
    id: 3,
    name: "Bipolar Disorder",
    content:
      "Affects 40 million people (2019). Alternating episodes of depression and mania, where manic symptoms include increased energy, racing thoughts, and impulsive behavior. Treatment includes psychoeducation, stress reduction, and medication.",
    image: Bipolar,
  },
  {
    id: 4,
    name: "Post-Traumatic Stress Disorder",
    content:
      "Common in conflict zones. PTSD develops after traumatic events and includes re-experiencing the trauma, avoidance, and heightened threat perception. Symptoms last for weeks and impair functioning. Psychological treatment is effective.",
    image: Ptsd,
  },
];

export default function MentalHealthTypes() {
  return (
    <PageLayout step={2}>
      <div className="mental-types__title">
        <p>
          Mental health encompasses our emotional, psychological, and social
          well-being. It influencses how we think, feel, and behave in our daily
          lives. Mental health is not merely the absence of mental illness but a
          state of overall wellness. It plays a crucial role in determining how
          we handle stress, relate to others, and make decisions. Just like
          physical health, mental health is important at every stage of life,
          from childhood to adulthood. However, many people struggle to maintain
          positive mental health due to various challenges they face in their
          lives.
        </p>
        <span>Here are a few you should know</span>
      </div>
      <div className="types-container">
        {mentalIllness.map(({ id, name, content, image }) => (
          <div className="types-container__content" key={id}>
            <GlassCard
              className={
                id === 1
                  ? "green"
                  : id === 2
                  ? "red"
                  : id === 3
                  ? "pink"
                  : "yellow"
              }
            >
              <div className="content">
                <h1>{name}</h1>
                <p>{content}</p>
              </div>{" "}
              <Image src={image} height={400} width={400} alt={name} />
              <span className="bud">
                {id === 1 ? (
                  <Leaf />
                ) : id === 2 ? (
                  <Rose />
                ) : id === 3 ? (
                  <Tulip />
                ) : (
                  <SunFlower />
                )}
              </span>
            </GlassCard>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

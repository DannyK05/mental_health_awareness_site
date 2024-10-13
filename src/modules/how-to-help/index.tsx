import PageLayout from "@/layout/layout";
import Image from "next/image";
import Support from "../../assets/images/support.png";
import StickyNote from "../../components/StickyNote";
import "./index.scss";
import Donate from "../../assets/images/donate.png";
import Volunteer from "../../assets/images/volunteer.png";
import Nice from "../../assets/images/nice.png";
export default function HowToHelp() {
  return (
    <PageLayout step={4}>
      <h1>How to Help</h1>
      <div className="support__content">
        <div className="support__content-text">
          <p>
            <span>
              Do you wish to contribute to helping people manage and receive
              support for their mental health?
            </span>
            <br /> If you have a passion for making a difference in the lives of
            others and raising awareness about mental well-being, there are many
            ways you can get involved. Whether it's through volunteering,
            advocacy, or simply offering a listening ear, your contribution can
            be a lifeline for someone struggling with mental health challenges.
            <br />{" "}
          </p>
        </div>
        <Image
          className="support__content-image"
          src={Support}
          width={300}
          height={300}
          alt="Support"
        />
      </div>
      <div>
        <h1>Ways to help</h1>
        <div className="card__container">
          <StickyNote header={"Donate"}>
            <div>
              <p>
                You can support by donating to non-profit mental health
                organizations like:
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.mind.org.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mind
                  </a>{" "}
                  Promoting mental health awareness and providing support in the
                  UK.
                </li>
                <li>
                  <a
                    href="https://www.nami.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NAMI (National Alliance on Mental Illness)
                  </a>{" "}
                  Supporting mental health advocacy and resources in the US.
                </li>
                <li>
                  <a
                    href="https://www.mentalhealth.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mental Health Foundation
                  </a>{" "}
                  Working to improve mental well-being worldwide.
                </li>
              </ul>
              <Image src={Donate} width={400} height={200} alt="Donate image" />
            </div>
          </StickyNote>

          <StickyNote header={"Volunteer"}>
            <div>
              <p>
                You can also contribute by joining support groups and
                volunteering with mental health organizations. Consider helping
                with:
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.samaritans.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Samaritans
                  </a>{" "}
                  Providing emotional support through crisis hotlines and
                  volunteer services.
                </li>
                <li>
                  <a
                    href="https://www.mentalhealthamerica.net/volunteer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mental Health America
                  </a>{" "}
                  Offering resources and volunteer opportunities across the US.
                </li>
                <li>
                  <a
                    href="https://www.befrienders.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Befrienders Worldwide
                  </a>{" "}
                  Supporting emotional care through a global network of
                  volunteers.
                </li>
              </ul>
              <Image
                src={Volunteer}
                width={300}
                height={200}
                alt="Volunteer image"
              />
            </div>
          </StickyNote>

          <StickyNote header={"Just being nice"}>
            <div>
              <p>
                You don't have to give out money or volunteer to help , you can
                help make other peoples day better by just being nice to them.
                Remember the golden rule, just a simple kind gesture can make a
                person's days{" "}
              </p>
              <Image src={Nice} width={200} height={200} alt="Nice" />
            </div>
          </StickyNote>
        </div>
      </div>
    </PageLayout>
  );
}

"use client";
import PageLayout from "@/layout/layout";
import "./index.scss";
import { hotlines } from "@/data/hotlines";
import Image from "next/image";
import Test from "../../assets/images/refugee-camp.avif";
import { useState } from "react";
export default function NeedHelp() {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    hotlines[0].country
  );
  const [countryHotline, setCountryHotline] = useState(hotlines[0].hotline);
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);

    const selectedHotline = hotlines.find(
      ({ country }) => country === newCountry
    );
    selectedHotline && setCountryHotline(selectedHotline?.hotline);
  };
  return (
    <PageLayout step={3}>
      <div className="mental-help">
        <div className="mental-help__title">
          <h1>Need Help</h1>
        </div>
        <div className="mental-help__tips">
          <div className="mental-help__tips--negative span-two-col">
            <div className="content">
              <h1>Don't isolate yourself </h1>
              <p>
                Social withdrawal can worsen feelings of depression and anxiety.
                Stay connected to friends and loved ones for emotional support,
                even when it's hard.
              </p>
            </div>
            <Image src={Test} alt="" width={300} height={300} />
          </div>
          <div className="mental-help__tips--negative">
            <div className="content">
              <h1>Don't ignore stress </h1>
              <p>
                Bottling up emotions or ignoring stressors can lead to emotional
                exhaustion. Acknowledge your feelings and find healthy outlets,
                such as talking or journaling.
              </p>
            </div>
            <Image src={Test} alt="" width={300} height={300} />
          </div>
          <div className="mental-help__tips--negative">
            <div className="content">
              <h1>Don't rely on unhealthy coping mechanisms</h1>
              <p>
                Avoid turning to alcohol, drugs, or other harmful behaviors to
                manage stress or emotions. These may provide temporary relief
                but worsen mental health in the long run.
              </p>
            </div>
            <Image src={Test} alt="" width={300} height={300} />
          </div>
          <div className="mental-help__tips--positive span-two-row">
            <div className="content">
              <h1>Connect with other people </h1>
              <p>
                If possible, take time each day to be with your family, for
                example, try arranging a fixed time to eat dinner together
                arrange a day out with friends you have not seen for a while try
                switching off the TV to talk or play a game with your children,
                friends or family have lunch with a colleague visit a friend or
                family member who needs support or company
              </p>
            </div>
            <Image src={Test} alt="" width={300} height={300} />
          </div>
          <div className="mental-help__tips--positive span-two-col">
            <div className="content">
              <h1>Be physically active </h1>
              <p>
                Being active is not only great for your physical health and
                fitness. Evidence also shows it can also improve your mental
                wellbeing by: raising your self-esteem helping you to set goals
                or challenges and achieve them causing chemical changes in your
                brain which can help to positively change your mood
              </p>
            </div>
            <Image src={Test} alt="" width={300} height={300} />
          </div>
          <div className="mental-help__tips--positive span-two-col">
            <div className="content">
              <h1> maintain a balanced lifestyle </h1>
              <p>
                Balance work, leisure, and rest. Overworking without breaks can
                lead to burnout, while neglecting responsibilities can cause
                stress. Proper time management ensures both productivity and
                relaxation.
              </p>
            </div>
            <Image src={Test} alt="" width={300} height={300} />
          </div>
          <div className="mental-help__tips--negative span-two-col">
            <div className="content">
              <h1>Don't neglect sleep</h1>
              <p>
                Poor sleep patterns can negatively impact mood, focus, and
                overall mental health. Aim for 7-9 hours of quality sleep to
                restore energy and emotional balance.
              </p>
            </div>
            <Image src={Test} alt="" width={300} height={300} />
          </div>
          <div className="mental-help__tips--hotline span-full-col">
            <select
              title="country"
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              {hotlines.map(({ country }) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div>{countryHotline}</div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

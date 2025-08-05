import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Card } from "./components/Card";
import { Ending } from "./components/Ending";
import { Form } from "./components/Form";
import { Loading } from "./components/Loading";

function App() {
  const [nextSection, setNextSection] = useState("loading");
  const [readyToShowB, setReadyToShowB] = useState(false);

  return (
    <div>
      <div className="mx-auto flex justify-center items-center bg-background h-dvh w-full overflow-hidden relative z-10">
        <AnimatePresence mode="wait">
          {nextSection === "loading" && (
            <Loading
              onExitComplete={() => setReadyToShowB(true)}
              setNextSection={() => setNextSection("card-maaf")}
            />
          )}

          {nextSection === "card-maaf" && (
            <Card sectionShow={readyToShowB} setNextSection={() => setNextSection("form-maaf")} />
          )}
          {nextSection === 'form-maaf' && (
            <Form setNextSection={() => setNextSection("penutup")} />
          )}
      {nextSection === 'penutup' && (
        <Ending/>
      )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

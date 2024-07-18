import { ChangeEvent, useCallback, useState } from "react";
import Checkbox from "./components/Checkbox";
import Chevrons from "./components/Chevrons";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 25px 1fr;
  height: 100vh;
`;

function App() {
  const [chevronsVisible, setChevronsVisible] = useState<boolean[]>([false]);

  const handleCheckboxClick = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const index = Number(event.target.value);
      const checked = event.target.checked;

      setChevronsVisible((prev) => {
        const next = [...prev];
        // set checked value for selected checkbox
        next[index] = checked;

        // last checkbox checked - add a new one
        if (index === next.length - 1) {
          next.push(false);
        }

        return next;
      });
    },
    []
  );

  return (
    <Wrapper>
      <form>
        {chevronsVisible.map((checked, index) => (
          <Checkbox
            key={index}
            value={index}
            checked={checked}
            onChange={handleCheckboxClick}
          />
        ))}
      </form>
      <Chevrons chevronsVisible={chevronsVisible} />
    </Wrapper>
  );
}

export default App;

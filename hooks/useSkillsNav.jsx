import { useReducer } from "react";

const initialState = { visibleSection: "hero" };

const reducer = (state, action) => {
  if (action.type === "set_visible_section") {
    return {
      visibleSection: action.section,
    };
  }
  throw Error("Unknown action");
};

export default function useSkillsNav() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}

import { createContext, useReducer } from "react";

// THEME CHANGE CONTEXT

export const SwitchContext = createContext();

const INITIAL_STATE = {
  darkMode: false,
  menuOpen: false,
};

const functionReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE-THEME":
      return { ...state, darkMode: !state.darkMode };
    case "TOGGLE-MENU":
      return { ...state, menuOpen: !state.menuOpen };
    case "FALSE":
      return { ...state, menuOpen: false };
    default:
      return state;
  }
};

export const SwitchProvider = (props) => {
  const [state, dispatch] = useReducer(functionReducer, INITIAL_STATE);

  return (
    <SwitchContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SwitchContext.Provider>
  );
};
// import { createContext, useReducer } from "react";

// // THEME CHANGE CONTEXT

// export const ThemeContext = createContext();

// const INITIAL_STATE = { darkMode: false };

// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE":
//       return { darkMode: !state.darkMode };
//     default:
//       return state;
//   }
// };

// export const ThemeProvider = (props) => {
//   const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

//   return (
//     <ThemeContext.Provider value={{ state, dispatch }}>
//       {props.children}
//     </ThemeContext.Provider>
//   );
// };

// // Nav Menu

// export const MenuContext = createContext();

// const INITIAL_STATE_MENU = { menuOpen: false };

// const menuReducer = (state, action) => {
//   switch (action.type) {
//     case "TOGGLE":
//       return { menuOpen: !state.menuOpen };
//     default:
//       return state;
//   }
// };

// export const MenuProvider = (props) => {
//   const [state, dispatch] = useReducer(menuReducer, INITIAL_STATE_MENU);

//   return (
//     <MenuContext.Provider value={{ state, dispatch }}>
//       {props.children}
//     </MenuContext.Provider>
//   );
// };

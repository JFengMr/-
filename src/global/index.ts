import type { App } from "vue";
import registerElementPlus from "./registerElementPlus";
import registerElementIcon from "./registerElementIcon";
export const setRegisterGlobal = (app: App) => {
    app.use(registerElementPlus);
    app.use(registerElementIcon);
}
import { init as initAction, remove as removeAction } from "./action";
import { init as initComponent, remove as removeComponent } from "./component";
import { init as initConfig, remove as removeConfig } from "./config";
import { init as initContainer, remove as removeContainer } from "./container";

export function init(id: string) {
  initContainer(id);
  initComponent(id);
  initConfig(id);
  initAction(id);
}

export function remove(id: string) {
  removeContainer(id);
  removeComponent(id);
  removeConfig(id);
  removeAction(id);
}

import { setCheckboxType } from "./setCheckboxType";
import type { IEditor } from "roosterjs-content-model-types";

/**
 * Toggle bullet list type
 * - When there are some blocks not in bullet list, set all blocks to the given type
 * - When all blocks are already in bullet list, turn off / outdent there list type
 * @param editor The editor to operate on
 * @param removeMargins true to remove margins, false to keep margins @default false
 */
export function toggleCheckbox(
  editor: IEditor,
  removeMargins: boolean = false
) {
  editor.focus();

  editor.formatContentModel(
    (model, context) => {
      context.newPendingFormat = "preserve";

      return setCheckboxType(model, "UL", removeMargins);
    },
    {
      apiName: "toggleBullet",
    }
  );
}

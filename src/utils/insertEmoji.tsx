import {
  mergeModel,
  readFile,
  addSegment,
  createContentModelDocument,
  createImage,
  createText,
  setSelection,
} from "roosterjs-content-model-dom";
import type { IEditor } from "roosterjs-content-model-types";

/**
 * Insert an image into current selected position
 * @param editor The editor to operate on
 * @param file Image Blob file or source string
 */

export function insertEmoji(editor: IEditor, src: string) {
  editor.formatContentModel(
    (model, context) => {
      const emoji = createText(src);
      const doc = createContentModelDocument();

      addSegment(doc, emoji);
      mergeModel(model, doc, context, {
        mergeFormat: "mergeAll",
      });
      return true;
    },
    {
      apiName: "insertImage",
    }
  );
}

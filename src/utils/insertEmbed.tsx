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

export function insertEmbed(editor: IEditor, src: string) {
  editor.formatContentModel(
    (model, context) => {
      src = `<iframe width="100" height="315" src="https://www.youtube.com/embed/_BBVcyJ1ClA?si=cbl5JpKlPqKjyTLW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
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

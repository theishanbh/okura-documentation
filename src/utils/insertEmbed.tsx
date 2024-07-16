import {
  mergeModel,
  readFile,
  addSegment,
  createEntity,
  createContentModelDocument,
  createDomToModelConfig,
  createDomToModelContext,
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
  editor.focus();
  editor.formatContentModel(
    (model, context) => {
      const iframe = document.createElement("iframe");

      // Step 2: Set iframe attributes
      iframe.setAttribute("width", "500");
      iframe.setAttribute("height", "315");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/ly36kn0ug4k?si=U4sUQAIiti_V4wwL"
      );
      iframe.setAttribute("title", "YouTube video player");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.setAttribute("allowfullscreen", "");
      //   src = `<iframe width="100" height="315" src="https://www.youtube.com/embed/_BBVcyJ1ClA?si=cbl5JpKlPqKjyTLW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      const emoji = createText(src);
      const doc = createContentModelDocument();
      addSegment(doc, createEntity(iframe));
      mergeModel(model, doc);
      return true;
    },
    {
      apiName: "insertImage",
    }
  );
}

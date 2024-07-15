import { EditPlugin, IEditor, PluginEvent } from "roosterjs";

export class TestPlugin extends EditPlugin {
  private editor: IEditor | null = null;

  /**
   * Get a friendly name of this plugin
   */
  getName() {
    return "TableEdit";
  }

  /**
   * Initialize this plugin. This should only be called from Editor
   * @param editor Editor instance
   */
  initialize(editor: IEditor) {
    this.editor = editor;
  }

  /**
   * Dispose this plugin
   */
  dispose() {
    this.editor = null;
  }

  /**
   * Handle events triggered from editor
   * @param event PluginEvent object
   */
  onPluginEvent(e: PluginEvent) {
    switch (e.eventType) {
      case "contextMenu":
        alert("contextMenu");
    }
  }
}

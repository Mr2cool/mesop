import {Component} from '@angular/core';
import {LogsPanel} from './logs_panel/logs_panel';
import {ComponentsPanel} from './components_panel/components_panel';
import {CommonModule} from '@angular/common';
import {DevToolsSettings, Panel} from './services/dev_tools_settings';
import {EditorPanel} from './editor_panel/editor_panel';

@Component({
  selector: 'mesop-dev-tools',
  templateUrl: 'dev_tools.ng.html',
  styleUrl: 'dev_tools.css',
  standalone: true,
  imports: [LogsPanel, ComponentsPanel, CommonModule, EditorPanel],
})
export class DevTools {
  Panel = Panel; // Make it accessible by template.

  get selectedPanel(): Panel {
    return this.devToolsSettings.getCurrentDevToolsPanel();
  }

  constructor(public devToolsSettings: DevToolsSettings) {}

  selectEditorPanel() {
    this.devToolsSettings.setCurrentDevToolsPanel(Panel.Editor);
  }

  selectComponentsPanel() {
    this.devToolsSettings.setCurrentDevToolsPanel(Panel.Components);
  }

  selectLogsPanel() {
    this.devToolsSettings.setCurrentDevToolsPanel(Panel.Logs);
  }
}

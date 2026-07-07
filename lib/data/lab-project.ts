import type { LabProjectDetailBase } from "@/types/lab"

/**
 * Factual content for the design-context-bridge lab page, sourced from the
 * project's own README. Keep this in sync with the repo — do not invent
 * features, stats, or stars/forks counts that would need to be faked.
 */
export const LAB_PROJECT: LabProjectDetailBase = {
  repoUrl: "https://github.com/CristinaFores/design-context-bridge",
  installCommand: "npx design-context-bridge",
  toolGroups: [
    { tools: ["get_current_selection", "get_selected_colors", "get_selected_texts"] },
    { tools: ["get_all_pages", "get_frame_by_name", "get_node_info"] },
    { tools: ["extract_design_system", "get_variables"] },
    { tools: ["find_assets", "export_image"] },
    { tools: ["analyze_structure", "get_component_variants"] },
  ],
  supportedClients: ["Claude Code", "Cursor", "Windsurf", "VS Code", "OpenCode"],
  techBadges: ["TypeScript", "Node ≥ 18", "MIT License"],
}

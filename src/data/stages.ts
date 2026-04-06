import type { Stage } from "./types";
import { primary3Data } from "./primary3-unit1";
import { preparatory3Data } from "./preparatory3-unit1";
import { secondary2Data } from "./secondary2-unit1";

export const allStages: Stage[] = [primary3Data, preparatory3Data, secondary2Data];

export const stagesMeta = [
  { id: "primary3", name: "Primary 3", subject: "English", available: true, emoji: "🎒" },
  { id: "preparatory3", name: "Preparatory 3", subject: "English", available: true, emoji: "📘" },
  { id: "secondary2", name: "Secondary 2", subject: "English", available: true, emoji: "🎓" },
];

export function getStage(stageId: string): Stage | undefined {
  return allStages.find((s) => s.id === stageId);
}

export function getUnit(stageId: string, unitId: string) {
  const stage = getStage(stageId);
  return stage?.units.find((u) => u.id === unitId);
}

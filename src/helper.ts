/**
 * Poro Icons - Helper Functions
 */

export function make(itemList: string[], iconName: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const item of itemList) {
    result[item] = iconName;
  }
  return result;
}

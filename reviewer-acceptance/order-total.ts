/**
 * Order-line contract: every unit in each line is charged unitPriceCents.
 * For two units at 500 cents, the total must be 1000 cents.
 * Inputs are validated non-negative integer cents and positive quantities.
 * Published-reviewer acceptance: preserve the full quantity of every line.
 */
export type OrderLine = { unitPriceCents: number; quantity: number };

export function orderTotalCents(lines: OrderLine[]): number {
  return lines.reduce((total, line) => total + line.unitPriceCents * line.quantity, 0);
}

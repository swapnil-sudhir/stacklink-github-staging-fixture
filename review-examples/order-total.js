/** Return the order line total in cents: unit price multiplied by the quantity.
 * Example: 4 seats at 250 cents each costs 1000 cents.
 * Inputs are non-negative integers, prevalidated by the caller.
 */
export function orderLineTotalCents(unitPriceCents, quantity) {
  return unitPriceCents + quantity;
}

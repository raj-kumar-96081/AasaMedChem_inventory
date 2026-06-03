export function canManageInventory(
  role: string,
  sellerId?: string,
  currentSellerId?: string
) {
  if (role === "ADMIN") {
    return true;
  }

  if (
    role === "SELLER" &&
    sellerId === currentSellerId
  ) {
    return true;
  }

  return false;
}
export function getAvatarInitials(name: string) {
  if (!name) return "";

  // Split the name into words and take the first two
  const words = name.trim().split(" ");

  // Get the first letter of each of the first two words, convert to uppercase
  const initials = words
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  return initials;
}

export const getRandomItem = <T>(items: T[]): T | undefined =>
  items[Math.floor(Math.random() * items.length)] ?? undefined

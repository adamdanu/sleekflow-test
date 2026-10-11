export function uniqueEmail(prefix = 'kerabulu'): string {
  const stamp = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}+${stamp}${rand}@gmail.com`;
}

export function strongPassword(): string {
  // SleekFlow policy: 8+ chars and any 3 of lower/upper/digit/special.
  // "Qa!" + base36 timestamp covers all four classes.
  return `Qa!${Date.now().toString(36)}`;
}

export function weakPassword(): string {
  // 8 chars but only one character class -> fails the 3-of-4 rule.
  return 'weakpass';
}

export type whenType = "Morning" | "Lunch" | 'Dinner' | 'Snack'

export interface cookData {
  date: string,
  when: whenType,
  thumbnail: string
} 
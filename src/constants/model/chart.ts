import { month } from "../define/chart";

export const labels: month[] = ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月']

export const data1: number[] = labels.map(() => Math.random() * 10 % 10)
export const data2: number[] = labels.map(() => Math.random() * 10 % 10)
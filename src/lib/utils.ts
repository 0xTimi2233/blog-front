import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 合并 Tailwind CSS 类名，并处理冲突。
 * @param inputs - 一系列类名。
 * @returns {string} - 合并后的类名字符串。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 【新增】
 * 从一个对象中排除指定的键，返回一个新对象。
 * 这是一个通用的辅助函数，可以安全地移除对象属性。
 * @template T - 原始对象的类型。
 * @template K - 要排除的键的类型。
 * @param {T} obj - 原始对象。
 * @param {K[]} keys - 要排除的键的数组。
 * @returns {Omit<T, K>} - 移除了指定键之后的新对象。
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const newObj = { ...obj };
  for (const key of keys) {
    delete newObj[key];
  }
  return newObj;
}
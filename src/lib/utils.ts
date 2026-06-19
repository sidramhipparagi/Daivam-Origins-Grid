import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path: string) {
  if (path.startsWith("/")) {
    return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
  }
  return path;
}

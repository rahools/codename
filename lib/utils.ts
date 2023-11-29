import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function appendBaseURL(path: string) {
  // get base url from env
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  if (!baseURL) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not defined")
  }

  // if base URL ends with a slash, remove it
  const baseURLWithoutSlash = baseURL.replace(/\/$/, "")

  // if path starts with a slash, remove it
  const pathWithoutSlash = path.replace(/^\//, "")

  return `${baseURLWithoutSlash}/${pathWithoutSlash}`
}


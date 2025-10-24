import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}

// phone formatting function for Indian numbers
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  // Indian mobile numbers are 10 digits
  // Format: +91 XXXXX XXXXX or XXXXX XXXXX
  
  if (phoneNumberLength < 6) return phoneNumber;
  
  if (phoneNumberLength < 11) {
    // Format as: XXXXX XXXXX (standard Indian mobile format)
    return `${phoneNumber.slice(0, 5)} ${phoneNumber.slice(5, 10)}`;
  }
  
  // If 11+ digits (with country code 91)
  // Format as: +91 XXXXX XXXXX
  return `+${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 7)} ${phoneNumber.slice(7, 12)}`;
};
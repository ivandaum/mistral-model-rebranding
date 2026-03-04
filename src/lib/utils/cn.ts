import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

// utils using classNames + twMerge for DOM dynamic classes
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

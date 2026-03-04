import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

// classNames + twMerge for DOM
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

import { NZ_CURRENCY_SYMBOL } from './constants';

/**
 * Format currency with NZ symbol
 */
export const formatCurrency = (amount: number): string => {
  return `${NZ_CURRENCY_SYMBOL}${amount.toFixed(2)}`;
};

/**
 * Format number with commas
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format date to readable string
 */
export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

/**
 * Format time to readable string
 */
export const formatTime = (date: string | Date): string => {
  const d = new Date(date);
  return d.toLocaleTimeString('en-NZ', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Format date and time
 */
export const formatDateTime = (date: string | Date): string => {
  return `${formatDate(date)} ${formatTime(date)}`;
};

/**
 * Get time remaining until match start
 */
export const getTimeRemaining = (startTime: string): string => {
  const now = new Date().getTime();
  const start = new Date(startTime).getTime();
  const diff = start - now;

  if (diff <= 0) return 'Started';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Calculate win percentage
 */
export const calculateWinPercentage = (wins: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((wins / total) * 100);
};

/**
 * Get player role color
 */
export const getPlayerRoleColor = (role: string): string => {
  switch (role) {
    case 'BATSMAN':
      return '#42A5F5';
    case 'BOWLER':
      return '#EF5350';
    case 'ALL_ROUNDER':
      return '#00C853';
    case 'WICKET_KEEPER':
      return '#FFC107';
    default:
      return '#6C757D';
  }
};

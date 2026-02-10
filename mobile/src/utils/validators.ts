/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (NZ format)
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+64|0)[2-9]\d{7,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validate team name
 */
export const validateTeamName = (name: string): boolean => {
  return name.length >= 3 && name.length <= 20;
};

/**
 * Validate username
 */
export const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  return usernameRegex.test(username);
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate amount (for deposits/withdrawals)
 */
export const validateAmount = (
  amount: number,
  min: number = 10,
  max: number = 10000
): { isValid: boolean; error?: string } => {
  if (amount < min) {
    return { isValid: false, error: `Minimum amount is $${min}` };
  }
  if (amount > max) {
    return { isValid: false, error: `Maximum amount is $${max}` };
  }
  return { isValid: true };
};

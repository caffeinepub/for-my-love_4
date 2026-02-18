import { useState, useEffect } from 'react';

const STORAGE_KEY = 'custom-share-url';

export function useCustomShareUrl() {
  const [customUrl, setCustomUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCustomUrl(stored);
      }
    } catch (error) {
      console.error('Failed to load custom URL from storage:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Get the active share URL (custom or default)
  const activeShareUrl = customUrl || window.location.origin;

  // Save a new custom URL
  const saveCustomUrl = (url: string) => {
    try {
      // Validate URL
      const parsed = new URL(url);
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
        throw new Error('URL must use http:// or https://');
      }

      localStorage.setItem(STORAGE_KEY, url);
      setCustomUrl(url);
      return { success: true, error: null };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Invalid URL format',
      };
    }
  };

  // Reset to default URL
  const resetUrl = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setCustomUrl('');
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  };

  return {
    customUrl,
    activeShareUrl,
    saveCustomUrl,
    resetUrl,
    isLoading,
  };
}

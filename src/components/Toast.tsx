import { useEffect } from 'react';

type ToastProps = {
  message: string | null;
  onClose: () => void;
  duration?: number;
};

/** 화면 하단 토스트 — 복사 완료 등 짧은 피드백 */
export function Toast({ message, onClose, duration = 2600 }: ToastProps) {
  const visible = Boolean(message);

  useEffect(() => {
    if (!message) return;
    const timer = window.setTimeout(onClose, duration);
    return () => window.clearTimeout(timer);
  }, [message, duration, onClose]);

  return (
    <div
      className={`toast${visible ? ' toast--visible' : ''}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-hidden={!visible}
    >
      <span className="toast__icon" aria-hidden="true">
        ✓
      </span>
      <p className="toast__message">{message ?? ''}</p>
    </div>
  );
}
